import Link from "next/link";

const MoreBtn = ({href}) => {
    return(
        <>
            <Link className="bg-[#f7f7f7] text-[#000022] text-[18px] py-2 px-3 rounded-md font-medium shadow-btn" href={href}>Dowiedz się więcej</Link>
        </>
    )
}

export default MoreBtn;