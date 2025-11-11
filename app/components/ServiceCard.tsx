import { ReactNode } from 'react'

export default function ServiceCard({ title, desc, icon }: { title: string; desc: string; icon: ReactNode }) {
    return (
        <div className="p-6 rounded-2xl border border-gray-200 dark:border-[#0b1a2a] bg-white dark:bg-[#081220] shadow-sm hover:-translate-y-1 transition-transform">
            <div className="text-[#00F0FF] text-3xl mb-3">{icon}</div>
            <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">{title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">{desc}</p>
        </div>
    )
}
