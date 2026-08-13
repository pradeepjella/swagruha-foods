import AnnouncementBar from "@/components/layout/AnnouncementBar";
import Header from "@/components/layout/Header";

import CategoryHero from "@/components/categories/CategoryHero";
import CategoryJourney from "@/components/categories/CategoryJourney";

export default function CategoriesPage() {
  return (
    <main className="min-h-screen bg-[#FFFDF7]">
      <AnnouncementBar />
      <Header />

      <CategoryHero />
      <CategoryJourney />
    </main>
  );
}