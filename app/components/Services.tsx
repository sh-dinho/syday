import { Cpu, Database, Cloud } from 'lucide-react'
import ServiceCard from './ServiceCard'

export default function Services() {
    const services = [
        { title: 'AI & Automation', desc: 'Smart systems that learn, adapt, and scale.', icon: <Cpu /> },
        { title: 'Data Engineering', desc: 'Robust data pipelines and cloud analytics.', icon: <Database /> },
        { title: 'Cloud Strategy', desc: 'Resilient cloud architecture for modern teams.', icon: <Cloud /> },
    ]

    return (
        <section className="py-24 bg-[#f9fafb] dark:bg-[#050a14]">
            <div className="max-w-6xl mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-10">
                    Our <span className="text-[#00F0FF]">Services</span>
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {services.map((s, i) => (
                        <ServiceCard key={i} {...s} />
                    ))}
                </div>
            </div>
        </section>
    )
}
