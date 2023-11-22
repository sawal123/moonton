import React from "react";
import PropType from 'prop-types';
import { Link } from "@inertiajs/react";

FeatureMovie.prototype={
    slug : PropType.string.isRequired,
    name : PropType.string.isRequired,
    category : PropType.string.isRequired,
    thumbnail : PropType.string.isRequired,
    rating : PropType.number
}

export default function FeatureMovie({slug, name, category, rating, thumbnail}) {
    return (
        <>
            <div class="absolute overflow-hidden group mr-[30px]">
                <img
                    src={thumbnail}
                    class="object-cover rounded-[30px] w-[520px] h-[340px]"
                    alt=""
                />

                <div class="rating absolute top-0 left-0">
                    <div class="p-[30px] flex items-center gap-1">
                        <img src="/icons/ic_star.svg" alt="" />
                        <span class="text-sm font-medium text-white mt-1">
                            {rating.toFixed(1)}/5.0
                        </span>
                    </div>
                </div>

                <div
                    class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black rounded-bl-[28px]
         rounded-br-[28px] flex justify-between items-center px-7 h-[130px]"
                >
                    <div>
                        <div class="font-medium text-[22px] text-white">
                            {name}
                        </div>
                        <p class="mb-0 text-white text-sm font-light">
                            {category}
                        </p>
                    </div>
                    <div class="translate-x-[100px] group-hover:translate-x-0 transition ease-in-out duration-500">
                        <img src="/icons/ic_play.svg" width="50" alt="" />
                    </div>
                </div>
                <Link href={route("prototype.movie.show", slug)} class="inset-0 absolute z-50"></Link>
            </div>
        </>
    );
}
