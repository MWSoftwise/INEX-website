import Card from "./Card";

const Services = () => {
    return(
        <div className="flex flex-col items-center gap-10 mt-[100px] pb-[100px]">
            <h3 className="text-5xl lg:text-6xl font-semibold py-20 bg-custom text-center leading-relaxed">Poznaj nasze usługi</h3>
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-[120px] py-8 lg:py-28">
                <Card text="Bezinwazyjne naprawy obiektów" link="/bezinwazyjne-naprawy-obiektow" />
                <Card text="Uszczelnienia budynków metodą iniekcji" link="/iniekcje-budowlane" />
                <Card text="Realizacje" link="/realizacje" />
            </div>
        </div>
    )
}

export default Services;