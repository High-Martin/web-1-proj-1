import { Rodape } from "@/entities/rodape";
import { ListaNoticiasTrending } from "@/widgets/lista-noticias-trending";
import { ListaNoticias } from "@/widgets/lista-noticias/ui";
import { TopArea } from "@/widgets/top-area/ui";

export function HackerNewsPage() {
  return (
    <div className="flex flex-col h-svh w-svw ">
      <TopArea />
      <div className="flex flex-row mt-10 mx-auto max-w-[766px] md:max-w-[1110px] px-[20px]">
        <ListaNoticias />

        <ListaNoticiasTrending />
      </div>
      <Rodape />
    </div>
  );
}
