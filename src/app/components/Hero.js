import HeroImgTop from "../../../public/assets/heroimgtop.svg"
import HeroImgLeft from "../../../public/assets/heroimgleft.svg"
import HeroImgRight from "../../../public/assets/heroimgright.svg"
import Image from "next/image";
import MoreBtn from "./MoreBtn";

const Hero = () => {
    return(
        <div className="w-full max-w-[600px] lg:max-w-[1400px] h-[90vh] flex flex-col lg:flex-row items-center lg:items-start gap-10 mt-[80px] pt-20 px-[15px] lg:px-[50px]">
            <div className="w-[360px] lg:w-[450px] h-[250px] lg:h-[600px] pt-12 lg:order-2 relative lg:mt-[50px] lg:translate-x-[-50px]">
                <Image className="herotop w-[100px] lg:w-[150px] absolute top-0 left-[50%] translate-x-[-50%]" src={HeroImgTop} alt="Obrazek" />
                <Image className="heroleft w-[100px] lg:w-[150px] absolute top-[91px] left-[78px] lg:top-[136px] lg:left-[8px]" src={HeroImgLeft} alt="Obrazek" />
                <Image className="heroright w-[100px] lg:w-[150px] absolute top-[91px] right-[78px] lg:top-[136px] lg:right-[8px]" src={HeroImgRight} alt="Obrazek" />
            </div>
            <div className="w-full flex flex-col items-start gap-y-[20px] lg:gap-y-[5px] bg-custom py-[80px] lg:py-[120px] lg:pl-10">
                <h1 className="text-[44px] lg:text-[80px] font-semibold">Iniekcja murów</h1>
                <p className="text-[18px] lg:text-[28px] max-w-[580px] lg:mb-[40px]">Nowoczesna technologia która zabezpieczy i uwolni Twój dom od wilgoci</p>
                <MoreBtn href="/iniekcje-budowlane" />
            </div>
        </div>
    )
}

export default Hero;