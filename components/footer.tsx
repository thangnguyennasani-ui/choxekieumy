"use client"

import Image from "next/image"
import { Phone, Mail, MapPin, Globe, Facebook, Instagram, Youtube, Music, MessageCircle } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#050505] text-gray-300 font-sans relative">
      {/* --- CUSTOM GRADIENT BORDER TOP --- */}
      <div
        className="w-full h-2"
        style={{
          background: "linear-gradient(90deg, #0052cc 0%, #0052cc 20%, #dc2626 30%, #0052cc 65%, #9333ea 100%)",
        }}
      ></div>

      <div className="container mx-auto px-4 py-12 lg:py-16">
        {/* Logo & Company Name Section */}
        <div className="mb-12 pb-8 border-b border-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <img
                src="https://choxekieumy.vn/thumb/300x200/1/upload/hinhanh/logologochinh5965removebgpreview-4414.png"
                alt="CHỢ XE KIỂU MỸ Logo"
                className="h-24 object-contain"
              />
            </div>
            <div>
              <h2 className="text-2xl font-black text-white mb-2">CHỢ XE KIỂU MỸ</h2>
              <p className="text-gray-400 text-sm">Chợ Xe Kiểu Mỹ - Mua Bán Xe Uy Tín Số 1</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* CỘT 1: THÔNG TIN LIÊN HỆ */}
          <div>
            <h3 className="text-white text-lg font-bold uppercase mb-6 tracking-wide">THÔNG TIN LIÊN HỆ</h3>
            <ul className="space-y-4 text-base text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-white flex-shrink-0 mt-1" />
                <span>
                  <strong className="text-white block mb-1">Địa chỉ 1:</strong>
                  714 Tân Kỳ-Tân Quý, P. Bình Hưng Hòa, Q. Bình Tân, TP.HCM
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-white flex-shrink-0 mt-1" />
                <span>
                  <strong className="text-white block mb-1">Chi nhánh 2:</strong>
                  507 Quốc lộ 1A, P. Bình Hưng Hòa, Q. Bình Tân, TP.HCM
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-white flex-shrink-0 mt-1" />
                <span>
                  <strong className="text-white block mb-1">Chi nhánh 2:</strong>
                  507 Quốc lộ 1A, P. Bình Hưng Hòa, Q. Bình Tân, TP.HCM
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-white flex-shrink-0" />
                <div>
                  <a href="tel:0935794345" className="hover:text-white transition-colors block font-semibold">
                    0935 794 345 (A Hậu)
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-white flex-shrink-0" />
                <a href="mailto:choxekieumy.info@gmail.com" className="hover:text-white transition-colors">
                  choxekieumy.info@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-white flex-shrink-0" />
                <span>Website: choxekieumy.vn</span>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="mt-8">
              <p className="text-sm font-bold text-white uppercase mb-6 tracking-wide">Kết nối với chúng tôi:</p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://www.facebook.com/choxekieumy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-2xl shadow-lg hover:-translate-y-1 overflow-hidden"
                  title="Facebook"
                >
                  <Image src="/images/social/facebook.png" alt="Facebook" width={48} height={48} />
                </a>
                <a
                  href="https://www.youtube.com/@choxekieumy5824"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-2xl shadow-lg hover:-translate-y-1 overflow-hidden"
                  title="YouTube"
                >
                  <Image src="/images/social/youtube.png" alt="YouTube" width={48} height={48} />
                </a>
                <a
                  href="https://oa.zalo.me/choxekieumy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-2xl shadow-lg hover:-translate-y-1 overflow-hidden"
                  title="Zalo OA"
                >
                  <Image src="/images/social/zalo.png" alt="Zalo" width={48} height={48} />
                </a>
                <a
                  href="https://www.tiktok.com/@choxekieumy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-2xl shadow-lg hover:-translate-y-1 overflow-hidden"
                  title="TikTok"
                >
                  <Image src="/images/social/tiktok.png" alt="TikTok" width={48} height={48} />
                </a>
                <a
                  href="https://www.instagram.com/choxekieumy.vn/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-2xl shadow-lg hover:-translate-y-1 overflow-hidden"
                  title="Instagram"
                >
                  <Image src="/images/social/instagram.png" alt="Instagram" width={48} height={48} />
                </a>
              </div>
            </div>
          </div>

          {/* CỘT 4: FANPAGE FACEBOOK */}
          <div>
            <div className="bg-white rounded-xl overflow-hidden p-3 shadow-lg">
              <div className="flex items-center gap-3 mb-3 px-1">
                <Facebook className="w-8 h-8 text-[#1877f2] fill-current" />
                <span className="font-bold text-black text-base">FANPAGE FACEBOOK</span>
              </div>
              <a
                href="https://www.facebook.com/choxekieumy"
                target="_blank"
                rel="noopener noreferrer"
                className="block relative w-full h-40 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg overflow-hidden group cursor-pointer"
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4 text-center">
                  <Facebook className="w-12 h-12 mb-2 fill-white" />
                  <span className="font-bold text-sm">Theo dõi chúng tôi</span>
                  <span className="text-xs mt-1 opacity-90">Trên Facebook</span>
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
              </a>
              <div className="mt-3">
                <a
                  href="https://www.facebook.com/choxekieumy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-[#1877f2] hover:bg-[#166fe5] text-white font-bold py-2 px-4 rounded-lg transition-colors text-sm"
                >
                  Truy cập Fanpage
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- BOTTOM COPYRIGHT BAR --- */}
      <div
        className="bg-[#003380] text-white/90 py-5 text-sm font-light border-t border-white/10 relative"
        style={{
          backgroundImage: "url('/footer-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-[#003380]/85"></div>

        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-3 relative z-10">
          <div className="text-center md:text-left">
            © Copyright <strong className="text-white font-bold">CHỢ XE KIỂU MỸ</strong>. All rights reserved.
          </div>

          <div className="flex items-center gap-4 opacity-90 text-xs md:text-sm">
            <span>
              Đang Online: <span className="font-bold">12</span>
            </span>
            <span className="hidden md:inline">|</span>
            <span>
              Trong Tháng: <span className="font-bold">3029</span>
            </span>
            <span className="hidden md:inline">|</span>
            <span>
              Tổng truy cập: <span className="font-bold">492 029</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
