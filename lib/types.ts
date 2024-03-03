import { StaticImageData } from "next/image";
import { HeaderLinks } from "./data";
import { ReactElement } from "react";

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


export type customMessageDialogProps = {
  trigger: string | ReactElement;
  content?: string | ReactElement;
};

export type TooltipREProps = {
  trigger: string | ReactElement;
  tooltip: string;
  delay: number;
};

export type ContactCardProps = {
  icon: string | ReactElement;
  tag: string;
  social: string;
  username: string;
  link: string;
};

export type ThemeType = "light" | "dark";

export interface ActiveSectionContextProviderProps {
  children: React.ReactNode;
};

export interface EmailTemplateProps {
  userName: string;
}