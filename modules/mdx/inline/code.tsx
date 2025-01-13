"use client";

interface Props {
	className?: string;
	children: string;
}

export const Code = (data: Props) => (
	<code className="text-sm border block p-4 my-4 rounded-md text-wrap break-all">
		{data.children}
	</code>
);
