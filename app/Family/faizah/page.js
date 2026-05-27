"use client";

import Link from "next/link";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

export default function FaizahPage() {
    return (
        <main className="relative min-h-screen overflow-hidden text-[#f5e6c8]"
            style={{ background: "#7a3b1e", fontFamily: "'Noto Serif Thai', serif" }}>

            {/* geometric pattern overlay */}
            <div className="pointer-events-none absolute inset-0 opacity-[0.15]"
                style={{
                    backgroundImage: `
            repeating-linear-gradient(60deg, #f5c842 0, #f5c842 1px, transparent 0, transparent 50%),
            repeating-linear-gradient(120deg, #f5c842 0, #f5c842 1px, transparent 0, transparent 50%)`,
                    backgroundSize: "40px 40px"
                }} />

            {/* radial glow */}
            <div className="pointer-events-none absolute left-1/2 -top-28 -translate-x-1/2 h-72 w-[700px]"
                style={{ background: "radial-gradient(ellipse, rgba(245,200,66,0.15) 0%, transparent 70%)" }} />

            <div className="relative max-w-6xl mx-auto px-8 py-14">

                {/* Header */}
                <header className="text-center mb-10">

                    {/* ornament divider */}
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <div className="h-px flex-1 max-w-[140px]"
                            style={{ background: "linear-gradient(to right, transparent, #f5c842, transparent)" }} />
                        <div className="h-2.5 w-2.5 rotate-45 bg-[#f5c842]" />
                        <div className="h-[6px] w-[6px] rotate-45 bg-[#f5c842] opacity-50" />
                        <div className="h-2.5 w-2.5 rotate-45 bg-[#f5c842]" />
                        <div className="h-px flex-1 max-w-[140px]"
                            style={{ background: "linear-gradient(to left, transparent, #f5c842, transparent)" }} />
                    </div>

                    <h1 className="text-2xl font-bold leading-loose text-[#f5c842]"
                        style={{ textShadow: "0 2px 12px rgba(0,0,0,0.5)" }}>
                        ครอบครัวสายปะอิเซีย อาแย
                    </h1>

                    <div className="flex items-center justify-center gap-3 mt-4">
                        <div className="h-px flex-1 max-w-[120px]"
                            style={{ background: "linear-gradient(to right, transparent, #f5c842, transparent)" }} />
                        <div className="h-[6px] w-[6px] rotate-45 bg-[#f5c842]" />
                        <div className="h-px flex-1 max-w-[120px]"
                            style={{ background: "linear-gradient(to left, transparent, #f5c842, transparent)" }} />
                    </div>
                </header>

                {/* Image with decorative frame */}
                <div className="relative max-w-full mx-auto mb-10">
                    <div className="absolute -inset-2 rounded-[20px] border border-[rgba(212,176,123,0.35)]" />
                    <div className="absolute -inset-1 rounded-[17px] border border-[rgba(212,176,123,0.15)]" />
                    {[
                        "top-[-10px] left-[-10px] border-t-2 border-l-2",
                        "top-[-10px] right-[-10px] border-t-2 border-r-2",
                        "bottom-[-10px] left-[-10px] border-b-2 border-l-2",
                        "bottom-[-10px] right-[-10px] border-b-2 border-r-2",
                    ].map((cls, i) => (
                        <div key={i} className={`absolute w-5 h-5 border-[#f5c842] opacity-70 ${cls}`} />
                    ))}
                    <Zoom>
                        <img
                            src="/images/3.png"
                            alt="Faizah Family"
                            className="relative rounded-2xl w-full cursor-zoom-in"
                        />
                    </Zoom>
                </div>

                {/* Back button */}
                <div className="flex justify-center mt-8">
                    <Link href="/"
                        className="group relative overflow-hidden rounded-xl border border-[rgba(212,176,123,0.4)]
                       px-10 py-3 text-center transition-all duration-200
                       hover:-translate-y-0.5 hover:border-[rgba(212,176,123,0.8)]
                       active:scale-[0.97]">
                        <div className="absolute inset-0 bg-gradient-to-br from-[rgba(212,176,123,0.12)] to-transparent
                            opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
                        <span className="relative text-sm font-semibold text-[#f5c842] tracking-widest">
                            ← กลับหน้าหลัก
                        </span>
                    </Link>
                </div>

                {/* Footer ornament */}
                <div className="mt-12 flex items-center justify-center gap-3 opacity-30">
                    <span className="h-px w-14 bg-[#f5c842]" />
                    <span className="text-[#f5c842] text-sm">✦</span>
                    <span className="h-px w-14 bg-[#f5c842]" />
                </div>

            </div>
        </main>
    );
}