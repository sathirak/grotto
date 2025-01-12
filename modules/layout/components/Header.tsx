"use client"
import { SeasonalIcon } from "@/modules/layout/components/SeasonalIcon";
import { useState } from "react";

export const Header = () => {
    const [iconIndex, setIconIndex] = useState(0);

    const handleNextIcon = () => {
        setIconIndex((prev) => (prev + 1) % 6);
    };

    return (
        <header className="z-10 top-0 bg-white sticky flex justify-between items-center p-4 w-full border-b" onClick={handleNextIcon}>
            <a href="/" className="flex items-center gap-4">
                <SeasonalIcon
                    className="size-10"
                    alt="Grotto Logo"
                    currentIndex={iconIndex}
                />
                <h1 className="font-medium text-2xl select-none">Grotto</h1>
            </a>
        </header>
    );
};
