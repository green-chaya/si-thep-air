import Brands from "@/components/Brands";
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

export default function HomePage() {
  // JSON-LD structured data สำหรับ SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "ศรีเทพแอร์",
    description:
      "ร้านแอร์ครบวงจร ติดตั้ง ล้าง ซ่อม ย้ายแอร์ โดยช่างมืออาชีพ",
    telephone: "+66934194553",
    address: {
      "@type": "PostalAddress",
      streetAddress: "957 ถ.เพชรรัตน์",
      addressLocality: "ศรีเทพ",
      addressRegion: "เพชรบูรณ์",
      postalCode: "67170",
      addressCountry: "TH",
    },
    openingHours: "Mo-Su 08:00-20:00",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "150",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main>
        <Hero />
        <Brands />
        <Services />
        <WhyUs />
        <Process />
        <Works />
        <FAQ />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <FloatingContact />
    </>
  );
}
