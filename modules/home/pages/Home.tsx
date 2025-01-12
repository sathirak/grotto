import { CardGrid } from "@/modules/home/components/CardGrid";

export const Home = () => {
	return (
		<>
			<main className="flex flex-col items-center">
				<h1 className="w-11/12 lg:w-3/4 text-3xl mt-16 font-medium">
					Stories about life <br />
					and engineering, by{" "}
					<span className="bg-gradient-to-r from-teal-500 via-orange-500 to-yellow-500 text-transparent bg-clip-text">
						Sathira.
					</span>
				</h1>
				<CardGrid />
			</main>
		</>
	);
};
