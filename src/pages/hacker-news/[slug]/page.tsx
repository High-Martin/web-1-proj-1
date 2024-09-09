import { ConteudoNoticia } from "@/entities/conteudo-noticia";
import { Rodape } from "@/entities/rodape";
import { getNoticiaBySlug } from "@/shared/lib/noticias";
import { Noticia } from "@/shared/lib/types";
import { ListaNoticiasTrending } from "@/widgets/lista-noticias/ui/noticias-trending";
import { ListaPopularResources } from "@/widgets/lista-noticias/ui/popular-resources";
import { TopArea } from "@/widgets/top-area/ui";

import { useParams } from "react-router-dom";

export function NoticiaDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const noticia: Noticia | undefined = getNoticiaBySlug(slug || "");

  if (!noticia) {
    return <div>Notícia não encontrada</div>;
  }

  return (
    <div className="flex flex-col">
      <TopArea />
      <main className="min-h-screen max-w-[766px] md:max-w-[1110px] m-auto">
        <div className="flex flex-col mt-10">
          <h1 className="text-foreground font-black text-[32px] px-[20px] leading-[43px]">
            {noticia.titulo}
          </h1>
          <div className="px-[20px] flex flex-row">
            <ConteudoNoticia noticia={noticia} />
            <div className="hidden flex-col lg:flex">
              <ListaNoticiasTrending />
              <ListaPopularResources />
            </div>
          </div>
        </div>
      </main>
      <Rodape />
    </div>
  );
}
