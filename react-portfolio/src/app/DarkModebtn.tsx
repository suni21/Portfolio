"use client"
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs'

const DarkModebtn = () => {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme, systemTheme } = useTheme()

    // useEffect only runs on the client, so now we can safely show the UI
    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }
    const currentTheme = theme === "system" ? systemTheme : theme
    return (
        <>
        {/* <select value={theme} onChange={e => setTheme(e.target.value)}>
            <option value="dark">Dark</option>
            <option value="light">Light</option>
        </select> */}
        {
        currentTheme === "dark" ? (
            <BsFillSunFill className="h-8 w-8 p-2 bg-gray-400 rounded-lg cursor-pointer" onClick={() => setTheme("light")} />
        ) : (
        <BsFillMoonFill className="h-8 w-8 p-2 bg-gray-400 rounded-lg cursor-pointer" onClick={() => setTheme("dark")}/>
    )}
    </>
);
  
}

export default DarkModebtn