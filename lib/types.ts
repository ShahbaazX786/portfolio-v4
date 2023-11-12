import { StaticImageData } from "next/image";
import { HeaderLinks } from "./data";

export type ProjectCardProps = {
  title: string;
  description: string;
  tags: string[];
  imageUrl: StaticImageData;
};

export type LinkType = (typeof HeaderLinks)[number]["name"];

export type ActiveSectionContextType = {
  activeLink: LinkType;
  setActiveLink: React.Dispatch<React.SetStateAction<LinkType>>;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};
export interface ActiveSectionContextProviderProps {
  children: React.ReactNode;
};