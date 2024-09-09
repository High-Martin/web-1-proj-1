import { date2String } from "@/entities/noticia-card/lib/utils";
import { Noticia } from "@/shared/lib/types";
import { faCalendarAlt } from "@fortawesome/free-regular-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles.css";

export function ConteudoNoticia({ noticia }: { noticia: Noticia }) {
  return (
    <div className="lg:pr-[42px] pr-[0px] flex flex-col">
      <div className="flex justify-between leading-[40px] text-[13px]">
        <div className="flex gap-3">
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faCalendarAlt} />
            <div>{date2String(noticia.dataPublicacao)}</div>
          </div>
          <div className="flex gap-1 items-center">
            <FontAwesomeIcon icon={faUser} />
            <div>{noticia.autor}</div>
          </div>
        </div>
        <div>{noticia.tags.join(" / ")}</div>
      </div>
      <img
        src={noticia.urlCapa}
        alt={noticia.titulo}
        className="rounded-[10px]"
      />
      {noticia.paragrafos.map((paragrafo, index) => (
        <p
          key={index}
          className="mt-[22px] noticia-paragrafo"
          dangerouslySetInnerHTML={{ __html: paragrafo }}
        />
      ))}
    </div>
  );
}
