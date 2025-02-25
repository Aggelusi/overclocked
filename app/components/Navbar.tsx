"use client";
import { useState } from "react";
import Link from "next/link";
import { FiShoppingCart, FiUser, FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
<nav className="w-full bg-gray-100 text-sm">
  {/* Top Navbar */}
  <div className="flex justify-end px-6 py-2 space-x-4 text-gray-600">
    <a href="#" className="hover:text-black">Find a Store</a>
    <a href="#" className="hover:text-black">Help</a>
    <a href="#" className="hover:text-black font-semibold">Join Us</a>
    <a href="#" className="hover:text-black">Sign In</a>
  </div>

  {/* Main Navbar */}
  <div className="flex items-center justify-between px-6 py-3 bg-white shadow-md text-black">
    {/* Logo */}
    <div className="text-2xl font-bold">🛒 Overclocked</div>

    {/* Category Links */}
    <div className="flex space-x-6 black text-lg font-semibold ">
      <a href="#" className="hover:underline">New</a>
      <a href="#" className="hover:underline">Men</a>
      <a href="#" className="hover:underline">Women</a>
      <a href="#" className="hover:underline">Kids</a>
      <a href="#" className="hover:underline">Tech</a>
    </div>

    {/* Search + Cart Icons */}
    <div className="flex items-center space-x-4">
      <div className="flex items-center bg-gray-200 px-3 py-2 rounded-md">
        🔍 <input type="text" placeholder="Search" className="bg-transparent ml-2 outline-none" />
      </div>
      <a href="#" className="text-2xl">❤️</a>
      <a href="#" className="text-2xl">🛒</a>
    </div>
  </div>
</nav>

  );
}
