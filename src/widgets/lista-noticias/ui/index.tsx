import { NoticiaCard } from "@/entities/noticia-card/ui";
import { getNoticiasPreview } from "@/shared/lib/noticias";

export function ListaNoticias() {
  const noticias = getNoticiasPreview();
  return (
    <div className="flex flex-col w-full lg:w-[770px] pr-[42px]">
      {noticias.map((noticia) => (
        <NoticiaCard key={noticia.slug} noticia={noticia} />
      ))}
    </div>
  );
}
