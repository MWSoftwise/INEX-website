import Method from "../components/Method";
import Navbar from "../components/Navbar";
import PeknieciaZywica from "../../../public/assets/pekniecia-zywica.webp"
import WypelnianiePustek from "../../../public/assets/wypelnianie-pustek.webp"
import Footer from "../components/Footer";
import MethodBack from "../components/MethodBack";

export default function ObjectsRepair() {
    return (
        <>
            <Navbar />
            <div className="flex flex-col items-center gap-10 mt-[100px] pt-[100px] pb-[100px] px-[15px] bg-custom">
                <h3 className="text-5xl lg:text-6xl font-semibold text-center leading-relaxed">Bezinwazyjne naprawy obiektów</h3>
                <div className="max-w-[1200px]">
                    <p className="text-2xl text-center font-light lg:font-medium leading-10">Bezinwazyjna naprawa budynku odnosi się do metod naprawczych, które nie wymagają znacznego ingerowania w strukturę budynku lub nie powodują znaczących zakłóceń dla mieszkańców lub użytkowników budynku. Te metody są często stosowane w celu naprawy usterek, wzmocnienia konstrukcji lub poprawy wydajności budynku, minimalizując jednocześnie zakłócenia dla osób korzystających z budynku i ograniczając koszty oraz czas naprawy.</p>
                </div>
            </div>
            <Method img={PeknieciaZywica} alt="Grafika prezentująca naprawę pęknięć" title="Naprawa pęknięć metodą iniekcji" text="Iniekcja żywicą epoksydową lub poliuretanową: Proces ten polega na wstrzykiwaniu specjalnych żywic do pęknięć, które następnie utwardzają się i wypełniają przestrzeń, zapewniając wzmocnienie i uszczelnienie ściany" />
            <MethodBack img={WypelnianiePustek} alt="Grafika prezentująca wypełnianie pustek" title="Wypełnianie pustek" text="Wstrzykiwanie żywic lub materiałów polimerowych: W niektórych przypadkach, szczególnie gdy puste przestrzenie są trudno dostępne lub wymagają precyzyjnego wypełnienia, można zastosować metodę wstrzykiwania żywic lub materiałów polimerowych. Te materiały są wstrzykiwane bezpośrednio do pustych przestrzeni, gdzie następnie utwardzają się, tworząc trwałe wypełnienie." />
            <Footer />
        </>
    );
  }
