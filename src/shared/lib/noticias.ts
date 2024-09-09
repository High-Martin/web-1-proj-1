import { Noticia, NoticiaPreview, NoticiaTrending, Resource } from "./types";

const noticias: Noticia[] = [
  {
    slug: "not-1",
    urlCapa:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiKmMX999zXB84oRNczWEK4W8VodaujsXWikVA1avU_osbjwleTfC79P6nFmxp3rUPGQk3ZKNCc93KRO_m8cO5yTfCeksQxNdWJl5__OqjppwavG_7bYX0ZgAihKpCd3nJ5SApPf490exk3_j6suXuci9htjITCz2GYWVtZz6GZgsBwIOWMYERIQ_zvB9W7/s728-rw-e365/chinese-hacker.png",
    titulo: "macOS Version of HZ RAT Backdoor Targets Chinese Messaging App Users",
    dataPublicacao: new Date(),
    tags: ["Backdoor", "macOS"],
    resumo:
      "A new macOS version of the HZ RAT has been discovered in the wild, targeting users of the Chinese messaging app QQ. The backdoor is capable of exfiltrating files, capturing screenshots, and executing arbitrary commands on the infected machine.",
    autor: "John Doe",
    paragrafos: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec elit tincidunt interdum. Sed at turpis nec nunc ultricies mattis",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec elit tincidunt interdum. Sed at turpis nec nunc ultricies mattis"
    ]
  },
  {
    slug: "noticia-2",
    urlCapa:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh_E4LUK0YF-ig9M9pBoT67TAwZ_EzcZ2sYtFmzhIow9hXpx5A16jE5zkc9aXH0Bd7BdyNYmTDzEs1NnMvog-KgTlDRJw4Tfn1LX-0HBXpixC_qm2Z_0-aInNUMr8BnPDGGltxHtwJ3vMuBkzC3OFDmfEp1MXs1QmUMhui-LaqDgWWfSJqJ1dNGQSgxo1cu/s728-rw-e365/sonic.jpg",
    titulo: "SonicWall Issues Critical Patch for Firewall Vulnerability Allowing Unauthorized Access",
    dataPublicacao: new Date(),
    tags: ["Firewall", "Vulnerability"],
    resumo:
      "SonicWall has released a critical security patch for a vulnerability affecting its Network Security Appliance (NSA) and Secure Mobile Access (SMA) products. The flaw, tracked as CVE-2021-20016, could allow attackers to gain unauthorized access to the firewall.",
    autor: "Frank Doe",
    paragrafos: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec elit tincidunt interdum. Sed at turpis nec nunc ultricies mattis",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec elit tincidunt interdum. Sed at turpis nec nunc ultricies mattis"
    ]
  },
  {
    slug: "noticia-3",
    urlCapa:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjxsQTTiXQzZa0E3sRFj5kg95PFamXiK_e14EjTGgqYqB0J4YYdDecYS4NUlG6j7D-s6F-WfxIjnImbNssOObVnU3SUNgsBbzWA2lW5sgjl2q1JSP-s61TTlCORLhxKjR1J7-_5g8D_FK-HsxlWrNqNoxlWSK0ps8vzC5kFtitGfgrpWrQdGOWbg0QsOAEv/s728-rw-e365/Uber.png",
    titulo: "Dutch Regulator Fines Uber €290 Million for GDPR Violations in Data Transfers to U.S.",
    dataPublicacao: new Date(),
    tags: ["GDPR", "Data Protection"],
    resumo:
      "The Dutch Data Protection Authority (AP) has fined Uber €290 million for violating the General Data Protection Regulation (GDPR) in its data transfers to the U.S. The regulator found that the ride-hailing company failed to protect the personal data of its drivers and passengers.",
    autor: "Jane Doe",
    paragrafos: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec elit tincidunt interdum. Sed at turpis nec nunc ultricies mattis",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec elit tincidunt interdum. Sed at turpis nec nunc ultricies mattis"
    ]  
  },
];
  
export function getNoticiaBySlug(slug: string): Noticia | undefined {
  return noticias.find((noticia) => noticia.slug === slug);
}

export function getNoticiasPreview(): NoticiaPreview[] {
  return noticias.map((noticia) => ({
    slug: noticia.slug,
    urlCapa: noticia.urlCapa,
    titulo: noticia.titulo,
    dataPublicacao: noticia.dataPublicacao,
    tags: noticia.tags,
    resumo: noticia.resumo,
  }));
}

export function getNoticiasTrending(): NoticiaTrending[] {
  return noticias.map((noticia) => ({
    slug: noticia.slug,
    urlCapa: noticia.urlCapa,
    titulo: noticia.titulo,
  }));
}

export function getPopularResources(): Resource[] {
  return [
    {
      titulo: `2024's Must-Have Guide to Continuous Pentesting and Breach Prevention`,
      url: "https://thehackernews.uk/breachlock-appsec-2024",
      urlCapa: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjSsemQgdSQ5BRgV2-wOD8IhUEikfBvf9pnFZjMWXL8iwm8k4NShIi4gC8Ahc4QEs-su4bax-YJW-3cUQnZj6YEwcTv6QQxDliEb8XJWA24ZaFFh6fNV30JYQxeBIU6oXg9S7C9LOjDw2iM3Et6zVKOVxU5p7elyZmjpm7C9QxwXnp0zzaD3XWPveIk-bZW/s72-rw-e365/appsec.png",
    },
    {
      urlCapa: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhGrnPvz8ME-gEt4Oqh6f4QE2wKLf9G1tW7u4c4bwCy_oeWe4SuD6DgKs4YJLME3AlyWIqGYXfaegH6M1fEQYa_PEij7ztKAZSr1b0D6mhQXKU_ZVOOHh0HDhExU0QE_M-dq8DMDVQ0tDcxIjXWppVw-sW4ZVRjz9smV-S3-sW8WBrnxRIgwHlFmLZrcJQM/s72-rw-e365/bot.png",
      titulo: `Top 9 Chatbots Ranked: Which One Leaves Your Business Most Vulnerable?`,
      url: "https://www.reflectiz.com/learning-hub/chatbots-risk-exposure/",
    }
  ]
}
