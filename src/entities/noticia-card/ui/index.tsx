import { NoticiaPreview } from "@/shared/lib/types";
import { Card, CardContent } from "@/shared/ui/card";
import { faCalendarAlt } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { date2String } from "../lib/utils";

export function NoticiaCard({ noticia }: { noticia: NoticiaPreview }) {
  return (
    <Link to={`/noticia/${noticia.slug}`} className="mb-[20px]">
      <Card className="border-none shadow-none">
        <CardContent className="flex gap-4 p-0">
          <div className="w-full sm:w-[30%] md:w-2/5 overflow-hidden shrink-0">
            <img
              src={noticia.urlCapa}
              alt={noticia.titulo}
              width={728}
              className="rounded-[10px] w-full object-contain hover:scale-105 transition-all duration-300"
            />
          </div>
          <div className="flex flex-col">
            <h1 className="text-foreground hover:underline text-[17px] leading-[28.05px] font-bold">
              {noticia.titulo}
            </h1>
            <div className="flex items-center text-gray-500 text-xs gap-5 py-[5px] leading-7">
              <div className="flex items-center gap-2">
                <FontAwesomeIcon icon={faCalendarAlt} />
                {date2String(noticia.dataPublicacao)}
              </div>
              <div>{noticia.tags.join(" / ")}</div>
            </div>
            <div className="text-[13px] text-gray-500 text-ellipsis line-clamp-2 pr-[5%]">
              {noticia.resumo}
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
