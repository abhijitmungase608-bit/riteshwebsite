import PortfolioSection from "@/components/PortfolioSection";

export const metadata = {
  title: "Portfolio | Luxury Wedding Photography Gallery | Ritesh Gujarathi",
  description:
    "Explore our full gallery of destination weddings, pre-wedding romance, haldi celebrations, and bridal portraits by Ritesh Gujarathi.",
};

export default function PortfolioPage() {
  return (
    <main className="py-6 sm:py-10">
      <PortfolioSection />
    </main>
  );
}