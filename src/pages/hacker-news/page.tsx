import { Rodape } from "@/entities/rodape";
import { ListaNoticias } from "@/widgets/lista-noticias/ui";
import { ListaNoticiasTrending } from "@/widgets/lista-noticias/ui/noticias-trending";
import { ListaPopularResources } from "@/widgets/lista-noticias/ui/popular-resources";
import { TopArea } from "@/widgets/top-area/ui";

export function HackerNewsPage() {
  return (
    <div className="flex flex-col">
      <div className="min-h-screen w-full">
        <TopArea />
        <div className="flex flex-row mt-10 mx-auto max-w-[766px] md:max-w-[1110px] px-[20px]">
          <ListaNoticias />
          <div className="hidden lg:flex flex-col gap-[10px]">
            <ListaNoticiasTrending />
            <ListaPopularResources />
          </div>
        </div>
      </div>
      <Rodape />
    </div>
  );
}
