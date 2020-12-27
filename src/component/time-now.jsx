import format from 'date-fns/format'
import { h } from 'preact'
import { useState, useEffect } from 'preact/hooks'

export default function TimeNow() {
  const [timeNow, setTimeNow] = useState('...')

  useEffect(
    function update() {
      const timeStr = format(new Date(), 'h:mm:ssa')
      setTimeNow(timeStr)
      const timeoutId = setTimeout(update, 1000)
      return () => clearTimeout(timeoutId)
    },
    [timeNow]
  )

  return (
    <p>
      The time is <span>{timeNow}</span>
    </p>
  )
}
