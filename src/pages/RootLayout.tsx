import MovieSeekLogo from "@/components/ui/MovieSeekLogo";
import { Link, Outlet } from "react-router-dom";

const RootLayout = () => (
  <div className="pt-8 px-4 font-primary bg-zinc-800 text-slate-50 min-h-lvh">
    <div className="max-w-[860px] mx-auto">
      <Link to="/">
        <MovieSeekLogo />
      </Link>
      <Outlet />
    </div>
  </div>
);

export default RootLayout;
