import React from "react";
import Authenticated from "@/Layouts/Authenticated/Index";
import Flickity from "react-flickity-component";
import { Head, Link } from "@inertiajs/react";
import FeatureMovie from "@/Components/FeatureMovie";
import MovieCard from "@/Components/MovieCard";

export default function Dashboard() {
    const flickityOptions = {
        cellAlign: "left",
        contain: true,
        groupCells: 1,
        wrapAround: false,
        pageDots: false,
        prevNextButtons: false,
        draggable: ">1",
    };
    return (
        <Authenticated>
            <Head>
                <link
                    rel="stylesheet"
                    href="https://unpkg.com/flickity@2/dist/flickity.min.css"
                />
                <title>Dashboard</title>
            </Head>
            <div>
                <div class="font-semibold text-[22px] text-black mb-4">
                    Featured Movies
                </div>
                <Flickity class="gap-[30px]" options={flickityOptions}>
                    {[1, 2, 3, 4].map((i) => (
                        <FeatureMovie
                            key={i}
                            slug="the-batman-inlove"
                            name={`The Batman In Love ${i}`}
                            category="Action"
                            rating={i + 1}
                            thumbnail="https://imgsrv2.voi.id/w-lBQR8pIMKZSUBjJMWk3DB5Ad1MTdAr1Beb75E_iMw/auto/1200/675/sm/1/bG9jYWw6Ly8vcHVibGlzaGVycy8xNTMxMzMvMjAyMjA0MDMxNzMwLW1haW4uanBn.jpg"
                        />
                    ))}
                </Flickity>
            </div>
            {/* <!-- Movies 1 --> */}
            <div className="mt-[50px]">
                <div class="font-semibold text-[22px] text-black mb-4">
                    Browse
                </div>
                <div class="__scroll-selector"></div>
                <Flickity class="gap-[30px]" options={flickityOptions}>
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                       <MovieCard key={i} />
                    ))}
                </Flickity>
            </div>
        </Authenticated>
    );
}
