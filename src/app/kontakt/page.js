import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Contact() {
    return (
        <>
            <Navbar />
            <div className="bg-custom px-[15px]">
                <div className="flex flex-col items-center gap-10 mt-[100px] pt-[10px] pb-[100px] px-[15px] ">
                    <h3 className="text-5xl lg:text-6xl font-semibold text-center leading-relaxed">Skontaktuj się z nami</h3>
                </div>
                <ContactForm />
            </div>
            <Footer />
        </>
    );
  }
