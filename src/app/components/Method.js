import Image from "next/image";
import Pustki from "../../../public/assets/wypelnianie-pustek.webp";

const Method = () => {
    return(
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-40 max-w-[600px] lg:max-w-none px-[15px] mt-32">
            <Image src={Pustki} alt="Logotyp" className="w-[330px] rounded-br-[100px] lg:w-[560px] lg:rounded-br-[200px]" />
            <div className="flex flex-col gap-8 py-10 lg:max-w-[520px]">
                <h3 className="text-5xl lg:text-6xl font-semibold">Wypełnianie pustek w przegrodach budowlanych</h3>
                <p className="text-2xl font-light lg:font-medium leading-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ullamcorper urna et nulla mattis semper. Integer nisl eros, pulvinar vitae purus a, elementum ullamcorper nunc. Integer pretium, mauris in rutrum tempus, erat ligula suscipit enim, et sodales tortor dui quis justo. Phasellus a ipsum nunc.    </p>
            </div>
        </div>
    )
}

export default Method;