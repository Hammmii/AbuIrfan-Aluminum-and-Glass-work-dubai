import type { IconName } from "@/components/icons";

/** Headline stats for the Home stats band (tabular figures, count-up). */
export const stats = [
  { value: 18, suffix: "+", label: "Years of craft" },
  { value: 2400, suffix: "+", label: "Projects delivered", format: "compact" as const },
  { value: 15, suffix: "+", label: "Specialist services" },
] as const;

/** UAE-wide is a non-numeric stat; render it separately if needed. */
export const coverageStat = { value: "UAE-wide", label: "Coverage" } as const;

export type ClimateItem = {
  iconName: IconName;
  stat: string;
  title: string;
  response: string;
};

/** "Engineered for the Dubai climate" band — 4 Gulf challenges + our response. */
export const climate: ClimateItem[] = [
  {
    iconName: "climate-heat",
    stat: "40°C+ summers",
    title: "Gulf heat",
    response:
      "Thermal-break frames and double-glazing stop heat at the metal, so interiors stay cool and running costs stay low.",
  },
  {
    iconName: "climate-dust",
    stat: "Sand & dust",
    title: "Airborne dust",
    response:
      "Weather-rated sealing and optional mesh screens keep the desert outside without blocking airflow.",
  },
  {
    iconName: "climate-uv",
    stat: "High UV index",
    title: "UV exposure",
    response:
      "Laminated and reflective glazing cut glare and UV transmission while preserving natural light.",
  },
  {
    iconName: "climate-humidity",
    stat: "Coastal moisture",
    title: "Humidity & salt",
    response:
      "Marine-grade aluminium and corrosion-resistant finishes, specified for life near the coast.",
  },
];

export type ProcessStep = {
  index: string;
  title: string;
  iconName: IconName;
  description: string;
};

/** Five-step process timeline, connected by the GSAP self-drawing line. */
export const process: ProcessStep[] = [
  {
    index: "01",
    title: "Consult",
    iconName: "consult",
    description: "We visit the site, understand the space and confirm what success looks like for you.",
  },
  {
    index: "02",
    title: "Design",
    iconName: "design",
    description: "Sized and finished to your property — every system specified for the Gulf climate.",
  },
  {
    index: "03",
    title: "Fabricate",
    iconName: "fabricate",
    description: "Precision-cut and assembled in-house, so quality is controlled start to finish.",
  },
  {
    index: "04",
    title: "Install",
    iconName: "install",
    description: "Clean, careful installation by the same team that designed and built it.",
  },
  {
    index: "05",
    title: "Handover",
    iconName: "handover",
    description: "Finished to a standard you can see and feel, with aftercare on call.",
  },
];
