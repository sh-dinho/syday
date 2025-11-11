import Image from 'next/image'

export default function AboutSection() {
    return (
        <section className="relative py-24 bg-white dark:bg-[#071226]">
            <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                <Image
                    src="/images/about-illustration.png"
                    alt="About illustration"
                    width={600}
                    height={400}
                    className="rounded-2xl shadow-lg"
                />
                <div>
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                        About <span className="text-[#00F0FF]">Syday</span>
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300 mb-6">
                        Syday is a data and AI consulting firm helping organizations unlock intelligent transformation.
                        We believe technology should empower people — not overwhelm them.
                    </p>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                        <li>✅ AI-driven Insights</li>
                        <li>✅ Cloud & Infrastructure Automation</li>
                        <li>✅ Data Strategy & Governance</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}
