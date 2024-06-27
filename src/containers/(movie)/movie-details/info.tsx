import { MovieStatus } from "@/enum/movies";
import { ICategory, IMovie, IMovieDetails } from "@/interface/movies";
import Image from "next/image";
import { Link } from "@/lib/router-events";
import React from "react";
interface InfoProps {
    movie: IMovieDetails;
}
const Info = ({ movie }: InfoProps) => {
    return (
        <div className="w-full text-sm rounded overflow-hidden">
            <h1 className="p-3 bg-cardBackground text-base text-center text-[#cccccc] font-bold ">{movie.name}</h1>

            <div className="flex h-full flex-col sm:flex-row p-[10px] bg-[#191919] items-start  ">
                <div className="w-fit h-full p-[5px] bg-black rounded">
                    <div className="relative aspect-[3/4] sm:w-[250px] rounded sm:min-w-[250px] w-full h-full ">
                        <Image
                            src={movie.thumb_url}
                            sizes="(max-width: 640px) 100vw,250px"
                            quality={100}
                            priority
                            rel="preload"
                            loading="eager"
                            alt="kmovie-thumbnail"
                            fill
                            className="object-cover rounded"
                        />
                    </div>
                </div>
                {/* <img src={movie.thumb_url} alt="thumbnail" className="sm:w-[250px] w-full mb-[20px] sm:mb-[0] object-cover " /> */}
                <div className="w-full text-[#ccc] ml-[10px] ">
                    <div className="flex w-full p-4 border-b border-secondary">
                        <span className="font-bold w-[100px] ">Tên Khác</span>
                        <span className="flex-1 text-center font-medium">{movie.origin_name}</span>
                    </div>
                    <div className="flex items-center w-full p-4 py-3.5 border-b border-secondary">
                        <span className="font-bold w-[100px] ">Thể loại</span>
                        <div className="flex-1 flex justify-center gap-[5px] font-medium">{renderMovieCategory(movie.category)}</div>
                    </div>
                    <div className="flex w-full p-4 border-b border-secondary">
                        <span className="font-bold w-[100px]">Trạng thái</span>
                        <span className="flex-1 text-center font-medium">{MovieStatus.get(movie.status) ?? "Đang tiến hành"}</span>
                    </div>
                    <div className="flex w-full p-4 border-b border-secondary">
                        <span className="font-bold w-[100px]">Điểm</span>
                        <span className="flex-1 text-center font-medium">{movie.view}</span>
                    </div>
                    <div className="flex w-full p-4 border-b border-secondary">
                        <span className="font-bold w-[100px]">Phát hành</span>
                        <span className="flex-1 text-center font-medium">{movie.year}</span>
                    </div>
                    <div className="flex w-full p-4">
                        <span className="font-bold w-[100px]">Thời lượng</span>
                        <span className="flex-1 text-center font-medium">{movie.time}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Info;

const renderMovieCategory = (category: ICategory[]) => {
    // const categoryList = []
    const categoryList = category.map((item) => {
        return (
            <Link
                href={"/the-loai/" + item.slug}
                key={item.id}
                className="py-1 transition-colors hover:bg-mainColor hover:text-[#000] text-sm px-3 rounded cursor-pointer bg-[#313131]"
            >
                {item.name}
            </Link>
        );
    });
    return categoryList;
};
