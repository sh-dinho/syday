import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
    return (
        <section className="relative flex flex-col items-center justify-center text-center py-32 px-6 overflow-hidden">
            <div className="absolute inset-0 bg-[url('/images/grid-lines.svg')] bg-cover bg-center opacity-20" />
            <div className="relative z-10 max-w-3xl">
                <h1 className="text-5xl md:text-6xl font-bold mb-6">
                    Empowering <span className="text-[#00F0FF]">Intelligence</span> with Data
                </h1>
                <p className="text-gray-600 dark:text-gray-300 mb-8">
                    We combine analytics, AI, and strategy to help businesses thrive in the data-driven world.
                </p>
                <Link
                    href="/services"
                    className="btn-electric px-6 py-3 rounded-full font-semibold shadow hover:scale-105 transition-transform"
                >
                    Get Started
                </Link>
            </div>
            <div className="relative mt-12 w-full max-w-xl">
                <Image
                    src="/images/hero-illustration.png"
                    alt="Hero Illustration"
                    width={900}
                    height={600}
                    className="mx-auto"
                />
            </div>
        </section>
    )
}
