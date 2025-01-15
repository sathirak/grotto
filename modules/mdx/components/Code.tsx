"use client";
import { ClipboardCheckIcon } from "@/modules/icons/ClipboardCheck";
import { ClipboardIcon } from "@/modules/icons/Clipboard";
import { useState, useEffect } from "react";
import type { BundledLanguage } from "shiki";
import { codeToHtml } from "shiki";

interface Props {
	lang: string;
	code: BundledLanguage;
	file: string;
}

export const Code = (props: Props) => {
	const [copied, setCopied] = useState(false);
	const [highlighted, setHighlighted] = useState("");

	useEffect(() => {
		codeToHtml(props.code, {
			lang: props.lang,
			theme: "catppuccin-latte",
			defaultColor: false,
		}).then((html) => setHighlighted(html));
	}, [props.code, props.lang]);

	const setClipboardContent = () => {
		navigator.clipboard.writeText(props.code);
		setCopied(true);
		setTimeout(() => setCopied(false), 2000);
	};

	return (
		<article>
			<div className="relative text-sm border block p-4 my-4 rounded-md overflow-hidden">
				<div className="flex justify-between items-center pb-4">
					<h6>{props.file?.trim()}</h6>
					<button
						type="button"
						onClick={setClipboardContent}
						className="p-1 hover:bg-gray-100 rounded-md"
						title="Copy to clipboard"
					>
						{copied ? (
							<ClipboardCheckIcon className="size-4" />
						) : (
							<ClipboardIcon className="size-4" />
						)}
					</button>
				</div>
				<div className="overflow-x-auto">
					<code
						// biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
						dangerouslySetInnerHTML={{ __html: highlighted }}
					/>
				</div>
			</div>
		</article>
	);
};
