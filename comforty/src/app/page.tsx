import ClientLogos from "@/components/client-logos";
import FeaturedProducts from "@/components/featured-products";
import GalleryGrid from "@/components/gallery-grid";
import HeroSection from "@/components/hero-section";
import OurProducts from "@/components/our-products";
import TopCategory from "@/components/top-category";

export default function Home() {
  return (
    <>
    <HeroSection />
    <ClientLogos />
    <FeaturedProducts />
    <TopCategory />
    <GalleryGrid />
    <OurProducts />
    </>
  );
}
