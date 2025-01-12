import { CardGrid } from "@/modules/home/components/CardGrid";

export const Home = () => {
    return (
        <>
            <main className="flex flex-col items-center">
                <h1 className="w-11/12 lg:w-3/4 flex justify-start text-3xl mt-16 font-medium">
                    Stories about engineering <br/>and life, by Sathira.
                </h1>
                <CardGrid />
            </main>
        </>);
};
