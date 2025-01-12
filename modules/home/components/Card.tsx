"use client"
import Image from 'next/image';
import { useState } from 'react';

interface Props {
    title: string;
    date: string;
    readTime: string;
    slug: string;
    image: {
        src: string;
        alt: string;
    }
}

export const Card = (data: Props) => {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <a href={data.slug} className='group'>
            <article className='flex flex-col gap-3'>
                <div className='relative overflow-hidden'>

                    {isLoading && (
                        <div className='bg-gray-200 animate-pulse rounded-md aspect-video w-full' />
                    )}

                    <Image
                        className={`select-none rounded-md aspect-video object-cover ${
                            isLoading ? 'hidden' : 'block'
                        }`}
                        loading='eager'
                        onLoadingComplete={() => setIsLoading(false)}
                        src={data.image.src}
                        alt={data.image.alt}
                        width={900}
                        height={400}
                    />
                    <div className='select-none bg-white w-full px-4 py-2 absolute group-hover:bottom-0 -bottom-12 rounded-b-md border border-solid transition-all duration-75' >
                        {data.date + ' / ' + data.readTime}
                    </div>
                </div>

                <p className='font-medium px-6' >
                    {data.title}
                </p>
            </article>
        </a>
    );
};
