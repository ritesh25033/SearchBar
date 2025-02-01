import { useCallback } from "react"
import debounce from "lodash/debounce"

export const useDebounce = (callback, delay) => {
  return useCallback(debounce(callback, delay), [])
}

