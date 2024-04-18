import Image from "next/image";
import Link from "next/link";

const PostCard = ({title, desc, photoLink, articleLink}) => {

        return(
            <div className="w-[330px] min-h-[600px] flex flex-col items-start gap-8 bg-glass p-6 rounded-[10px]">
                <Image src={photoLink} width={300} height={300} alt="Zdjęcie wykonania usługi metodą iniekcji" className="h-[250px] object-cover" />
                <div className="flex flex-col gap-2">
                    <h2 className="text-[28px] font-semibold min-h-[100px]">{title}</h2>
                    <p className="w-full max-h-[75px] overflow-hidden">{desc}</p>
                    <Link href={`/realizacje/${articleLink}`} className="mt-4 flex items-center justify-center bg-[#f7f7f7] text-[#000022] text-[18px] py-2 px-3 rounded-md font-medium shadow-btn max-w-[150px] scale-100 transition-all hover:scale-105">Czytaj więcej</Link>
                </div>
            </div>
        );
}

export default PostCard;
