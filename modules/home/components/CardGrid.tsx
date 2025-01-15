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
		<section className="w-full lg:w-3/4 grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 my-12">
			{cardData.map((card) => (
				<Card key={card.title} {...card} />
			))}
		</section>
	);
};
