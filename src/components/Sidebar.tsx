import { useSelector } from "react-redux";
import type { RootState } from "../utils/store";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const menuOpen = useSelector((store: RootState) => store.app.isMenuOpen);

  // Early return
  if (!menuOpen) return null;
  return (
    menuOpen &&
    <div className="p-5 shadow-lg w-48">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li>Shorts</li>
        <li>Videos</li>
        <li>Live</li>
      </ul>
      <h1 className="font-bold">Subscriptions</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
      <h1 className="font-bold pt-5">Explore</h1>
      <ul>
        <li>Shopping</li>
        <li>Music</li>
        <li>Films</li>
        <li>Series</li>
      </ul>
    </div>
  )
}

export default Sidebar