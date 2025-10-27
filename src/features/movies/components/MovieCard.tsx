import moviePlaceholder from "@/assets/images/moviePlaceholder.png";
import { useCallback, useState } from "react";

const TMDB_URL = "https://image.tmdb.org/t/p/";

type Props = {
  title: string;
  year: string;
  plot: string;
  rating: number | null;
  thumbnail: string | null;
  movieId: number;
};

const MovieCard = ({
  title,
  year,
  plot,
  rating,
  thumbnail,
  movieId,
}: Props) => {
  const [favourite, setIsFavourite] = useState(() => {
    const favourites: string = localStorage.getItem("favourites") || "[]";
    const favouritesArr: number[] = JSON.parse(favourites);

    if (!favouritesArr.includes(movieId)) return false;

    return true;
  });

  const handleToggleFavourite = useCallback(() => {
    setIsFavourite((prevVal) => !prevVal);

    const favourites: string = localStorage.getItem("favourites") || "[]";
    const favouritesArr: number[] = JSON.parse(favourites);

    let updatedFavourites = favouritesArr;

    if (!favouritesArr.includes(movieId)) {
      updatedFavourites = [...favouritesArr, movieId];
    } else {
      updatedFavourites = updatedFavourites.filter((id) => id !== movieId);
    }

    localStorage.setItem("favourites", JSON.stringify(updatedFavourites));
  }, [movieId]);

  return (
    <div className="w-full max-w-[360px] rounded-2xl overflow-hidden border-2 border-slate-50/20 bg-zinc-900/50 mx-auto">
      <div>
        <img
          className="w-full aspect-square object-cover"
          src={thumbnail ? TMDB_URL + "w500" + thumbnail : moviePlaceholder}
        />
      </div>
      <div
        className={`flex flex-col gap-0.5 py-2 px-2.5  ${
          !thumbnail && "border-t-3 border-slate-50/10"
        }`}
      >
        <h3 className="font-semibold text-lg overflow-hidden whitespace-nowrap text-ellipsis mb-1.5">
          {title}
        </h3>
        <div>
          <label className="sr-only" htmlFor={`option-{$movieId}`}>
            Favourite
          </label>
          <input
            onChange={handleToggleFavourite}
            checked={favourite}
            type="checkbox"
            name="favourite"
            id={`option-${movieId}`}
          />
        </div>
        <div className="flex justify-between items-center">
          <span>Year:</span>
          <span className="font-medium">{year || "unknown"}</span>
        </div>
        <div className="flex justify-between items-center">
          <span>Rating:</span>
          <span className="font-medium">{rating || "unknown"}</span>
        </div>
        <div className="mt-2">
          <span>Plot:</span>
          <p className="mt-1 line-clamp-3">{plot || "No movie plot"}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
