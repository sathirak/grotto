import { Card } from "@/modules/home/components/Card";

export const CardGrid = () => {
	const cardData = [
		{
			title: "Omarchy, a Linux distro by DHH",
			date: new Date("2025-09-26T20:26:00"),
			readTime: "5 min read",
			slug: "omarchy-a-linux-distro-by-dhh",
			image: {
				alt: "Homelab Static image",
			},
		},
		{
			title: "Healthcheck Everything, Everywhere, All at Once with PulseBridge",
			date: new Date("2025-09-14T20:26:00"),
			readTime: "2 min read",
			slug: "healthcheck-everything-using-pulsebridge",
			image: {
				alt: "Homelab Static image",
			},
		},
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
