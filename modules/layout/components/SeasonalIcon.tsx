import Image from 'next/image';

import FarmlandImage from "@/public/assets/icons/farmland.png";
import NatureImage from "@/public/assets/icons/nature.png";
import SnowImage from "@/public/assets/icons/snow.png";
import MountainImage from "@/public/assets/icons/mountain.png";
import IceImage from "@/public/assets/icons/ice.png";
import CaveImage from "@/public/assets/icons/cave.png";


interface Props {
    className?: string;
    alt: string;
    currentIndex: number;
}

export const SeasonalIcon = (props: Props) => {
    const { currentIndex, ...imgProps } = props;
    const icons = [FarmlandImage, NatureImage, SnowImage, MountainImage, IceImage, CaveImage];

    const currentIcon = icons[currentIndex];

    return (
        <Image 
            src={currentIcon} 
            width={100} 
            height={100} 
            {...imgProps} 
        />
    );
};
