import { useEffect } from "react";
import Input from "../../Components/TextInput";
// import Input from "@/Components/TextInput";
import Label from "@/Components/InputLabel";
import InputError from "@/Components/InputError";
import Button from "@/Components/PrimaryButton";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Login() {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const onHandleChange = (e) => {
        setData(e.target.name, e.target.value);
    };

    const submit = (e) => {
        e.preventDefault();
        post(route("login"));
    };

    return (
        <>
            <Head title="Sign In" />
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
                        <div className="" style={{ marginBottom: "50px" }}>
                            <div className="font-semibold text-[26px] mb-3">
                                Welcome Back
                            </div>
                            <p className="text-base text-[#767676] leading-7">
                                Explore our new movies and get <br />
                                the better insight for your life
                            </p>
                            <InputError
                                message={errors.email}
                                className="mt-2"
                            />
                        </div>
                        <form className="w-[370px]" onSubmit={submit}>
                            <div className="flex flex-col gap-6">
                                <div>
                                    <Label
                                        value="Email Address"
                                        pro={true.toString()}
                                        className=""
                                    />
                                    <Input
                                        placeholder="Email Address"
                                        required="required"
                                        type="email"
                                        value={data.email}
                                        autoComplete="username"
                                        isFocused={true}
                                        onChange={(e) =>
                                            setData("email", e.target.value)
                                        }
                                        className=" focus:outline-alerange focus:outline-none"
                                    />
                                </div>
                                <div>
                                    <label
                                        className="text-base block mb-2"
                                        pro={true.toString()}
                                    >
                                        Password
                                    </label>
                                    <Input
                                        type="password"
                                        name="password"
                                        autoComplete=""
                                        value={data.password}
                                        className=" focus:outline-alerange focus:outline-none"
                                        placeholder="Password"
                                        onChange={(e) =>
                                            setData("password", e.target.value)
                                        }
                                    />
                                    <InputError
                                        message={errors.password}
                                        className="mt-2"
                                    />
                                </div>
                            </div>
                            <div className="grid space-y-[14px] mt-[30px]">
                                <Button
                                    type="submit"
                                    variant="alerange"
                                    processing={processing}
                                >
                                    <span className="text-base font-semibold ">
                                        Start Watching
                                    </span>
                                </Button>

                                <Link href={route("register")}>
                                    <Button
                                        type="button"
                                        className="border border-white"
                                    >
                                        <span className="text-base text-white">
                                            Create New Account
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
