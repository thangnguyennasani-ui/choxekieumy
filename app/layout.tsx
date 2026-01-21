import type React from "react"
import type { Metadata } from "next"
import { Geist } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import "./globals.css"

const geist = Geist({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Chợ Xe Kiểu Mỹ - Mua Bán Xe Uy Tín Số 1",
  description:
    "Chuyên mua bán xe ô tô cũ, xe mới. Cam kết xe chất lượng, giá tốt nhất thị trường. Hỗ trợ trả góp lãi suất thấp.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/images/logo/choxekieumy.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/images/logo/choxekieumy.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/images/logo/choxekieumy.png",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="vi">
      <body className={`${geist.className} font-sans antialiased`}>
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
