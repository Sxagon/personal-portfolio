/**
 * Language-independent profile data.
 * Translatable texts (descriptions, placeholders, labels) live in /messages/cs.json and /messages/en.json.
 */

export const profile = {
  name: "Michal Lipka",

  // TODO: set NEXT_PUBLIC_SITE_URL (e.g. in .env.production) to the real domain, e.g. https://www.example.com
  // Used for canonical URLs, hreflang, sitemap, robots.txt and Open Graph.
  siteUrl: (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/$/, ""),
  email: "lipka.michal@batlify.com",
  github: "https://github.com/Sxagon",
  linkedin: "https://www.linkedin.com/in/lipka-michal/",
  startYear: 2019,

  // TODO: replace with your own photo, e.g. "/photo.jpg" placed in /public.
  // The current image is a stock placeholder (Unsplash).
  photo: "/photo-placeholder.jpg",

  // TODO: put your CV into /public (e.g. /public/cv.pdf) and set the path here.
  // While null, the "Download CV" button is hidden.
  cvUrl: null as string | null,
};

/** Tech stack shown as stickers. `logo` is a path to an image in /public/logos. */
export type StackItem = {
  name: string;
  logo: string;
};

export type StackGroup = {
  id: "languages" | "databases" | "frameworks" | "infrastructure";
  items: StackItem[];
};

export const stack: StackGroup[] = [
  {
    id: "languages",
    items: [
      { name: "PHP", logo: "/logos/php.svg" },
      { name: "JavaScript", logo: "/logos/javascript.svg" },
      { name: "TypeScript", logo: "/logos/typescript.svg" },
      { name: "Python", logo: "/logos/python.svg" },
      { name: "Java", logo: "/logos/java.svg" },
    ],
  },
  {
    id: "databases",
    items: [
      { name: "MySQL", logo: "/logos/mysql.svg" },
      { name: "MariaDB", logo: "/logos/mariadb.svg" },
      { name: "PostgreSQL", logo: "/logos/postgresql.svg" },
      { name: "Microsoft SQL", logo: "/logos/mssql.svg" },
      { name: "Redis", logo: "/logos/redis.svg" },
      { name: "KeyDB", logo: "/logos/keydb.svg" },
    ],
  },
  {
    id: "frameworks",
    items: [
      { name: "Next.js", logo: "/logos/nextjs.svg" },
      { name: "Laravel", logo: "/logos/laravel.svg" },
      { name: "Vue.js", logo: "/logos/vue.svg" },
      { name: "Expo", logo: "/logos/expo.svg" },
    ],
  },
  {
    id: "infrastructure",
    items: [
      { name: "Docker", logo: "/logos/docker.svg" },
      { name: "Kubernetes", logo: "/logos/kubernetes.svg" },
      { name: "gVisor", logo: "/logos/gvisor.png" },
      { name: "Proxmox", logo: "/logos/proxmox.svg" },
      { name: "Firecracker", logo: "/logos/firecracker.png" },
      { name: "Kata Containers", logo: "/logos/kata.svg" },
      { name: "OPNsense", logo: "/logos/opnsense.svg" },
    ],
  },
];
