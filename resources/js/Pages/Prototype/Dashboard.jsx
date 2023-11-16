import React from "react";
import Authenticated from "@/Layouts/Authenticated/Index";

export default function Dashboard() {
    return (
        <Authenticated>
            <div>
                <div class="font-semibold text-[22px] text-black mb-4">
                    Featured Movies
                </div>
                <div class="gap-[30px] __scroll-selector">
                    {[1, 2, 3, 4].map((i) => (
                        <div class="absolute overflow-hidden group mr-[30px]">
                            <img
                                src="/images/featured-1.png"
                                class="object-cover rounded-[30px] w-[520px] h-[340px]"
                                alt=""
                            />

                            <div class="rating absolute top-0 left-0">
                                <div class="p-[30px] flex items-center gap-1">
                                    <img src="/icons/ic_star.svg" alt="" />
                                    <span class="text-sm font-medium text-white mt-1">
                                        4.5/5.0
                                    </span>
                                </div>
                            </div>

                            <div
                                class="absolute bottom-0 h-[100px] left-0 right-0 bg-gradient-to-t from-black rounded-bl-[28px]
         rounded-br-[28px] flex justify-between items-center px-7 h-[130px]"
                            >
                                <div>
                                    <div class="font-medium text-[22px] text-white">
                                        The Batman in Love
                                    </div>
                                    <p class="mb-0 text-white text-sm font-light">
                                        Action • Horror
                                    </p>
                                </div>
                                <div class="translate-x-[100px] group-hover:translate-x-0 transition ease-in-out duration-500">
                                    <img
                                        src="/icons/ic_play.svg"
                                        width="50"
                                        alt=""
                                    />
                                </div>
                            </div>
                            <a
                                href="watching.html"
                                class="inset-0 absolute z-50"
                            ></a>
                        </div>
                    ))}
                </div>
            </div>
        </Authenticated>
    );
}
