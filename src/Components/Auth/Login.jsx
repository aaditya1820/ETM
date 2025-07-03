import React, { useState } from 'react';
import { User, Lock } from 'lucide-react';

function Login({ loginHandel }) {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    setIsLoading(true);
    loginHandel(email, password);
    setemail("");
    setpassword("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white font-sans">
      {/* Container */}
      <div className="flex flex-col md:flex-row shadow-2xl rounded-2xl overflow-hidden w-[90%] max-w-5xl">
        
        {/* Login Panel */}
        <div className="md:w-1/2 w-full bg-[#1f1f2e] p-10">
          <div className="mb-8">
            <h1 className="text-4xl font-extrabold mb-2 text-white">Welcome Back !!</h1>
            <p className="text-gray-400">Login to your account</p>
          </div>

          <form onSubmit={submitHandler} className="space-y-6">
            {/* Email */}
            <div>
              <label className="text-sm font-medium text-gray-300">Email</label>
              <div className="relative mt-1">
                <User className="absolute top-3 left-3 text-gray-500" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-[#2c2c3c] border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#6c63ff] focus:border-transparent transition-all"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="text-sm font-medium text-gray-300">Password</label>
              <div className="relative mt-1">
                <Lock className="absolute top-3 left-3 text-gray-500" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setpassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-[#2c2c3c] border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#6c63ff] focus:border-transparent transition-all"
                  placeholder="Enter your password"
                />
              </div>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-[#6c63ff] hover:bg-[#584fd0] transition-all text-white font-bold py-3 rounded-xl shadow-lg shadow-indigo-900 focus:outline-none focus:ring-4 focus:ring-indigo-500/40 disabled:opacity-50"
            >
              {isLoading ? 'Logging in...' : 'LOGIN'}
            </button>
          </form>
        </div>

        {/* Right Panel */}
        <div className="md:w-1/2 w-full bg-gradient-to-br from-[#6c63ff] via-[#5f5bff] to-[#3833c1] flex items-center justify-center p-10">
          <div className="text-center">
            <h2 className="text-4xl font-extrabold mb-4 leading-tight">Welcome to <br /> <span className="text-white/90">EmployeeTask Management System</span></h2>
            <p className="text-white/70 text-lg mb-6">Makes your employee task management very easy and smooth !!</p>
            <img
              src="https://illustrations.popsy.co/gray/work-from-home.svg"
              alt="Login Illustration"
              className="w-60 mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
