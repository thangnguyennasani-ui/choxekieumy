"use client";

import type React from "react";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Fuel,
  MapPin,
  Gauge,
  Settings,
  History,
  Globe,
  Phone,
  Mail,
  ChevronLeft,
  ChevronRight,
  X,
  ZoomIn,
} from "lucide-react";

// Import cars data from products page
import { cars } from "../page";

// Helper function to get all images for a car based on folder name
function getAllImagesForCar(folderName: string, baseImage: string): string[] {
  // Extract the base path from the image
  const basePath = `/images/cars/${folderName}/`;

  // For now, we'll use a pattern-based approach
  // In production, you might want to fetch this from an API or use a static list
  // This is a simplified version - you can expand it with actual image lists

  // Get the first image filename from baseImage
  const firstImageName = baseImage.split("/").pop() || "";

  // Return the base image for now - in production, you'd have a full list
  // For demonstration, we'll create a pattern that works with the actual files
  return [baseImage];
}

// Map car ID to folder name
const carFolderMap: Record<number, string> = {
  1: "ford-transit-2024",
  2: "fortuner-g-2014",
  3: "sedona-2018",
  4: "isuzu-mux-2022",
  5: "fortuner-2021",
  6: "xpander-2019",
  7: "xpander-cross-2020",
  8: "mitsubitsi-xpander-cross-2021",
  9: "suzuki-ertiga-sport-2020",
  10: "xpander-2022-premium",
  11: "toyota-innova-2018-g-at",
  12: "up-deeta-fortuner-2016",
  13: "innova-2019",
  14: "ford-everest-2010",
  15: "toyota-hilux-2019",
  16: "porsche-panamera-4s-2009",
  17: "hyundai-accent-ath-2018",
  18: "mazda3-2018-1.5-at",
  19: "cx5-2016-2.5",
  20: "mazda-cx5-2013-20.0",
  21: "mercedes-smart-roadster-2003",
  22: "sedona-2019",
  23: "sedona-2016",
  24: "innova-v-2010",
  25: "mercedes-c200-2012",
  26: "bmw-x1-2010",
  27: "chevrolet-trailblazer-2018",
  28: "fortuner-v-2014",
  29: "fotuner-2011-at",
  30: "honda-city-top-2020-at",
  31: "ranger-2018-at",
  32: "vios-g-2019",
};

