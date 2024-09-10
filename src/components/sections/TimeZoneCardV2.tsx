import React, { useState, useEffect } from 'react'
import moment from 'moment-timezone'

const Timezone = ({ timezone }: any) => {
  const [dateTime, setDateTime] = useState('')

  useEffect(() => {
    const interval = setInterval(() => {
      const now = moment().tz(timezone)
      setDateTime(now.format('dddd, DD MMMM YYYY HH:mm:ss'))
    }, 1000)

    return () => clearInterval(interval)
  }, [timezone])

  return (
    <div>
      <p>{dateTime}</p>
      <p className="text-sm text-gray-500">🇮🇩 Trenggalek, Indonesia 🇮🇩</p>
    </div>
  )
}

export default Timezone
