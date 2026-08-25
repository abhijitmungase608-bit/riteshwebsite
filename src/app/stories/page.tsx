import StoriesSection from "@/components/StoriesSection";

export const metadata = {
  title: "Love Stories | Real Wedding Chronicles | Ritesh Gujarathi Photography",
  description:
    "Read the beautiful love stories of our couples from Ahilyanagar, Pune, Lonavala, Udaipur, Goa, and beyond.",
};

export default function StoriesPage() {
  return (
    <main className="py-6 sm:py-10">
      <StoriesSection />
    </main>
  );
}