import { FormSubscribe } from "@/entities/form-subscribe/ui";
import { Rodape } from "@/entities/rodape";
import { TopArea } from "@/widgets/top-area/ui";

export function SubscribePage() {
  return (
    <div className="flex flex-col">
      <div className="min-h-screen w-full">
        <TopArea />
        <div className="flex flex-row mt-10 mx-auto max-w-[766px] md:max-w-[1110px] px-[20px]">
          <FormSubscribe />
        </div>
      </div>
      <Rodape />
    </div>
  );
}
