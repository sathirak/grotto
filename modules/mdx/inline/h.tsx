import type { HTMLAttributes } from "react";
import { redHatMono } from "@/modules/layout/fonts";

const slugify = (text?: string): string => {
	if (!text) return "";
	return text
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, "-")
		.replace(/(^-|-$)/g, "");
};

export const H1 = (props: HTMLAttributes<HTMLHeadingElement>) => {
	const id = slugify(props.children?.toString());
	return (
		<h1
			className={`text-4xl font-medium mt-8 mb-4 hover:text-zinc-600 transition-colors ${redHatMono.className}`}
			{...props}
			id={id}
		>
			<a href={`#${id}`}>
				{props.children}
			</a>
		</h1>
	);
};

export const H2 = (props: HTMLAttributes<HTMLHeadingElement>) => {
	const id = slugify(props.children?.toString());
	return (
		<h2
			className={`text-3xl font-medium mt-8 mb-4 hover:text-zinc-600 transition-colors ${redHatMono.className}`}
			{...props}
			id={id}
		>
			<a href={`#${id}`}>
				{props.children}
			</a>
		</h2>
	);
};

export const H3 = (props: HTMLAttributes<HTMLHeadingElement>) => {
	const id = slugify(props.children?.toString());
	return (
		<h3
			className={`text-2xl font-medium mt-6 mb-3 hover:text-zinc-600 transition-colors ${redHatMono.className}`}
			{...props}
			id={id}
		>
			<a href={`#${id}`}>
				{props.children}
			</a>
		</h3>
	);
};

export const H4 = (props: HTMLAttributes<HTMLHeadingElement>) => {
	const id = slugify(props.children?.toString());
	return (
		<h4
			className={`text-xl font-medium mt-6 mb-3 hover:text-zinc-600 transition-colors ${redHatMono.className}`}
			{...props}
			id={id}
		>
			<a href={`#${id}`}>
				{props.children}
			</a>
		</h4>
	);
};

export const H5 = (props: HTMLAttributes<HTMLHeadingElement>) => {
	const id = slugify(props.children?.toString());
	return (
		<h5
			className={`text-lg font-medium mt-4 mb-2 hover:text-zinc-600 transition-colors ${redHatMono.className}`}
			{...props}
			id={id}
		>
			<a href={`#${id}`}>
				{props.children}
			</a>
		</h5>
	);
};

export const H6 = (props: HTMLAttributes<HTMLHeadingElement>) => {
	const id = slugify(props.children?.toString());
	return (
		<h6
			className={`text-base font-medium mt-4 mb-2 hover:text-zinc-600 transition-colors ${redHatMono.className}`}
			{...props}
			id={id}
		>
			<a href={`#${id}`}>
				{props.children}
			</a>
		</h6>
	);
};
