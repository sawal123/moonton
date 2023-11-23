import React from "react";
import { useEffect } from "react";
import Input from "../../Components/TextInput";
import Label from "@/Components/InputLabel";
import Button from "@/Components/PrimaryButton";
import { Link, Head, useForm } from "@inertiajs/react";
import InputError from "@/Components/InputError";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });
    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);

    const onHandleChange = (e) => {
        setData(e.target.name, e.target.value);
    };

    const submit = (e) => {
        e.preventDefault();
        post(route("register"));
        // console.log(data);
    };
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
                        <form className="w-[370px]" onSubmit={submit}>
                            <div className="flex flex-col gap-6">
                                <div>
                                    <Label
                                        value="Your Name"
                                        pro={true.toString()}
                                        className=""
                                    />
                                    <Input
                                        placeholder="Your fullname..."
                                        required="required"
                                        type="text"
                                        name="name"
                                        value={data.name}
                                        autoComplete="name"
                                        onChange={(e) =>
                                            setData("name", e.target.value)
                                        }
                                        className=" focus:outline-alerange focus:outline-none"
                                    />
                                </div>
                                <div>
                                    <Label
                                        value="Email Address"
                                        pro={true.toString()}
                                        className=""
                                    />
                                    <Input
                                        placeholder="Input Your email..."
                                        required="required"
                                        type="email"
                                        name="email"
                                        value={data.email}
                                        autoComplete="username"
                                        onChange={(e) =>
                                            setData("email", e.target.value)
                                        }
                                        className=" focus:outline-alerange focus:outline-none"
                                    />
                                    <InputError message={errors.email} className="mt-2" />
                                </div>
                                <div>
                                    <Label
                                        value="Password"
                                        pro={true.toString()}
                                        className=""
                                    />
                                    <Input
                                        placeholder="Input Your Password..."
                                        required="required"
                                        type="password"
                                        name="password"
                                        value={data.password}
                                        autoComplete="new-password"
                                        onChange={(e) =>
                                            setData("password", e.target.value)
                                        }
                                        className=" focus:outline-alerange focus:outline-none"
                                    />
                                    <InputError message={errors.password} className="mt-2" />
                                </div>
                                <div>
                                    <Label
                                        value="Confirmasi Password"
                                        pro={true.toString()}
                                        className=""
                                    />
                                    <Input
                                        placeholder="Input Your Password..."
                                        required="required"
                                        type="password"
                                        name="password_confirmation"
                                        value={data.password_confirmation}
                                        autoComplete="new-password"
                                        onChange={(e) =>
                                            setData(
                                                "password_confirmation",
                                                e.target.value
                                            )
                                        }
                                        // value=""

                                        className=" focus:outline-alerange focus:outline-none"
                                    />
                                    <InputError message={errors.password_confirmation} className="mt-2" />
                                </div>
                            </div>
                            <div className="grid space-y-[14px] mt-[30px]">
                                <Button
                                    type="submit"
                                    processing={processing}
                                    variant="alerange"
                                >
                                    <span className="text-base font-semibold">
                                        Sign Up
                                    </span>
                                </Button>

                                <Link href={route("prototype.login")}>
                                    <Button
                                        type="button"
                                        processing={processing}
                                        variant="light-outline"
                                        className="bg-outline border border-white"
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
