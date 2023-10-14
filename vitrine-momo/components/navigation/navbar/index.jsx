"use client";
import Link from "next/link";
import Image from "next/image";
import React, { use } from "react";
import { useState } from "react";



  const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
  
    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };
  
  

  return (
    <header>
      <div className="bg-gray-200">
        <div className="text-2xl md:text-3xl flex flex-row vw-full justify-between bg-gray-200">
          <div className="flex flex-col justify-around md:w-1/3">
          <div className="display flex flex-col justify-between justify-around">
            <Image
              className="h-auto md:w-64 pl-10"
              src="/carteVisiteMomoLogo-removebg-preview.png"
              alt="logo de Multiservice pro"
              width={200}
              height={200}
            />
          </div>
          </div>
          <div className="flex-row vw-[100%] flex justify-between items-center md:w-2/3 md:mt-[1%]">
            {/* Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden px-4 py-2 bg-gray-200 text-gray-700 hover:text-gray-900 text-5xl border rounded-lg"
              type="button"
            >
              {menuOpen ? "X" : "≡"}
            </button>
  
            {/* Mobile Menu */}
            <nav><div
              className={`${
                menuOpen ? "block" : "hidden"
              }  md:hidden  fixed top-20 right-20 flex flex-col  w-2/3 h-full bg-transparent  z-50 `}
           >
              <div onClick={toggleMenu} className="flex  px-4 py-2 rounded-md border  bg-[#484848] hover:bg-[#f79b20] hover:text-gray-700 md:max-h-12 text-neon pl-12">
                <Link href="/">Accueil</Link>
              </div>
              <div  onClick={toggleMenu} className="flex  px-4 py-2 rounded-md border bg-[#484848] hover:bg-[#f79b20] hover:text-gray-700 md:max-h-12 text-neon pl-12">
                <Link href="/contact">Contact</Link>
              </div>
              <div  onClick={toggleMenu} className="flex  px-4 py-2 rounded-md border bg-[#484848] hover:bg-[#f79b20] hover:text-gray-700 md:max-h-12 text-neon pl-12">
                <Link href="/dashboard">Realisations</Link>
              </div>
              <div  onClick={toggleMenu} className="flex  px-4 py-2 rounded-md border bg-[#484848] hover:bg-[#f79b20] hover:text-gray-700 md:max-h-12 text-neon pl-12">
                <Link href="/gallery">A propos</Link>
              </div>
              </div>
              {/* menu desktop */}
              <div
              className="hidden md:flex md:flex-row md:w-full   space-x-8  text-2xl text-gray-200 h-full md:text-3xl md:text-center md:mr-10 md:mt-6 md:pt-5 "
               
               
           >
              <div className="flex-grow block px-4 py-2 rounded-xl border ml-8 bg-[#484848] hover:bg-[#f79b20] hover:text-gray-700 md:max-h-12 text-neon">
                <Link href="/">Accueil</Link>
              </div>
              <div className="flex-grow block px-4 py-2 rounded-xl border bg-[#484848] hover:bg-[#f79b20] hover:text-gray-700 md:max-h-12 text-neon">
                <Link href="/contact">Contact</Link>
              </div>
              <div className="flex-grow block px-4 py-2 rounded-xl border bg-[#484848] hover:bg-[#f79b20] hover:text-gray-700 md:max-h-12 text-neon">
                <Link href="/dashboard">Realisations</Link>
              </div>
              <div className="flex-grow block px-4 py-2 rounded-xl border bg-[#484848] hover:bg-[#f79b20] hover:text-gray-700 md:max-h-12 text-neon">
                <Link href="/gallery">A propos</Link>
              </div>
              </div>
              </nav>
          </div>
        </div>
      </div>
    </header>
  );
  
            };
export default Navbar;
