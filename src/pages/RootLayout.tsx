import { Link, Outlet } from "react-router-dom";

const RootLayout = () => (
  <>
    <Link to="/">
      <div>MovieSeek</div>
    </Link>
    <Outlet />
  </>
);

export default RootLayout;
