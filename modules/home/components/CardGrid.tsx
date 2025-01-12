import { Card } from "@/modules/home/components/Card";

export const CardGrid = () => {

    const cardData = {
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac ante",
        date: "Yesterday",
        readTime: "2 min read",
        slug: "/devlog/elements",
        image: {
            src: "/assets/blog-placeholder.jpg",
            alt: "Blog Placeholder Image",
        }
    }

    return (
        <section className="w-11/12 lg:w-3/4 grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 my-12">
            {[...Array(10)].map((_, index) =>
                <Card key={index} {...cardData} />
            )}
        </section>
    );
};
