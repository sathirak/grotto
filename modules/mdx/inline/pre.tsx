import type { HTMLAttributes } from "react";

export const Pre = (props: HTMLAttributes<HTMLPreElement>) => (
    <pre className="relative my-4">
        {props.children}
    </pre>
);
