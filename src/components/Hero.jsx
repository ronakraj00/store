import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

import Autoplay from "embla-carousel-autoplay";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { useEffect } from "react";

function Hero() {
    const upsplashApi =
        "https://api.unsplash.com/photos/?client_id=KXB55fXOYigKnhXTI2ooOc9OJwxamNWipvNC80L8-nw";

    const banners = [
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0ODczOTN8MHwxfGFsbHx8fHx8fHx8fDE3MDY1MzQ1MzR8&ixlib=rb-4.0.3&q=80&w=1080",
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0ODczOTN8MHwxfGFsbHx8fHx8fHx8fDE3MDY1MzQ5Mjh8&ixlib=rb-4.0.3&q=80&w=1080",
        "https://images.unsplash.com/photo-1511556820780-d912e42b4980?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0ODczOTN8MHwxfGFsbHx8fHx8fHx8fDE3MDY1MzQ2OTV8&ixlib=rb-4.0.3&q=80&w=1080",
        "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0ODczOTN8MHwxfGFsbHx8fHx8fHx8fDE3MDY1MzQ2NTR8&ixlib=rb-4.0.3&q=80&w=1080",
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0ODczOTN8MHwxfGFsbHx8fHx8fHx8fDE3MDY1MzQ4Njd8&ixlib=rb-4.0.3&q=80&w=1080",
    ];


    useEffect(()=>{
        window.scrollTo(0,document.body.scrollHeight)
    },[])

    return (
        <main className="relative h-lvh overflow-hidden">
            <ShopNow/>
            <Carousel
                opts={{
                    align: "start",
                    loop: true,
                }}
                plugins={[
                    Autoplay({
                        delay: 3000,
                    }),
                ]}
            >
                <CarouselContent>
                    {banners.map((banner) => (
                        <CarouselItem key={banner}>
                            <div className="h-lvh flex  justify-center items-center object-cover">
                                <img
                                    src={banner}
                                    className="w-full h-full flex justify-center items-center object-cover"
                                />
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselNext className="fixed z-10 right-4"/>
                <CarouselPrevious className="fixed z-10 left-4"/>
            </Carousel>
        </main>
    );
}

function ShopNow() {
    return (
        <div
            className="absolute z-[1] top-1/2 left-1/2  transform -translate-x-1/2 -translate-y-1/2 flex border-4  animate-in
                flex-col p-4 items-center"
        >
            <p className="font-extrabold text-center font-mono text-6xl py-4 drop-shadow-[2px_2px_rgba(255,255,255,1)]">
                This Season <br /> Buy something <br />
                <span className="text-transparent bg-gradient-to-r bg-clip-text from-blue-500 to-green-500">
                    Amazing.
                </span>
            </p>
            <Link to={"shop/All"}>
                <Button size="lg" className="text-lg">
                    Shop Now
                </Button>
            </Link>
        </div>
    );
}

export default Hero;
