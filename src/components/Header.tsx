import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import type { RootState } from "../utils/store";
import { cacheResults } from "../utils/searchSlice";

const Header = () => {
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [suggestions, setSuggestions] = useState<string[]>([]);
    const [showSuggestions, setShowSuggestions] = useState<boolean>(false);
    const searchCache = useSelector((store: RootState) => store.search);
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(toggleMenu());
    }
    useEffect(() => {
        // API call
        const timer = setTimeout(() => {
            if (searchCache[searchQuery]) {
                setSuggestions(searchCache[searchQuery]);
            } else {
                getSearchSuggestions();
            }
        }, 200);
        return () => clearTimeout(timer);
    }, [searchQuery]);

    const getSearchSuggestions = async () => {
        const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
        const json = await data.json();
        console.log(json);
        setSuggestions(json[1]);

        dispatch(cacheResults({
            [searchQuery]: json[1]
        }))
    }
    const handleSearchBtn = () => {
          
    }
    return (
        <div className="grid grid-flow-col p-5 m-2 shadow-lg">
            <div className="flex col-span-1">
                <img className="h-7 cursor-pointer" onClick={() => { handleClick(); }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1280px-Hamburger_icon.svg.png"
                    alt="menu-icon" />
                <img className="h-7 mx-2" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1280px-YouTube_Logo_2017.svg.png" alt="logo" />
            </div>
            <div className="col-span-10 text-center">
                <div>
                    <input className="px-5 w-1/2 border border-gray-400 p-2 rounded-l-full" type="text"
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onFocus={() => setShowSuggestions(true)}
                        onBlur={() => setShowSuggestions(false)}
                    />
                    <button className="border border-gray-400 p-2 rounded-r-full bg-gray-100" onClick={() => handleSearchBtn()}>Search</button>
                </div>
            </div>
            {showSuggestions &&
                <div className="fixed bg-white py-2 px-5 w-136 mt-12 ml-110 shadow-lg rounded-lg border border-gray-100">
                    <ul>
                        {
                            suggestions.map((s) => <li key={s} className="py-2 px-3 hover:bg-gray-100 cursor-pointer">{s}</li>)
                        }
                    </ul>
                </div>}
            <div className="col-span-1">
                <img className="h-8" alt="user" src="https://static.vecteezy.com/system/resources/thumbnails/022/014/184/small/user-icon-member-login-isolated-vector.jpg" />
            </div>
        </div>
    )
}

export default Header