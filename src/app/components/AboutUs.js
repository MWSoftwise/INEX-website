import Image from "next/image";
import Logotyp from "../../../public/assets/logotyp.png";

const AboutUs = () => {
    return(
        <div id="about" className="flex flex-col lg:flex-row items-center gap-10 lg:gap-40 max-w-[600px] lg:max-w-none px-[15px]">
            <Image src={Logotyp} alt="Logotyp" className="w-[150px] lg:w-[460px]" />
            <div className="flex flex-col gap-8 bg-custom py-10 lg:max-w-[520px]">
                <h3 className="text-5xl lg:text-6xl font-semibold">Czym się zajmujemy?</h3>
                <p className="text-2xl font-light lg:font-medium leading-10">Specjalizujemy się w iniekcjach budowlanych, stabilizacji gruntu oraz bezinwazyjnych naprawach obiektów. Nasze doświadczenie obejmuje remonty budynków przemysłowych i mieszkalnych, gdzie dbamy o solidność i szczelność konstrukcji.</p>
            </div>
        </div>
    )
}

export default AboutUs;