// Pre-defined image lists for each car (based on actual files)
const carImagesMap: Record<number, string[]> = {
  1: [
    "/images/cars/ford-transit-2024/z7355203076348_5c487b965a59a4ad8dc0f0004517c701.jpg",
    "/images/cars/ford-transit-2024/z7355203080472_a2e10a17ae8962a6c438f10724283dfb.jpg",
    "/images/cars/ford-transit-2024/z7355203082439_ef0a0ecba0f44c02e9698fd93422f40e.jpg",
    "/images/cars/ford-transit-2024/z7355203093953_cc65ecc4eaeec380f03325a226ac746b.jpg",
    "/images/cars/ford-transit-2024/z7355203094167_3789348b2a77d7f239fc5db4e172005b.jpg",
    "/images/cars/ford-transit-2024/z7355203108073_41fb940944f541372bfa5e591cb37cad.jpg",
    "/images/cars/ford-transit-2024/z7355203108510_925e97c1452fcd135886306c57c8ba29.jpg",
    "/images/cars/ford-transit-2024/z7355203114314_01fc9d22c0eda043719a9f13e22b77a4.jpg",
    "/images/cars/ford-transit-2024/z7355203124277_5571ff7448ac36c6458945f65ed5b742.jpg",
    "/images/cars/ford-transit-2024/z7355203132346_ba1412b997f301259b1538f1a3442f44.jpg",
    "/images/cars/ford-transit-2024/z7355203139332_8c9a18c5a2d83e8fa39e06f9e0a25c0f.jpg",
    "/images/cars/ford-transit-2024/z7355203141482_31817b611cf138feeb9432c25283fc9e.jpg",
    "/images/cars/ford-transit-2024/z7355203146842_446a586f0e520aa4462d8ef6c99b0826.jpg",
    "/images/cars/ford-transit-2024/z7355203151588_d3022725671b19a52e6badb91fe40948.jpg",
    "/images/cars/ford-transit-2024/z7355203154015_07dc2102dc28bc9473d128d6c72bc5ab.jpg",
    "/images/cars/ford-transit-2024/z7355203157949_14f5f4ae9ab5b2994fc66d14d24e3e7a.jpg",
    "/images/cars/ford-transit-2024/z7355203165897_7f2cf502d00e591170d2a111dbe745af.jpg",
    "/images/cars/ford-transit-2024/z7355203177256_599c39158757fc2f306f584ead9eb4ed.jpg",
    "/images/cars/ford-transit-2024/z7355203177493_9b2cb17a94bdc7eb576b75f7727fa2fc.jpg",
  ],
  2: [
    "/images/cars/fortuner-g-2014/z7355203969680_699057bdea05a831ccbe67125ceaec3a.jpg",
    "/images/cars/fortuner-g-2014/z7355203976172_6f4fa5a2acb721fd877d25f40ef70f36.jpg",
    "/images/cars/fortuner-g-2014/z7355203985722_4245a21520bb8e607dc74a8d387eec6d.jpg",
    "/images/cars/fortuner-g-2014/z7355203988173_b7bd3f1a6e6f501c78f3387f10008823.jpg",
    "/images/cars/fortuner-g-2014/z7355203995306_843d6d6ed11abb75de8b19cc66d7d884.jpg",
    "/images/cars/fortuner-g-2014/z7355204007610_5bbb3bb79d21b86a73c0202c1722a890.jpg",
    "/images/cars/fortuner-g-2014/z7355204007832_c802e91e792581e004daa73df7053524.jpg",
    "/images/cars/fortuner-g-2014/z7355204011509_88ff1867001cc5ef4d79efc1f9e72971.jpg",
    "/images/cars/fortuner-g-2014/z7355204018826_da34805af83e986bf8fb1481b40b3b50.jpg",
    "/images/cars/fortuner-g-2014/z7355204027357_f857e6b68a09081b1d2af06f203a7ab8.jpg",
    "/images/cars/fortuner-g-2014/z7355204036039_755d283c1046364a910109ad8cdc6ba3.jpg",
    "/images/cars/fortuner-g-2014/z7355204039513_84100b41a8ef41dd2406f9b36ab89929.jpg",
    "/images/cars/fortuner-g-2014/z7355204039743_0599bd975e37660468e61597385072a8.jpg",
    "/images/cars/fortuner-g-2014/z7355204047156_91b9345fb4f05dbbdb6e6bb055f1d2a7.jpg",
    "/images/cars/fortuner-g-2014/z7355204060171_36fe56d685fc1fc6f545b41f2d8c962a.jpg",
    "/images/cars/fortuner-g-2014/z7355204062199_24233c893c1d0d9ba1087615346fd96e.jpg",
    "/images/cars/fortuner-g-2014/z7355204068757_4bad9f3784406e5b836730b588ea8972.jpg",
    "/images/cars/fortuner-g-2014/z7355204071347_3b979f2c716f7635a866b14713b03430.jpg",
    "/images/cars/fortuner-g-2014/z7355204074426_b75e2c95ef88738392b3675963e86489.jpg",
    "/images/cars/fortuner-g-2014/z7355204082340_b47ed9f9caf70a015738d0254d0db202.jpg",
    "/images/cars/fortuner-g-2014/z7355204087009_ed7f6d01c0ca92549a425d38f0dd4c62.jpg",
    "/images/cars/fortuner-g-2014/z7355204096878_0a8bf0f21aed417754c35fd11debf381.jpg",
    "/images/cars/fortuner-g-2014/z7355204099119_42bc306e9e08295cbb665e4d66c28565.jpg",
    "/images/cars/fortuner-g-2014/z7355204114809_7cab4af23fb22f2cd0e3619df97e8e88.jpg",
  ],
  3: [
    "/images/cars/sedona-2018/z7355205359095_99216fd3ee059cea9a843785f071cfa3.jpg",
    "/images/cars/sedona-2018/z7355205359322_c1eb48e647fa09d5abd4a0e8e49f13dd.jpg",
    "/images/cars/sedona-2018/z7355205367564_ed9136343c73d512bbe5be2f7c927023.jpg",
    "/images/cars/sedona-2018/z7355205371462_a5a70f6e1607306093eea9c57944418d.jpg",
    "/images/cars/sedona-2018/z7355205379127_50f66c51a5268e524bf80db04c2b078e.jpg",
    "/images/cars/sedona-2018/z7355205389101_42caf397ea7719d4c97c701257114cda.jpg",
    "/images/cars/sedona-2018/z7355205389339_9b78f478430b0c4c13e52b4753ce3252.jpg",
    "/images/cars/sedona-2018/z7355205393814_288fac41b718d353baf54982a077d77d.jpg",
    "/images/cars/sedona-2018/z7355205403973_38028c34a7fced15b7117e3aae3e1a5a.jpg",
    "/images/cars/sedona-2018/z7355205410376_acfebe458ca38988550202c45b5a26fc.jpg",
    "/images/cars/sedona-2018/z7355205411048_64d86407237d37f0e03f564f0f202629.jpg",
    "/images/cars/sedona-2018/z7355205421859_2bf2537c11f415c823d787d38a49b79b.jpg",
    "/images/cars/sedona-2018/z7355205422839_aa8b0b304856547fecf114f193c904eb.jpg",
    "/images/cars/sedona-2018/z7355205436730_12a987b6be3a92f44656680fbe0bce69.jpg",
    "/images/cars/sedona-2018/z7355205440248_bb9bfa14266363c6962b72a953bbcb12.jpg",
    "/images/cars/sedona-2018/z7355205447848_4df5bd7c2382968bd49582eba68b0839.jpg",
    "/images/cars/sedona-2018/z7355205448072_70b23031ac21f6be551ce08060ab848b.jpg",
    "/images/cars/sedona-2018/z7355205453936_a648e45986d8a053eb3c521492ca7eae.jpg",
    "/images/cars/sedona-2018/z7355205457680_5c8e855b1ab308a30742d85e2ff6f8d7.jpg",
  ],
  4: [
    "/images/cars/isuzu-mux-2022/z7355205359095_99216fd3ee059cea9a843785f071cfa3.jpg",
    "/images/cars/isuzu-mux-2022/z7355205359322_c1eb48e647fa09d5abd4a0e8e49f13dd.jpg",
    "/images/cars/isuzu-mux-2022/z7355205367564_ed9136343c73d512bbe5be2f7c927023.jpg",
    "/images/cars/isuzu-mux-2022/z7355205371462_a5a70f6e1607306093eea9c57944418d.jpg",
    "/images/cars/isuzu-mux-2022/z7355205379127_50f66c51a5268e524bf80db04c2b078e.jpg",
    "/images/cars/isuzu-mux-2022/z7355205389101_42caf397ea7719d4c97c701257114cda.jpg",
    "/images/cars/isuzu-mux-2022/z7355205389339_9b78f478430b0c4c13e52b4753ce3252.jpg",
    "/images/cars/isuzu-mux-2022/z7355205393814_288fac41b718d353baf54982a077d77d.jpg",
    "/images/cars/isuzu-mux-2022/z7355205403973_38028c34a7fced15b7117e3aae3e1a5a.jpg",
    "/images/cars/isuzu-mux-2022/z7355205410376_acfebe458ca38988550202c45b5a26fc.jpg",
    "/images/cars/isuzu-mux-2022/z7355205411048_64d86407237d37f0e03f564f0f202629.jpg",
    "/images/cars/isuzu-mux-2022/z7355205421859_2bf2537c11f415c823d787d38a49b79b.jpg",
    "/images/cars/isuzu-mux-2022/z7355205422839_aa8b0b304856547fecf114f193c904eb.jpg",
    "/images/cars/isuzu-mux-2022/z7355205436730_12a987b6be3a92f44656680fbe0bce69.jpg",
    "/images/cars/isuzu-mux-2022/z7355205440248_bb9bfa14266363c6962b72a953bbcb12.jpg",
    "/images/cars/isuzu-mux-2022/z7355205447848_4df5bd7c2382968bd49582eba68b0839.jpg",
    "/images/cars/isuzu-mux-2022/z7355205448072_70b23031ac21f6be551ce08060ab848b.jpg",
    "/images/cars/isuzu-mux-2022/z7355205453936_a648e45986d8a053eb3c521492ca7eae.jpg",
    "/images/cars/isuzu-mux-2022/z7355205457680_5c8e855b1ab308a30742d85e2ff6f8d7.jpg",
  ],
  5: [
    "/images/cars/fortuner-2021/z7355205874506_70220a2db30d86a2a554ebc38a7591f5.jpg",
    "/images/cars/fortuner-2021/z7355205884445_282fd72bc71e65fb24c54c7ac18befce.jpg",
    "/images/cars/fortuner-2021/z7355205889598_d31d1eb3ef2b8af9cce742be0638a4d3.jpg",
    "/images/cars/fortuner-2021/z7355205895146_c127f66766904271453de0dbd20b9adc.jpg",
    "/images/cars/fortuner-2021/z7355205899568_df4fe60c84c28dd05ace490bc5d27b4d.jpg",
    "/images/cars/fortuner-2021/z7355205902682_b487c468f0f9237e297906bae4b4aa99.jpg",
    "/images/cars/fortuner-2021/z7355205907762_f904cf6cab8892cf39a2f368698b7183.jpg",
    "/images/cars/fortuner-2021/z7355205921409_4d500c42d505b42046a1ef4f001b65d5.jpg",
    "/images/cars/fortuner-2021/z7355205923539_f9c7983ed59f82e5cae4effaadfb2805.jpg",
    "/images/cars/fortuner-2021/z7355205930417_209dd260776c68d844e7b7316f3180b8.jpg",
    "/images/cars/fortuner-2021/z7355205934076_011a9aaaeae3acf30cf76edc023a6659.jpg",
    "/images/cars/fortuner-2021/z7355205935853_75a1b03f06d2a6bfd97f4851998e778d.jpg",
    "/images/cars/fortuner-2021/z7355205946943_07ac4224a1fe33a987551c889f19754d.jpg",
    "/images/cars/fortuner-2021/z7355205952389_9efa7f83444c6d96bf3543b4fcfbdc04.jpg",
    "/images/cars/fortuner-2021/z7355205955119_03700a0064b04d3afbc312276bb8569e.jpg",
    "/images/cars/fortuner-2021/z7355205959652_a5b8abcc2060bae6de7f21ad3fec2283.jpg",
    "/images/cars/fortuner-2021/z7355205971521_b1499f2b577a0d1149c27f8ea21bcb90.jpg",
    "/images/cars/fortuner-2021/z7355205972478_7c36ab7f94fb229f2493481147e099c4.jpg",
    "/images/cars/fortuner-2021/z7355205976129_2d1169c8dc7581d04a8e6534e25f215d.jpg",
    "/images/cars/fortuner-2021/z7355205980789_27de13b3568ecbfb1ce4a4f2931522ac.jpg",
    "/images/cars/fortuner-2021/z7355205991345_9427bf3fc3d1a66947a34106bfbd6132.jpg",
    "/images/cars/fortuner-2021/z7355205992101_b058e55a4bb140f048b50536e202b133.jpg",
  ],
  6: [
    "/images/cars/xpander-2019/z7355206371965_ce287c4a0f2b7652fde5f071255baee8.jpg",
    "/images/cars/xpander-2019/z7355206383911_9813eccf387f892b81159621503339ab.jpg",
    "/images/cars/xpander-2019/z7355206384138_466ac86dfc98fe8f548e87282e460fe4.jpg",
    "/images/cars/xpander-2019/z7355206395254_5a5071c325ccf3f4f7657f2a8a72f1d5.jpg",
    "/images/cars/xpander-2019/z7355206396665_6b509c75b19dfa57a73d94d92719f848.jpg",
    "/images/cars/xpander-2019/z7355206407026_91eab5c56c11c1ef89a1ff03a8e7dda5.jpg",
    "/images/cars/xpander-2019/z7355206408433_ab3fabab05018d0cc9918bc6d0734d99.jpg",
    "/images/cars/xpander-2019/z7355206414338_d399ae7ba9c2be2172a70ffac853ffd0.jpg",
    "/images/cars/xpander-2019/z7355206420043_2417f178aed2e711e8cb591a3ee290ed.jpg",
    "/images/cars/xpander-2019/z7355206421240_60eb919c748ae766393ea572d21eda8d.jpg",
    "/images/cars/xpander-2019/z7355206430739_6c9e75b1c49fdfd6204861ffe5f0b468.jpg",
    "/images/cars/xpander-2019/z7355206435761_8ffd43b2a1c30bf0d1b81f8425579614.jpg",
    "/images/cars/xpander-2019/z7355206441390_a77c20597ee467de6433560a89150d1c.jpg",
    "/images/cars/xpander-2019/z7355206453309_3a92ffa30f23c98f182a2b97a28acf05.jpg",
    "/images/cars/xpander-2019/z7355206462828_3981d0b1535b409caa0333ff7ceb5f91.jpg",
    "/images/cars/xpander-2019/z7355206465031_e3a21bf28bfd0c3d4feb9e085567efa1.jpg",
    "/images/cars/xpander-2019/z7355206471791_d620278287bbbb1061314abec2bf9ee9.jpg",
    "/images/cars/xpander-2019/z7355206478707_31d86adc337f800baef24a29178472e0.jpg",
    "/images/cars/xpander-2019/z7355206479611_67033e1fa9c59b6ab5381f25c9e90de3.jpg",
  ],
  7: [
    "/images/cars/xpander-cross-2020/z7355206838301_5f1996f18050f30250a04e833270b9c9.jpg",
    "/images/cars/xpander-cross-2020/z7355206845954_52be9ffce7f09554b77e63e26b81827c.jpg",
    "/images/cars/xpander-cross-2020/z7355206851823_959e541fd6da7768509f04a275d8875b.jpg",
    "/images/cars/xpander-cross-2020/z7355206853324_ffb39932a783f4c8ee92b97a73c4e383.jpg",
    "/images/cars/xpander-cross-2020/z7355206856527_1daf96d7179eff624d3ae427130fce31.jpg",
    "/images/cars/xpander-cross-2020/z7355206870394_6b26092d27e47587b22a11d7ad253006.jpg",
    "/images/cars/xpander-cross-2020/z7355206871220_670a6f0f0bd87df3746ac9a6a5998019.jpg",
    "/images/cars/xpander-cross-2020/z7355206883137_dfe3801b931ca20c510f197f7bbcad76.jpg",
    "/images/cars/xpander-cross-2020/z7355206885824_dc1b02d278258d0a245c397b7f770dd9.jpg",
    "/images/cars/xpander-cross-2020/z7355206895886_6b82f1b0990b5923bc2fd23be306aaab.jpg",
    "/images/cars/xpander-cross-2020/z7355206897666_7a6cb6d99f10e2fa0e03ae27b28764b8.jpg",
    "/images/cars/xpander-cross-2020/z7355206908125_7213ef65e6224262dca42db1e0946d19.jpg",
    "/images/cars/xpander-cross-2020/z7355206908435_9786df24332cf901d2d18280af166c8b.jpg",
    "/images/cars/xpander-cross-2020/z7355206918547_086a4d612ed175c97a6ce9e29ae3f050.jpg",
    "/images/cars/xpander-cross-2020/z7355206920837_f58190daec9ea14cab9a92614d23acc9.jpg",
    "/images/cars/xpander-cross-2020/z7355206929110_cb5890729113d2ba94534195c3b3a031.jpg",
    "/images/cars/xpander-cross-2020/z7355206930616_c0c05cf63a8cdc9c5384e79a71cd6d5e.jpg",
    "/images/cars/xpander-cross-2020/z7355206940558_7b533c5536cfe8264b0e6929468f3145.jpg",
    "/images/cars/xpander-cross-2020/z7355206945657_5ba6919dfaa279bb5d7396f968561394.jpg",
    "/images/cars/xpander-cross-2020/z7355206949552_800eae2afd46475fe7de4c5f8dec4d9c.jpg",
    "/images/cars/xpander-cross-2020/z7355206954339_9f58e9cad541ae26567ef71206a45aaf.jpg",
    "/images/cars/xpander-cross-2020/z7355206961039_dace58245a35cd14f0d16d1dd8aa7217.jpg",
    "/images/cars/xpander-cross-2020/z7355206972448_1b1a910e159c32021640ccd3bf47bb66.jpg",
    "/images/cars/xpander-cross-2020/z7355206972689_d238b0f64ed306c71c03ebeb4123b4e4.jpg",
    "/images/cars/xpander-cross-2020/z7355206981667_4ef214c2bfcfcd85f0d77ce0ae075e48.jpg",
    "/images/cars/xpander-cross-2020/z7355206983866_ae1b0cf7f553e0383fad5c6d4034a523.jpg",
    "/images/cars/xpander-cross-2020/z7355206996541_42ffb2838b16ffd42f6f53bc7d8ef9eb.jpg",
  ],
  8: [
    "/images/cars/mitsubitsi-xpander-cross-2021/z7355207396953_7f20bfe379ec222add870c72ffad4f75.jpg",
    "/images/cars/mitsubitsi-xpander-cross-2021/z7355207401704_bd406e799130645611ecdd877a32aed2.jpg",
    "/images/cars/mitsubitsi-xpander-cross-2021/z7355207406519_08701fb4b452d7d82f493d00e6d53734.jpg",
    "/images/cars/mitsubitsi-xpander-cross-2021/z7355207410215_972ace2114fe9e1df2add6720e43a4a1.jpg",
    "/images/cars/mitsubitsi-xpander-cross-2021/z7355207418477_41800dcc7afab8f03881d5bfde55c460.jpg",
    "/images/cars/mitsubitsi-xpander-cross-2021/z7355207419797_2afbfab7212fd542d50c7dcfb5f98542.jpg",
    "/images/cars/mitsubitsi-xpander-cross-2021/z7355207431748_25b8fb209f9607579e4ec15001023fc3.jpg",
    "/images/cars/mitsubitsi-xpander-cross-2021/z7355207431988_5cc087ce70c958ba1c1fe72b581c8507.jpg",
    "/images/cars/mitsubitsi-xpander-cross-2021/z7355207437974_bc49aa2d79e0a4b44320bc23c30f6485.jpg",
    "/images/cars/mitsubitsi-xpander-cross-2021/z7355207443508_26c57aefed5e3246950c01cf61aef1c1.jpg",
    "/images/cars/mitsubitsi-xpander-cross-2021/z7355207452966_aa5d40f5f8050423cc90f93ee25ba0e1.jpg",
    "/images/cars/mitsubitsi-xpander-cross-2021/z7355207457827_e5168788a9c844b931615c30abfb994e.jpg",
    "/images/cars/mitsubitsi-xpander-cross-2021/z7355207458487_4800f36f48c3525b78b3b8e8945096de.jpg",
    "/images/cars/mitsubitsi-xpander-cross-2021/z7355207469762_c899b7f129948504a8a99f13c9c19d32.jpg",
    "/images/cars/mitsubitsi-xpander-cross-2021/z7355207479114_6f4d3b38ca6b42e828a32a52b9d9b544.jpg",
    "/images/cars/mitsubitsi-xpander-cross-2021/z7355207479370_9e54f2e0887f9ce966602d389b326254.jpg",
    "/images/cars/mitsubitsi-xpander-cross-2021/z7355207489130_c23659b737863e02e1767fa4a1336887.jpg",
    "/images/cars/mitsubitsi-xpander-cross-2021/z7355207497372_b2cde462cb56fc87825c136b9d25be43.jpg",
    "/images/cars/mitsubitsi-xpander-cross-2021/z7355207497604_849feead601d1aab7a2b1d122718a020.jpg",
    "/images/cars/mitsubitsi-xpander-cross-2021/z7355207509968_4bdba084e99de6bf1584285bc41006c1.jpg",
    "/images/cars/mitsubitsi-xpander-cross-2021/z7355207514861_fb7e5dd7ce3766b4571beaaf6f972a9f.jpg",
    "/images/cars/mitsubitsi-xpander-cross-2021/z7355207517239_634b9be8e65711b93fd614442ef27abe.jpg",
    "/images/cars/mitsubitsi-xpander-cross-2021/z7355207519359_61508b170275cfe1f5815b7c188bbd9c.jpg",
    "/images/cars/mitsubitsi-xpander-cross-2021/z7355207535720_fdd0b3f9ecefe411d91f2128d6fe1e65.jpg",
    "/images/cars/mitsubitsi-xpander-cross-2021/z7355207539194_e2a1185871e534d4b382400b0a01edfb.jpg",
    "/images/cars/mitsubitsi-xpander-cross-2021/z7355207540550_0c2ba028a48fd3818311ae3ee9a19375.jpg",
  ],
  9: [
    "/images/cars/suzuki-ertiga-sport-2020/z7355207991751_90dfc629cf479af1c3f3933ee9d65619.jpg",
    "/images/cars/suzuki-ertiga-sport-2020/z7355208000198_577338363c3f31a88b3def6886ec455e.jpg",
    "/images/cars/suzuki-ertiga-sport-2020/z7355208004825_8e60f170db18a3c7cca1f8634a2291ab.jpg",
    "/images/cars/suzuki-ertiga-sport-2020/z7355208006659_d00d3a2f39fc8f98fde9d80b01709c6e.jpg",
    "/images/cars/suzuki-ertiga-sport-2020/z7355208018697_24b7a4fc6af57d9ef1276d50a88d88a6.jpg",
    "/images/cars/suzuki-ertiga-sport-2020/z7355208020031_68c7f9656ddd9bdea457f1b1ea0163e3.jpg",
    "/images/cars/suzuki-ertiga-sport-2020/z7355208020254_a07a1e4d638e63e945be279075c60012.jpg",
    "/images/cars/suzuki-ertiga-sport-2020/z7355208024545_80d7a2b176722e96d5fa218067086f69.jpg",
    "/images/cars/suzuki-ertiga-sport-2020/z7355208037592_b732ea35fdb8bbf0a2267cda5ed4d6e2.jpg",
    "/images/cars/suzuki-ertiga-sport-2020/z7355208043644_a90f59985cddc866e1da3e62ba6bce5c.jpg",
    "/images/cars/suzuki-ertiga-sport-2020/z7355208052212_2afc6dfaa4a6504d80807c83b34d8b08.jpg",
    "/images/cars/suzuki-ertiga-sport-2020/z7355208060049_676026b62f1558878cbc5a2b9af37fd9.jpg",
    "/images/cars/suzuki-ertiga-sport-2020/z7355208060337_2b498c60b90b169925b22b75fe803c1c.jpg",
    "/images/cars/suzuki-ertiga-sport-2020/z7355208063842_722871e78663f97427575efa93910c4b.jpg",
  ],
  10: [
    "/images/cars/xpander-2022-premium/z7355208479246_bc65fb76bfd4f5b7d32efc379e943127.jpg",
    "/images/cars/xpander-2022-premium/z7355208485930_f840175ba39d584e17e4a33cfba29bd4.jpg",
    "/images/cars/xpander-2022-premium/z7355208490140_27c545c561bc3e5591e30c07e9cf37df.jpg",
    "/images/cars/xpander-2022-premium/z7355208492943_5d77637f67cf92e4688f45fbc24b752d.jpg",
    "/images/cars/xpander-2022-premium/z7355208505727_3012425894ed42c06f7f6e05f8061f06.jpg",
    "/images/cars/xpander-2022-premium/z7355208513276_618debc322d6a6bb0671967ee3626da1.jpg",
    "/images/cars/xpander-2022-premium/z7355208518386_79a497217a6991c1c032256ab24edb1c.jpg",
    "/images/cars/xpander-2022-premium/z7355208518608_288df7a9b7d814dd663a3078a932dd59.jpg",
    "/images/cars/xpander-2022-premium/z7355208523895_c60d5aed9aa0f3011f301a9ec5e22a14.jpg",
    "/images/cars/xpander-2022-premium/z7355208531592_8dec31f2d2748f2903c44b53b90f5c6c.jpg",
    "/images/cars/xpander-2022-premium/z7355208543155_9314509a071113c1767b682151ce7bcc.jpg",
    "/images/cars/xpander-2022-premium/z7355208543930_41b70d81e5764154ad23cafea4a2006c.jpg",
    "/images/cars/xpander-2022-premium/z7355208543995_095a8f12bcd1c3365f3a101525520d57.jpg",
  ],
  11: [
    "/images/cars/toyota-innova-2018-g-at/z7355208947100_4a29ed56c085c70f9a8cda7336853027.jpg",
    "/images/cars/toyota-innova-2018-g-at/z7355208957642_1dbfef3f6bc2038e0181288b8db6143e.jpg",
    "/images/cars/toyota-innova-2018-g-at/z7355208964830_3c6f2168aec372c78f4807e58c5b877d.jpg",
    "/images/cars/toyota-innova-2018-g-at/z7355208965063_5862edf2e28b343c01d749c7f8ab1b17.jpg",
    "/images/cars/toyota-innova-2018-g-at/z7355208977286_17c29dc5114524b6ab802d5e9d7df3f4.jpg",
    "/images/cars/toyota-innova-2018-g-at/z7355208979013_ba7e78a232a16c9d20de7a3d1f12c355.jpg",
    "/images/cars/toyota-innova-2018-g-at/z7355208983324_d2eda592aef7dd9c72f3a8f188cb82a5.jpg",
    "/images/cars/toyota-innova-2018-g-at/z7355208989999_0d79049929e1ee2eb20f5e7f0ca37a8c.jpg",
    "/images/cars/toyota-innova-2018-g-at/z7355208990688_f3cbba10970d9686097946f5a43512a9.jpg",
    "/images/cars/toyota-innova-2018-g-at/z7355208999449_f7f91b308ff0664066ab8629646b3c1e.jpg",
    "/images/cars/toyota-innova-2018-g-at/z7355209002999_5ddea972c8afbeadbfa59a2cb6539bcb.jpg",
    "/images/cars/toyota-innova-2018-g-at/z7355209015911_4a2db87384bd000931ec8264f5d4aa85.jpg",
    "/images/cars/toyota-innova-2018-g-at/z7355209018377_00d1b786b5306e02fe436c45380ff893.jpg",
    "/images/cars/toyota-innova-2018-g-at/z7355209028261_6e8aa2d1a4e1e15e797acfb92723f2ad.jpg",
    "/images/cars/toyota-innova-2018-g-at/z7355209036873_100920f61cae18f405912a1031f0845d.jpg",
    "/images/cars/toyota-innova-2018-g-at/z7355209040878_af3ccd3b72235ff99ae7e4e3549d839b.jpg",
    "/images/cars/toyota-innova-2018-g-at/z7355209050054_db1a9756b67924b7ceb6f977253a1c4d.jpg",
    "/images/cars/toyota-innova-2018-g-at/z7355209053895_4319023066e27285f5f3c48d8ad913f1.jpg",
    "/images/cars/toyota-innova-2018-g-at/z7355209054140_ddb4bfdaddea8530d0fd25979ffc1049.jpg",
    "/images/cars/toyota-innova-2018-g-at/z7355209063480_e95fa95556a698bacba74983171071e0.jpg",
    "/images/cars/toyota-innova-2018-g-at/z7355209068803_5d163864da0fb7c3b3ad240a0ffd2379.jpg",
    "/images/cars/toyota-innova-2018-g-at/z7355209075431_addaaff6ce6ff839395c49c4282a8346.jpg",
    "/images/cars/toyota-innova-2018-g-at/z7355209078537_42458a1756ab0e22ed8afce2e011b663.jpg",
    "/images/cars/toyota-innova-2018-g-at/z7355209080673_097c59b91bfdc0b8011cad5bbbf04ae3.jpg",
    "/images/cars/toyota-innova-2018-g-at/z7355209095055_1a5210094228af6d4d51635fefa45c52.jpg",
    "/images/cars/toyota-innova-2018-g-at/z7355209099634_780d8547ee4b8762edfc9cf51353dea3.jpg",
  ],
  12: [
    "/images/cars/up-deeta-fortuner-2016/z7355209423772_4c2ae6ebcf9edcfbd025490d9e33ddca.jpg",
    "/images/cars/up-deeta-fortuner-2016/z7355209428828_939006a0c8a2e4aef719a192304b826b.jpg",
    "/images/cars/up-deeta-fortuner-2016/z7355209434301_1e467f32863b53c5b39036a869b4746e.jpg",
    "/images/cars/up-deeta-fortuner-2016/z7355209444538_38f43fbae1d00511562b678d3e8a0962.jpg",
    "/images/cars/up-deeta-fortuner-2016/z7355209450267_59a4897888b6da7c41f49696a8df3ac1.jpg",
    "/images/cars/up-deeta-fortuner-2016/z7355209451048_45941f2d107f4653c065e6796018ed17.jpg",
    "/images/cars/up-deeta-fortuner-2016/z7355209462078_6884fb73dd9c49aaa5c9fdce563f98ac.jpg",
    "/images/cars/up-deeta-fortuner-2016/z7355209464441_7e54c9d2348ee711b361a480cc11cef9.jpg",
    "/images/cars/up-deeta-fortuner-2016/z7355209466060_fbfd0d189994225a0590930c14217127.jpg",
    "/images/cars/up-deeta-fortuner-2016/z7355209476735_f29c82f841b44e6fb3957504146ccfea.jpg",
    "/images/cars/up-deeta-fortuner-2016/z7355209480356_905213e4d0aa61490f2d13fe5ce635b4.jpg",
    "/images/cars/up-deeta-fortuner-2016/z7355209484695_4f59bccfa2b9643bfe8dfbcb83727505.jpg",
    "/images/cars/up-deeta-fortuner-2016/z7355209496290_0ae6e0115d388451fa54ff8c692f206a.jpg",
    "/images/cars/up-deeta-fortuner-2016/z7355209497338_693dc7657ec13883eedf86854fcbfb84.jpg",
    "/images/cars/up-deeta-fortuner-2016/z7355209503387_e568488f28655385bdd55dcd45738cc0.jpg",
    "/images/cars/up-deeta-fortuner-2016/z7355209509526_ba304853877dc6bc620710642948a81c.jpg",
    "/images/cars/up-deeta-fortuner-2016/z7355209524140_db6bc3f842c7e141333c17abdec29c4f.jpg",
    "/images/cars/up-deeta-fortuner-2016/z7355209532252_e6f4470d583e5aba35baf9423ba18f01.jpg",
    "/images/cars/up-deeta-fortuner-2016/z7355209535526_b1e00d178008651259fc3e81cdef31b0.jpg",
  ],
  13: [
    "/images/cars/innova-2019/z7355209965956_395172494b41903e7cea5c87779f6d72.jpg",
    "/images/cars/innova-2019/z7355209975844_f672015ad0132895da8ca8b4b569529f.jpg",
    "/images/cars/innova-2019/z7355209982477_0d536b1aad1d89b83c68fc3f13a673d7.jpg",
    "/images/cars/innova-2019/z7355209990126_fa339e3d259772cf497bbb34657b559d.jpg",
    "/images/cars/innova-2019/z7355209996024_44558b5837afd48ba63f917701673e67.jpg",
    "/images/cars/innova-2019/z7355210001084_92dabdd43111069ce380cf79ebfd9174.jpg",
    "/images/cars/innova-2019/z7355210004417_72ec5b1b9b09e0fa86e14af432864b72.jpg",
    "/images/cars/innova-2019/z7355210013920_ad206d9681ca3dc41b5672c20ed64e70.jpg",
    "/images/cars/innova-2019/z7355210014403_02aa37ec773792c8f71a4955c10c6c8c.jpg",
    "/images/cars/innova-2019/z7355210026899_1fc984aebd531dc10f4e4e3c0e033b66.jpg",
    "/images/cars/innova-2019/z7355210027147_ee54f7ffaafaefa340a1517d03408680.jpg",
    "/images/cars/innova-2019/z7355210036540_2d7140bda0d48d4f8acf76c44786553d.jpg",
    "/images/cars/innova-2019/z7355210040693_cefe65c6d91e34f679c356d09569775b.jpg",
  ],
  14: [
    "/images/cars/ford-everest-2010/z7355210465152_641f3b741a511cff67f1af03c3de4e5e.jpg",
    "/images/cars/ford-everest-2010/z7355210476037_3269d01c5c93ba6ce9b22b85d1c56bab.jpg",
    "/images/cars/ford-everest-2010/z7355210482862_cd5fceaeaf719acf8e60cc30c2615e30.jpg",
    "/images/cars/ford-everest-2010/z7355210484385_fd337758633b9bd0d8c0998d2af4d96a.jpg",
    "/images/cars/ford-everest-2010/z7355210490709_37615075faadda2ff1dc6398ffd308cd.jpg",
    "/images/cars/ford-everest-2010/z7355210502213_0f74cc7bce41558a81d752737bedf326.jpg",
    "/images/cars/ford-everest-2010/z7355210503425_9752789dd4c3139b2815db29d6e92588.jpg",
    "/images/cars/ford-everest-2010/z7355210508347_54a04d310f9cd4bcf9f6436b78289123.jpg",
    "/images/cars/ford-everest-2010/z7355210518416_82867fae340091c9303fe1134056045c.jpg",
    "/images/cars/ford-everest-2010/z7355210520351_658a5cc4d04d529ffcf1bf64868904c9.jpg",
    "/images/cars/ford-everest-2010/z7355210528244_c4d9c54d3140925b334b3ef9ef4c9c7c.jpg",
    "/images/cars/ford-everest-2010/z7355210529141_d0dc05c6ea1d888597a45d5e00611960.jpg",
    "/images/cars/ford-everest-2010/z7355210537746_37ead6c062f109b4ca49e65b0a2fe2e0.jpg",
    "/images/cars/ford-everest-2010/z7355210542056_afb649e1e4075dcf7c47df92998a7d18.jpg",
    "/images/cars/ford-everest-2010/z7355210555027_144293419c2330f1da78d6f640083c6a.jpg",
    "/images/cars/ford-everest-2010/z7355210556531_25cb12cc011da7afffa4a83c956f599b.jpg",
    "/images/cars/ford-everest-2010/z7355210563396_7417b495c296f0fc09ea89070001ccaf.jpg",
    "/images/cars/ford-everest-2010/z7355210568006_8b96402cdc8edd526e3adbfd98ce9627.jpg",
  ],
  15: [
    "/images/cars/toyota-hilux-2019/z7355210940388_09a75a5824a08d374e42a8b5d1a50ea7.jpg",
    "/images/cars/toyota-hilux-2019/z7355210948620_ac27df327618f94e94073a251017e5d3.jpg",
    "/images/cars/toyota-hilux-2019/z7355210956277_ea6acf722e3a62a1c79094131a0680eb.jpg",
    "/images/cars/toyota-hilux-2019/z7355210956519_5d29b5249045c3b178712fe435ead7a2.jpg",
    "/images/cars/toyota-hilux-2019/z7355210962941_0079c5aafdb578f698ec81b914d83028.jpg",
    "/images/cars/toyota-hilux-2019/z7355210977407_03c59b7b8a9d4be681d12cd26caaa80d.jpg",
    "/images/cars/toyota-hilux-2019/z7355210977825_9d10076a7fbcf74ba580f6aa9177c9ee.jpg",
    "/images/cars/toyota-hilux-2019/z7355210981862_5f4b7270c78b442e5eebbf15b78b7b96.jpg",
    "/images/cars/toyota-hilux-2019/z7355210996161_19139dd75ba7229414526ccb3733274e.jpg",
    "/images/cars/toyota-hilux-2019/z7355210996389_cff4e634bedd123ecde8d061aa45eef8.jpg",
    "/images/cars/toyota-hilux-2019/z7355211002519_ac73f37a82075425bd698c84eb0e8725.jpg",
    "/images/cars/toyota-hilux-2019/z7355211008166_83296c0230a48db0eced2247a63f6ec5.jpg",
    "/images/cars/toyota-hilux-2019/z7355211016081_739d23797f6b37ebb45b54d9d68c6f71.jpg",
    "/images/cars/toyota-hilux-2019/z7355211027055_d2f14c50b0a5c93054c4db5267af88ee.jpg",
  ],
  16: [
    "/images/cars/porsche-panamera-4s-2009/z7355211464480_f5718f7292c52352d869993f9e723002.jpg",
    "/images/cars/porsche-panamera-4s-2009/z7355211470052_903021cfb89adbbbefd1345d3babd56f.jpg",
    "/images/cars/porsche-panamera-4s-2009/z7355211470789_cf28c707036c489e30a6640b37deaf9d.jpg",
    "/images/cars/porsche-panamera-4s-2009/z7355211476236_8d0fc3391167cf11549d2d9ebef03b42.jpg",
    "/images/cars/porsche-panamera-4s-2009/z7355211484313_dd69bd048d98bdc36013521dc75276d8.jpg",
    "/images/cars/porsche-panamera-4s-2009/z7355211484495_d796add8c34309b3961b35131ee049da.jpg",
    "/images/cars/porsche-panamera-4s-2009/z7355211497829_835dd427e28710ec3e090bfb039ebc5a.jpg",
    "/images/cars/porsche-panamera-4s-2009/z7355211498571_e740259c573d54276294bd0693a22248.jpg",
    "/images/cars/porsche-panamera-4s-2009/z7355211512752_6a7b0bff2c39fa806d92257b634d1826.jpg",
    "/images/cars/porsche-panamera-4s-2009/z7355211514547_616b61264ef6bb1a191a84fad19ca032.jpg",
    "/images/cars/porsche-panamera-4s-2009/z7355211517214_63e392cd26af9470be662e5d58e91354.jpg",
    "/images/cars/porsche-panamera-4s-2009/z7355211522599_a7b64864bb116e2dedfb6b8147b45ca6.jpg",
    "/images/cars/porsche-panamera-4s-2009/z7355211534877_a37ae98145b65f719cd97c3efcd02b80.jpg",
    "/images/cars/porsche-panamera-4s-2009/z7355211541414_c31ba7e72c5bd8ba8423ed501a7d5b77.jpg",
    "/images/cars/porsche-panamera-4s-2009/z7355211543860_e3b56a12dce0c5fb0d15d9ac84fdd5ba.jpg",
    "/images/cars/porsche-panamera-4s-2009/z7355211553101_19d904a9427763fee2d06a7b7141be9f.jpg",
    "/images/cars/porsche-panamera-4s-2009/z7355211554206_8bb54e4ced3acd05f76635dc35712298.jpg",
    "/images/cars/porsche-panamera-4s-2009/z7355211562184_45a83ee2f1ed6639ca817a36a7fd2fd5.jpg",
    "/images/cars/porsche-panamera-4s-2009/z7355211572377_d1aa025db4af6c80b0dc7655b503c4de.jpg",
    "/images/cars/porsche-panamera-4s-2009/z7355211574304_ec47af95dce838693300b5cd58ad4584.jpg",
    "/images/cars/porsche-panamera-4s-2009/z7355211579145_bbb53f038dc00b778b7549caa18fe4c4.jpg",
    "/images/cars/porsche-panamera-4s-2009/z7355211593796_277b79c60adff8a769979c53404edbcd.jpg",
    "/images/cars/porsche-panamera-4s-2009/z7355211595346_380ac7503b9f9178d4a3a7c37302fbe7.jpg",
    "/images/cars/porsche-panamera-4s-2009/z7355211597757_2ff832fc423d2b6f3696b4b45a6db507.jpg",
    "/images/cars/porsche-panamera-4s-2009/z7355211605336_6ce01b07728f1785d65ca5f9468fdb69.jpg",
  ],
  17: [
    "/images/cars/hyundai-accent-ath-2018/z7355212228839_44740e72cf06dfa863214ed1790f8d48.jpg",
    "/images/cars/hyundai-accent-ath-2018/z7355212229075_abf6c5f55dd7879c0a73967ef32ba051.jpg",
    "/images/cars/hyundai-accent-ath-2018/z7355212240440_a965ee292755baf454956fcdc0a311d4.jpg",
    "/images/cars/hyundai-accent-ath-2018/z7355212243600_20a6381cd7811fdf89ae628f9d4c8d9c.jpg",
    "/images/cars/hyundai-accent-ath-2018/z7355212254825_86f8ad324960ea1859d14056c3367c25.jpg",
    "/images/cars/hyundai-accent-ath-2018/z7355212261703_f8fbc829081e855f15a6ba5dca272bf8.jpg",
    "/images/cars/hyundai-accent-ath-2018/z7355212266034_601fafbfdaf510d81354b6cf1f246538.jpg",
    "/images/cars/hyundai-accent-ath-2018/z7355212269537_108662988c43419a600915f38dc7a05d.jpg",
    "/images/cars/hyundai-accent-ath-2018/z7355212277209_748b9a865a8018a7a1775d842da1484d.jpg",
    "/images/cars/hyundai-accent-ath-2018/z7355212286737_fc0469a8536ebea462b5b07c00f6287d.jpg",
    "/images/cars/hyundai-accent-ath-2018/z7355212286959_5cd688df648fc20b6ca2a382eb552618.jpg",
    "/images/cars/hyundai-accent-ath-2018/z7355212299629_bfafe66ebbc8380a589a88de2429bc23.jpg",
    "/images/cars/hyundai-accent-ath-2018/z7355212303943_603787c2a214705c4aa52fb9a8afcb21.jpg",
    "/images/cars/hyundai-accent-ath-2018/z7355212307813_622a9ffbcdc47e4421e832c8f249f6e7.jpg",
    "/images/cars/hyundai-accent-ath-2018/z7355212311932_c05c1dc05c278c2a6d751c69eca47dce.jpg",
  ],
  18: [
    "/images/cars/mazda3-2018-1.5-at/z7355212785663_693116d5d2aa9e9455cd87abe23503db.jpg",
    "/images/cars/mazda3-2018-1.5-at/z7355212785899_a5e7c14ff31653ae210eaba45c66ea10.jpg",
    "/images/cars/mazda3-2018-1.5-at/z7355212796163_1c83205257d57272d60d9bceed574f39.jpg",
    "/images/cars/mazda3-2018-1.5-at/z7355212797778_d45c972c1f6ae1d68f95a64ec3ba09d0.jpg",
    "/images/cars/mazda3-2018-1.5-at/z7355212808227_993f6885cf57ffd7e856c7707a5fb2c6.jpg",
    "/images/cars/mazda3-2018-1.5-at/z7355212818443_a4c91428d8a29c8de4dc6b362f49dab4.jpg",
    "/images/cars/mazda3-2018-1.5-at/z7355212825399_7f259478b66affffe5b8515dc4b049c0.jpg",
    "/images/cars/mazda3-2018-1.5-at/z7355212825634_61533e0d265623618be0c690c5f39f17.jpg",
    "/images/cars/mazda3-2018-1.5-at/z7355212833602_b9db21d5098b0155a0a3dabe60ceeb4e.jpg",
    "/images/cars/mazda3-2018-1.5-at/z7355212840243_85a8bdad391a7ccca613ffa3ce797bca.jpg",
    "/images/cars/mazda3-2018-1.5-at/z7355212844767_2ec2140362b1bb8c5c10400b559ac11c.jpg",
    "/images/cars/mazda3-2018-1.5-at/z7355212845231_c949948dc5a4e50d0839b15b69ee2d64.jpg",
    "/images/cars/mazda3-2018-1.5-at/z7355212861249_175dbec01f3d4f8743e3777538565807.jpg",
    "/images/cars/mazda3-2018-1.5-at/z7355212865808_281ef267096d5581b76e3b2d70681695.jpg",
    "/images/cars/mazda3-2018-1.5-at/z7355212866754_a973e47a230bf4f93402a05f04963e9a.jpg",
    "/images/cars/mazda3-2018-1.5-at/z7355212874040_fa0689c87e606005f8d1697806711e10.jpg",
  ],
  19: [
    "/images/cars/cx5-2016-2.5/z7355213260964_91c55418a175b948cf6f033d905312e0.jpg",
    "/images/cars/cx5-2016-2.5/z7355213276933_f063e5898e89cb91c2395535682d7969.jpg",
    "/images/cars/cx5-2016-2.5/z7355213277167_5f11f318c8035f53e6a07923806308c8.jpg",
    "/images/cars/cx5-2016-2.5/z7355213284396_e0c62ffda42aaed09fff9d33e4e2a754.jpg",
    "/images/cars/cx5-2016-2.5/z7355213287369_d01eca59c21c0fecf6d2144d879e6cc5.jpg",
    "/images/cars/cx5-2016-2.5/z7355213290139_d13235f5e005657a4c3dcd2cfa5d1fd4.jpg",
    "/images/cars/cx5-2016-2.5/z7355213302862_a8d7f7453ee6fa0cd1d6a1528775a711.jpg",
    "/images/cars/cx5-2016-2.5/z7355213313171_927c0257c86b1e4ce73c22a314e7ea31.jpg",
    "/images/cars/cx5-2016-2.5/z7355213318568_75c738ac3bfb491f3fc04e2eb509e1d8.jpg",
    "/images/cars/cx5-2016-2.5/z7355213321665_3d335f191ddf257c2660a11f5178f693.jpg",
    "/images/cars/cx5-2016-2.5/z7355213325621_594cb1b76cae42f8d983131d71b8e61f.jpg",
    "/images/cars/cx5-2016-2.5/z7355213329545_ca8a044f406255b18c0889803ea7c21a.jpg",
    "/images/cars/cx5-2016-2.5/z7355213336459_de78acafe14057e5c012398584dc0939.jpg",
    "/images/cars/cx5-2016-2.5/z7355213347114_ee50d5b87fe05765dce0646a7ec0dbe7.jpg",
  ],
  20: [
    "/images/cars/mazda-cx5-2013-20.0/z7355213874856_96c632615933348be2f1e1750f7678ec.jpg",
    "/images/cars/mazda-cx5-2013-20.0/z7355213881533_16dca3f9bf3635acf4788bb28f6a6021.jpg",
    "/images/cars/mazda-cx5-2013-20.0/z7355213889792_486d7e63dd27ea93e9b0eabaf8300cc2.jpg",
    "/images/cars/mazda-cx5-2013-20.0/z7355213900543_9dc4a1e6a65803120a6de8d3cd003475.jpg",
    "/images/cars/mazda-cx5-2013-20.0/z7355213905063_446d082dc62d8adf5e1428ba86de9e9b.jpg",
    "/images/cars/mazda-cx5-2013-20.0/z7355213908809_f6e15163a97a1f52ff3cbe1a8e440243.jpg",
    "/images/cars/mazda-cx5-2013-20.0/z7355213921236_e8cc038fbfe1fc60d567ed2976dfb87b.jpg",
    "/images/cars/mazda-cx5-2013-20.0/z7355213924820_13dab0573036582853dcd61e2cf46f83.jpg",
    "/images/cars/mazda-cx5-2013-20.0/z7355213925573_4bcd6691db80145519e47869446dc261.jpg",
    "/images/cars/mazda-cx5-2013-20.0/z7355213937196_6fe6d4a3d2b4578552d9c39fd586a609.jpg",
    "/images/cars/mazda-cx5-2013-20.0/z7355213937443_225ef626686dadd804c56970ed7b089a.jpg",
    "/images/cars/mazda-cx5-2013-20.0/z7355213947824_bb783b5cece47dfa3467f1819e672676.jpg",
    "/images/cars/mazda-cx5-2013-20.0/z7355213960455_7f3dacf25d684e712517264f04e94327.jpg",
    "/images/cars/mazda-cx5-2013-20.0/z7355213960689_d7fbdfe3d96c9da315bd361bba85ded8.jpg",
    "/images/cars/mazda-cx5-2013-20.0/z7355213960941_86695d2c9f1d4ce4ad1f777cfeafc5a1.jpg",
    "/images/cars/mazda-cx5-2013-20.0/z7355213966555_945ef5dd229b9b15d493fcca2610642b.jpg",
    "/images/cars/mazda-cx5-2013-20.0/z7355213974686_7abb7f951972b732c078c11470fa0c77.jpg",
    "/images/cars/mazda-cx5-2013-20.0/z7355213985997_4d4c705101242825f9104cc4a111a2ed.jpg",
    "/images/cars/mazda-cx5-2013-20.0/z7355213987578_1feead0f11167227b0b08b203dede6f9.jpg",
    "/images/cars/mazda-cx5-2013-20.0/z7355213998527_1f9d7eba980ee142c961d2736da4f84a.jpg",
    "/images/cars/mazda-cx5-2013-20.0/z7355214008457_5841df558ce2b16a5bdba1c1204ac03a.jpg",
    "/images/cars/mazda-cx5-2013-20.0/z7355214008697_6e744164b960dea78a6573fc96d03764.jpg",
  ],
  21: [
    "/images/cars/mercedes-smart-roadster-2003/z7355214347527_ab8c3d2ddae60375414d7ad9ced83fb3.jpg",
    "/images/cars/mercedes-smart-roadster-2003/z7355214347756_67d2f6d18093142da975f4c60845f6a2.jpg",
    "/images/cars/mercedes-smart-roadster-2003/z7355214353618_03fe34fe6e002564a4ab377fceb3cbbe.jpg",
    "/images/cars/mercedes-smart-roadster-2003/z7355214363259_ea2ce1a49cb01907859a1d94f5e17140.jpg",
    "/images/cars/mercedes-smart-roadster-2003/z7355214365268_436b114b69db2070479145c237dc6fa4.jpg",
    "/images/cars/mercedes-smart-roadster-2003/z7355214380125_bce4d394d81eb17fdbc7dffc859880cb.jpg",
    "/images/cars/mercedes-smart-roadster-2003/z7355214381640_1cdc2c3a095535c8bea665b38295e04b.jpg",
    "/images/cars/mercedes-smart-roadster-2003/z7355214383648_956c2e7408d0fadc1926d52c2eef877c.jpg",
    "/images/cars/mercedes-smart-roadster-2003/z7355214398369_cc81cf7da13f3341c68f6067b4698d85.jpg",
    "/images/cars/mercedes-smart-roadster-2003/z7355214401714_3f5af1a4f6455b1cbad5ac054a00d37a.jpg",
    "/images/cars/mercedes-smart-roadster-2003/z7355214407159_10c2dce9eae8b8b075779fa777580819.jpg",
    "/images/cars/mercedes-smart-roadster-2003/z7355214415814_5dfa632c100824ac6f0f74ebf819ea5b.jpg",
    "/images/cars/mercedes-smart-roadster-2003/z7355214424854_8976dae36c41962b3284550935110e47.jpg",
    "/images/cars/mercedes-smart-roadster-2003/z7355214425107_0a4c00c01d3f20520a57137b7114a5d6.jpg",
    "/images/cars/mercedes-smart-roadster-2003/z7355214432802_7ed71858189a9b99ecf2e5befcf626b0.jpg",
    "/images/cars/mercedes-smart-roadster-2003/z7355214437824_312106d2f13043f9854834bd9b2e8b05.jpg",
    "/images/cars/mercedes-smart-roadster-2003/z7355214444285_2eb702a9bbbb12f4de1f2ae94c5b5559.jpg",
    "/images/cars/mercedes-smart-roadster-2003/z7355214452943_37ce002ebe6a9ef6eb4cb70946b8cc7f.jpg",
    "/images/cars/mercedes-smart-roadster-2003/z7355214455902_c03c7e164bcc1048aca0d295c08c6a1c.jpg",
    "/images/cars/mercedes-smart-roadster-2003/z7355214461934_167090b5a0543f68be769051928dc87b.jpg",
    "/images/cars/mercedes-smart-roadster-2003/z7355214463778_38a80a42fcbd7bd103af9b8814c06f90.jpg",
  ],
  22: [
    "/images/cars/sedona-2019/z7355215017979_a8ddfea0d44420de080292c15f0ed97d.jpg",
    "/images/cars/sedona-2019/z7355215021352_e035787cc7c4051ae2af6bf7b09b5aca.jpg",
    "/images/cars/sedona-2019/z7355215029449_3a1bc46f55ffa3f84f02e2e463e724ff.jpg",
    "/images/cars/sedona-2019/z7355215032486_08d8632b64b01467b5db0b3e3533c38b.jpg",
    "/images/cars/sedona-2019/z7355215043158_deb62eda141e58aae083516d8a1c60bd.jpg",
    "/images/cars/sedona-2019/z7355215051716_9ab0aaac7c41ae46b1f3059315842503.jpg",
    "/images/cars/sedona-2019/z7355215051954_afecbc6e21a0d75e02221dc2c7ba18c2.jpg",
    "/images/cars/sedona-2019/z7355215058783_5547f8a5c8595504f37b20d5b235f03c.jpg",
    "/images/cars/sedona-2019/z7355215062809_da7b4d2a89f63400eed9e81c122e5176.jpg",
    "/images/cars/sedona-2019/z7355215074243_e20e5afb272ef404d7a8ba8bba40b195.jpg",
    "/images/cars/sedona-2019/z7355215075960_0a1a8c296bbfedb29fa18091ab5e24d4.jpg",
    "/images/cars/sedona-2019/z7355215088841_dabc53bdd34511f170ef5d4588ca08d0.jpg",
    "/images/cars/sedona-2019/z7355215090351_93254c645c7af1a15e13f330112254bc.jpg",
    "/images/cars/sedona-2019/z7355215096072_6e75437ffc0e86b79fa59f343a6f3969.jpg",
    "/images/cars/sedona-2019/z7355215102517_383178fc1af7d927b12319031e644e43.jpg",
  ],
  23: [
    "/images/cars/sedona-2016/z7355215502737_9067c5f0ec02042d44cde0ec805cfe7c.jpg",
    "/images/cars/sedona-2016/z7355215505895_5ad752000df9b1a01a12a98483acbc5b.jpg",
    "/images/cars/sedona-2016/z7355215515712_672f1cd833c069132148247183bee414.jpg",
    "/images/cars/sedona-2016/z7355215518933_d04194ef4ef88cedffe5e255fb49d3eb.jpg",
    "/images/cars/sedona-2016/z7355215525074_6b9859c6fb54837a47e2b5a2d73074a5.jpg",
    "/images/cars/sedona-2016/z7355215531889_5c437a98a251b90fc003f0c9a731f4bc.jpg",
    "/images/cars/sedona-2016/z7355215536208_48e7577f71648161a1411aece82d3302.jpg",
    "/images/cars/sedona-2016/z7355215552444_c15c4581a46b4f579299b8f74b45acc8.jpg",
    "/images/cars/sedona-2016/z7355215554844_ddd5339c2acefdfe8272f32ef9777047.jpg",
    "/images/cars/sedona-2016/z7355215556645_e8ba3d00f66a3b09ecbb03a209841c9b.jpg",
    "/images/cars/sedona-2016/z7355215563760_b5fbe1d9c8a8458226b5913743b21657.jpg",
    "/images/cars/sedona-2016/z7355215569951_fa5cc31c527d5c134688223fb8bbbb7f.jpg",
    "/images/cars/sedona-2016/z7355215581054_0fba0c1c5696ecc926fb9168ba76127b.jpg",
  ],
  24: [
    "/images/cars/innova-v-2010/z7355215996992_0fb5fc256358c1bb94531e912835f704.jpg",
    "/images/cars/innova-v-2010/z7355216003912_e2a8868df70b5c5eb11ddbe00fbec3da.jpg",
    "/images/cars/innova-v-2010/z7355216004139_ce73bd7897750449a90c6d4335dc318d.jpg",
    "/images/cars/innova-v-2010/z7355216009945_816d547e9818fc01742a504004b7f53d.jpg",
    "/images/cars/innova-v-2010/z7355216022354_f90c9b0ef6a25c26213294a6484db415.jpg",
    "/images/cars/innova-v-2010/z7355216025094_1b12cfc63313887da7d59b18814773fa.jpg",
    "/images/cars/innova-v-2010/z7355216028031_998dbd3689ef755ccfe34611eb32e616.jpg",
    "/images/cars/innova-v-2010/z7355216037290_69c9e257d7d0d2ef8efdb184c096bd78.jpg",
    "/images/cars/innova-v-2010/z7355216039943_a3747f3b845f4220075413cdaff32115.jpg",
    "/images/cars/innova-v-2010/z7355216042986_65cae6840a7a2a97ffdcf6d605c24ef8.jpg",
    "/images/cars/innova-v-2010/z7355216045964_88ff1b0187f3e9658c62afe5cb374f9a.jpg",
    "/images/cars/innova-v-2010/z7355216060201_e4219d44ebd51692089b94973af143bd.jpg",
    "/images/cars/innova-v-2010/z7355216066190_6dfcb6ce3f964b76905817da240cf8d4.jpg",
    "/images/cars/innova-v-2010/z7355216068798_828ea995ae848aeee310f2fcb69995b1.jpg",
    "/images/cars/innova-v-2010/z7355216080959_fabf3777342e10a38e53ef4b334023ee.jpg",
    "/images/cars/innova-v-2010/z7355216081196_28ece5acbf258c5517ad991466ca7832.jpg",
    "/images/cars/innova-v-2010/z7355216084767_34347fc57d05b6b440c2330e45851db6.jpg",
    "/images/cars/innova-v-2010/z7355216096240_880a28c4053414d4eccc3655833ab0d1.jpg",
    "/images/cars/innova-v-2010/z7355216098126_4bd10c0e68519c380ec39f14cdb96d6e.jpg",
    "/images/cars/innova-v-2010/z7355216105549_82aa8007dcf7e960c6c301c3bb4eeac5.jpg",
    "/images/cars/innova-v-2010/z7355216115211_4f134a50c43a1354bddb7e04b4d013ae.jpg",
  ],
  25: [
    "/images/cars/mercedes-c200-2012/z7355216496284_0ab94442ae711ae1bb6e97cf426dc704.jpg",
    "/images/cars/mercedes-c200-2012/z7355216502925_7152469f2053fcf738e88f8f61e0a4b8.jpg",
    "/images/cars/mercedes-c200-2012/z7355216514691_0336fcccd4a786f16e12c71935d5fd13.jpg",
    "/images/cars/mercedes-c200-2012/z7355216516629_e1edfe7e7364a17decf5e2ecd6a6ed2f.jpg",
    "/images/cars/mercedes-c200-2012/z7355216516864_23067d1a6d81b3a727122e4dcc1d6a7c.jpg",
    "/images/cars/mercedes-c200-2012/z7355216529482_7821392b392844337a752a35b523932f.jpg",
    "/images/cars/mercedes-c200-2012/z7355216535381_95c58dd8ed6612dc69d9f8133102660f.jpg",
    "/images/cars/mercedes-c200-2012/z7355216540884_d70ff2872c49712d351bfe4901c589c2.jpg",
    "/images/cars/mercedes-c200-2012/z7355216541298_0f2ac1040e9dd565d0cdf7581ae452a9.jpg",
    "/images/cars/mercedes-c200-2012/z7355216557021_e6bded0cfd7dbcc3e69ae414692dd8e8.jpg",
    "/images/cars/mercedes-c200-2012/z7355216560504_ffbeb8bc8aec9caf7b3453bb93b778fa.jpg",
    "/images/cars/mercedes-c200-2012/z7355216567358_bf8cdbe5514d6b8f0a252965ebdf039d.jpg",
    "/images/cars/mercedes-c200-2012/z7355216575969_02f034a2c56959208d7279de207f1740.jpg",
    "/images/cars/mercedes-c200-2012/z7355216578197_153f3f5818a6899adad5470f9cb28b15.jpg",
    "/images/cars/mercedes-c200-2012/z7355216585234_53728e95f52518cbb056f4fc28f0907a.jpg",
    "/images/cars/mercedes-c200-2012/z7355216588973_b60a52563e25255e752460f7dc6821ff.jpg",
    "/images/cars/mercedes-c200-2012/z7355216592676_ad2bfa53c8ded5bc90e977bc5141f726.jpg",
    "/images/cars/mercedes-c200-2012/z7355216599446_9353810dfe24389686a87b14c55d8648.jpg",
    "/images/cars/mercedes-c200-2012/z7355216609320_b05791103e2d2bf669702d730aea54c8.jpg",
  ],
  26: [
    "/images/cars/bmw-x1-2010/z7355216982515_36f79ea71737f05874149a1210a27f13.jpg",
    "/images/cars/bmw-x1-2010/z7355216995569_dec5a1cdeee1ab43c81ca2f5d3f59d96.jpg",
    "/images/cars/bmw-x1-2010/z7355216998816_b7bc583cdb2d3e961aab0ae1298da0a4.jpg",
    "/images/cars/bmw-x1-2010/z7355217003281_7072ca742928a5546fec874ac1e096b0.jpg",
    "/images/cars/bmw-x1-2010/z7355217008359_514eb86ca00475f98c8ff17cdf7fefc0.jpg",
    "/images/cars/bmw-x1-2010/z7355217017627_f19fe1b44e05b131b3e0813a27be30b4.jpg",
    "/images/cars/bmw-x1-2010/z7355217021969_760bd832019867c154324e36505e1fe0.jpg",
    "/images/cars/bmw-x1-2010/z7355217026326_673d7e23237dfc14de15bddc784d6024.jpg",
    "/images/cars/bmw-x1-2010/z7355217031638_eb95555c374a0cb79876af9bc1020ad6.jpg",
  ],
  27: [
    "/images/cars/chevrolet-trailblazer-2018/z7441092489744_192af82c4d4109cf00d567ff7f1199a1.jpg",
    "/images/cars/chevrolet-trailblazer-2018/z7441092497445_53bb94ca99ac0099db7ae72b126275ea.jpg",
    "/images/cars/chevrolet-trailblazer-2018/z7441092497751_58557b3398b1b5cd4d9de76e4205d3d9.jpg",
    "/images/cars/chevrolet-trailblazer-2018/z7441092501865_c5a839b5bce12e7ea64885f601af45a7.jpg",
    "/images/cars/chevrolet-trailblazer-2018/z7441092506452_d1304aaa007b0d15a4448a9a10e70d3b.jpg",
    "/images/cars/chevrolet-trailblazer-2018/z7441092507786_fcf73cc2f113b41d8e060e3f97a26d45.jpg",
    "/images/cars/chevrolet-trailblazer-2018/z7441092508099_4d3a4c72523b5fe405fa394cecc830f5.jpg",
    "/images/cars/chevrolet-trailblazer-2018/z7441092515523_91d3d994b913d329f6ed1329bd97befb.jpg",
    "/images/cars/chevrolet-trailblazer-2018/z7441092515652_3f7f9faf2f45c3df49b7c5c319a9cbb0.jpg",
    "/images/cars/chevrolet-trailblazer-2018/z7441092515802_921074d59ee371d085a68bf402b4072b.jpg",
    "/images/cars/chevrolet-trailblazer-2018/z7441092517736_9e12820bede2ba57ebfda5954adf28f9.jpg",
    "/images/cars/chevrolet-trailblazer-2018/z7441092525522_58d1649ea0f738dce695c5defcc090b6.jpg",
    "/images/cars/chevrolet-trailblazer-2018/z7441092526792_f8f970dabd777325ff410f206d9ab029.jpg",
    "/images/cars/chevrolet-trailblazer-2018/z7441092531513_492f84b8ab4279a4998c7aee1c3b92b0.jpg",
    "/images/cars/chevrolet-trailblazer-2018/z7441092536042_712a4f64291d181fd6c432c64a74cd26.jpg",
    "/images/cars/chevrolet-trailblazer-2018/z7441092536790_4a6356f42b0e669008670bb24a0d304f.jpg",
    "/images/cars/chevrolet-trailblazer-2018/z7441092539015_8a53cc250263316861fa38192624340d.jpg",
    "/images/cars/chevrolet-trailblazer-2018/z7441092543476_f530a8f12deb2254278a88f7d1bf0a61.jpg",
    "/images/cars/chevrolet-trailblazer-2018/z7441092543673_990001c4b945d35373ad9e34f29eb57b.jpg",
    "/images/cars/chevrolet-trailblazer-2018/z7441092545670_0f1055d7664ae98d0aa2986690c5c93a.jpg",
    "/images/cars/chevrolet-trailblazer-2018/z7441092547735_df0c641836a78554fa37e28052bf7949.jpg",
    "/images/cars/chevrolet-trailblazer-2018/z7441092556108_07e59ff0aad78938fadc87fe661ee608.jpg",
  ],
  28: [
    "/images/cars/fortuner-v-2014/z7441096230624_622ce5afdc10e3d0a48224845e87deac.jpg",
    "/images/cars/fortuner-v-2014/z7441096238855_7451177bc375c35cedeb9b5182e4a8d5.jpg",
    "/images/cars/fortuner-v-2014/z7441096239765_7c789981d9a742a28604a4f049b480b8.jpg",
    "/images/cars/fortuner-v-2014/z7441096244280_4f6ccd82c1c7fa21e28a80d15f91bf9a.jpg",
    "/images/cars/fortuner-v-2014/z7441096247610_2d040e224ca2017c1af00565c6d1360c.jpg",
    "/images/cars/fortuner-v-2014/z7441096249639_cf982253a42c3ffc0b261206f821b586.jpg",
    "/images/cars/fortuner-v-2014/z7441096253326_be20c74677e6782dbf88b8dc63477539.jpg",
    "/images/cars/fortuner-v-2014/z7441096256168_bb453c86c2e4098f8a41367ab1f194f8.jpg",
    "/images/cars/fortuner-v-2014/z7441096260187_0cd18ce277945507fb490000aba5bee2.jpg",
    "/images/cars/fortuner-v-2014/z7441096261142_60aa150df73977ef0256636a074a4051.jpg",
    "/images/cars/fortuner-v-2014/z7441096267360_9a6356513e0cbabad35de0e112e6cb8e.jpg",
    "/images/cars/fortuner-v-2014/z7441096267611_3dd94d9568a25e35f7ef4a5572cfcbdd.jpg",
    "/images/cars/fortuner-v-2014/z7441096268295_bd018d927d84212e1d1a9c9b88627f2f.jpg",
    "/images/cars/fortuner-v-2014/z7441096268597_4937104f60feed359fecdc2d5fd290f2.jpg",
    "/images/cars/fortuner-v-2014/z7441096276342_58e4971d1a533de7f0a48b41c7451b55.jpg",
    "/images/cars/fortuner-v-2014/z7441096278896_ab7a3a939956759c06966645e0aa3a0b.jpg",
    "/images/cars/fortuner-v-2014/z7441096279450_bd6ee3d34e655ad1b34ee8ce59052b45.jpg",
    "/images/cars/fortuner-v-2014/z7441096285775_410dc2b9f0a544ead89e5a5b3c255010.jpg",
    "/images/cars/fortuner-v-2014/z7441096286573_d84d6eb03b814ea99e68d2757d8399cd.jpg",
    "/images/cars/fortuner-v-2014/z7441096291486_70efb5c6f8572b1b1e1fb297c24a7e4a.jpg",
    "/images/cars/fortuner-v-2014/z7441096296652_f6a332e99d3be0cd371aa60369d8bf7b.jpg",
    "/images/cars/fortuner-v-2014/z7441096297814_197692e0bc55bc9b9c50f6c2709fb185.jpg",
    "/images/cars/fortuner-v-2014/z7441096298573_786e13e0f77cf9aa2a0e9ec38db90cee.jpg",
    "/images/cars/fortuner-v-2014/z7441096304604_8a0736c7524de228fcce667e9e621fa6.jpg",
    "/images/cars/fortuner-v-2014/z7441096304903_e520d3fdfa3fef251b538dbb70eccd5c.jpg",
    "/images/cars/fortuner-v-2014/z7441096305390_a481b1bde6e6e53e0a5a693bffbbf1f8.jpg",
    "/images/cars/fortuner-v-2014/z7441096310785_a3c0a42e1f3a2da9975a784a47652fd8.jpg",
    "/images/cars/fortuner-v-2014/z7441096317020_af96ed6990c6a7f789f90f40eacaf5d9.jpg",
    "/images/cars/fortuner-v-2014/z7441096319383_4089f4ba0872575707144ca62936e858.jpg",
  ],
  29: [
    "/images/cars/fotuner-2011-at/z7441097635577_ef429ae9912f8691fa255a60a2277634.jpg",
    "/images/cars/fotuner-2011-at/z7441097639471_ad3793e5f5b25fe73bbb89db152aec96.jpg",
    "/images/cars/fotuner-2011-at/z7441097646237_f53090eb5fe06061a58ddf5ccee9e4d9.jpg",
    "/images/cars/fotuner-2011-at/z7441097647385_91630e11520d6e5c65059ede2fa0c581.jpg",
    "/images/cars/fotuner-2011-at/z7441097648169_e87f3c50dcbf8b37b493ce66a1269c5d.jpg",
    "/images/cars/fotuner-2011-at/z7441097653292_5aa2304fd6dd10ff3ea9773ad46c90b8.jpg",
    "/images/cars/fotuner-2011-at/z7441097654630_82dae8930b62d3aff1b27e2901d1c359.jpg",
    "/images/cars/fotuner-2011-at/z7441097654946_b10d7efb333b1eef1f92bb67edb44b0a.jpg",
    "/images/cars/fotuner-2011-at/z7441097658954_d0b8138a81e063c9033b29000ec69f70.jpg",
    "/images/cars/fotuner-2011-at/z7441097664302_5369d7a1289348af4245a3614b5a482a.jpg",
    "/images/cars/fotuner-2011-at/z7441097664594_3e1b94552ab9f49f5e24188c1c566542.jpg",
    "/images/cars/fotuner-2011-at/z7441097669024_102aeaf26ce7a668eaee483080073dcc.jpg",
    "/images/cars/fotuner-2011-at/z7441097669335_4919899dd91c2c79c0a31c51aea4df35.jpg",
    "/images/cars/fotuner-2011-at/z7441097675295_11a412dc8d001bccdf85cfcc9eca9c66.jpg",
    "/images/cars/fotuner-2011-at/z7441097676133_f2801a40c6903a38d9013e4371e003b4.jpg",
    "/images/cars/fotuner-2011-at/z7441097676276_aa6478509376ccfdb9d24ba3dfa8b3e9.jpg",
    "/images/cars/fotuner-2011-at/z7441097681744_7894d2e469d6ef8313c7b018f7ce4e35.jpg",
    "/images/cars/fotuner-2011-at/z7441097685213_174b6d2508fc5761ee674a28823f7efd.jpg",
  ],
  30: [
    "/images/cars/honda-city-top-2020-at/z7441094034935_37329acb53fe54618d17b3c6b2d0b403.jpg",
    "/images/cars/honda-city-top-2020-at/z7441094036394_bae6d290722155a4d10aa7a35b85feaf.jpg",
    "/images/cars/honda-city-top-2020-at/z7441094037310_0d228cc289bb9a8e9edb1ddaf7adf9d2.jpg",
    "/images/cars/honda-city-top-2020-at/z7441094040251_a61293d011a8134746470cccede116e2.jpg",
    "/images/cars/honda-city-top-2020-at/z7441094040395_47212b8e6ba58549ef6b286888ce407f.jpg",
    "/images/cars/honda-city-top-2020-at/z7441094046019_ced3b37a2c02f750fe1b8ee713a266e8.jpg",
    "/images/cars/honda-city-top-2020-at/z7441094047228_b6aeab0c89972a90d4cfe924678533ed.jpg",
    "/images/cars/honda-city-top-2020-at/z7441094050130_157b43312ed4a8846576b373f1323d05.jpg",
    "/images/cars/honda-city-top-2020-at/z7441094052442_e5676dd805102968acc0e356021c3fe5.jpg",
    "/images/cars/honda-city-top-2020-at/z7441094060390_d5a0f934de3308540acaf74cb04df820.jpg",
    "/images/cars/honda-city-top-2020-at/z7441094061556_f38c036292c3522f137894cbf6fa3d73.jpg",
    "/images/cars/honda-city-top-2020-at/z7441094062273_a4930c7d8ddec82f8565648e8e148a2e.jpg",
    "/images/cars/honda-city-top-2020-at/z7441094068060_bed3bd4964be7617f1a5de8d13edc51c.jpg",
    "/images/cars/honda-city-top-2020-at/z7441094071343_54cc19d6464103d0289050c28dac87f3.jpg",
    "/images/cars/honda-city-top-2020-at/z7441094074426_3c52e46d3cfb9a6b8dcd94705edd3d30.jpg",
    "/images/cars/honda-city-top-2020-at/z7441094075326_4e9eb6e03544588538e2eb419869dbe6.jpg",
    "/images/cars/honda-city-top-2020-at/z7441094078428_458cad4fa2111e7064b8c93a399c0abb.jpg",
    "/images/cars/honda-city-top-2020-at/z7441094078512_94c44bff790807caab184d5721fa45a1.jpg",
    "/images/cars/honda-city-top-2020-at/z7441094083797_45d4c4992ca0081efd639abbb2297b38.jpg",
    "/images/cars/honda-city-top-2020-at/z7441094089328_34b134ddf651ac85ccbbcede0f7304cb.jpg",
    "/images/cars/honda-city-top-2020-at/z7441094089593_f2688ebf917f1c00ac6af0b3eac316b6.jpg",
    "/images/cars/honda-city-top-2020-at/z7441094089738_e2af8c3364a4184f2a8adce5a1eb9f06.jpg",
    "/images/cars/honda-city-top-2020-at/z7441094092640_2c8e239425b932fedbf45f8d3eef897a.jpg",
    "/images/cars/honda-city-top-2020-at/z7441094096987_b8da7461def99fe58d68b0cd3ec866ff.jpg",
    "/images/cars/honda-city-top-2020-at/z7441094098632_490c6b17a69cf26910752a507a51eef4.jpg",
    "/images/cars/honda-city-top-2020-at/z7441094099860_c937525e6a26ed7151cecc7634aaaff8.jpg",
    "/images/cars/honda-city-top-2020-at/z7441094107760_fc5ff111ccafe471788f0a5cdc18045a.jpg",
    "/images/cars/honda-city-top-2020-at/z7441094110567_3bc41e87537c37fa5067f073f33c0957.jpg",
    "/images/cars/honda-city-top-2020-at/z7441094113412_65bcb9c2cc6c08af6ecc4ca451dafeea.jpg",
    "/images/cars/honda-city-top-2020-at/z7441094116653_46da2f9ff0e7238e547bf1ac88d878bd.jpg",
    "/images/cars/honda-city-top-2020-at/z7441094120274_b42e09f92885fcfa71959cbf859c35e1.jpg",
  ],
  31: [
    "/images/cars/ranger-2018-at/z7441095478230_be33acb3a48bca98dcec0955869acc03.jpg",
    "/images/cars/ranger-2018-at/z7441095489405_38133aba25b95ea353a22cf723d85c8e.jpg",
    "/images/cars/ranger-2018-at/z7441095489719_cb406f095bc9311d03bccbba6dfa9cd4.jpg",
    "/images/cars/ranger-2018-at/z7441095490325_1006ee888ef7c475e51decfb71c435d7.jpg",
    "/images/cars/ranger-2018-at/z7441095495300_e0aae44dfd6bfb2d27b09561b68ded6f.jpg",
    "/images/cars/ranger-2018-at/z7441095495682_49f548cb5398a5ee1f5f513357ed4543.jpg",
    "/images/cars/ranger-2018-at/z7441095498270_05d559279a077b634bc7bbcc6323f036.jpg",
    "/images/cars/ranger-2018-at/z7441095507453_cdd90ddd2117f6b7e2c8374a46de1e52.jpg",
    "/images/cars/ranger-2018-at/z7441095508310_ef670c33e669b0ecbcedca05e1dc216a.jpg",
    "/images/cars/ranger-2018-at/z7441095508626_d3faf64e609c7e47df0c1b01abefc424.jpg",
    "/images/cars/ranger-2018-at/z7441095510690_309ae86269e700914c583de38d3f1f0c.jpg",
    "/images/cars/ranger-2018-at/z7441095516983_3bb26bf9124bce6a4d9b9373ed05dffc.jpg",
    "/images/cars/ranger-2018-at/z7441095517194_7926ee98e2b66dd17062a87dac42fc94.jpg",
    "/images/cars/ranger-2018-at/z7441095517836_37303ad88cf65620d721f3a3fbec36e0.jpg",
    "/images/cars/ranger-2018-at/z7441095524934_dcec23d359494d0985e8a961e1bbb066.jpg",
    "/images/cars/ranger-2018-at/z7441095525613_c7b8a790aa22a74086d50e908f15538e.jpg",
    "/images/cars/ranger-2018-at/z7441095526464_85b99e4ae120bd721adbaeb0682ed734.jpg",
    "/images/cars/ranger-2018-at/z7441095527706_29bc069b0fa9781215050b37a939bf7f.jpg",
  ],
  32: [
    "/images/cars/vios-g-2019/z7441093137206_04f021101c56c05a511399e72607ec38.jpg",
    "/images/cars/vios-g-2019/z7441093137564_69d57ac918da6f9870e877151a4792f3.jpg",
    "/images/cars/vios-g-2019/z7441093138812_54737004e88c8174782ede248f121012.jpg",
    "/images/cars/vios-g-2019/z7441093139062_2acf1a14c5c2f806a9a367acebc2f658.jpg",
    "/images/cars/vios-g-2019/z7441093142338_138d2de5bb5eecdbf414f4c13d389411.jpg",
    "/images/cars/vios-g-2019/z7441093143849_ade405d4beec239325e68011cd4fc14d.jpg",
    "/images/cars/vios-g-2019/z7441093146411_1c4ab816861f6dba45d7e7472c2ab9ec.jpg",
    "/images/cars/vios-g-2019/z7441093153343_b5ded19497f172b44fdb6747ba1a34a4.jpg",
    "/images/cars/vios-g-2019/z7441093154612_1e106b07096c373be9cd725554f98dae.jpg",
    "/images/cars/vios-g-2019/z7441093157520_1aaad9c5da3b4ffd79c790e4bf3a3a89.jpg",
    "/images/cars/vios-g-2019/z7441093161772_aacf12b25444e162483407186192be33.jpg",
    "/images/cars/vios-g-2019/z7441093162978_babddc7aee4285321cafdff85899c300.jpg",
    "/images/cars/vios-g-2019/z7441093163737_cb7ef9142dc071bb754aea0d51f3ad41.jpg",
    "/images/cars/vios-g-2019/z7441093167184_d073dae0d8d336359dc3d8619f4a9078.jpg",
    "/images/cars/vios-g-2019/z7441093168190_37cbcce90a0436b3ef69c4bbbab26d19.jpg",
    "/images/cars/vios-g-2019/z7441093171172_1068f2540713326310dcceada7746a30.jpg",
    "/images/cars/vios-g-2019/z7441093174105_26f8ee7afbd1f5a8cc187faa52eab5c0.jpg",
    "/images/cars/vios-g-2019/z7441093183340_c3058d438c20001b33d1a5a69a9a20ec.jpg",
    "/images/cars/vios-g-2019/z7441093184157_a35da0aff0459c8466e23f6751541f61.jpg",
    "/images/cars/vios-g-2019/z7441093187826_6771d4189b26bcc8946a580852a77dd6.jpg",
    "/images/cars/vios-g-2019/z7441093191887_cb30e64ddf967380be41e20ed22eea63.jpg",
  ],
};

