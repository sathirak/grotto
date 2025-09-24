"use client";

import { ContentHeader } from "@/modules/devlog/components/ContentHeader";
import { ScrollGuide } from '@/modules/devlog/components/ScrollGuide';
import { redHatText } from "@/modules/layout/fonts";

interface Props {
	children: React.ReactNode;
	slug: string;
	title: string;
	description: string;
}

export const Devlog = (props: Props) => {
	return (
		<main className={"flex flex-col items-center relative"}>
			<ScrollGuide />
			<ContentHeader
				slug={props.slug}
				title={props.title}
				description={props.description}
			/>
			<section
				className={`w-full px-4 lg:w-1/2 my-8 text-lg ${redHatText.className}`}
			>
				{props.children}
			</section>
		</main>
	);
};
