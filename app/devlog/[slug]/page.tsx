import { Devlog } from "@/modules/devlog/pages/Devlog";
import type { Metadata, ResolvingMetadata } from "next/types";

export const dynamicParams = false;

export async function generateStaticParams() {
	return [
		{ slug: 'healthcheck-everything-using-pulsebridge' },
		{ slug: 'homelab-part-1-terraform' },
		{ slug: 'homelab-part-2-kubernetes' }
	];
}

export async function generateMetadata(
	props: Props,
	parent: ResolvingMetadata,
): Promise<Metadata> {
	const slug = (await props.params).slug;

	const { default: DevlogContent, ...metadata } = await import(
		`@/public/content/${slug}/main.mdx`
	);
	return {
		title: `${metadata.metadata.title} | Devlog`,
	};
}
interface Props {
	params: Promise<{ slug: string }>;
}

export default async function Page(props: Props) {
	const slug = (await props.params).slug;

	const { default: DevlogContent, ...metadata } = await import(
		`@/public/content/${slug}/main.mdx`
	);
	return (
		<Devlog slug={slug} {...metadata.metadata}>
			<DevlogContent />
		</Devlog>
	);
}
