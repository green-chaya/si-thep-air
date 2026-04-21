import Brands from "@/components/Brands";
import BtuCalculator from "@/components/BtuCalculator";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import FloatingContact from "@/components/FloatingContact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Process from "@/components/Process";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Works from "@/components/Works";
import { SITE } from "@/lib/site";

export default function HomePage() {
  // ---------- JSON-LD #1 : LocalBusiness (HVACBusiness) ----------
  const localBusinessLd = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HVACBusiness"],
    "@id": `${SITE.url}#business`,
    name: SITE.name,
    alternateName: SITE.nameEn,
    description:
      "ร้านแอร์ครบวงจรใน อ.ศรีเทพ จ.เพชรบูรณ์ บริการติดตั้งแอร์ ล้างแอร์ ซ่อมแอร์ ย้ายแอร์ โดยช่างมืออาชีพประสบการณ์ 20+ ปี รับประกันทุกงาน",
    url: SITE.url,
    telephone: SITE.phoneRaw,
    email: SITE.email,
    image: `${SITE.url}/opengraph-image`,
    logo: `${SITE.url}/opengraph-image`,
    priceRange: "฿฿",
    currenciesAccepted: "THB",
    paymentAccepted: ["เงินสด", "โอนเงิน", "พร้อมเพย์"],
    foundingDate: `${SITE.foundedYear}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.addressParts.streetAddress,
      addressLocality: SITE.addressParts.amphoe,
      addressRegion: SITE.addressParts.province,
      postalCode: SITE.addressParts.postalCode,
      addressCountry: SITE.addressParts.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE.geo.latitude,
      longitude: SITE.geo.longitude,
    },
    hasMap: `https://www.google.com/maps?q=${SITE.geo.latitude},${SITE.geo.longitude}`,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "08:00",
        closes: "20:00",
      },
    ],
    areaServed: SITE.serviceAreas.map((a) => ({
      "@type": "AdministrativeArea",
      name: a,
    })),
    sameAs: [SITE.facebookUrl, SITE.lineUrl],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "บริการของศรีเทพแอร์",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "ติดตั้งแอร์บ้าน/สำนักงาน",
            description:
              "ติดตั้งแอร์ใหม่ เดินท่อ วางคอยล์เย็น-ร้อน ตรวจรั่วด้วยไนโตรเจน รับประกันงานติดตั้ง",
            serviceType: "ติดตั้งแอร์",
            areaServed: "จังหวัดเพชรบูรณ์",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "ล้างแอร์",
            description:
              "Big Cleaning คอยล์เย็น–คอยล์ร้อน ฆ่าเชื้อ ไส้กรอง ลดฝุ่นและกลิ่นอับ",
            serviceType: "ล้างแอร์",
            areaServed: "จังหวัดเพชรบูรณ์",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "ซ่อมแอร์",
            description:
              "ซ่อมแอร์ไม่เย็น น้ำรั่ว เช็กน้ำยา เปลี่ยนอะไหล่ โดยช่างมืออาชีพ",
            serviceType: "ซ่อมแอร์",
            areaServed: "จังหวัดเพชรบูรณ์",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "ย้ายแอร์",
            description:
              "ย้ายแอร์ ปั๊มน้ำยากลับก่อนถอด เดินท่อใหม่ ตรวจรั่วด้วยไนโตรเจน งานเนียนไม่ทำลายผนัง",
            serviceType: "ย้ายแอร์",
            areaServed: "จังหวัดเพชรบูรณ์",
          },
        },
      ],
    },
    knowsAbout: [
      "ติดตั้งแอร์",
      "ล้างแอร์",
      "ซ่อมแอร์",
      "ย้ายแอร์",
      "แอร์บ้าน",
      "แอร์สำนักงาน",
      "ระบบเครื่องปรับอากาศ",
      "BTU Calculator",
    ],
  };

  // ---------- JSON-LD #2 : Website (with SearchAction) ----------
  const websiteLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE.url}#website`,
    url: SITE.url,
    name: SITE.name,
    inLanguage: "th-TH",
    publisher: { "@id": `${SITE.url}#business` },
  };

  // ---------- JSON-LD #3 : Organization ----------
  const organizationLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE.url}#organization`,
    name: SITE.name,
    alternateName: SITE.nameEn,
    url: SITE.url,
    logo: `${SITE.url}/opengraph-image`,
    sameAs: [SITE.facebookUrl, SITE.lineUrl],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: SITE.phoneRaw,
        contactType: "customer service",
        areaServed: "TH",
        availableLanguage: ["th"],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
      />
      <Navbar />
      <main>
        <Hero />
        <Brands />
        <Services />
        <WhyUs />
        <Process />
        <Works />
        <BtuCalculator />
        <FAQ />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <FloatingContact />
    </>
  );
}
