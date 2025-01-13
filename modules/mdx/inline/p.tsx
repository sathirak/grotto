import type { HTMLAttributes } from "react";

export const P = (props: HTMLAttributes<HTMLParagraphElement>) => {
	return(
        <p className="my-4">
            {props.children}
        </p>
    );
};
