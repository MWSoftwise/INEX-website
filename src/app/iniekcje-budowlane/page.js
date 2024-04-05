import Method from "../components/Method";
import MethodBack from "../components/MethodBack";
import Navbar from "../components/Navbar";
import Pustki from "../../../public/assets/wypelnianie-pustek.webp";
import Footer from "../components/Footer";

export default function Iniections() {
    return (
        <>
            <Navbar />
            <div className="flex flex-col items-center gap-10 mt-[100px] pt-[100px] pb-[100px] px-[15px] bg-custom">
                <h3 className="text-5xl lg:text-6xl font-semibold text-center leading-relaxed">Iniekcje budowlane</h3>
                <div className="max-w-[1200px]">
                    <p className="text-2xl text-center font-light lg:font-medium leading-10">Specjalizujemy się w iniekcjach budowlanych. Jest to nowoczesna technologia która pozwola uszczelnić i zabezpieczyć obiekty bez ingerencji w konstrukcje budynku. Nasze doświadczenie obejmuje remonty budynków przemysłowych i mieszkalnych, gdzie dbamy o solidność i bezpieczeństwo konstrukcji.</p>
                </div>
            </div>
            <Method img={Pustki} title="Wypełnianie pustek w przegrodach budowlanych" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ullamcorper urna et nulla mattis semper. Integer nisl eros, pulvinar vitae purus a, elementum ullamcorper nunc. Integer pretium, mauris in rutrum tempus, erat ligula suscipit enim, et sodales tortor dui quis justo. Phasellus a ipsum nunc." />
            <MethodBack img={Pustki} title="Wypełnianie pustek w przegrodach budowlanych" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ullamcorper urna et nulla mattis semper. Integer nisl eros, pulvinar vitae purus a, elementum ullamcorper nunc. Integer pretium, mauris in rutrum tempus, erat ligula suscipit enim, et sodales tortor dui quis justo. Phasellus a ipsum nunc." />
            <Footer />
        </>
    );
  }
