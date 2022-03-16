import React from 'react';

const Search = ({ setIp, ip, getIpData }) => {
  return (
    <div className="flex justify-center items-center mb-6">
      <input
        type="text"
        className="p-3 rounded-l-xl max-h-12 focus:outline-none placeholder:text-sm xl:w-3/5"
        placeholder="Search for any IP Address "
        value={ip}
        onChange={(e) => setIp(e.target.value)}
      />
      <button
        type="button"
        className="flex items-center justify-center h-12 p-2 bg-black rounded-r-xl hover:cursor-pointer"
        onClick={() => getIpData()}
      >
        <span className="material-icons text-white">&#xe5cc;</span>
      </button>
    </div>
  );
};

export default Search;
