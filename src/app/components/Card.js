import MoreBtn from "./MoreBtn";

const Card = ({text, link}) => {
    return(
        <div className="h-[300px] w-[250px] rounded-[10px] bg-glass px-[30px] py-[45px] flex flex-col items-center justify-between">
            <h4 className="text-center font-semibold text-[28px]">{text}</h4>
            <MoreBtn href={link} />
        </div>
    )
}

export default Card;