'use client';

import { useEffect, useState } from "react";
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from "./ui/carousel";

export function About() {
    const [api,setApi] = useState<CarouselApi>();

    useEffect(() => {

    }, []);

    return (
        <section aria-label="About section" aria-describedby="about-description" aria-labelledby="about-title" id="about" className="h-screen w-full snap-center px-4 pt-26 pb-20">
            {/* <div className="border-2 border-[#3B3283] rounded-4xl p-8 h-full">
                <h1 id="about-title">About</h1>
                <p id="about-description">About</p>
            </div> */}
            <Carousel setApi={setApi}>
                <CarouselContent className="h-screen w-full pl-4 pt-26 pb-20">
                    <CarouselItem>
                        <div className="size-full border-2 border-[#3B3283] rounded-4xl"></div>
                    </CarouselItem>
                    <CarouselItem>
                        <div className="size-full border-2 border-[#3B3283] rounded-4xl"></div>
                    </CarouselItem>
                    <CarouselItem>
                        <div className="size-full border-2 border-[#3B3283] rounded-4xl"></div>
                    </CarouselItem>
                </CarouselContent>
            </Carousel>
        </section>
    )
}