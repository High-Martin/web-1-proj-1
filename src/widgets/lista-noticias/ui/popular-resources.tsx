import { NoticiaCardSm } from "@/entities/noticia-card-sm";
import { SectionTitle } from "@/entities/section-title";
import { getPopularResources } from "@/shared/lib/noticias";
import { Link } from "react-router-dom";

export function ListaPopularResources() {
  const popularResources = getPopularResources();
  return (
    <div className="flex flex-col w-[300px]">
      <SectionTitle title="Popular Resources" />
      {popularResources.map((resource) => (
        <Link to={resource.url} className="mb-[15px]">
          <NoticiaCardSm
            key={resource.titulo}
            titulo={resource.titulo}
            urlImagem={resource.urlCapa}
          />
        </Link>
      ))}
    </div>
  );
}
