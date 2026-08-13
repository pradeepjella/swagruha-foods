import AnnouncementBar from "@/components/layout/AnnouncementBar";
import Header from "@/components/layout/Header";
import ProductsClient from "@/components/products/ProductsClient";

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-[#FFFDF7]">
      <AnnouncementBar />
      <Header />

      <ProductsClient />
    </main>
  );
}