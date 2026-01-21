"use client"

import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
// Import icon từ lucide-react để đồng bộ và đẹp hơn SVG thô
import { Fuel, MapPin, Gauge, Settings, History, Globe } from "lucide-react"
import { cars } from "@/app/products/page"

export default function FeaturedCars() {
  // Lấy 6 sản phẩm đầu tiên từ danh sách
  const featuredCars = cars.slice(18, 24)

  return (
    <section className="py-8 bg-white">
      <div className="container mx-auto px-4">
        {/* HEADER SECTION */}
        <div className="mb-6 flex items-center gap-2">
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 uppercase tracking-tight">
            Xe đang bán
          </h2>
          {/* Mũi tên màu đỏ giống hệt ảnh */}
          <div className="flex space-x-[-4px] text-red-600 font-black text-2xl md:text-3xl tracking-tighter">
            <span>»</span>
            <span>»</span>
            <span>»</span>
          </div>
        </div>

        {/* CAR GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredCars.map((car) => (
            <Card
              key={car.id}
              className="group overflow-hidden bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col"
            >
              {/* Car Image Container */}
              <Link href={`/products/${car.id}`} className="relative overflow-hidden aspect-[4/3] block">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                {/* Overlay nhẹ khi hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
              </Link>

              {/* Card Body */}
              <CardContent className="p-4 flex flex-col flex-1">
                {/* Name */}
                <h3 className="text-lg font-bold text-gray-900 mb-1 line-clamp-1">
                  {car.name}
                </h3>

                {/* Price */}
                <p className="text-[#0052cc] font-bold text-base mb-4">
                  {car.price}
                </p>

                {/* Specs Grid: 2 hàng x 3 cột */}
                <div className="grid grid-cols-3 gap-y-3 gap-x-2 mb-6">
                  {/* 1. Nhiên liệu */}
                  <div className="flex flex-col md:flex-row items-center md:items-start gap-1">
                    <Fuel className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span className="text-xs font-medium text-gray-600">{car.fuel}</span>
                  </div>

                  {/* 2. Tình trạng */}
                  <div className="flex flex-col md:flex-row items-center md:items-start gap-1">
                    <History className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span className="text-xs font-medium text-gray-600">{car.status}</span>
                  </div>

                  {/* 3. Địa điểm */}
                  <div className="flex flex-col md:flex-row items-center md:items-start gap-1">
                    <MapPin className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span className="text-xs font-medium text-gray-600 truncate">{car.location}</span>
                  </div>

                  {/* 4. Xuất xứ */}
                  <div className="flex flex-col md:flex-row items-center md:items-start gap-1">
                    <Globe className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span className="text-xs font-medium text-gray-600">{car.domestic}</span>
                  </div>

                  {/* 5. Kiểu dáng */}
                  <div className="flex flex-col md:flex-row items-center md:items-start gap-1">
                    <Gauge className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span className="text-xs font-medium text-gray-600">{car.type}</span>
                  </div>

                  {/* 6. Hộp số */}
                  <div className="flex flex-col md:flex-row items-center md:items-start gap-1">
                    <Settings className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span className="text-xs font-medium text-gray-600">{car.transmission}</span>
                  </div>
                </div>

                {/* Footer Button: Nền xám, Chữ đỏ, Full Width */}
                <div className="mt-auto pt-2">
                    <Link 
                      href={`/products/${car.id}`}
                      className="w-full py-3 bg-gray-100 hover:bg-gray-200 rounded text-red-600 font-bold text-sm uppercase transition-colors flex items-center justify-center gap-1 group/btn block"
                    >
                        Liên Hệ Ngay 
                        <span className="group-hover/btn:translate-x-1 transition-transform">»</span>
                    </Link>
                </div>

              </CardContent>
            </Card>
          ))}
        </div>

        {/* Nút xem tất cả ở dưới cùng */}
        <div className="text-center mt-10">
          <Link href="/products">
            <Button size="lg" className="bg-[#0052cc] hover:bg-blue-800 text-white font-bold px-8 rounded-full shadow-lg transition-all hover:-translate-y-1">
              XEM TẤT CẢ XE &gt;
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
