import { StaticImageData } from "next/image"

export type ProjectCardProps = {
    title:string,
    description:string,
    tags:string[],
    imageUrl:StaticImageData,
}