// Single source of truth for every project case-study page.
// Drives two things: the previous/next arrows at the bottom of each project page
// (they follow the order of this array) and the carousel on the portfolio page.

import alMokhtarThumb from "@/assets/portfolio/AlMukhtar.webp";
import valorThumb from "@/assets/projects/valor/flags.webp";
import lovinThymeThumb from "@/assets/projects/lovin-thyme/mankoushe-packaging.webp";
import mindClinicsThumb from "@/assets/projects/mind-clinics/clinic-window.webp";
import cortinaThumb from "@/assets/projects/cortina/sandwich-sky.webp";
import domaineDesCedresThumb from "@/assets/projects/domaine-des-cedres/bottle-in-olives.webp";
import forthAndGyftedThumb from "@/assets/projects/forth-and-gyfted/storefront-sign.webp";
import lesDouceursDeNawalThumb from "@/assets/projects/les-douceurs-de-nawal/shopping-bag.webp";
import mahmoudRasmiThumb from "@/assets/projects/mahmoud-rasmi/notebook-granada.webp";
import matterlabThumb from "@/assets/projects/matterlab/material-samples.webp";
import sajpanThumb from "@/assets/projects/sajpan/menu-checkered.webp";
import twigoThumb from "@/assets/projects/twigo/billboard.webp";
import zadThumb from "@/assets/projects/zad/packaging-range.webp";

export interface ProjectSummary {
  slug: string;
  title: string;
  path: string;
  thumbnail: string;
  /**
   * Projects that already have their own tile in the portfolio grid are excluded
   * from the "More Projects" carousel so nothing is shown twice on that page.
   */
  inPortfolioGrid: boolean;
}

export const projects: ProjectSummary[] = [
  {
    slug: "al-mokhtar",
    title: "Al Mukhtar - UAE",
    path: "/projects/al-mokhtar",
    thumbnail: alMokhtarThumb,
    inPortfolioGrid: true,
  },
  {
    slug: "valor",
    title: "Valor - UK",
    path: "/projects/valor",
    thumbnail: valorThumb,
    inPortfolioGrid: true,
  },
  {
    slug: "lovin-thyme",
    title: "Lovin'thyme - London, UK",
    path: "/projects/lovin-thyme",
    thumbnail: lovinThymeThumb,
    inPortfolioGrid: true,
  },
  {
    slug: "mind-clinics",
    title: "MIND Clinics - Beirut, Lebanon",
    path: "/projects/mind-clinics",
    thumbnail: mindClinicsThumb,
    inPortfolioGrid: true,
  },
  {
    slug: "cortina",
    title: "Cortina - Lebanon",
    path: "/projects/cortina",
    thumbnail: cortinaThumb,
    inPortfolioGrid: false,
  },
  {
    slug: "domaine-des-cedres",
    title: "Domaine des Cèdres - Jezzine, Lebanon",
    path: "/projects/domaine-des-cedres",
    thumbnail: domaineDesCedresThumb,
    inPortfolioGrid: false,
  },
  {
    slug: "forth-and-gyfted",
    title: "Forth & Gyfted - Kuwait",
    path: "/projects/forth-and-gyfted",
    thumbnail: forthAndGyftedThumb,
    inPortfolioGrid: false,
  },
  {
    slug: "les-douceurs-de-nawal",
    title: "Les Douceurs de Nawal - Beirut, Lebanon",
    path: "/projects/les-douceurs-de-nawal",
    thumbnail: lesDouceursDeNawalThumb,
    inPortfolioGrid: false,
  },
  {
    slug: "mahmoud-rasmi",
    title: "Mahmoud Rasmi - Salamanca, Spain",
    path: "/projects/mahmoud-rasmi",
    thumbnail: mahmoudRasmiThumb,
    inPortfolioGrid: false,
  },
  {
    slug: "matterlab",
    title: "Matterlab - Beirut, Lebanon",
    path: "/projects/matterlab",
    thumbnail: matterlabThumb,
    inPortfolioGrid: false,
  },
  {
    slug: "sajpan",
    title: "SAJPAN - Chicago",
    path: "/projects/sajpan",
    thumbnail: sajpanThumb,
    inPortfolioGrid: false,
  },
  {
    slug: "twigo",
    title: "Twigo - Global",
    path: "/projects/twigo",
    thumbnail: twigoThumb,
    inPortfolioGrid: false,
  },
  {
    slug: "zad",
    title: "Zad - Lebanon",
    path: "/projects/zad",
    thumbnail: zadThumb,
    inPortfolioGrid: false,
  },
];

/** Projects shown in the portfolio page carousel (everything not already in the grid). */
export const carouselProjects = projects.filter((p) => !p.inPortfolioGrid);

/**
 * Previous/next project for the arrows at the bottom of a project page.
 * The list wraps around, so both arrows always lead somewhere.
 */
export function getProjectNeighbors(slug: string): {
  previous?: string;
  next?: string;
} {
  const index = projects.findIndex((project) => project.slug === slug);
  if (index === -1) return {};

  return {
    previous: projects[(index - 1 + projects.length) % projects.length].path,
    next: projects[(index + 1) % projects.length].path,
  };
}
