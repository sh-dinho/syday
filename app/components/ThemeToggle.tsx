'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export default function ThemeToggle() {
    const { resolvedTheme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)
    useEffect(() => setMounted(true), [])

    if (!mounted) return null
    const isDark = resolvedTheme === 'dark'

    return (
        <button
            onClick={() => setTheme(isDark ? 'light' : 'dark')}
            className="ml-4 p-2 rounded-full bg-[#081220] text-[#00F0FF] hover:scale-105 transition"
            aria-label="Toggle theme"
        >
            {isDark ? '☀️' : '🌙'}
        </button>
    )
}
