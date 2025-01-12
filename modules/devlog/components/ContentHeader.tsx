import { redHatMono } from "@/app/layout";

interface Props {
	slug: string;
	title: string;
	description: string;
}

export const ContentHeader = (props: Props) => {
	return (
		<section className="w-11/12 lg:w-1/2 my-8 flex ">
			<div className="w-1/2">
				<h1
					className={`text-4xl lg:text-5xl font-medium mb-6 ${redHatMono.className}`}
				>
					{props.title}
				</h1>
				<p className="text-2xl text-zinc-700 mb-6">{props.description}</p>
			</div>

			<img
				className="select-none rounded-md w-1/2 aspect-video object-cover"
				src={`/content/${props.slug}/assets/main.jpg`}
				alt={props.title}
			/>
		</section>
	);
};
