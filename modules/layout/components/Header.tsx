import { SeasonalIcon } from "@/modules/layout/components/SeasonalIcon";

export const Header = () => {

    return (
        <header
            className="z-10 top-0 sticky flex justify-between items-center p-4 w-full bg-white bg-clip-padding backdrop-filter  backdrop-blur-sm bg-opacity-40 backdrop-saturate-100 backdrop-contrast-100"
        >
            <a href="/" className="flex items-center gap-4 select-none cursor-pointer">
                <SeasonalIcon
                    className="size-10"
                    alt="Grotto Logo"
                />
                <span className="font-medium text-2xl select-none">Grotto</span>
            </a>
        </header>
    );
};
