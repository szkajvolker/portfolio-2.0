import { useEffect, useState } from "react"


const LocalTime = () => {
    const [time, setTime] = useState(new Date())

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date())
        }, 60000)
        return () => clearInterval(timer)
    }, [])

    const hours = time.getHours().toString().padStart(2, '0')
    const minutes = time.getMinutes().toString().padStart(2, '0')

  return (
    <div className="font-code text-sm border-2 border-n-6 rounded-lg px-3 py-1 dark:bg-black/40 bg-black/10 dark:text-n-2 text-n-3 shadow-lg shadow-black/60 dark:shadow-purple-800/40">
        <span className="text-n-3">Local: </span>
        <span className="text-color-1">{hours}:{minutes}</span>
        {" "}
        <span>{hours >= 7 && hours < 18 ? "☀️":"🌙"}</span>
    </div>
  )
}

export default LocalTime