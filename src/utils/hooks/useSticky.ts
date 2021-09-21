import * as React from "react"

/**
 * Detect if an HTML element with position: sticky is actually stuck.
 * @param ref The sticky element
 * @param topOffset The "top" CSS property
 */
const useSticky = (ref: React.RefObject<HTMLElement>, topOffset: number): boolean => {
  const [isSticky, setIsSticky] = React.useState(false)
  const offsetYRef = React.useRef<{ value?: number }>({})

  const handleScroll = React.useCallback((): void => {
    if (offsetYRef.current.value) setIsSticky(window.scrollY + topOffset > offsetYRef.current.value)
  }, [setIsSticky, topOffset])

  React.useLayoutEffect(() => {
    offsetYRef.current.value =
      ref.current!.getBoundingClientRect().top + (window.pageYOffset || document.documentElement.scrollTop)
  }, [ref])

  React.useLayoutEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [handleScroll])

  return isSticky
}

export default useSticky
