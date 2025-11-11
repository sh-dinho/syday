// homepage placeholder
import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <main className="relative overflow-hidden min-h-screen flex flex-col items-center justify-center text-center px-6">
            <div className="absolute inset-0 bg-[url('/images/grid-lines.svg')] bg-cover bg-center opacity-20" />

            <div className="relative z-10 max-w-3xl">
                <h1 className="text-5xl md:text-6xl font-bold mb-6">
                    Building Intelligent <span className="text-[#00F0FF]">Data Systems</span>
                </h1>
                <p className="text-gray-600 dark:text-gray-300 mb-8">
                    Empowering innovation with AI-driven insights — helping businesses of every size
                    make data their most powerful asset.
                </p>

                <Link
                    href="/services"
                    className="inline-block bg-gradient-to-r from-[#00F0FF] to-[#7CE8FF] text-black font-semibold px-6 py-3 rounded-full shadow hover:scale-105 transition-transform"
                >
                    Explore Our Services
                </Link>
            </div>

            <div className="relative mt-12 w-full max-w-xl">
                <Image
                    src="/images/hero-illustration.png"
                    alt="Syday Hero Illustration"
                    width={900}
                    height={600}
                    className="mx-auto"
                />
            </div>
        </main>
    );
}
