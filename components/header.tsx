"use client";

import { useState, useEffect } from "react";
import { Phone, Search, Menu, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="w-full sticky top-0 z-50 backdrop-blur-sm bg-white/90 shadow-sm font-sans transition-all duration-300">
      {/* --- TOP SECTION --- */}
      <div className={`bg-gray-50 border-b border-gray-200 transition-all duration-300 ${isScrolled ? "py-2" : "py-6"}`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between gap-4 md:gap-8">
            {/* 1. Left: LOGO */}
            <Link
              href="/"
              className="flex-shrink-0 flex items-end gap-3 hover:opacity-80 transition-opacity"
            >
              {/* Car Logo Icon */}
              <div className={`transition-all duration-300 ${isScrolled ? "w-16 h-16" : "w-28 h-28"}`}>
                <img
                  src="https://choxekieumy.vn/thumb/171x168/2/upload/hinhanh/logologochinh5965removebgpreview-4414.png"
                  alt="CHỢ XE KIỂU MỸ Logo"
                  className="w-full h-full object-contain cursor-pointer"
                />
              </div>
            </Link>

            {/* 2. Center: BIG TITLE */}
            <div className="flex-1 text-center hidden md:block">
              <h1 className={`font-black text-blue-700 uppercase tracking-tight transition-all duration-300 ${isScrolled ? "text-3xl mb-0" : "text-3xl md:text-4xl mb-1"
                }`}>
                CHỢ XE KIỂU MỸ
              </h1>
              {!isScrolled && (
                <p className="text-gray-700 font-semibold text-sm md:text-base">
                  Bán xe an toàn — nhanh chóng — uy tín tuyệt đối.
                </p>
              )}
            </div>

            {/* 3. Right: HOTLINE */}
            <div className={`flex-shrink-0 flex flex-col items-end transition-all duration-300 ${isScrolled ? "hidden md:flex" : ""}`}>
              <div className="text-blue-700 text-xs font-bold mb-2 tracking-widest">
                HOTLINE 24/7
              </div>
              <a
                href="tel:0935794345"
                className={`bg-blue-700 text-white rounded-full flex items-center gap-3 shadow-lg hover:shadow-xl transition-all duration-300 ${isScrolled ? "px-3 py-1" : "px-6 py-2"
                  }`}
              >
                <div className="bg-white rounded-full p-2 flex-shrink-0">
                  <Phone className={`text-blue-700 transition-all duration-300 ${isScrolled ? "w-4 h-4" : "w-5 h-5"}`} />
                </div>
                <span className={`font-black tracking-wide whitespace-nowrap transition-all duration-300 ${isScrolled ? "text-sm hidden lg:inline" : "text-xl"
                  }`}>
                  09.3579.4345
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* --- BOTTOM SECTION: NAVIGATION --- */}
      <div className="w-full bg-[#0052cc] relative mt-2 shadow-lg">
        <div className="container mx-auto px-4 h-12 flex items-center justify-between">
          {/* Left: Menu Items with Slanted Decoration */}
          <div className="flex items-center h-full">
            <div className="md:hidden mr-3">
              <button
                aria-label="Toggle menu"
                aria-expanded={mobileOpen}
                onClick={() => setMobileOpen(!mobileOpen)}
                className="p-2 rounded-md text-white hover:bg-blue-800 transition-colors"
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

            {/* Decorative Slanted Lines (desktop) */}
            <div className="hidden md:flex items-center mr-4 h-full space-x-2">
              <div className="w-3 h-full bg-blue-200 opacity-50 -skew-x-[20deg] transform origin-bottom"></div>
              <div className="w-3 h-full bg-blue-100 opacity-80 -skew-x-[20deg] transform origin-bottom"></div>
            </div>

            {/* Nav Links (desktop) */}
            <nav className="hidden md:flex items-center gap-1 md:gap-6 text-white text-sm font-bold uppercase h-full">
              <Link href="/" className="h-full flex items-center px-2 hover:bg-blue-800 transition-colors relative group whitespace-nowrap">
                Trang chủ
                <span className="absolute bottom-0 left-0 w-full h-1 bg-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
              </Link>
              <Link href="/about" className="h-full flex items-center px-2 hover:bg-blue-800 transition-colors relative group whitespace-nowrap">Về chúng tôi<span className="absolute bottom-0 left-0 w-full h-1 bg-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span></Link>
              <Link href="/products" className="h-full flex items-center px-2 hover:bg-blue-800 transition-colors relative group whitespace-nowrap">Sản phẩm<span className="absolute bottom-0 left-0 w-full h-1 bg-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span></Link>
              <Link href="/news" className="h-full flex items-center px-2 hover:bg-blue-800 transition-colors relative group whitespace-nowrap">Tin tức<span className="absolute bottom-0 left-0 w-full h-1 bg-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span></Link>
              <Link href="/videos" className="h-full flex items-center px-2 hover:bg-blue-800 transition-colors relative group whitespace-nowrap">Video<span className="absolute bottom-0 left-0 w-full h-1 bg-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span></Link>
              <Link href="/contact" className="h-full flex items-center px-2 hover:bg-blue-800 transition-colors relative group whitespace-nowrap">Liên hệ<span className="absolute bottom-0 left-0 w-full h-1 bg-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span></Link>
            </nav>
          </div>

          {/* Right: Search Bar (desktop) */}
          <div className="hidden md:flex items-center ml-4 w-64">
            <div className="relative w-full">
              <Input
                placeholder="Nhập từ khoá tìm kiếm.."
                className="w-full pl-4 pr-10 h-8 rounded-full bg-white text-black border-none text-xs focus-visible:ring-0 italic placeholder:text-gray-400"
              />
              <button className="absolute right-1 top-1/2 -translate-y-1/2 p-1 hover:bg-gray-100 rounded-full transition-colors">
                <Search className="w-4 h-4 text-gray-500" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu (collapsible) */}
        <div className={`${mobileOpen ? 'block' : 'hidden'} md:hidden bg-[#0052cc]`}>
          <div className="px-4 py-3 space-y-2">
            <Link href="/" className="block text-white font-bold uppercase">Trang chủ</Link>
            <Link href="/about" className="block text-white font-bold uppercase">Về chúng tôi</Link>
            <Link href="/products" className="block text-white font-bold uppercase">Sản phẩm</Link>
            <Link href="/news" className="block text-white font-bold uppercase">Tin tức</Link>
            <Link href="/videos" className="block text-white font-bold uppercase">Video</Link>
            <Link href="/contact" className="block text-white font-bold uppercase">Liên hệ</Link>
          </div>
        </div>
      </div>
    </header>
  );
}
