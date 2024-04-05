import Method from "../components/Method";
import Navbar from "../components/Navbar";
import IUszczel from "../../../public/assets/iniekcje-uszczelniajace.webp"
import MethodWithoutImg from "../components/MethodWithoutImg";
import Footer from "../components/Footer";

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
            <Method img={IUszczel} alt="Grafika iniekcja uszczelniająca" title="Iniekcje uszczelniające" text="iniekcje uszczelniające są stosowane do eliminacji przecieków wody w budynkach. Mogą być przeprowadzane bezinwazyjnie poprzez wstrzykiwanie materiałów uszczelniających do konstrukcji, minimalizując konieczność rozbierania elementów budynku. Zapobiegamy również dalszemu podciąganiu kapilarnemu co przejawia sie wilgocią, grzybem lub pleśnią na ścianach." />
            <MethodWithoutImg direction="flex-col lg:flex-row-reverse" title="Wzmacnianie i spinanie murow murów." text="Proces spinania murów kotwą obejmuje zastosowanie kotew, czyli specjalnych metalowych elementów, które wbija się lub montuje w materiale budowlanym w celu wzmocnienia połączeń i zapewnienia większej stabilności konstrukcji. Kotwy są używane do łączenia różnych warstw murów lub do mocowania elementów do ścian, takich jak balustrady, poręcze czy konstrukcje stalowe." />
            <Footer />
        </>
    );
  }
