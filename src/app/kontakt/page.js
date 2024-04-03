import Navbar from "../components/Navbar";

export default function Contact() {
    return (
        <>
            <Navbar />
            <div className="flex flex-col items-center gap-10 mt-[100px] pt-[100px] pb-[100px] px-[15px] bg-custom">
                <h3 className="text-5xl lg:text-6xl font-semibold text-center leading-relaxed">Skontaktuj się z nami</h3>
            </div>
        </>
    );
  }
