import type { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
	<svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 18 18" stroke="currentColor" {...props}>
		<title>{"clipboard"}</title>
		<g
			fill="none"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={1.5}
		>
			<path d="M6.25 2.75h-1a2 2 0 0 0-2 2v9.5a2 2 0 0 0 2 2h7.5a2 2 0 0 0 2-2v-9.5a2 2 0 0 0-2-2h-1" />
			<rect width={5.5} height={3} x={6.25} y={1.25} rx={1} ry={1} />
		</g>
	</svg>
);
export { SvgComponent as ClipboardIcon };
