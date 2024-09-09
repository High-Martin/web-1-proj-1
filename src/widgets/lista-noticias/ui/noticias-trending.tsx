import { NoticiaCardSm } from "@/entities/noticia-card-sm";
import { SectionTitle } from "@/entities/section-title";
import { getNoticiasTrending } from "@/shared/lib/noticias";
import { Link } from "react-router-dom";

export function ListaNoticiasTrending() {
  const trendings = getNoticiasTrending();
  return (
    <div className="flex flex-col w-[300px]">
      <SectionTitle title="Trending" />
      {trendings.map((trending) => (
        <Link to={`/noticia/${trending.slug}`} className="mb-[15px]">
          <NoticiaCardSm
            key={trending.slug}
            urlImagem={trending.urlCapa}
            titulo={trending.titulo}
          />
        </Link>
      ))}
    </div>
  );
}
