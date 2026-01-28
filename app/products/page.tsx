"use client";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import {
  Fuel,
  MapPin,
  Gauge,
  Settings,
  History,
  Globe,
  ChevronRight,
} from "lucide-react";

const cars = [
  {
    id: 1,
    name: "Ford Transit 2024",
    price: "680 Triệu Đồng",
    fuel: "Xăng",
    status: "Đã sử dụng",
    location: "Hồ Chí Minh",
    domestic: "Trong nước",
    type: "Van",
    transmission: "Số tự động",
    odo: "43.000 km",
    image:
      "/images/cars/ford-transit-2024/z7355203094167_3789348b2a77d7f239fc5db4e172005b.jpg",
  },
  {
    id: 2,
    name: "Toyota Fortuner G 2014",
    price: "475 Triệu Đồng",
    fuel: "Dầu",
    status: "Đã sử dụng",
    location: "Hồ Chí Minh",
    domestic: "Trong nước",
    type: "SUV",
    transmission: "Số sàn",
    odo: "115.000 km",
    image:
      "/images/cars/fortuner-g-2014/z7355204074426_b75e2c95ef88738392b3675963e86489.jpg",
  },
  {
    id: 3,
    name: "Kia Sedona 2018",
    price: "650 Triệu Đồng",
    fuel: "Dầu",
    status: "Đã sử dụng",
    location: "Hồ Chí Minh",
    domestic: "Trong nước",
    type: "MPV",
    transmission: "Số tự động",
    odo: "118.000 km",
    image:
      "/images/cars/sedona-2018/z7355205359095_99216fd3ee059cea9a843785f071cfa3.jpg",
  },
  {
    id: 4,
    name: "Toyota Fortuner 2021",
    price: "870 Triệu Đồng",
    fuel: "Xăng",
    status: "Đã sử dụng",
    location: "Hồ Chí Minh",
    domestic: "Nhập khẩu",
    type: "SUV",
    transmission: "Số tự động",
    odo: "109.000 km",
    image:
      "/images/cars/fortuner-2021/z7355205899568_df4fe60c84c28dd05ace490bc5d27b4d.jpg",
  },
  {
    id: 5,
    name: "Mitsubishi Xpander Cross 2021",
    price: "470 Triệu Đồng",
    fuel: "Xăng",
    status: "Đã sử dụng",
    location: "Hồ Chí Minh",
    domestic: "Trong nước",
    type: "MPV",
    transmission: "Số tự động",
    odo: "N/A",
    image:
      "/images/cars/mitsubitsi-xpander-cross-2021/z7355207418477_41800dcc7afab8f03881d5bfde55c460.jpg",
  },
  {
    id: 6,
    name: "Mitsubishi Xpander 2022 Premium",
    price: "538 Triệu Đồng",
    fuel: "Xăng",
    status: "Đã sử dụng",
    location: "Hồ Chí Minh",
    domestic: "Trong nước",
    type: "MPV",
    transmission: "Số tự động",
    odo: "75.000 km",
    image:
      "/images/cars/xpander-2022-premium/z7355208531592_8dec31f2d2748f2903c44b53b90f5c6c.jpg",
  },
  {
    id: 7,
    name: "Toyota Fortuner 2016",
    price: "440 Triệu Đồng",
    fuel: "Xăng",
    status: "Đã sử dụng",
    location: "Hồ Chí Minh",
    domestic: "Trong nước",
    type: "SUV",
    transmission: "Số tự động",
    odo: "105.000 km",
    image:
      "/images/cars/up-deeta-fortuner-2016/z7355209423772_4c2ae6ebcf9edcfbd025490d9e33ddca.jpg",
  },
  {
    id: 8,
    name: "Toyota Innova 2019",
    price: "450 Triệu Đồng",
    fuel: "Xăng",
    status: "Đã sử dụng",
    location: "Hồ Chí Minh",
    domestic: "Trong nước",
    type: "MPV",
    transmission: "Số sàn",
    odo: "112.000 km",
    image:
      "/images/cars/innova-2019/z7355210040693_cefe65c6d91e34f679c356d09569775b.jpg",
  },
  {
    id: 9,
    name: "Porsche Panamera 4S 2009",
    price: "850 Triệu Đồng",
    fuel: "Xăng",
    status: "Đã sử dụng",
    location: "Hồ Chí Minh",
    domestic: "Nhập khẩu",
    type: "Sedan",
    transmission: "Số tự động",
    odo: "100.000 km",
    image:
      "/images/cars/porsche-panamera-4s-2009/z7355211470789_cf28c707036c489e30a6640b37deaf9d.jpg",
  },
  {
    id: 10,
    name: "Mazda3 2018 1.5 AT",
    price: "430 Triệu Đồng",
    fuel: "Xăng",
    status: "Đã sử dụng",
    location: "Hồ Chí Minh",
    domestic: "Trong nước",
    type: "Sedan",
    transmission: "Số tự động",
    odo: "63.000 km",
    image:
      "/images/cars/mazda3-2018-1.5-at/z7355212785899_a5e7c14ff31653ae210eaba45c66ea10.jpg",
  },
  {
    id: 11,
    name: "Mercedes Smart Roadster 2003",
    price: "350 Triệu Đồng",
    fuel: "Xăng",
    status: "Đã sử dụng",
    location: "Hồ Chí Minh",
    domestic: "Nhập khẩu",
    type: "Coupe",
    transmission: "Số tự động",
    odo: "N/A",
    image:
      "/images/cars/mercedes-smart-roadster-2003/z7355214347527_ab8c3d2ddae60375414d7ad9ced83fb3.jpg",
  },
  {
    id: 12,
    name: "Kia Sedona 2019",
    price: "738 Triệu Đồng",
    fuel: "Dầu",
    status: "Đã sử dụng",
    location: "Hồ Chí Minh",
    domestic: "Trong nước",
    type: "MPV",
    transmission: "Số tự động",
    odo: "74.000 km",
    image:
      "/images/cars/sedona-2019/z7355215102517_383178fc1af7d927b12319031e644e43.jpg",
  },
  {
    id: 13,
    name: "Toyota Innova V 2010",
    price: "280 Triệu Đồng",
    fuel: "Xăng",
    status: "Đã sử dụng",
    location: "Hồ Chí Minh",
    domestic: "Trong nước",
    type: "MPV",
    transmission: "Số tự động",
    odo: "99.000 km",
    image:
      "/images/cars/innova-v-2010/z7355216066190_6dfcb6ce3f964b76905817da240cf8d4.jpg",
  },
  {
    id: 14,
    name: "Mercedes C200 2012",
    price: "300 Triệu Đồng",
    fuel: "Xăng",
    status: "Đã sử dụng",
    location: "Hồ Chí Minh",
    domestic: "Trong nước",
    type: "Sedan",
    transmission: "Số tự động",
    odo: "90.000 km",
    image:
      "/images/cars/mercedes-c200-2012/z7355216557021_e6bded0cfd7dbcc3e69ae414692dd8e8.jpg",
  },
  {
    id: 15,
    name: "BMW X1 2010",
    price: "299 Triệu Đồng",
    fuel: "Xăng",
    status: "Đã sử dụng",
    location: "Hồ Chí Minh",
    domestic: "Nhập khẩu",
    type: "SUV",
    transmission: "Số tự động",
    odo: "97.000 km",
    image:
      "/images/cars/bmw-x1-2010/z7355217017627_f19fe1b44e05b131b3e0813a27be30b4.jpg",
  },
  {
    id: 16,
    name: "Chevrolet Trailblazer 2018",
    price: "486 Triệu Đồng",
    fuel: "Dầu",
    status: "Đã sử dụng",
    location: "Hồ Chí Minh",
    domestic: "Nhập khẩu (Thái Lan)",
    type: "SUV",
    transmission: "Số tự động",
    odo: "120.000 km",
    image:
      "/images/cars/chevrolet-trailblazer-2018/z7441092489744_192af82c4d4109cf00d567ff7f1199a1.jpg",
  },
  {
    id: 17,
    name: "Toyota Fortuner V 2014",
    price: "425 Triệu Đồng",
    fuel: "Xăng",
    status: "Đã sử dụng",
    location: "Hồ Chí Minh",
    domestic: "Trong nước",
    type: "SUV",
    transmission: "Số tự động",
    odo: "115.000 km",
    image:
      "/images/cars/fortuner-v-2014/z7441096230624_622ce5afdc10e3d0a48224845e87deac.jpg",
  },
  {
    id: 18,
    name: "Fotuner 2011 AT",
    price: "338 Triệu Đồng",
    fuel: "Xăng",
    status: "Rất tốt",
    location: "Hồ Chí Minh",
    domestic: "Trong nước",
    type: "SUV",
    transmission: "Số tự động",
    odo: "139.000 km",
    image:
      "/images/cars/fotuner-2011-at/z7441097635577_ef429ae9912f8691fa255a60a2277634.jpg",
  },
  {
    id: 19,
    name: "Honda City Top 2020 AT",
    price: "420 Triệu Đồng",
    fuel: "Xăng",
    status: "Đã sử dụng",
    engine: "1.5L",
    location: "Hồ Chí Minh",
    domestic: "Nhập khẩu",
    type: "Sedan",
    transmission: "Số tự động",
    odo: "39.000 km",
    image:
      "/images/cars/honda-city-top-2020-at/z7441094034935_37329acb53fe54618d17b3c6b2d0b403.jpg",
  },
  {
    id: 20,
    name: "Ford Ranger 2018 AT",
    price: "490 Triệu Đồng",
    fuel: "Dầu",
    status: "Xuất sắc",
    location: "Hồ Chí Minh",
    domestic: "Nhập khẩu (Thái Lan)",
    type: "Pickup",
    transmission: "Số tự động",
    odo: "98.000 km",
    image:
      "/images/cars/ranger-2018-at/z7441095478230_be33acb3a48bca98dcec0955869acc03.jpg",
  },
  {
    id: 21,
    name: "Toyota Vios G 2019",
    price: "365 Triệu Đồng",
    fuel: "Xăng",
    status: "Đã sử dụng",
    location: "Hồ Chí Minh",
    domestic: "Nhập khẩu",
    type: "Sedan",
    transmission: "Số tự động",
    odo: "95.000 km",
    image:
      "/images/cars/vios-g-2019/z7441093137206_04f021101c56c05a511399e72607ec38.jpg",
  },
  {
    id: 22,
    name: "Mazda CX5 2017",
    price: "568 Triệu Đồng",
    fuel: "Xăng",
    status: "Đã sử dụng",
    location: "Hồ Chí Minh",
    domestic: "Trong nước",
    type: "SUV",
    transmission: "Số tự động",
    odo: "74.000 km",
    image:
      "/images/cars/cx5-2017-mau-moi/z7446915870805_7f1d09a31190e370c06c4b0b06fde32e.jpg",
  },
  {
    id: 23,
    name: "Fotuner 2013 AT",
    price: "380 Triệu Đồng",
    fuel: "Xăng",
    status: "Đã sử dụng",
    location: "Hồ Chí Minh",
    domestic: "Trong nước",
    type: "SUV",
    transmission: "Số tự động",
    odo: "126.000 km",
    image:
      "/images/cars/fotuner-2013-2cau-at/z7446914428917_d3caced4a43a7c3d9374ebc983ae5141.jpg",
  },
  {
    id: 24,
    name: "Fortuner V 2013",
    year: 2013,
    price: "380 Triệu Đồng",
    fuel: "Xăng",
    status: "Đã sử dụng",
    location: "Hồ Chí Minh",
    domestic: "Nhập khẩu (Thái Lan)",
    type: "SUV",
    transmission: "Số tự động",
    drivetrain: "4WD",
    odo: "126.000 km",
    image:
      "/images/cars/fortuner-v-2013/z7457939580738_5afaac5595805ea1eccbdf84128dad09.jpg",
  },
  {
    id: 25,
    name: "Honda CRV 2010 2.4 AT",
    year: 2010,
    price: "315 Triệu Đồng",
    fuel: "Xăng",
    engine: "2.4L",
    status: "Đã sử dụng",
    location: "Hồ Chí Minh",
    domestic: "Trong nước",
    type: "SUV",
    transmission: "Số tự động",
    odo: "126.000 km",
    image:
      "/images/cars/honda-crv-2010 -2.4-at/z7457936842420_4938cf0e3c310674335be8c2ab05014f.jpg",
  },
  {
    id: 26,
    name: "Innova E 2012 So San",
    year: 2012,
    price: "235 Triệu Đồng",
    fuel: "Xăng",
    status: "Đã sử dụng",
    location: "Hồ Chí Minh",
    domestic: "Trong nước",
    type: "MPV",
    transmission: "Số sàn",
    odo: "182.000 km",
    image:
      "/images/cars/innova-e-2012-so-san/z7457938967588_944635f09b6476f2c645adc88b615114.jpg",
  },
  {
    id: 27,
    name: "Orlando 2016",
    year: 2016,
    price: "295 Triệu Đồng",
    fuel: "Xăng",
    status: "Đã sử dụng",
    location: "Hồ Chí Minh",
    domestic: "Trong nước",
    type: "MPV",
    transmission: "Số tự động",
    odo: "76.000 km",
    image:
      "/images/cars/orlando-2016/z7457938450163_cc15fcbab4bd8976078ed7ca26964812.jpg",
  },
  {
    id: 28,
    name: "Zinger 2010",
    year: 2010,
    price: "220 Triệu Đồng",
    fuel: "Xăng",
    status: "Đã sử dụng",
    location: "Hồ Chí Minh",
    domestic: "Trong nước",
    type: "MPV",
    transmission: "Số tự động",
    odo: "133.000 km",
    image:
      "/images/cars/zinger-2010/z7457937876017_9bb122bb256eb6c60f1834f2b4bdfeb6.jpg",
  },
  {
    id: 29,
    name: "Toyota Vios E 2022",
    year: 2022,
    price: "355 Triệu Đồng",
    fuel: "Xăng",
    status: "Đã sử dụng",
    location: "",
    domestic: "Lắp ráp tại Việt Nam",
    type: "",
    transmission: "Số sàn",
    odo: "35.000 km",
    image:
      "/images/cars/vios-e-so-san-2022/z7460487355239_3f028c6449381ae2a9cf103ae3bda9a6.jpg",
  },
  {
    id: 30,
    name: "Mitsubishi Outlander 2022 (Premium 2.0)",
    year: 2022,
    price: "705 Triệu Đồng",
    fuel: "Xăng",
    status: "Đã sử dụng",
    location: "Hồ Chí Minh",
    domestic: "Lắp ráp tại Việt Nam",
    type: "SUV",
    transmission: "Số tự động",
    engine: "2.0L",
    odo: "82.000 km",
    image:
      "/images/cars/mitsubitsi-oulander-2022-at/a.jpg",
  },
  {
    id: 31,
    name: "Mazda CX-5 2016 (2.5G)",
    year: 2016,
    price: "475,000,000 VND",
    fuel: "Xăng",
    status: "Đã sử dụng",
    location: "",
    domestic: "Lắp ráp tại Việt Nam",
    type: "SUV",
    transmission: "Số tự động",
    odo: "138.000 km",
    image: "/images/cars/cx5-2016-2.5g/z7471661007881_f9283b2da4f5be633c156a943dd0c829.jpg",
  },
  {
    id: 32,
    name: "Mercedes-Benz GLC 300 V1 2021 (Full Option)",
    year: 2021,
    price: "1,499,000,000 VND",
    fuel: "Xăng",
    status: "Đã sử dụng",
    location: "",
    domestic: "Lắp ráp tại Việt Nam",
    type: "SUV",
    transmission: "Số tự động",
    odo: "65.000 km",
    image: "/images/cars/mercedes-glc-300-v1-2021/z7471660208659_a5fb5713246f1e42b916b7a6803118b5.jpg",
  },
  {
    id: 33,
    name: "Ford Everest 2009",
    year: 2009,
    price: "335,000,000 VND",
    fuel: "Dầu",
    status: "Đã sử dụng",
    location: "",
    domestic: "Lắp ráp tại Việt Nam",
    type: "",
    transmission: "Số tự động",
    odo: "137.000 km",
    image:
      "/images/cars/ford-everest-2009/z7476297328648_8487fe2598ca100c757480f668f0850f.jpg",
  },
  {
    id: 34,
    name: "Kia Carnival 2009",
    year: 2009,
    price: "208,000,000 VND",
    fuel: "Xăng",
    status: "Đã sử dụng",
    location: "",
    domestic: "Lắp ráp tại Việt Nam",
    type: "",
    transmission: "Số tự động",
    odo: "122.000 km",
    image: "/images/cars/carnival-2009/z7476442184338_cf76b3e2e1ad686e608d79af8b326f4f.jpg",
  },
];

