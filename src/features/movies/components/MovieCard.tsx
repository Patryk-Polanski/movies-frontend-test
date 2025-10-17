import moviePlaceholder from "@/assets/images/moviePlaceholder.png";

const TMDB_URL = "https://image.tmdb.org/t/p/";

type Props = {
  title: string;
  year: string;
  plot: string;
  rating: number | null;
  thumbnail: string | null;
};

const MovieCard = ({ title, year, plot, rating, thumbnail }: Props) => {
  return (
    <div className="w-full max-w-[360px] rounded-2xl overflow-hidden border-2 border-slate-50/20 bg-zinc-900/50">
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
        <div className="flex justify-between items-center">
          <span>Year:</span>
          <span className="font-medium">{year} || unknown</span>
        </div>
        <div className="flex justify-between items-center">
          <span>Rating:</span>
          <span className="font-medium">{rating} || unknown</span>
        </div>
        <div className="mt-2">
          <span>Plot:</span>
          <p className="mt-1 line-clamp-3">{plot} || No movie plot</p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
