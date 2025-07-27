import React from "react";

const SearchButton = () => {
  return (
    <button class="relative p-[1px] rounded-md bg-[linear-gradient(180deg,rgba(0,0,0,0.05)_0%,rgba(0,0,0,0.04)_100%)] border border-transparent tab-shadow cursor-pointer">
      <span class="absolute inset-0 rounded-md p-[0.5px] bg-[conic-gradient(from_135.28deg,rgba(255,255,255,0)_75%),linear-gradient(177deg,#F4C040_0.61%,rgba(182,131,42,0)_18.03%),linear-gradient(140.4deg,rgba(182,131,42,0)_71.24%,#F4C040_95.65%)] -z-10"></span>
      <span class="block bg-gray-900 px-7 py-[5.5px] rounded-sm font-gobold text-md uppercase text-[#C1C3C2] italic">
        Search next
      </span>
    </button>
  );
};

export default SearchButton;
