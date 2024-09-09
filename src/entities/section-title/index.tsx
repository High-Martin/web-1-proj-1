import "./styles.css";

export function SectionTitle({ title }: { title: string }) {
  return (
    <h2 className="text-foreground trendingTitle mb-[20px] pb-[2px] text-xl font-bold">
      {title}
    </h2>
  );
}
