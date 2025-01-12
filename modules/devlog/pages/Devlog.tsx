import { redHatText } from "@/app/layout";
import { ContentHeader } from "@/modules/devlog/components/ContentHeader";

interface Props {
	children: React.ReactNode;
	slug: string;
	title: string;
	description: string;
}

export const Devlog = (props: Props) => {
	return (
		<main className={"flex flex-col items-center"}>
			<ContentHeader
				slug={props.slug}
				title={props.title}
				description={props.description}
			/>
			<section className={`w-11/12 lg:w-1/2 my-8 text-lg ${redHatText.className}`}>
				{props.children}
			</section>
		</main>
	);
};
