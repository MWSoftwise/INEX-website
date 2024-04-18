import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MethodWithoutImg from "../components/MethodWithoutImg";
import CookieConsent from "../components/CookieConsent";

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
            <MethodWithoutImg title="Iniekcje uszczelniające" text="Stosowane są do eliminacji nieszczelności w murach, fundamentach, ścianach szczelinowych lub innych elementach konstrukcyjnych. Polegają na wstrzykiwaniu specjalnych materiałów uszczelniających, takich jak żywice epoksydowe lub poliuretanowe, w miejsca, gdzie występują wycieki wody." />
            <MethodWithoutImg direction="flex-col lg:flex-row-reverse" title="Iniekcje wodochronne" text="Polegają na wstrzykiwaniu specjalnych materiałów uszczelniających do szczelin, pęknięć lub otworów w konstrukcji w celu zabezpieczenia przed wodą. Materiały te mogą być na bazie żywic, silikonów, poliuretanów lub innych substancji o właściwościach hydroizolacyjnych. Iniekcje wodochronne tworzą wodoodporną barierę, która zapobiega przenikaniu wody do wnętrza budynku." />
            <MethodWithoutImg title="Iniekcje przeciwwilgociowe" text="Służą do eliminowania problemów z wilgocią w murach i fundamentach poprzez wstrzykiwanie specjalnych preparatów, które penetrują materiał konstrukcyjny i tworzą hydrofobową barierę, ograniczającą wchłanianie wilgoci. Te preparaty mogą być na bazie krzemianów, krzemionek lub innych substancji o właściwościach hydrofobowych. Iniekcje przeciwwilgociowe zmniejszają wilgotność materiałów budowlanych, co może przyczynić się do zwiększenia trwałości i wytrzymałości konstrukcji." />
            <MethodWithoutImg direction="flex-col lg:flex-row-reverse" title="Uszczelnienie gruntu" text="Proces ten ma na celu zapobieganie przenikaniu wody lub substancji przez grunt poprzez tworzenie barier przeciwwodnych" />
            <Footer />
            <CookieConsent />
        </>
    );
  }
