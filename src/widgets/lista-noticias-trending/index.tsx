import { NoticiaTrendingCard } from "@/entities/noticia-trending-card";
import { getNoticiasTrending } from "@/shared/lib/noticias";
import "./styles.css";

export function ListaNoticiasTrending() {
  const trendings = getNoticiasTrending();
  return (
    <div className="flex flex-col w-[300px]">
      <h2 className="text-foreground trendingTitle mb-[20px] pb-[2px] text-xl font-bold">
        Trending News
      </h2>
      {trendings.map((trending) => (
        <NoticiaTrendingCard key={trending.slug} noticia={trending} />
      ))}
    </div>
  );
}
