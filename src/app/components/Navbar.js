'use client'
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/assets/logo.svg";
import Hamburger from "../../../public/assets/hamburger.svg";
import Close from "../../../public/assets/close.svg";
import Fb from "../../../public/assets/fb.svg";
import Ig from "../../../public/assets/ig.svg";
import Tiktok from "../../../public/assets/tiktok.svg";

const Navbar = () => {
    const [isMenuActive, setIsMenuActive] = useState(false);
    const [menuTransition, setMenuTransition] = useState('transform translate-x-full');

    const handleMenu = () => {
        setIsMenuActive(prevState => !prevState);
        setMenuTransition(isMenuActive ? 'transform translate-x-full' : 'transform translate-x-0');
    }

    const handleLinkClick = () => {
        setIsMenuActive(false);
        setMenuTransition('transform translate-x-full');
    }

    return (
        <nav className="flex w-full max-w-[1400px] h-[80px] items-center justify-between px-[15px] lg:px-[30px] fixed lg:static top-0 left-0 z-[2] bg-[#002]">
            <Link href="/"><Image className="w-[130px] lg:w-[180px]" src={Logo} alt="Logo" /></Link>

            <ul className={`flex flex-col lg:flex-row items-center lg:justify-end lg:gap-x-10 w-full fixed lg:static top-[0px] left-0 transition-all pt-[160px] lg:pt-0 pb-[100px] lg:pb-0 z-[-1] lg:z-[2] gap-y-8 bg-menu lg:bg-transparent lg:translate-x-0 ${menuTransition}`}>
                <li className="scale-100 transition-all hover:scale-105"><Link className="text-xl lg:text-[24px] py-1 cursor-pointer p-2" href="/#about" onClick={handleLinkClick}>O nas</Link></li>
                <li className="scale-100 transition-all hover:scale-105"><Link className="text-xl lg:text-[24px] py-1 cursor-pointer" href="/realizacje" onClick={handleLinkClick}>Realizacje</Link></li>
                <li className="scale-100 transition-all hover:scale-105"><Link className="text-xl lg:text-[24px] py-1 cursor-pointer" href="/kontakt" onClick={handleLinkClick}>Kontakt</Link></li>
                <li className="flex w-[100px] items-center justify-around mt-6 lg:mt-0">
                    <Link href="https://www.facebook.com/profile.php?id=61558042463636" target="_blank"><Image src={Fb} className="w-[22px] lg:w-[27px] cursor-pointer" alt="Ikona Facebook" /></Link>
                    <Link href="https://www.instagram.com/inex_uszczelnienia/" target="_blank"><Image src={Ig} className="w-[25px] lg:w-[30px] cursor-pointer" alt="Ikona Instagram" /></Link>

                </li>
            </ul>

            <button className="w-9 h-9 lg:hidden" onClick={handleMenu}>
                {!isMenuActive ? <Image src={Hamburger} alt="Ikona menu" /> : <Image src={Close} alt="Ikona menu" />}
            </button>
        </nav>
    );
}

export default Navbar;
