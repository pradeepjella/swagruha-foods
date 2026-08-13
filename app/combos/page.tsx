import AnnouncementBar from "@/components/layout/AnnouncementBar";
import Header from "@/components/layout/Header";

import ComboHero from "@/components/combos/ComboHero";
import ComboOccasions from "@/components/combos/ComboOccasions";
import BuildYourCombo from "@/components/combos/BuildYourCombo";
import ComboBenefits from "@/components/combos/ComboBenefits";

export default function CombosPage() {
  return (
    <main className="min-h-screen bg-[#FFFDF7]">
      <AnnouncementBar />
      <Header />

      <ComboHero />
      <ComboOccasions />
      <BuildYourCombo />
      <ComboBenefits />
    </main>
  );
}