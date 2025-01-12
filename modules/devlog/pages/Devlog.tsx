import { Red_Hat_Text } from "next/font/google";

const redHatText = Red_Hat_Text({
    subsets: ["latin"],
});

interface Props {
    children: any;
}

export const Devlog = (props: Props) => {
    return (
        <main className={`flex flex-col items-center ${redHatText.className}`}>
            <section className="w-11/12 lg:w-1/2 my-16">
                {props.children}
            </section>
        </main>
    );
};
