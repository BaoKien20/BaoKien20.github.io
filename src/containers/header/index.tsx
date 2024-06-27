import Image from "next/image";
import React, { Suspense } from "react";
import Logo from "../../../public/static/images/logo/logo_sm_light.png";
import Logo_Small from "../../../public/static/images/logo/Icon_light.png";
import { BookmarkIcon, ClockIcon, LoginIcon, LogoutIcon } from "../../../public/static/svg";
import FilterButton from "./filter/filter-btn";
import dynamic from "next/dynamic";
import { Link } from "@/lib/router-events";
import SearchMovieSkeleton from "./search/search-skeleton";
import SearchContainer from "./search/search-container";
import HeaderDisplay from "./header-display";
import UserButton from "./user-button";

const Header = () => {
    return (
        <nav id="header-app" className="w-full h-[72px] sticky transition-all duration-500 top-0 block z-10 bg-mainBackground shadow-lg">
            <div className=" App-header mx-auto items-center justify-between gap-5 max-w-screen-laptop px-6 flex  h-[117px] sm:h-[70px] w-full ">
                <Link href={"/"} className="object-cover cursor-pointer h-fit ">
                    <Image
                        sizes="150px"
                        loading="lazy"
                        height={70}
                        width={90}
                        className="tablet:block max-w-[90px] hidden"
                        alt="Kmovie-Logo"
                        src={Logo}
                    />
                    <Image
                        sizes="50px"
                        loading="lazy"
                        height={50}
                        width={50}
                        alt="Kmovie-Logo"
                        className="block h-auto max-w-[50px] tablet:hidden"
                        src={Logo_Small}
                    />
                </Link>
                <SearchContainer />
                <div className="flex gap-3">
                    <FilterButton />
                    <Link
                        href={"/xem-gan-day"}
                        aria-label="watch-history"
                        className="w-[42px] h-9 rounded flex items-center  bg-black border-[1px] cursor-pointer border-des hover:opacity-80"
                    >
                        <ClockIcon className="mx-auto" />
                    </Link>
                    <Link
                        href={"/theo-doi"}
                        aria-label="bookmark"
                        className="w-[42px] h-9 rounded flex items-center  bg-black border-[1px] cursor-pointer border-des hover:opacity-80"
                    >
                        <BookmarkIcon className="mx-auto" />
                    </Link>
                    <Suspense
                        fallback={
                            <div className="w-[42px] h-9 rounded flex items-center  bg-black border-[1px] cursor-pointer border-des hover:opacity-80">
                                <LoginIcon className="size-[22px] mx-auto" />
                            </div>
                        }
                    >
                        <UserButton />
                    </Suspense>
                </div>
            </div>
            <HeaderDisplay />
        </nav>
    );
};

export default Header;