export default function ProductDetailPage() {
  const params = useParams();
  const carId = Number.parseInt(params.id as string);
  const car = cars.find((c) => c.id === carId);

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  // Get all images for this car
  const folderName = carFolderMap[carId];
  const predefinedImages = carImagesMap[carId];

  // If we have predefined images, use them. Otherwise, try to generate from base image
  // For now, we'll use the base image and let the user know more images are available
  const images =
    predefinedImages && predefinedImages.length > 0
      ? predefinedImages
      : car
        ? [car.image]
        : [];

  useEffect(() => {
    // Reset to first image when car changes
    setSelectedImageIndex(0);
  }, [carId]);

  useEffect(() => {
    // Handle ESC key to close lightbox
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isLightboxOpen) {
        closeLightbox();
      }
    };

    // Prevent body scroll when lightbox is open
    if (isLightboxOpen) {
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", handleEscape);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isLightboxOpen]);

  if (!car) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-2xl font-bold">Xe không tìm thấy</h1>
          <Link href="/products">
            <Button className="mt-4">Quay lại danh sách</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const nextImage = () => {
    setSelectedImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setSelectedImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const openLightbox = () => {
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  // Extract year from car name if possible
  const yearMatch = car.name.match(/\d{4}/);
  const year = yearMatch ? yearMatch[0] : "N/A";

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <Link
            href="/products"
            className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold mb-4 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            Quay lại danh sách
          </Link>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Images and Details */}
            <div className="lg:col-span-2 space-y-6">
              {/* Main Image with Zoom */}
              <div className="relative bg-white rounded-lg overflow-hidden shadow-lg group">
                <div className="relative w-full min-h-[400px] md:min-h-[500px] lg:min-h-[600px] flex items-center justify-center bg-gray-50">
                  <img
                    src={
                      images[selectedImageIndex] ||
                      car.image ||
                      "/placeholder.svg"
                    }
                    alt={car.name}
                    className="max-w-full max-h-[70vh] md:max-h-[75vh] lg:max-h-[80vh] w-auto h-auto object-contain transition-transform duration-300 group-hover:scale-105"
                    loading="eager"
                  />
                  <button
                    onClick={openLightbox}
                    className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors opacity-0 group-hover:opacity-100"
                    aria-label="Phóng to ảnh"
                  >
                    <ZoomIn className="w-5 h-5" />
                  </button>
                  {images.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                        aria-label="Ảnh trước"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                        aria-label="Ảnh sau"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </>
                  )}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                    {selectedImageIndex + 1} / {images.length}
                  </div>
                </div>
              </div>

              {/* Thumbnail Gallery */}
              {images.length > 1 && (
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <h3 className="text-sm font-bold text-gray-700 mb-3">
                    Xem tất cả ảnh ({images.length})
                  </h3>
                  <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2 max-h-96 overflow-y-auto">
                    {images.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedImageIndex(index)}
                        className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${selectedImageIndex === index
                          ? "border-blue-600 shadow-md ring-2 ring-blue-200"
                          : "border-gray-200 hover:border-gray-400"
                          }`}
                      >
                        <img
                          src={image || "/placeholder.svg"}
                          alt={`${car.name} - Ảnh ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Car Description */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-black text-gray-900 mb-4">
                  Thông Tin Chi Tiết
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {car.name} là một chiếc xe {car.type}{" "}
                  {car.status.toLowerCase()} với{" "}
                  {car.odo !== "N/A" ? `đã đi ${car.odo}` : "thông tin đầy đủ"}.
                  Xe sử dụng nhiên liệu {car.fuel.toLowerCase()}, hộp số{" "}
                  {car.transmission.toLowerCase()},
                  {car.domestic === "Nhập khẩu"
                    ? " nhập khẩu"
                    : " sản xuất trong nước"}
                  . Xe đang có mặt tại {car.location}.
                </p>

                {/* Specs Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-4 border-t">
                  <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                    <Fuel className="w-5 h-5 text-blue-600 mt-1 shrink-0" />
                    <div>
                      <p className="text-xs text-gray-500 uppercase font-semibold">
                        Nhiên liệu
                      </p>
                      <p className="text-sm font-bold text-gray-900">
                        {car.fuel}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                    <Gauge className="w-5 h-5 text-blue-600 mt-1 shrink-0" />
                    <div>
                      <p className="text-xs text-gray-500 uppercase font-semibold">
                        Số km
                      </p>
                      <p className="text-sm font-bold text-gray-900">
                        {car.odo}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                    <History className="w-5 h-5 text-blue-600 mt-1 shrink-0" />
                    <div>
                      <p className="text-xs text-gray-500 uppercase font-semibold">
                        Tình trạng
                      </p>
                      <p className="text-sm font-bold text-gray-900">
                        {car.status}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                    <MapPin className="w-5 h-5 text-blue-600 mt-1 shrink-0" />
                    <div>
                      <p className="text-xs text-gray-500 uppercase font-semibold">
                        Địa điểm
                      </p>
                      <p className="text-sm font-bold text-gray-900">
                        {car.location}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                    <Settings className="w-5 h-5 text-blue-600 mt-1 shrink-0" />
                    <div>
                      <p className="text-xs text-gray-500 uppercase font-semibold">
                        Hộp số
                      </p>
                      <p className="text-sm font-bold text-gray-900">
                        {car.transmission}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                    <Globe className="w-5 h-5 text-blue-600 mt-1 shrink-0" />
                    <div>
                      <p className="text-xs text-gray-500 uppercase font-semibold">
                        Xuất xứ
                      </p>
                      <p className="text-sm font-bold text-gray-900">
                        {car.domestic}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Price and Contact */}
            <div className="lg:col-span-1 space-y-6">
              {/* Price Card */}
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white p-6 rounded-lg shadow-xl">
                <p className="text-sm font-semibold uppercase mb-2 opacity-90">
                  Giá bán
                </p>
                <h2 className="text-3xl font-black mb-6">{car.price}</h2>
                <Button
                  className="w-full bg-white text-blue-600 hover:bg-gray-100 font-bold py-6 text-base shadow-lg"
                  onClick={() => {
                    window.location.href = "tel:0935794345";
                  }}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  LIÊN HỆ NGAY
                </Button>
              </div>

              {/* Quick Specs */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  Thông Tin Nhanh
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                    <span className="text-gray-600 font-medium">
                      Năm sản xuất:
                    </span>
                    <span className="font-bold text-gray-900">{year}</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                    <span className="text-gray-600 font-medium">Loại xe:</span>
                    <span className="font-bold text-gray-900">{car.type}</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                    <span className="text-gray-600 font-medium">Số km:</span>
                    <span className="font-bold text-gray-900">{car.odo}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 font-medium">
                      Nhiên liệu:
                    </span>
                    <span className="font-bold text-gray-900">{car.fuel}</span>
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  Thông Tin Liên Hệ
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                    <div className="bg-blue-600 rounded-full p-2 flex-shrink-0">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-gray-500 uppercase font-semibold mb-1">
                        Hotline
                      </p>
                      <a
                        href="tel:0935794345"
                        className="text-lg font-bold text-blue-600 hover:text-blue-700 transition-colors"
                      >
                        0935 794 345 (A Hậu)
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                    <div className="bg-blue-600 rounded-full p-2 flex-shrink-0">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-gray-500 uppercase font-semibold mb-1">
                        Email
                      </p>
                      <a
                        href="mailto:duyhau686883@gmail.com"
                        className="text-base font-semibold text-blue-600 hover:text-blue-700 transition-colors break-all"
                      >
                        duyhau686883@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-sm text-gray-600 text-center">
                      <strong>Liên hệ ngay để được tư vấn miễn phí!</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {isLightboxOpen && (
        <div
          className="fixed inset-0 bg-black/95 z-[9999] flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors"
            aria-label="Đóng (ESC)"
          >
            <X className="w-6 h-6" />
          </button>
          {images.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors"
                aria-label="Ảnh trước"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors"
                aria-label="Ảnh sau"
              >
                <ChevronRight className="w-8 h-8" />
              </button>
            </>
          )}
          <div
            className="w-full h-full flex items-center justify-center p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={
                images[selectedImageIndex] || car.image || "/placeholder.svg"
              }
              alt={car.name}
              className="max-w-[95vw] max-h-[95vh] w-auto h-auto object-contain"
            />
          </div>
          {images.length > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-full text-sm font-medium">
              {selectedImageIndex + 1} / {images.length}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
