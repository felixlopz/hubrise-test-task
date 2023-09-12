export const isHeaderLinkActive = (currentPathName: string, link: string): boolean => {
  return currentPathName.startsWith(link)
}
