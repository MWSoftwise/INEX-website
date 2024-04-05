import Image from "next/image";

const MethodBack = ({title, text, img, alt}) => {
    return(
        <div className="flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-40 max-w-[600px] lg:max-w-none px-[15px] mt-32">
            <div className="flex flex-col gap-8 py-10 lg:max-w-[520px]">
                <h3 className="text-5xl lg:text-6xl font-semibold">{title}</h3>
                <p className="text-2xl font-light lg:font-medium leading-10">{text}</p>
            </div>
            <Image src={img} alt={alt} className="w-[330px] rounded-bl-[100px] lg:w-[560px] lg:rounded-bl-[200px]" />
        </div>
    )
}

export default MethodBack;