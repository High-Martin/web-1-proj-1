import { NoticiaTrending } from "@/shared/lib/types";
import { Link } from "react-router-dom";

type NoticiaTrendingCardProps = {
  noticia: NoticiaTrending;
};

export function NoticiaTrendingCard({ noticia }: NoticiaTrendingCardProps) {
  return (
    <Link to={`/noticia/${noticia.slug}`} className="mb-[15px]">
      <div className="flex flex-row items-center gap-[15px]">
        <img
          src={noticia.urlCapa}
          alt={noticia.titulo}
          className="w-[72px] h-[72px] object-cover rounded-[10px]"
        />
        <h4 className="text-secondary font-medium text-[13px] text-ellipsis line-clamp-3 hover:underline">
          {noticia.titulo}
        </h4>
      </div>
    </Link>
  );
}
