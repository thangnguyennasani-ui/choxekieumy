"use client";

import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function ContactPage() {

    const offices = [
        {
            city: "Chi Nhánh 1 - TP. Hồ Chí Minh",
            address: "714 Tân Kỳ-Tân Quý, P. Bình Hưng Hòa, Q. Bình Tân, TP.HCM",
            phone: "09.3579.4345 (A Hậu)",
            hours: "8:00 - 17:30 (Từ Thứ 2 - CN)",
        },
        {
            city: "Chi Nhánh 2 - TP. Hồ Chí Minh",
            address: "507 Quốc lộ 1A, P. Bình Hưng Hòa, Q. Bình Tân, TP.HCM",
            phone: "09.3579.4345 (A Hậu)",
            hours: "8:00 - 17:30 (Từ Thứ 2 - CN)",
        },
    ];

    return (
        <main className="min-h-screen bg-white font-sans">
            {/* --- HERO SECTION --- */}
            <section className="py-16 md:py-24 bg-gradient-to-r from-blue-700 to-blue-900 text-white">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-4">
                        Liên Hệ Với Chúng Tôi
                    </h1>
                    <p className="text-xl text-blue-100">
                        Hãy gọi hoặc gửi tin nhắn cho chúng tôi ngay hôm nay
                    </p>
                </div>
            </section>

            {/* --- CONTACT INFO SECTION --- */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                        {/* Phone */}
                        <div className="text-center p-8 bg-gray-50 rounded-lg">
                            <div className="flex justify-center mb-4">
                                <Phone className="w-12 h-12 text-blue-700" />
                            </div>
                            <h3 className="text-xl font-bold text-blue-700 mb-2">Gọi Cho Chúng Tôi</h3>
                            <p className="text-gray-700 mb-2">Hotline 24/7</p>
                            <a
                                href="tel:0935794345"
                                className="text-blue-700 font-bold text-lg hover:underline block mb-2"
                            >
                                09.3579.4345 (A Hậu)
                            </a>
                        </div>

                        {/* Email */}
                        <div className="text-center p-8 bg-gray-50 rounded-lg">
                            <div className="flex justify-center mb-4">
                                <Mail className="w-12 h-12 text-blue-700" />
                            </div>
                            <h3 className="text-xl font-bold text-blue-700 mb-2">Email Cho Chúng Tôi</h3>
                            <p className="text-gray-700 mb-2">Phản hồi trong 2 giờ</p>
                            <a
                                href="mailto:choxekieumy.info@gmail.com"
                                className="text-blue-700 font-bold text-lg hover:underline break-all"
                            >
                                choxekieumy.info@gmail.com
                            </a>
                        </div>

                        {/* Office */}
                        <div className="text-center p-8 bg-gray-50 rounded-lg">
                            <div className="flex justify-center mb-4">
                                <MapPin className="w-12 h-12 text-blue-700" />
                            </div>
                            <h3 className="text-xl font-bold text-blue-700 mb-2">Chi Nhánh 1</h3>
                            <p className="text-gray-700 mb-2">TP. Hồ Chí Minh</p>
                            <p className="text-blue-700 font-bold text-sm">714 Tân Kỳ-Tân Quý, Q. Bình Tân</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- OFFICES SECTION --- */}
            <section className="py-16 md:py-24 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-black text-blue-700 uppercase mb-12 text-center">
                        Các Chi Nhánh Của Chúng Tôi
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {offices.map((office, i) => (
                            <div key={i} className="bg-white p-8 rounded-lg shadow-md">
                                <h3 className="text-2xl font-bold text-blue-700 mb-4 uppercase">
                                    {office.city}
                                </h3>
                                <div className="space-y-3">
                                    <div className="flex gap-3">
                                        <MapPin className="w-5 h-5 text-blue-700 flex-shrink-0 mt-0.5" />
                                        <p className="text-gray-700">{office.address}</p>
                                    </div>
                                    <div className="flex gap-3">
                                        <Phone className="w-5 h-5 text-blue-700 flex-shrink-0 mt-0.5" />
                                        <a
                                            href={`tel:${office.phone}`}
                                            className="text-blue-700 font-bold hover:underline"
                                        >
                                            {office.phone}
                                        </a>
                                    </div>
                                    <div className="flex gap-3">
                                        <Clock className="w-5 h-5 text-blue-700 flex-shrink-0 mt-0.5" />
                                        <p className="text-gray-700">{office.hours}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </main>
    );
}
