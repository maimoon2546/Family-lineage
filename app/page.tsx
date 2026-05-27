"use client";

import Link from "next/link";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden text-white"
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
        style={{ background: "radial-gradient(ellipse, rgba(245,200,66,0.2) 0%, transparent 70%)" }} />

      <div className="relative max-w-7xl mx-auto px-8 py-14">

        {/* Header */}
        <header className="text-center mb-10">
          <p className="text-3xl text-[#f5c842] tracking-widest mb-3"
            style={{ fontFamily: "'Amiri', serif" }}>
            بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
          </p>

          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px flex-1 max-w-[140px]"
              style={{ background: "linear-gradient(to right, transparent, #f5c842, transparent)" }} />
            <div className="h-2.5 w-2.5 rotate-45 bg-[#f5c842]" />
            <div className="h-[6px] w-[6px] rotate-45 bg-[#f5c842] opacity-50" />
            <div className="h-2.5 w-2.5 rotate-45 bg-[#f5c842]" />
            <div className="h-px flex-1 max-w-[140px]"
              style={{ background: "linear-gradient(to left, transparent, #f5c842, transparent)" }} />
          </div>

          <h1 className="text-2xl font-bold leading-loose text-white"
            style={{ textShadow: "0 2px 12px rgba(0,0,0,0.5)" }}>
            แผนผังเครือญาติสายตระกูล<br />
            ฮัจญีวันฮูเซน บิน ฮัจญีวันฮาซัน<br />
            <span className="text-[#f5c842]">และฮัจญะฮ์วันไซนับ บินตี ฮัจญีวันอิสมาอีล ยานยา</span>
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
        <div className="relative w-full mb-10">
          <div className="absolute -inset-2 rounded-[20px] border border-[rgba(245,200,66,0.4)]" />
          <div className="absolute -inset-1 rounded-[17px] border border-[rgba(245,200,66,0.2)]" />
          {[
            "top-[-10px] left-[-10px] border-t-2 border-l-2",
            "top-[-10px] right-[-10px] border-t-2 border-r-2",
            "bottom-[-10px] left-[-10px] border-b-2 border-l-2",
            "bottom-[-10px] right-[-10px] border-b-2 border-r-2",
          ].map((cls, i) => (
            <div key={i} className={`absolute w-5 h-5 border-[#f5c842] opacity-80 ${cls}`} />
          ))}
          <Zoom>
            <img
              src="/images/1.png"
              alt="Family Tree"
              className="relative rounded-2xl w-full cursor-zoom-in"
            />
          </Zoom>
        </div>

        {/* Section label */}
        <p className="text-center text-xs tracking-[4px] text-[#f5c842] opacity-90 uppercase mb-5">
          เลือกสายตระกูล 5 พี่น้อง
        </p>

        {/* Navigation grid */}
        <div className="grid grid-cols-2 gap-4">
          {[
            { href: "/Family/faiz", label: "ครอบครัวสายฟาอิส ยานยา", sub: "Faiz Yanya" },
            { href: "/Family/faizah", label: "ครอบครัวสายปะอิเซีย อาแย", sub: "Faizah Ayae" },
            { href: "/Family/ahamah", label: "ครอบครัวสายอาหะมะ ยานยา", sub: "Ahamah Yanya" },
            { href: "/Family/basiroh", label: "ครอบครัวสายบาซีเร๊าะ ยานยา", sub: "Basiroh Yanya" },
          ].map(({ href, label, sub }) => (
            <Link key={href} href={href}
              className="group relative overflow-hidden rounded-xl border border-[rgba(245,200,66,0.4)]
                         p-6 text-center transition-all duration-200
                         hover:-translate-y-1 hover:border-[rgba(245,200,66,0.9)]
                         active:scale-[0.97]">
              <div className="absolute inset-0 bg-gradient-to-br from-[rgba(245,200,66,0.1)] to-transparent
                              opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
              <span className="relative block text-lg font-semibold text-white">{label}</span>
              <span className="relative mt-1 block text-sm tracking-wide text-[#f5c842] opacity-80">{sub}</span>
            </Link>
          ))}
        </div>

        {/* ปุ่มสุดท้ายอยู่กึ่งกลาง */}
        <div className="flex justify-center mt-4">
          <Link href="/Family/basir"
            className="group relative overflow-hidden rounded-xl border border-[rgba(245,200,66,0.4)]
                       p-6 text-center transition-all duration-200 w-[calc(50%-8px)]
                       hover:-translate-y-1 hover:border-[rgba(245,200,66,0.9)]
                       active:scale-[0.97]">
            <div className="absolute inset-0 bg-gradient-to-br from-[rgba(245,200,66,0.1)] to-transparent
                            opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
            <span className="relative block text-lg font-semibold text-white">ครอบครัวสายอับดุลบาสิท ยานยา</span>
            <span className="relative mt-1 block text-sm tracking-wide text-[#f5c842] opacity-80">Abdulbasit Yanya</span>
          </Link>
        </div>

        {/* Footer ornament */}
        <div className="mt-12 flex items-center justify-center gap-3 opacity-40">
          <span className="h-px w-14 bg-[#f5c842]" />
          <span className="text-[#f5c842] text-sm">✦</span>
          <span className="h-px w-14 bg-[#f5c842]" />
        </div>

      </div>
    </main>
  );
}