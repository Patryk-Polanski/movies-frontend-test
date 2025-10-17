import { Link } from "react-router-dom";

// TODO: the below Link should be put in a Button component to avoid duplication of styles
const ErrorPage = () => (
  <section className="pt-16 px-4 pb-10 font-primary bg-zinc-800 text-slate-50 min-h-lvh flex flex-col items-center gap-6">
    <h2 className="text-center text-4xl font-semibold opacity-30">
      Page not found
    </h2>
    <Link
      className="bg-fuchsia-500 hover:bg-fuchsia-600 transition-all duration-200 ease-in text-slate-50 py-2 px-14 rounded-lg font-medium cursor-pointer"
      to="/"
    >
      Back home
    </Link>
  </section>
);

export default ErrorPage;
