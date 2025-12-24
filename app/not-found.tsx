import Link from "next/link";
import { Button } from "@/components/ui/button";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-6xl font-black text-gray-900 mb-4">404</h1>
        <h2 className="text-3xl font-bold text-gray-700 mb-4">
          Trang không tìm thấy
        </h2>
        <p className="text-gray-600 mb-8">
          Trang bạn đang tìm kiếm không tồn tại hoặc đã bị di chuyển.
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              Về trang chủ
            </Button>
          </Link>
          <Link href="/products">
            <Button variant="outline">Xem sản phẩm</Button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
