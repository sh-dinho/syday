'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import ThemeToggle from './ThemeToggle'

const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const pathname = usePathname()

    return (
        <nav className="bg-[#0a0f1c] dark:bg-[#050a14] fixed top-0 w-full z-50 border-b border-[#0e1a2d]/60">
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                <Link href="/" className="text-2xl font-semibold text-[#00F0FF] tracking-wide drop-shadow-[0_0_6px_#00F0FF]">
                    Syday
                </Link>

                <ul className="hidden md:flex items-center gap-6">
                    {navItems.map((item) => {
                        const active = pathname === item.href
                        return (
                            <li key={item.href}>
                                <Link
                                    href={item.href}
                                    className={`transition font-medium ${
                                        active
                                            ? 'text-[#00F0FF] drop-shadow-[0_0_6px_#00F0FF]'
                                            : 'text-gray-300 hover:text-[#00F0FF]'
                                    }`}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        )
                    })}
                    <ThemeToggle />
                </ul>

                <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-gray-300 hover:text-[#00F0FF]">
                    ☰
                </button>
            </div>

            {isOpen && (
                <div className="md:hidden bg-[#0a0f1c] px-6 py-3 space-y-3 border-t border-[#0e1a2d]/40">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className="block text-gray-300 hover:text-[#00F0FF] transition"
                        >
                            {item.label}
                        </Link>
                    ))}
                    <ThemeToggle />
                </div>
            )}
        </nav>
    )
}
