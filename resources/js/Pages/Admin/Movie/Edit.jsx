import React from "react";
import Authenticated from "@/Layouts/Authenticated/Index";
import Label from "@/Components/InputLabel";
import Input from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import Checkbox from "@/Components/Checkbox";
import Button from "@/Components/PrimaryButton";
import { router } from '@inertiajs/react'
import { Head, Link, useForm } from "@inertiajs/react";

export default function Edit({ auth, movie }) {
    const {data, setData, processing, errors } = useForm({
        ...movie,
    });

    const onHandleChange = (e) => {
        setData(
            e.target.name,
            e.target.type === "file" ? e.target.files[0] : e.target.value
        );
    };
    const submit = (e) => {
        e.preventDefault();
        if (data.thumbnail === movie.thumbnail) {
            delete data.thumbnail;
        }
        router.post(route("admin.dashboard.movie.update", movie.id), {
            _method: 'put',
            ...data,
        });
    };
    return (
        <Authenticated auth={auth}>
            <Head title="Admin - Edit Movie" />
            <h1 className="text-xl">Edit Movie {movie.name}</h1>
            <hr />

            <form onSubmit={submit}>
                <Label value="Name" className="mt-4" />
                <Input
                    placeholder="Enter the name movie..."
                    type="text"
                    name="name"
                    defaultValue={movie.name}
                    isFocused={true}
                    onChange={onHandleChange}
                    className=" border-alerange focus:outline-alerange  bg-white"
                    isError={errors.name}
                />
                <InputError message={errors.name} className="mt-2" />
                <Label value="Category" className="mt-4" />
                <Input
                    placeholder="Enter the category movie..."
                    type="text"
                    name="category"
                    defaultValue={movie.category}
                    isFocused={true}
                    onChange={onHandleChange}
                    className=" border-alerange focus:outline-alerange  bg-white"
                    isError={errors.category}
                />
                <InputError message={errors.category} className="mt-2" />
                <Label value="Video Url" className="mt-4" />
                <Input
                    placeholder="Enter the url movie..."
                    type="url"
                    name="video_url"
                    defaultValue={movie.video_url}
                    isFocused={true}
                    onChange={onHandleChange}
                    className=" border-alerange focus:outline-alerange  bg-white"
                    isError={errors.video_url}
                />
                <InputError message={errors.video_url} className="mt-2" />
                <Label value="Thumbnail" className="mt-4" />
                <img
                    src={`/storage/${movie.thumbnail}`}
                    width={100}
                    className="rounded-lg mb-2"
                    alt=""
                />
                <Input
                    placeholder="Insert thumbnail of t he movie"
                    type="file"
                    name="thumbnail"
                    className="bg-slate-400 border-alerange"
                    onChange={onHandleChange}
                    isError={errors.thumbnail}
                />
                <InputError message={errors.thumbnail} className="mt-2" />
                <Label value="Rating" className="mt-4" />
                <Input
                    placeholder="Enter the rating the movie..."
                    type="number"
                    name="rating"
                    defaultValue={movie.rating}
                    isFocused={true}
                    onChange={onHandleChange}
                    className=" border-alerange focus:outline-alerange  bg-white"
                    isError={errors.video_url}
                />
                <InputError message={errors.rating} className="mt-2" />
                <div className="flex flex-row mt-4 items-center">
                    <Label
                        forInput="is_featured"
                        value="Is Featured"
                        className="mt-4 mr-3"
                    />
                    <Checkbox
                        className="mt-2"
                        name="is_featured"
                        onChange={(e) =>
                            setData("is_featured", e.target.checked)
                        }
                        checked={movie.is_featured}
                    />
                </div>
                <Button
                    type="submit"
                    variant="alerange"
                    className="mt-4 text-white"
                    processing={processing}
                >
                    Update
                </Button>
            </form>
        </Authenticated>
    );
}
