import Image from 'next/image';

interface Props {
    title: string;
    date: string;
    slug: string;
    image: {
        src: string;
        alt: string;
    }
}

export const Card = (data: Props) => {
    return (
        <a href={data.slug} className='group'>
            <article className='flex flex-col gap-3'>
                <div className='relative overflow-hidden'>
                    <Image className='rounded-md aspect-video object-cover' src={data.image.src} alt={data.image.alt} width={900} height={400} />
                    <div className='bg-white w-full px-4 py-2 absolute group-hover:bottom-0 -bottom-9 rounded-b-md border border-solid transition-all duration-75' >
                        {data.date}
                    </div>
                </div>

                <p className='font-medium px-6' >
                    {data.title}
                </p>
            </article>
        </a>
    );
};
