import React from "react";
import Authenticated from "@/Layouts/Authenticated/Index";
import Flickity from "react-flickity-component";
import { Head, Link } from "@inertiajs/react";
import FeatureMovie from "@/Components/FeatureMovie";
import MovieCard from "@/Components/MovieCard";

export default function Dashboard({auth, featureMovie, movie}) {
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
        <Authenticated auth={auth}>
            <Head>
                <link
                    rel="stylesheet"
                    href="https://unpkg.com/flickity@2/dist/flickity.min.css"
                />
                <title>Dashboard</title>
            </Head>
            <div>
                <div className="font-semibold text-[22px] text-black mb-4">
                    Featured Movies
                </div>
                <Flickity className="gap-[30px]" options={flickityOptions}>
                    {featureMovie.map((featureMovie) => (
                        <FeatureMovie
                            key={featureMovie.id}
                            slug={featureMovie.slug}
                            name={`${featureMovie.name}`}
                            category={featureMovie.category}
                            rating={featureMovie.rating}
                            thumbnail={featureMovie.thumbnail}
                        />
                    ))}
                </Flickity>
            </div>
            {/* <!-- Movies 1 --> */}
            <div className="mt-[50px]">
                <div className="font-semibold text-[22px] text-black mb-4">
                    Browse
                </div>
                <div className="__scroll-selector"></div>
                <Flickity className="gap-[30px]" options={flickityOptions}>
                    {movie.map((movie) => (
                       <MovieCard key={movie.id}
                       slug={movie.slug}
                       name={movie.name}
                       category={movie.category}
                       rating={movie.rating}
                       thumbnail={movie.thumbnail}
                       />
                    ))}
                </Flickity>
            </div>
        </Authenticated>
    );
}
