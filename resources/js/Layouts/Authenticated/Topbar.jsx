import React from "react";
import {useState, useRef} from "react";
import { Link } from "@inertiajs/react";
export default function Topbar({user}) {
    const [dropdownOpen, setDropdownOpen] = useState(true);
    const dropdownTarget = useRef();

    const triggerDropdown = ()=>{
        if(dropdownOpen){
            dropdownTarget.current.classList.remove('hidden');
        }else{
            dropdownTarget.current.classList.add('hidden');
        }
        setDropdownOpen(!dropdownOpen);
    }
    return (
        <>
            <div className="flex justify-between items-center cursor-pointer">
                <input
                    type="text"
                    className="top-search"
                    placeholder="Search movie, cast, genre"
                />
                <div className="flex items-center gap-4">
                    <span className="text-black text-sm font-medium">
                        Welcome, {user}
                    </span>

                    <div className="collapsible-dropdown flex flex-col gap-2 relative">
                        <div
                          onClick={triggerDropdown}
                            className="outline outline-2 outline-gray-2 p-[5px] rounded-full w-[60px] dropdown-button"
                            
                        >
                            <img
                                src="/images/avatar.png"
                                className="rounded-full object-cover w-full"
                                alt=""
                               
                            />
                        </div>
                        <div
                            className="bg-white  shadow-lg rounded-2xl text-black font-medium flex flex-col gap-1 absolute z-[999] right-0 top-[80px] min-w-[180px] hidden  overflow-hidden"
                           ref={dropdownTarget}
                           
                        >
                            <Link
                                href="#!"
                                className="transition-all hover:bg-sky-100 p-4"
                            >
                                Dashboard
                            </Link>
                            <Link
                                href="#!"
                                className="transition-all hover:bg-sky-100 p-4"
                            >
                                Settings
                            </Link>
                            <Link
                                href={route('logout')}
                                method="post"
                                className="transition-all hover:bg-sky-100 p-4"
                            >
                                Sign Out
                            </Link>
                        </div>
                    </div>
                </div>
                <style jsx={undefined}>{`
                    .top-search {
                        background-image: url("/icons/ic_search.svg");
                    }
                `}</style>
            </div>
        </>
    );
}
