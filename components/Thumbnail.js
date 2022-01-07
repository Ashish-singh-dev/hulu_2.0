import { ThumbUpIcon } from "@heroicons/react/outline";
import Image from "next/image";

const baseUrl = "https://images.tmdb.org/t/p/original";

function Thumbnail({ result }) {
  return (
    <div className="group md:py-1 cursor-pointer transition-all duration-300 ease-in-out sm:motion-safe:hover:scale-105">
      <Image
        layout="responsive"
        priority
        width={1920}
        height={1080}
        quality={60}
        alt=""
        src={`${baseUrl}${result.backdrop_path || result.poster_path}`}
      />
      <div className="flex flex-col">
        <p className="truncate text-sm">{result.overview}</p>
        <h2 className="font-bold truncate">
          {result.title || result.original_title || result.name}
        </h2>
        <p className="opacity-0 text-xs group-hover:opacity-100 transition-all duration-300 ease-in-out flex items-center gap-3">
          {`${result.media_type ? result.media_type + "-" : ""}${
            result.release_date || result.first_air_date
          }`.toLocaleUpperCase()}
          <ThumbUpIcon className="h-5 w-5" /> {result?.vote_count}
        </p>
      </div>
    </div>
  );
}

export default Thumbnail;
