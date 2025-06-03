import { Card } from "@/modules/home/components/Card";

export const CardGrid = () => {
	const cardData = [
		{
			title: "Homelab Part 2, Kubernetes",
			date: new Date("2025-01-15"),
			readTime: "5 min read",
			slug: "homelab-part-2-kubernetes",
			image: {
				alt: "ArgoCD login page",
			},
		},
		{
			title: "Homelab Part 1, Terraform",
			date: new Date("2025-01-13"),
			readTime: "5 min read",
			slug: "homelab-part-1-terraform",
			image: {
				alt: "Homelab Static image",
			},
		},
	];

	return (
		<section className="w-full lg:w-3/4 grid grid-cols-1 gap-4 sm:gap-6 md:gap-8 lg:gap-10 sm:grid-cols-2 xl:grid-cols-3 my-8 sm:my-12 px-4 sm:px-0">
			{cardData.map((card) => (
				<Card key={card.title} {...card} />
			))}
		</section>
	);
};