export { cars };

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="mb-10">
            <h1 className="text-4xl font-black text-gray-900 uppercase tracking-tight mb-2">
              Danh Sách Xe
            </h1>
            <p className="text-gray-600 font-medium">
              Tìm chiếc xe phù hợp với bạn từ kho xe lớn nhất
            </p>
          </div>

          {/* Car Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cars.map((car) => (
              <Link key={car.id} href={`/products/${car.id}`}>
                <Card className="group overflow-hidden bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full cursor-pointer">
                  {/* Car Image Container */}
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <img
                      src={car.image || "/placeholder.svg"}
                      alt={car.name}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                  </div>

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

                    {/* Specs Grid */}
                    <div className="grid grid-cols-3 gap-y-3 gap-x-2 mb-6">
                      <div className="flex flex-col items-center gap-1">
                        <Fuel className="w-4 h-4 text-blue-600 flex-shrink-0" />
                        <span className="text-xs font-medium text-gray-600">
                          {car.fuel}
                        </span>
                      </div>

                      <div className="flex flex-col items-center gap-1">
                        <History className="w-4 h-4 text-blue-600 flex-shrink-0" />
                        <span className="text-xs font-medium text-gray-600">
                          {car.status}
                        </span>
                      </div>

                      <div className="flex flex-col items-center gap-1">
                        <MapPin className="w-4 h-4 text-blue-600 flex-shrink-0" />
                        <span className="text-xs font-medium text-gray-600 truncate">
                          {car.location}
                        </span>
                      </div>

                      <div className="flex flex-col items-center gap-1">
                        <Globe className="w-4 h-4 text-blue-600 flex-shrink-0" />
                        <span className="text-xs font-medium text-gray-600">
                          {car.domestic}
                        </span>
                      </div>

                      <div className="flex flex-col items-center gap-1">
                        <Gauge className="w-4 h-4 text-blue-600 flex-shrink-0" />
                        <span className="text-xs font-medium text-gray-600">
                          {car.type}
                        </span>
                      </div>

                      <div className="flex flex-col items-center gap-1">
                        <Settings className="w-4 h-4 text-blue-600 flex-shrink-0" />
                        <span className="text-xs font-medium text-gray-600">
                          {car.transmission}
                        </span>
                      </div>
                    </div>

                    {/* View Details Button */}
                    <div className="mt-auto pt-2">
                      <button className="w-full cursor-pointer py-3 bg-gray-100 hover:bg-gray-200 rounded text-red-600 font-bold text-sm uppercase transition-colors flex items-center justify-center gap-1 group/btn">
                        Xem Chi Tiết
                        <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
