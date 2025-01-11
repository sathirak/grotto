import Image from "next/image";
import GrottoImage from "@/public/assets/grotto.png";

export const Header = () => {
    return (
        <header className=" z-10 top-0 bg-white sticky flex justify-between items-center p-4 w-full border-b">
            <a href="/" className="flex items-center gap-4">
                <Image className="size-10" src={GrottoImage} alt="Grotto Logo" width={100} height={100}/>
                <h1 className=" font-medium text-2xl">Grotto</h1>
            </a>
        </header>
    );
};
