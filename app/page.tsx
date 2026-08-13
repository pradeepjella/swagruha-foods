import AnnouncementBar from "@/components/layout/AnnouncementBar";
import Header from "@/components/layout/Header";
import HeroSection from "@/components/home/HeroSection";
import CategorySection from "@/components/home/CategorySection";

export default function Home() {
  return (
    <main>
      <AnnouncementBar />
      <Header />

      <HeroSection />

      <CategorySection />
    </main>
  );
}