import React from "react";
import Authenticated from "@/Layouts/Authenticated/Index";
import Button from "@/Components/PrimaryButton";
import { Link, Head, useForm } from "@inertiajs/react";
import FlashMessage from "@/Components/FlashMessage";

export default function Index({ auth, flashMessage, movies, processing }) {
    const { delete: destroy, put } = useForm();
    return (
        <Authenticated auth={auth}>
            <Head title="Admin Movie" />
            <Link href={route("admin.dashboard.movie.create")}>
                <Button
                    type="button"
                    variant="alerange"
                    className="border border-white w-40 mb-8"
                >
                    <span className="text-base text-white">
                        Insert New Movie
                    </span>
                </Button>
            </Link>
            {flashMessage?.message && (
                <FlashMessage message={flashMessage.message} />
            )}

            <table className="table-fixed w-full text-center">
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Rating</th>
                        <th colSpan={2}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {movies.map((movie) => (
                        <tr key={movie.id}>
                            <td>
                                <img
                                    src={`/storage/${movie.thumbnail}`}
                                    className="rounded-lg m-auto my-5"
                                    alt=""
                                    width={100}
                                />
                            </td>
                            <td>{movie.name}</td>
                            <td>{movie.category}</td>
                            <td>{movie.rating.toFixed(1)}</td>
                            <td colSpan={2}>
                                <div className="flex justify-center  ">
                                    <Link
                                        className="m-1"
                                        href={route(
                                            "admin.dashboard.movie.edit",
                                            movie.id
                                        )}
                                    >
                                        <Button
                                            type="button"
                                            variant="alerange"
                                            className=" text-white p-3"
                                            processing={processing}
                                        >
                                            Edit
                                        </Button>
                                    </Link>
                                    <div
                                        className="m-1"
                                        onClick={() => {
                                            movie.deleted_at ? put(route('admin.dashboard.movie.restore', movie.id)):
                                            destroy(
                                                route(
                                                    "admin.dashboard.movie.destroy",
                                                    movie.id
                                                )
                                            );
                                        }}
                                    >
                                        <Button
                                            type="button"
                                            className="p-3 bg-red-500 text-white"
                                            processing={processing}
                                        >
                                            {movie.deleted_at ? "Restore" : "Delete"}
                                        </Button>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Authenticated>
    );
}
