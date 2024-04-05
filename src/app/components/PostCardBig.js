import Image from "next/image";
import Test from "../../../public/assets/stabilizacja.webp";
import Link from "next/link";

const PostCardBig = ({title, desc, photoLink, articleLink }) => {

    return(
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-20 bg-glass p-6 rounded-[10px]">
            <Image src={photoLink} width={300} height={300} alt="Zdjęcie wykonania usługi metodą iniekcji" className="h-[300px] object-cover" />
            <div className="flex flex-col gap-6 lg:max-w-[50%]">
                <h2 className="text-[28px] font-semibold">{title}</h2>
                <p>{desc}</p>
                <Link href={`/realizacje/${articleLink}`} className="flex items-center justify-center bg-[#f7f7f7] text-[#000022] text-[18px] py-2 px-3 rounded-md font-medium shadow-btn max-w-[150px]">Czytaj więcej</Link>
            </div>
        </div>
    )
}

export default PostCardBig;