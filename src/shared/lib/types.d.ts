
export type Tags = [string, string];
export type Noticia = {
    slug: string;
    urlCapa: string;
    titulo: string;
    dataPublicacao: date;
    tags: Tags;
    resumo: string;
    autor: string;
    paragrafos: string[];
}

export type NoticiaPreview = Pick<Noticia, 
    'slug' | 'urlCapa' | 'titulo' | 'dataPublicacao' | 'tags' | 'resumo'>;

export type NoticiaTrending = Pick<Noticia, 'slug' | 'urlCapa' | 'titulo'>;

export type Resource = {
    url: string;
    urlCapa: string;
    titulo: string;
}