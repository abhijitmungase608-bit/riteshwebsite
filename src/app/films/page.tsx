import FilmsSection from "@/components/FilmsSection";

export const metadata = {
  title: "Cinematic Wedding Films & Teasers | Ritesh Gujarathi Photography",
  description:
    "Watch our 4K cinematic wedding trailers, pre-wedding films, and ceremony highlights by Ritesh Gujarathi.",
};

export default function FilmsPage() {
  return (
    <main className="py-6 sm:py-10">
      <FilmsSection />
    </main>
  );
}