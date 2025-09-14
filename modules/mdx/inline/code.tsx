"use client";

interface Props {
	className?: string;
	children: string;
}

export const Code = (data: Props) => (
	<code className="text-sm border inline p-1 px-3 rounded-sm text-wrap break-all">
		{data.children}
	</code>
);
