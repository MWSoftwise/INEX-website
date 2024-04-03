import HeroImg from "../../../public/assets/heroimg.svg"
import Image from "next/image";
import MoreBtn from "./MoreBtn";

const Hero = () => {
    return(
        <div className="w-full max-w-[600px] lg:max-w-[1400px] h-[90vh] flex flex-col lg:flex-row items-center lg:items-start gap-10 mt-[80px] pt-20 px-[15px] lg:px-[50px]">
            <div className="pt-12 lg:order-2"><Image className="w-[200px] lg:w-[600px]" src={HeroImg} alt="test" /></div>
            <div className="w-full flex flex-col items-start gap-y-[20px] lg:gap-y-[5px] bg-custom py-[80px] lg:py-[120px] lg:pl-10">
                <h1 className="text-[44px] lg:text-[80px] font-semibold">Iniekcja murów</h1>
                <p className="text-[18px] lg:text-[28px] max-w-[580px] lg:mb-[40px]">Nowoczesna technologia która zabezpieczy i uwolni Twój dom od wilgoci</p>
                <MoreBtn href="/iniekcje-budowlane" />
            </div>
        </div>
    )
}

export default Hero;