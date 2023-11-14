import React from "react";
import Input from "../../Components/TextInput";
import Label from "@/Components/InputLabel";
import Button from "@/Components/PrimaryButton";
import { Link, Head } from "@inertiajs/react";

export default function Register() {
    return (
        <>
            <Head title="Sign Up" />
            <div className="mx-auto max-w-screen min-h-screen bg-black text-white md:px-10 px-3">
                <div className="fixed top-[-50px] hidden lg:block">
                    <img
                        src="/images/signup-image.png"
                        className="hidden laptopLg:block laptopLg:max-w-[450px] laptopXl:max-w-[640px]"
                        alt=""
                    />
                </div>
                <div className="py-24 flex laptopLg:ml-[680px] laptopXl:ml-[870px]">
                    <div>
                        <img src="/images/moonton-white.svg" alt="" />
                        <div className="my-[70px]">
                            <div className="font-semibold text-[26px] mb-3">
                                Sign Up
                            </div>
                            <p className="text-base text-[#767676] leading-7">
                                Explore our new movies and get <br />
                                the better insight for your life
                            </p>
                        </div>
                        <form className="w-[370px]">
                            <div className="flex flex-col gap-6">
                                <div>
                                    <Label value="Your Name" pro className="" />
                                    <Input
                                        placeholder="Your fullname..."
                                        required="required"
                                        type="text"
                                        name="name"
                                        // value=""
                                        defaultValue=""
                                        autoComplete=""
                                        className=" focus:outline-alerange focus:outline-none"
                                    />
                                </div>
                                <div>
                                    <Label
                                        value="Email Address"
                                        pro
                                        className=""
                                    />
                                    <Input
                                        placeholder="Input Your email..."
                                        required="required"
                                        type="email"
                                        name="email"
                                        // value=""
                                        defaultValue=""
                                        autoComplete=""
                                        className=" focus:outline-alerange focus:outline-none"
                                    />
                                </div>
                                <div>
                                    <Label value="Password" pro className="" />
                                    <Input
                                        placeholder="Input Your email..."
                                        required="required"
                                        type="password"
                                        name="password"
                                        // value=""
                                        defaultValue=""
                                        autoComplete=""
                                        className=" focus:outline-alerange focus:outline-none"
                                    />
                                </div>
                            </div>
                            <div className="grid space-y-[14px] mt-[30px]">
                                <Button type="button" variant="alerange">
                                    <span className="text-base font-semibold">
                                        Sign Up
                                    </span>
                                </Button>
                                <Link href={route("prototype.login")}>
                                    <Button
                                        type="button"
                                        variant="outline border border-white"
                                    >
                                        <span className="text-base font-semibold ">
                                            Sign In to My Account
                                        </span>
                                    </Button>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
