"use client";

import { redHatMono } from "@/modules/layout/fonts";
import { useEffect, useRef } from "react";
import { animate, text, stagger } from "animejs";

interface Props {
	slug: string;
	title: string;
	description: string;
}

export const ContentHeader = (props: Props) => {
	const titleRef = useRef<HTMLHeadingElement>(null);

	useEffect(() => {
		if (titleRef.current) {
			text.split(titleRef.current, {
				lines: { wrap: 'clip' },
			})
			.addEffect(({ lines }) => animate(lines, {
				y: { to: ['100%', '0%'] },
				duration: 750,
				ease: 'out(3)',
				delay: stagger(200),
			}));
		}
	}, []);

	return (
		<section className="w-full px-4 lg:w-3/5 gap-4 my-8 lg:flex ">
			<div className="lg:w-1/2">
				<h1
					ref={titleRef}
					className={`text-4xl lg:text-5xl font-medium mb-6 ${redHatMono.className}`}
				>
					{props.title}
				</h1>
				<p className="text-2xl text-zinc-700 mb-6">{props.description}</p>
			</div>

			<img
				className="select-none rounded-md lg:w-1/2 aspect-video object-cover"
				src={`/content/${props.slug}/assets/main.jpg`}
				alt={props.title}
			/>
		</section>
	);
};
