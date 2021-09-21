import * as React from "react"
import { MDXProvider as DefaultMDXProvider } from "@mdx-js/react"

import A from "./components/A"
import CallSummaryTable from "./components/CallSummaryTable"
import ContactFormToggle from "./components/ContactFormToggle"
import generateHeaders from "./components/generateHeaders"
import InlineImage from "./components/InlineImage"
import Label from "./components/Label"
import Pre from "./components/Pre"
import Table from "./components/Table"

import Link from "@layouts/shared/components/Link"

const MDXProvider: React.FC = ({ children }) => (
  <DefaultMDXProvider
    components={{
      ...generateHeaders([`h2`, `h3`]),
      a: A,
      CallSummaryTable,
      ContactFormToggle,
      InlineImage,
      Label,
      Link,
      pre: Pre,
      table: Table,
    }}
  >
    {children}
  </DefaultMDXProvider>
)

export default MDXProvider
