import * as fs from "fs/promises"

import { mocked } from "jest-mock"

import { setupFsMocks } from "@utils/jest-helpers/mockFsSetup"

import BlogIndexer from "./index"

jest.mock("fs/promises")

describe("BlogIndexer", () => {
  let indexer: BlogIndexer

  beforeEach(() => {
    indexer = new BlogIndexer("/blog")
    mocked(fs.readdir).mockClear()
    mocked(fs.readFile).mockClear()
  })

  it("initializes and indexes blog posts", async () => {
    setupFsMocks({
      readdirResponses: {
        "/blog": [{ type: "dir", name: "en" }],
        "/blog/en": [{ type: "dir", name: "20230101-test-post" }],
        "/blog/en/20230101-test-post": [
          { type: "file", name: "__post.md" },
          { type: "file", name: "__banner.png" },
        ],
      },
      readFileResponses: {
        "/blog/en/20230101-test-post/__post.md":
          "---\ntitle: Test Post\ndate: 2023-01-01\nauthor: Bob\n---\nContent here",
      },
    })

    await indexer.initialize()

    expect(indexer.mdFiles).toEqual({
      en: [
        {
          contentDirName: "/blog/en/20230101-test-post",
          baseName: "__post",
          uri: "/blog/test-post",
          language: "en",
          frontMatter: { title: "Test Post", date: "2023-01-01", author: "Bob" },
          content: "Content here",
          bannerFileName: "__banner.png",
        },
      ],
    })
  })

  describe("post retrieval", () => {
    beforeEach(async () => {
      setupFsMocks({
        readdirResponses: {
          "/blog": [{ type: "dir", name: "en" }],
          "/blog/en": [
            { type: "dir", name: "20230101-post1" },
            { type: "dir", name: "20220202-post2" },
            { type: "dir", name: "20230110-post3" },
          ],
          "/blog/en/20230101-post1": [{ type: "file", name: "__post.md" }],
          "/blog/en/20220202-post2": [{ type: "file", name: "__post.md" }],
          "/blog/en/20230110-post3": [{ type: "file", name: "__post.md" }],
        },
        readFileResponses: {
          "/blog/en/20230101-post1/__post.md": "---\ndate: 2023-01-01\n---\n",
          "/blog/en/20220202-post2/__post.md": "---\ndate: 2022-02-02\n---\n",
          "/blog/en/20230110-post3/__post.md": "---\ndate: 2023-01-10\n---\n",
        },
      })

      await indexer.initialize()
    })

    it("returns all years", () => {
      expect(indexer.allYears("en")).toEqual([2023, 2022])
    })

    it("retrieves the most recent posts", () => {
      expect(indexer.allMdFiles("en").map((mdFile) => mdFile.frontMatter.date)).toEqual([
        "2023-01-10",
        "2023-01-01",
        "2022-02-02",
      ])
    })

    it("retrieves posts by year", () => {
      expect(indexer.mdFilesByYear("en", 2022).map((mdFile) => mdFile.frontMatter.date)).toEqual(["2022-02-02"])
    })
  })
})
