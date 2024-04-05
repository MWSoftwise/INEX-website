import Method from "../components/Method";
import Navbar from "../components/Navbar";
import Stabilizacja from "../../../public/assets/stabilizacja.webp";
import Footer from "../components/Footer";

export default function GroundStabilization() {
    return (
        <>
            <Navbar />
            <div className="flex flex-col items-center gap-10 mt-[100px] pt-[100px] pb-[100px] px-[15px] bg-custom">
                <h3 className="text-5xl lg:text-6xl font-semibold text-center leading-relaxed">Stabilizacja gruntu</h3>
                <div className="max-w-[1200px]">
                    <p className="text-2xl text-center font-light lg:font-medium leading-10">Technologia iniekcji pozwala na wzmocnienie i stabilizację gruntów nawet w najtrudniejszych warunkach. Dzięki naszym usługom, klienci mogą być pewni, że ich projekty będą odporne na osiadanie, zapewniając trwałość i bezpieczeństwo konstrukcji przez wiele lat.</p>
                </div>
            </div>
            <Method img={Stabilizacja} alt="Grfika stabilizacji gruntu" title="Stabilizowanie gruntu metodą iniekcji" text="Stabilizacja gruntu za pomocą metody iniekcji jest procesem, w którym specjalne substancje lub mieszanki są wstrzykiwane do gruntu w celu zmiany jego właściwości mechanicznych i inżynieryjnych. Ta technika jest powszechnie stosowana w budownictwie do wzmocnienia gruntu, podnoszenia nośności oraz stabilizacji konstrukcji na niestabilnym podłożu" />
            <Footer />
        </>
    );
  }
