import React from "react";
import Authenticated from "@/Layouts/Authenticated/Index";
import Label from "@/Components/InputLabel";
import Input from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import Checkbox from "@/Components/Checkbox";
import Button from "@/Components/PrimaryButton";

import { Head, Link, useForm } from "@inertiajs/react";

export default function Create({ auth }) {
    const { setData, post, processing, errors } = useForm({
        name: "",
        category: "",
        video_url: "",
        thumbnail: "",
        rating: "",
        is_featured: false,
    });

    const onHandleChange = (e) => {
        setData(
            e.target.name,
            e.target.type === "file" ? e.target.files[0] : e.target.value
        );
    };
    const submit = (e) => {
        e.preventDefault();
        post(route("admin.dashboard.movie.store"));
    };
    return (
        <Authenticated auth={auth}>
            <Head title="Admin - Create Movie" />
            <h1 className="text-xl">Insert a new Movie</h1>
            <hr />
            <InputError message={errors.email} className="mt-2" />
            <form onSubmit={submit}>
                <Label value="Name" className="mt-4" />
                <Input
                    placeholder="Enter the name movie..."
                    type="text"
                    name="name"
                    isFocused={true}
                    onChange={onHandleChange}
                    className=" border-alerange focus:outline-alerange  bg-white"
                    isError={errors.name}
                />
                <Label value="Category" className="mt-4" />
                <Input
                    placeholder="Enter the category movie..."
                    type="text"
                    name="category"
                    isFocused={true}
                    onChange={onHandleChange}
                    className=" border-alerange focus:outline-alerange  bg-white"
                    isError={errors.category}
                />
                <Label value="Video Url" className="mt-4" />
                <Input
                    placeholder="Enter the url movie..."
                    type="url"
                    name="video_url"
                    isFocused={true}
                    onChange={onHandleChange}
                    className=" border-alerange focus:outline-alerange  bg-white"
                    isError={errors.video_url}
                />
                <Label value="Thumbnail" className="mt-4" />
                <Input
                    placeholder="Insert thumbnail of t he movie"
                    type="file"
                    name="thumbnail"
                    className="bg-slate-400 border-alerange"
                    onChange={onHandleChange}
                    isError={errors.thumbnail}
                />
                <Label value="Rating" className="mt-4" />
                <Input
                    placeholder="Enter the rating the movie..."
                    type="number"
                    name="rating"
                    isFocused={true}
                    onChange={onHandleChange}
                    className=" border-alerange focus:outline-alerange  bg-white"
                    isError={errors.video_url}
                />
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
                    />
                </div>
                <Button
                    type="submit"
                    variant="alerange"
                    className="mt-4 "
                    processing={processing}
                >
                    Save
                </Button>
            </form>
        </Authenticated>
    );
}
