import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import Image from "next/image";
import Test from "../../../../public/assets/stabilizacja.webp";
import Link from "next/link";

export default function SinglePost() {
    return (
        <>
            <Navbar />
            <div className="flex flex-col items-center gap-10 mt-[100px] pt-[100px] pb-[100px] px-[15px] bg-custom">
                <h3 className="text-5xl lg:text-6xl font-semibold text-center leading-relaxed">Uszczelnienie piwnicy</h3>
            </div>
            <div className="max-w-[1200px] px-[15px] flex flex-col items-center gap-10">
                <div className="flex flex-col items-start gap-8 lg:gap-20 bg-glass p-6 lg:p-10 rounded-[10px]">
                    <Image src={Test} className="h-[auto] lg:h-[500px] w-[100%] lg:w-[auto] object-cover self-center" />
                    <div className="flex flex-col gap-6">
                        <h2 className="text-[28px] lg:text-[36px] font-semibold">Uszczelnienie piwnicy</h2>
                        <p className="lg:text-[22px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ullamcorper urna et nulla mattis semper. Integer nisl eros, pulvinar vitae purus a, elementum ullamcorper nunc. Integer pretium, mauris in rutrum tempus, erat ligula suscipit enim, et sodales tortor dui quis justo. Phasellus a ipsum nunc.</p>
                        <Link href="/realizacje" className="flex items-center justify-center bg-[#f7f7f7] text-[#000022] text-[18px] py-2 px-3 rounded-md font-medium shadow-btn max-w-[150px]">Powrót</Link>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
  }
