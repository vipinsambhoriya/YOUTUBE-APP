import React, { useEffect, useState } from "react";
import { toggleMenu } from "../utils/appSlice";
import { useDispatch, useSelector } from "react-redux";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";
const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggetions, setSuggetions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();
  /**
   *
   *
   */
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setShowSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggetion();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggetion = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    // console.log(json[1]);
    setSuggetions(json[1]);

    // update cache
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className=" grid grid-flow-col  p-2 m-2  shadow-lg">
      <div className="flex col-span-1 ">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-20 cursor-pointer"
          alt="menu"
          src="https://i.pinimg.com/474x/0b/53/d7/0b53d7e42184a1823360653f60e7d77b.jpg"
        />
        <a href="/">
          <img
            className="h-20 mx-4"
            alt="youtube-logo"
            src="https://t3.ftcdn.net/jpg/06/34/31/96/360_F_634319630_txtgmPLEEQ8o4zaxec2WKrLWUBqdBBQn.jpg"
          />
        </a>
      </div>
      <div className="col-span-10 px-5 ">
        <div>
          <input
            className=" px-5 w-1/2 border border-gray-400 p-2 rounded-l-full "
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100 ">
            🔍
          </button>
        </div>

        {showSuggestions && (
          <div className="fixed py-2 px-5 w-[42rem] bg-white shadow-lg rounded-lg border border-gray-100">
            <ul>
              {suggetions.map((s) => (
                <li key={s} className="py-2 shadow-sm hover:bg-gray-100">
                  🔍{s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1">
        <img
          className="h-12"
          alt="user"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRs_rWILOMx5-v3aXwJu7LWUhnPceiKvvDg&s"
        />
      </div>
    </div>
  );
};

export default Head;
