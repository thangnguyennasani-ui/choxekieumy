"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Phone,
  MapPin,
  Home,
  Facebook,
  Youtube,
  Instagram,
  Mail,
} from "lucide-react";

export default function ContactSection() {
  return (
    <section className="py-24 bg-white overflow-hidden font-sans">
      <div className="container mx-auto px-4">
        {/* ===== HEADER ===== */}
        <div className="text-center mb-16 lg:mb-20">
          <span className="text-[#0052cc] font-bold text-sm tracking-widest uppercase mb-3 block">
            [ CHỢ XE KIỂU MỸ ]
          </span>
          <h2 className="text-4xl font-black text-[#1a1a1a] uppercase tracking-tighter">
            LIÊN HỆ TƯ VẤN
          </h2>
        </div>

        {/* ===== GRID (STACK LAYOUT) ===== */}
        <div className="relative max-w-7xl mx-auto">
          {/* ===== FORM (LAYER TRÊN) ===== */}
          <div
            className="
              bg-white
              rounded-2xl
              border-2 border-[#0052cc]
              shadow-[0_25px_60px_rgba(0,82,204,0.25)]
              p-8 md:p-10 lg:py-12

              lg:absolute
              lg:top-1/2
              lg:-translate-y-1/2
              lg:left-0
              lg:w-[30vw]
              z-20
            "
          >
            <div className="p-8 md:p-10 lg:py-12">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-black text-[#1a1a1a] uppercase mb-2">
                  ĐĂNG KÝ TƯ VẤN
                </h3>
                <p className="text-gray-500 text-xs font-medium">
                  Chúng tôi sẽ liên hệ trong thời gian sớm nhất
                </p>
              </div>

              <form className="space-y-5">
                <Input
                  placeholder="Họ và tên *"
                  className="bg-[#f8f9fa] h-12 text-sm focus-visible:ring-1 focus-visible:ring-[#0052cc]"
                />
                <Input
                  type="tel"
                  placeholder="Số điện thoại *"
                  className="bg-[#f8f9fa] h-12 text-sm focus-visible:ring-1 focus-visible:ring-[#0052cc]"
                />
                <Input
                  placeholder="Loại xe quan tâm *"
                  className="bg-[#f8f9fa] h-12 text-sm focus-visible:ring-1 focus-visible:ring-[#0052cc]"
                />
                <Textarea
                  rows={4}
                  placeholder="Nội dung cần tư vấn"
                  className="bg-[#f8f9fa] text-sm focus-visible:ring-1 focus-visible:ring-[#0052cc] resize-none"
                />

                <Button className="w-full bg-[#0052cc] hover:bg-blue-800 text-white font-bold py-6 uppercase rounded-lg shadow-lg hover:shadow-xl transition-all">
                  GỬI LIÊN HỆ
                </Button>
              </form>
            </div>
          </div>

          {/* ===== INFO BOX (LAYER DƯỚI) ===== */}
          <div className="bg-[#0052cc] rounded-[30px] min-h-[550px] p-8 md:p-12 lg:pl-64 lg:pr-12 flex items-center text-white">
            <div className="bg-[#0052cc] w-full h-full text-white rounded-[30px] p-8 md:p-12 lg:pl-64 lg:pr-12 flex flex-col justify-center shadow-lg">
              <h3 className="text-2xl font-bold uppercase border-b border-white/30 pb-4 mb-8 text-center lg:text-left">
                THÔNG TIN LIÊN HỆ
              </h3>

              <div className="space-y-8">
                <div className="flex gap-5">
                  <div className="bg-white rounded-full p-2.5 shadow-md">
                    <Home className="w-5 h-5 text-[#0052cc]" />
                  </div>
                  <div>
                    <h4 className="font-bold uppercase text-sm mb-1">
                      Địa chỉ 1
                    </h4>
                    <p className="text-sm text-blue-100">
                      714 Tân Kỳ-Tân Quý, P. Bình Hưng Hòa, Q. Bình Tân, TP.HCM
                    </p>
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="bg-white rounded-full p-2.5 shadow-md">
                    <MapPin className="w-5 h-5 text-[#0052cc]" />
                  </div>
                  <div>
                    <h4 className="font-bold uppercase text-sm mb-1">
                      Chi nhánh 2
                    </h4>
                    <p className="text-sm text-blue-100">
                      507 Quốc lộ 1A, P. Bình Hưng Hòa, Q. Bình Tân, TP.HCM
                    </p>
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="bg-white rounded-full p-2.5 shadow-md">
                    <Phone className="w-5 h-5 text-[#0052cc]" />
                  </div>
                  <div>
                    <h4 className="font-bold uppercase text-sm mb-1">
                      Hotline
                    </h4>
                    <a
                      href="tel:0935794345"
                      className="text-lg font-bold hover:underline"
                    >
                      0935 794 345
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 mt-10 justify-center lg:justify-start">
                {[Facebook, Mail, Instagram, Youtube].map((Icon, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-blue-400 transition"
                  >
                    <Icon className="w-5 h-5 text-[#0052cc]" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
