/**
 * ข้อมูลติดต่อและค่าคงที่ของร้านศรีเทพแอร์
 * แก้ไขข้อมูลในไฟล์นี้เพียงที่เดียว ระบบจะอัปเดตทุกหน้าอัตโนมัติ
 */
export const SITE = {
  name: "ศรีเทพแอร์",
  nameEn: "Si Thep Air Service",
  tagline: "ร้านแอร์ครบวงจร ติดตั้ง ล้าง ซ่อม ย้ายแอร์",
  url: "https://www.sithepair.com",
  phone: "093-419-4553",
  phoneRaw: "+66934194553",
  lineId: "sithepair",
  lineUrl: "https://line.me/ti/p/~sithepair",
  facebookUrl: "https://www.facebook.com/Srithepairservice?locale=th_TH",
  email: "sritepairservice2012@gmail.com",
  address: "957 ถ.คชเสนีย์ ต.สระกรวด อ.ศรีเทพ จ.เพชรบูรณ์ 67170",
  /** ข้อมูลที่อยู่แยกฟิลด์ สำหรับ JSON-LD */
  addressParts: {
    streetAddress: "957 ถ.คชเสนีย์",
    district: "สระกรวด",
    amphoe: "ศรีเทพ",
    province: "เพชรบูรณ์",
    postalCode: "67170",
    country: "TH",
  },
  /** พิกัดภูมิศาสตร์ของร้าน (จาก Google Maps) */
  geo: {
    latitude: 15.429109,
    longitude: 101.065989,
  },
  hours: "จันทร์ – อาทิตย์  08:00 – 20:00 น.",
  serviceArea: "ศรีเทพ, ชัยบาดาล, วิเชียรบุรี, บึงสามพัน และพื้นที่ใกล้เคียง",
  /** พื้นที่บริการ (แยกเป็นรายการ สำหรับ areaServed ใน JSON-LD) */
  serviceAreas: [
    "อำเภอศรีเทพ",
    "อำเภอวิเชียรบุรี",
    "อำเภอบึงสามพัน",
    "อำเภอหนองไผ่",
    "อำเภอชัยบาดาล",
    "จังหวัดเพชรบูรณ์",
    "จังหวัดลพบุรี",
  ],
  foundedYear: 2007,
  mapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3846.0267107476475!2d101.06598967844157!3d15.429109646901093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311fb9056b0107d7%3A0xd7437d4f01c9e798!2z4Lij4LmJ4Liy4LiZ4Lio4Lij4Li14LmA4LiX4Lie4LmB4Lit4Lij4LmM4LmA4LiL4Lit4Lij4LmM4Lin4Li04Liq!5e0!3m2!1sen!2sus!4v1776673471116!5m2!1sen!2sus",
} as const;
