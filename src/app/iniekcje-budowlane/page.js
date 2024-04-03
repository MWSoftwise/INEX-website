import Method from "../components/Method";
import MethodBack from "../components/MethodBack";
import Navbar from "../components/Navbar";

export default function Iniections() {
    return (
        <>
            <Navbar />
            <div className="flex flex-col items-center gap-10 mt-[100px] pt-[100px] pb-[100px] px-[15px] bg-custom">
                <h3 className="text-5xl lg:text-6xl font-semibold text-center leading-relaxed">Iniekcje budowlane</h3>
                <div className="max-w-[1200px]">
                    <p className="text-2xl text-center font-light lg:font-medium leading-10">Specjalizujemy się w iniekcjach budowlanych, stabilizacji gruntu oraz bezinwazyjnych naprawach obiektów. Nasze doświadczenie obejmuje remonty budynków przemysłowych i mieszkalnych, gdzie dbamy o solidność i bezpieczeństwo konstrukcji.</p>
                </div>
            </div>
            <Method />
            <MethodBack />
        </>
    );
  }
