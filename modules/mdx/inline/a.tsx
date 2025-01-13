import type { AnchorHTMLAttributes } from "react";

export const A = (props: AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a
        className="text-teal-500 hover:text-orange-500 visited:text-yellow-500 underline transition-colors"
        target={props.href?.startsWith("http") ? "_blank" : undefined}
        rel={props.href?.startsWith("http") ? "noopener noreferrer" : undefined}
        {...props}
    />
);
