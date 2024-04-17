import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Policy() {
    return (
        <>
            <Navbar />
            <div className="flex flex-col items-center gap-10 mt-[100px] pt-[100px] pb-[100px] px-[15px] bg-custom">
                <h3 className="text-5xl lg:text-6xl font-semibold text-center leading-relaxed">Polityka prywatności</h3>
                <div className="max-w-[90%] flex flex-col gap-2">
                    <h4 className="text-xl font-bold">Polityka prywatności opisuje zasady przetwarzania przez nas informacji na Twój temat, w tym danych osobowych oraz ciasteczek, czyli tzw. cookies.</h4>
                    <h4 className="text-xl font-bold">1. Informacje ogólne</h4>
                    <p>1. Niniejsza polityka dotyczy Serwisu www, funkcjonującego pod adresem url: inexgroup.info</p>
                    <p>2. Operatorem serwisu oraz Administratorem danych osobowych jest: Inex Sp. z o.o. Zubrzyca Górna 359A, 34-484 Zubrzyca Górna</p>
                    <p>3. Adres kontaktowy poczty elektronicznej operatora: kontakt@inexgroup.info</p>
                    <p>4. Operator jest Administratorem Twoich danych osobowych w odniesieniu do danych podanych dobrowolnie w Serwisie.</p>
                    <p>5. Serwis wykorzystuje dane osobowe w następujących celach:</p>
                    <p className="ml-4">a)Obsługa zapytań przez formularz</p>
                    <p>6. Serwis realizuje funkcje pozyskiwania informacji o użytkownikach i ich zachowaniu w następujący sposób:</p>
                    <p className="ml-4">a)Poprzez dobrowolnie wprowadzone w formularzach dane, które zostają wprowadzone do systemów Operatora.</p>
                    <p className="ml-4">b)Poprzez zapisywanie w urządzeniach końcowych plików cookie (tzw. „ciasteczka”).</p>

                    <h4 className="text-xl font-bold">2. Wybrane metody ochrony danych stosowane przez Operatora</h4>
                    <p>1. Miejsca logowania i wprowadzania danych osobowych są chronione w warstwie transmisji (certyfikat SSL). Dzięki temu dane osobowe i dane logowania, wprowadzone na stronie, zostają zaszyfrowane w komputerze użytkownika i mogą być odczytane jedynie na docelowym serwerze.</p>
                    <p>2. Istotnym elementem ochrony danych jest regularna aktualizacja wszelkiego oprogramowania, wykorzystywanego przez Operatora do przetwarzania danych osobowych, co w szczególności oznacza regularne aktualizacje komponentów programistycznych.</p>

                    <h4 className="text-xl font-bold">3. Hosting</h4>
                    <p>1. Serwis jest hostowany (technicznie utrzymywany) na serwerach operatora: vercel</p>
                    <p>2. Firma hostingowa w celu zapewnienia niezawodności technicznej prowadzi logi na poziomie serwera. Zapisowi mogą podlegać:</p>
                    <p className="ml-4">a) zasoby określone identyfikatorem URL (adresy żądanych zasobów – stron, plików),</p>
                    <p className="ml-4">b) czas nadejścia zapytania,</p>
                    <p className="ml-4">c) czas wysłania odpowiedzi,</p>
                    <p className="ml-4">d)nazwę stacji klienta – identyfikacja realizowana przez protokół HTTP,</p>
                    <p className="ml-4">e) informacje o błędach jakie nastąpiły przy realizacji transakcji HTTP,</p>
                    <p className="ml-4">f)adres URL strony poprzednio odwiedzanej przez użytkownika (referer link) – w przypadku gdy przejście do Serwisu nastąpiło przez odnośnik,</p>
                    <p className="ml-4">g)Pinformacje o przeglądarce użytkownika,</p>
                    <p className="ml-4">h)informacje o adresie IP,</p>
                    <p className="ml-4">i)informacje diagnostyczne związane z procesem samodzielnego zamawiania usług poprzez rejestratory na stronie,</p>
                    <p className="ml-4">j)informacje związane z obsługą poczty elektronicznej kierowanej do Operatora oraz wysyłanej przez Operatora.</p>

                    <h4 className="text-xl font-bold">4. Twoje prawa i dodatkowe informacje o sposobie wykorzystania danych</h4>
                    <p>1. W niektórych sytuacjach Administrator ma prawo przekazywać Twoje dane osobowe innym odbiorcom, jeśli będzie to niezbędne do wykonania zawartej z Tobą umowy lub do zrealizowania obowiązków ciążących na Administratorze. Dotyczy to takich grup odbiorców:</p>
                    <p className="ml-4">a)upoważnieni pracownicy i współpracownicy, którzy korzystają z danych w celu realizacji celu działania strony</p>
                    <p>2. Twoje dane osobowe przetwarzane przez Administratora nie dłużej, niż jest to konieczne do wykonania związanych z nimi czynności określonych osobnymi przepisami (np. o prowadzeniu rachunkowości). W odniesieniu do danych marketingowych dane nie będą przetwarzane dłużej niż przez 3 lata.</p>
                    <p>3. Przysługuje Ci prawo żądania od Administratora</p>
                    <p className="ml-4">a)dostępu do danych osobowych Ciebie dotyczących</p>
                    <p className="ml-4">b)ich sprostowania,</p>
                    <p className="ml-4">c)usunięcia,</p>
                    <p className="ml-4">d)ograniczenia przetwarzania,</p>
                    <p className="ml-4">e)oraz przenoszenia danych.</p>
                    <p>4. Przysługuje Ci prawo do złożenia sprzeciwu w zakresie przetwarzania wskazanego w pkt 3.2 wobec przetwarzania danych osobowych w celu wykonania prawnie uzasadnionych interesów realizowanych przez Administratora, w tym profilowania, przy czym prawo sprzeciwu nie będzie mogło być wykonane w przypadku istnienia ważnych prawnie uzasadnionych podstaw do przetwarzania, nadrzędnych wobec Ciebie interesów, praw i wolności, w szczególności ustalenia, dochodzenia lub obrony roszczeń.</p>
                    <p>5. Na działania Administratora przysługuje skarga do Prezesa Urzędu Ochrony Danych Osobowych, ul. Stawki 2, 00-193 Warszawa.</p>
                    <p>6. Podanie danych osobowych jest dobrowolne, lecz niezbędne do obsługi Serwisu.</p>
                    <p>7. W stosunku do Ciebie mogą być podejmowane czynności polegające na zautomatyzowanym podejmowaniu decyzji, w tym profilowaniu w celu świadczenia usług w ramach zawartej umowy oraz w celu prowadzenia przez Administratora marketingu bezpośredniego.</p>
                    <p>8. Dane osobowe nie są przekazywane od krajów trzecich w rozumieniu przepisów o ochronie danych osobowych. Oznacza to, że nie przesyłamy ich poza teren Unii Europejskiej.</p>

                    <h4 className="text-xl font-bold">5. Informacje w formularzach</h4>
                    <p>1. Serwis zbiera informacje podane dobrowolnie przez użytkownika, w tym dane osobowe, o ile zostaną one podane.</p>
                    <p>2. Serwis może zapisać informacje o parametrach połączenia (oznaczenie czasu, adres IP).</p>
                    <p>3. Serwis, w niektórych wypadkach, może zapisać informację ułatwiającą powiązanie danych w formularzu z adresem e-mail użytkownika wypełniającego formularz. W takim wypadku adres e-mail użytkownika pojawia się wewnątrz adresu url strony zawierającej formularz.</p>
                    <p>4. Dane podane w formularzu są przetwarzane w celu wynikającym z funkcji konkretnego formularza, np. w celu dokonania procesu obsługi zgłoszenia serwisowego lub kontaktu handlowego, rejestracji usług itp. Każdorazowo kontekst i opis formularza w czytelny sposób informuje, do czego on służy.</p>

                    <h4 className="text-xl font-bold">6. Logi Administratora</h4>
                    <p>1. Informacje zachowaniu użytkowników w serwisie mogą podlegać logowaniu. Dane te są wykorzystywane w celu administrowania serwisem.</p>

                    <h4 className="text-xl font-bold">7. Istotne techniki marketingowe</h4>
                    <p>1. Operator stosuje analizę statystyczną ruchu na stronie, poprzez Google Analytics (Google Inc. z siedzibą w USA). Operator nie przekazuje do operatora tej usługi danych osobowych, a jedynie zanonimizowane informacje. Usługa bazuje na wykorzystaniu ciasteczek w urządzeniu końcowym użytkownika. W zakresie informacji o preferencjach użytkownika gromadzonych przez sieć reklamową Google użytkownik może przeglądać i edytować informacje wynikające z plików cookies przy pomocy narzędzia: https://www.google.com/ads/preferences/</p>

                    <h4 className="text-xl font-bold">8. Informacja o plikach cookies</h4>
                    <p>1. Serwis korzysta z plików cookies.</p>
                    <p>2. Pliki cookies (tzw. „ciasteczka”) stanowią dane informatyczne, w szczególności pliki tekstowe, które przechowywane są w urządzeniu końcowym Użytkownika Serwisu i przeznaczone są do korzystania ze stron internetowych Serwisu. Cookies zazwyczaj zawierają nazwę strony internetowej, z której pochodzą, czas przechowywania ich na urządzeniu końcowym oraz unikalny numer.</p>
                    <p>3. Podmiotem zamieszczającym na urządzeniu końcowym Użytkownika Serwisu pliki cookies oraz uzyskującym do nich dostęp jest operator Serwisu.</p>
                    <p>Pliki cookies wykorzystywane są w następujących celach:</p>
                    <p className="ml-4">a)utrzymanie sesji użytkownika Serwisu (po zalogowaniu), dzięki której użytkownik nie musi na każdej podstronie Serwisu ponownie wpisywać loginu i hasła;</p>
                    <p className="ml-4">b)realizacji celów określonych powyżej w części "Istotne techniki marketingowe";</p>
                    <p>5. W ramach Serwisu stosowane są dwa zasadnicze rodzaje plików cookies: „sesyjne” (session cookies) oraz „stałe” (persistent cookies). Cookies „sesyjne” są plikami tymczasowymi, które przechowywane są w urządzeniu końcowym Użytkownika do czasu wylogowania, opuszczenia strony internetowej lub wyłączenia oprogramowania (przeglądarki internetowej). „Stałe” pliki cookies przechowywane są w urządzeniu końcowym Użytkownika przez czas określony w parametrach plików cookies lub do czasu ich usunięcia przez Użytkownika.</p>
                    <p>6. Oprogramowanie do przeglądania stron internetowych (przeglądarka internetowa) zazwyczaj domyślnie dopuszcza przechowywanie plików cookies w urządzeniu końcowym Użytkownika. Użytkownicy Serwisu mogą dokonać zmiany ustawień w tym zakresie. Przeglądarka internetowa umożliwia usunięcie plików cookies. Możliwe jest także automatyczne blokowanie plików cookies Szczegółowe informacje na ten temat zawiera pomoc lub dokumentacja przeglądarki internetowej.</p>
                    <p>7. Ograniczenia stosowania plików cookies mogą wpłynąć na niektóre funkcjonalności dostępne na stronach internetowych Serwisu.</p>
                    <p>8. Pliki cookies zamieszczane w urządzeniu końcowym Użytkownika Serwisu wykorzystywane mogą być również przez współpracujące z operatorem Serwisu podmioty, w szczególności dotyczy to firm: Google (Google Inc. z siedzibą w USA), Facebook (Facebook Inc. z siedzibą w USA), Twitter (Twitter Inc. z siedzibą w USA)</p>

                    <h4 className="text-xl font-bold">9. Zarządzanie plikami cookies – jak w praktyce wyrażać i cofać zgodę?</h4>
                    <p>1. Jeśli użytkownik nie chce otrzymywać plików cookies, może zmienić ustawienia przeglądarki. Zastrzegamy, że wyłączenie obsługi plików cookies niezbędnych dla procesów uwierzytelniania, bezpieczeństwa, utrzymania preferencji użytkownika może utrudnić, a w skrajnych przypadkach może uniemożliwić korzystanie ze stron www</p>
                    <p>2. W celu zarządzania ustawienia cookies wybierz z listy poniżej przeglądarkę internetową, której używasz i postępuj zgodnie z instrukcjami</p>
                    <p className="ml-4">1. Edge</p>
                    <p className="ml-4">2. Internet Explorer</p>
                    <p className="ml-4">3. Chrome</p>
                    <p className="ml-4">4. Safari</p>
                    <p className="ml-4">5. Firefox</p>
                    <p className="ml-4">6. Opera</p>

                    <p className="ml-4">Urządzenia mobilne:</p>
                    <p className="ml-4">1. Android</p>
                    <p className="ml-4">2. Safari (iOS)</p>
                    <p className="ml-4">3. Windows Phone</p>
                </div>
            </div>

            <Footer />
        </>
    );
  }
