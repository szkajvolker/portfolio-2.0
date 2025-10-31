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
    <div className="font-code text-sm px-2 py-1 bg-transparent shadow-md shadow-black/60 hover:dark:shadow-purple-800/70  rounded-2xl text-n-5 dark:text-n-3 bg-n-4 dark:bg-n-6">
        <span className="text-n-3">Local: </span>
        <span className="text-color-1">{hours}:{minutes}</span>
        {" "}
        <span>{hours >= 7 && hours < 18 ? "☀️":"🌙"}</span>
    </div>
  )
}

export default LocalTime