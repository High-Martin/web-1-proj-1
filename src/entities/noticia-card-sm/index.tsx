type NoticiaCardSmProps = {
  urlImagem: string;
  titulo: string;
};

export function NoticiaCardSm({ urlImagem, titulo }: NoticiaCardSmProps) {
  return (
    <div className="flex flex-row items-center gap-[15px]">
      <img
        src={urlImagem}
        alt={titulo}
        className="w-[72px] h-[72px] object-cover rounded-[10px]"
      />
      <h4 className="text-secondary font-medium text-[13px] text-ellipsis line-clamp-3 hover:underline">
        {titulo}
      </h4>
    </div>
  );
}
