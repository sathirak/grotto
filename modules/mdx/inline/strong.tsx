import type { HTMLAttributes } from "react";

export const Strong = (props: HTMLAttributes<HTMLElement>) => (
    <strong className="font-semibold" {...props} />
);
