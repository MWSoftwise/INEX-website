import Image from "next/image";
import Logo from "../../../public/assets/logo.svg";
import Fb from "../../../public/assets/fb.svg";
import Ig from "../../../public/assets/ig.svg";
import Tiktok from "../../../public/assets/tiktok.svg";
import Envelop from "../../../public/assets/envelop.svg";
import Phone from "../../../public/assets/phone.svg";
import Link from "next/link";

const Footer = () => {

    const currentYear = new Date().getFullYear();

    return(
        <div className="w-full relative flex flex-col items-center justify-end gap-16 pb-14 pt-[150px] px-[15px] pl-[20px] lg:pl-[15px] mt-[100px] lg:mt-[200px] bg-footer">
            <span className="absolute top-0 left-[50%] translate-x-[-50%] w-[100vw] h-[1px] bg-[#4B596A]"></span>
            <div className="w-full flex flex-col lg:flex-row items-center lg:items-start lg:justify-center gap-16 lg:gap-12 xl:gap-24 2xl:gap-40">
                <Image src={Logo} alt="Logo" className="translate-y-[-20px]" />
                <div className="flex flex-col gap-[25px]">
                    <Link href="https://www.facebook.com/profile.php?id=61558042463636" target="_blank" className="flex items-start gap-[10px] text-xl whitespace-nowrap"><Image className="w-[24px]" src={Fb} alt="Ikona Facebook"/> Polub nas na Facebooku</Link>
                    <Link href="https://www.instagram.com/inex_uszczelnienia/" target="_blank" className="flex items-start gap-[10px] text-xl whitespace-nowrap"><Image className="w-[24px]" src={Ig} alt="Ikona Instagram" /> Zaobserwuj nas na Instagramie</Link>

                </div>
                <div className="flex flex-col gap-[25px] min-w-[none] lg:min-w-[340px]">
                    <Link href="mailto:kontakt@inexgroup.info" className="flex items-start gap-[10px] text-xl"><Image className="w-[24px]" src={Envelop} alt="Ikona koperty" /> kontakt@inexgroup.info</Link>
                    <Link href="tel:+48537867797" className="flex items-start gap-[10px] text-xl"><Image className="w-[24px]" src={Phone} alt="Ikona telefonu" /> +48 537 867 797</Link>
                </div>
            </div>
            <div className="w-full flex flex-col lg:flex-row items-center lg:justify-around gap-6">
                <p className="text-xl">Copyright © {currentYear}</p>
                <div className="flex flex-col lg:flex-row gap-3 items-center">
                    <p className="text-xl">Wszelkie prawa zastrzeżone</p>
                    <span className="block w-[2px] h-[20px] bg-[#f7f7f7]"></span>
                    <Link href="/polityka-prywatnosci" className="text-xl">Polityka prywatności</Link>
                </div>
            </div>
        </div>
    )
}

export default Footer;