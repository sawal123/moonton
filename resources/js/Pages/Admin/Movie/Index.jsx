import React from "react";
import Authenticated from "@/Layouts/Authenticated/Index";
import Button from "@/Components/PrimaryButton";
import { Link } from "@inertiajs/react";

export default function Index({ auth }) {
    return (
        <Authenticated auth={auth}>
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
        </Authenticated>
    );
}
