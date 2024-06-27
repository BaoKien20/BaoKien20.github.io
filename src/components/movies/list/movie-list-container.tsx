"use client";
import React, { useEffect } from "react";
import MoviePagination from "@/components/movies/pagiantion/movie-pagination";
import { ImovieList } from "@/interface/movies";
import MoviesList from "@/components/movies/list/movies-list";
import { createQueryString } from "@/utils/format-string";
import { usePathname } from "next/navigation";
import { scrollToTitleId } from "@/utils/scroll";
import { useRouter } from "@/lib/router-events";
import MovieListSkeleton from "@/components/movies/list/movie-list-skeleton";
import toast from "react-hot-toast";
interface MovieListContainerProps {
    searchParams?: { [key: string]: string | undefined };
    initialData: ImovieList;
    titleId: string;
}

const MovieListContainer = ({ searchParams, initialData, titleId }: MovieListContainerProps) => {
    const [loading, setLoading] = React.useState(false);
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        setLoading(false);
    }, [initialData?.pagination?.currentPage]);
    useEffect(() => {
        toast.success(
            <div className="w-fit flex flex-col gap-1">
                <span>This site just for testing SEO, if you want to watch movie please visit the official site</span>
                <b>kmovie-one.vercel.app</b>
                <span>Thank you</span>
            </div>,
            {
                duration: 10000,
            }
        );
    }, []);
    const handlePageClick = (data: { selected: number }) => {
        const queryString = createQueryString(searchParams, "page", (data.selected + 1).toString());
        scrollToTitleId(titleId);
        router.push(`${pathname}?${queryString}`, { scroll: false });
    };
    return loading ? (
        <MovieListSkeleton />
    ) : (
        <>
            <MoviesList quality={50} enableBlur movies={initialData} />
            <MoviePagination onPageClick={handlePageClick} totalPage={Math.ceil(initialData?.pagination?.totalPages ?? 0)} />
        </>
    );
};

export default MovieListContainer;
