import { useEffect, useRef } from 'react'

// https://overreacted.io/making-setinterval-declarative-with-react-hooks/
const useInterval = (callback: () => void, delay?: number): void => {
  const savedCallback = useRef<() => void | null>()
  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  useEffect(() => {
    function tick() {
      if (typeof savedCallback?.current !== 'undefined') {
        savedCallback?.current()
      }
    }

    if (delay !== null) {
      const id = setInterval(tick, delay)
      return () => clearInterval(id)
    }
  }, [delay])
}

export default useInterval
