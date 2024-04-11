import Link from "next/link";
import Image from "next/image";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Envelop from "../../../public/assets/envelop.svg";
import Phone from "../../../public/assets/phone.svg";
import Location from "../../../public/assets/location.svg";

export default function Contact() {
    return (
        <>
            <Navbar />
            <div className="bg-custom px-[15px]">
                <div className="flex flex-col items-center gap-10 mt-[100px] pt-[10px] pb-[100px] px-[15px] ">
                    <h3 className="text-5xl lg:text-6xl font-semibold text-center leading-relaxed">Skontaktuj się z nami</h3>
                    <div className="w-full mt-10 flex flex-col gap-[25px] min-w-[none] lg:min-w-[340px]">
                        <Link href="mailto:kontakt@inexgroup.info" className="flex items-start gap-[10px] text-xl"><Image className="w-[24px]" src={Envelop} alt="Ikona koperty" /> kontakt@inexgroup.info</Link>
                        <Link href="tel:+48537867797" className="flex items-start gap-[10px] text-xl"><Image className="w-[24px]" src={Phone} alt="Ikona telefonu" /> +48 537 867 797</Link>
                        <div className="flex items-start gap-[10px] text-xl"><Image className="w-[24px]" src={Location} alt="Ikona lokacji" /> Zubrzyca Górna 359A, 34-484 Zubrzyca Górna</div>
                    </div>
                </div>
                <ContactForm />
                <div className="w-full h-[300px] mt-[80px]">
                    <iframe className="rounded-[10px]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2587.1771241678302!2d19.627540976877867!3d49.57554774997075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4715d0aa65b9f1cf%3A0x1f5707d878676d70!2sZubrzyca%20G%C3%B3rna%20359A%2C%2034-484%20Zubrzyca%20G%C3%B3rna!5e0!3m2!1spl!2spl!4v1712830751345!5m2!1spl!2spl" width="100%" height="100%"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
            <Footer />
        </>
    );
  }
