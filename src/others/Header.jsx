import React, { useEffect, useState } from 'react';

function Header({ data, changeUser }) {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    if (!data) {
      setUserName('Admin');
    } else {
      setUserName(data.firstName);
    }
  }, [data]);

  const logOutUser = () => {
    localStorage.removeItem('userLoggedInData');
    changeUser(null);
  };

  return (
    <div className="h-[18vh] w-full bg-gradient-to-r from-[#0f0f0f] to-[#2a2a2a] flex items-center justify-between px-10 py-6 shadow-md">
      <div>
        <h1 className="text-white text-2xl md:text-3xl font-light">
          Welcome back,
        </h1>
        <h2 className="text-3xl md:text-4xl font-bold text-white mt-1 flex items-center gap-2">
          {userName} <span className="text-yellow-400 animate-wave">👋</span>
        </h2>
      </div>

      <button
        onClick={logOutUser}
        className="bg-gradient-to-r from-red-600 to-red-800 text-white font-semibold px-5 py-2 rounded-xl shadow hover:scale-105 active:scale-95 transition-all duration-300"
      >
        Logout
      </button>
    </div>
  );
}

export default Header;
