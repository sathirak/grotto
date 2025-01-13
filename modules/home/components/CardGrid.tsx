import { Card } from "@/modules/home/components/Card";

export const CardGrid = () => {
	const cardData = [
		{
			title: "My first MDX blog post",
			date: new Date("2025-01-12"),
			readTime: "2 min read",
			slug: "elements",
			image: {
				alt: "Blog Placeholder Image",
			},
		},
	];

	return (
		<section className="w-11/12 lg:w-3/4 grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 my-12">
			{cardData.map((card) => (
				<Card key={card.title} {...card} />
			))}
		</section>
	);
};
