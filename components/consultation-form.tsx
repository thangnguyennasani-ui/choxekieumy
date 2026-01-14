"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin } from "lucide-react"

export default function ConsultationForm() {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        carInterest: "",
        message: "",
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        // Validate
        if (!formData.name || !formData.phone || !formData.email) {
            alert("Vui lòng điền các thông tin bắt buộc")
            return
        }

        // Build email content
        const emailSubject = `Yêu Cầu Tư Vấn từ ${formData.name}`
        const emailBody = `
Xin chào CHỢ XE KIỂU MỸ,

Tôi muốn đăng ký tư vấn mua xe. Dưới đây là thông tin của tôi:

**Tên:** ${formData.name}
**Số Điện Thoại:** ${formData.phone}
**Email:** ${formData.email}
**Dòng Xe Quan Tâm:** ${formData.carInterest || "Không xác định"}

**Lời Nhắn:**
${formData.message}

---
Vui lòng liên hệ tôi sớm nhất có thể.

Cảm ơn!
    `.trim()

        // Create mailto link
        const mailtoLink = `mailto:choxekieumy.info@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}&cc=${encodeURIComponent(formData.email)}`

        // Open email client
        window.location.href = mailtoLink

        // Reset form
        setFormData({
            name: "",
            phone: "",
            email: "",
            carInterest: "",
            message: "",
        })
    }

    return (
        <section className="py-16 bg-gradient-to-r from-blue-50 to-blue-100">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12">

                    {/* LEFT: Info */}
                    <div>
                        <h2 className="text-3xl md:text-4xl font-black text-[#0052cc] mb-4">
                            ĐĂNG KÝ
                        </h2>
                        <p className="text-lg text-gray-700 mb-8">
                            Chúng tôi sẽ liên hệ trong thời gian sớm nhất
                        </p>

                        {/* Contact Info */}
                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <Phone className="w-6 h-6 text-[#0052cc] flex-shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-bold text-gray-800 mb-1">Gọi Chúng Tôi</h4>
                                    <a href="tel:0935794345" className="text-blue-700 hover:underline block">
                                        09.3579.4345 (A Hậu)
                                    </a>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <Mail className="w-6 h-6 text-[#0052cc] flex-shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-bold text-gray-800 mb-1">Email</h4>
                                    <a href="mailto:choxekieumy.info@gmail.com" className="text-blue-700 hover:underline">
                                        choxekieumy.info@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <MapPin className="w-6 h-6 text-[#0052cc] flex-shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-bold text-gray-800 mb-1">Địa Chỉ</h4>
                                    <p className="text-gray-700">714 Tân Kỳ-Tân Quý, P. Bình Hưng Hòa, Q. Bình Tân, TP.HCM</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT: Form */}
                    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg">
                        {/* Name */}
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2">Tên Của Bạn</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#0052cc]"
                                placeholder="Nhập tên của bạn"
                            />
                        </div>

                        {/* Phone */}
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2">Số Điện Thoại</label>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#0052cc]"
                                placeholder="09.3579.4345"
                            />
                        </div>

                        {/* Email */}
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#0052cc]"
                                placeholder="email@example.com"
                            />
                        </div>

                        {/* Car Interest */}
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2">Dòng Xe Quan Tâm</label>
                            <select
                                name="carInterest"
                                value={formData.carInterest}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#0052cc]"
                            >
                                <option value="">-- Chọn dòng xe --</option>
                                <option value="sedan">Sedan</option>
                                <option value="suv">SUV</option>
                                <option value="mpv">MPV</option>
                                <option value="van">Van</option>
                                <option value="pickup">Bán Tải</option>
                                <option value="other">Khác</option>
                            </select>
                        </div>

                        {/* Message */}
                        <div className="mb-6">
                            <label className="block text-gray-700 font-bold mb-2">Lời Nhắn</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows={4}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#0052cc]"
                                placeholder="Nhập thông tin hoặc yêu cầu của bạn..."
                            />
                        </div>

                        {/* Submit Button */}
                        <Button
                            type="submit"
                            className="w-full bg-[#0052cc] hover:bg-[#0041a0] text-white font-bold py-3 rounded-lg transition-colors"
                        >
                            ĐĂNG KÝ TƯ VẤN
                        </Button>
                    </form>
                </div>
            </div>
        </section>
    )
}
