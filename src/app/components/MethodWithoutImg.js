const MethodWithoutImg = ({direction="flex-col lg:flex-row", title, text}) => {
    return(
        <div className={`flex ${direction} items-center gap-10 lg:gap-40 max-w-[600px] lg:max-w-[1270px] px-[15px] mt-32 lg:justify-between`}>
                <h3 className="text-5xl lg:text-6xl font-semibold lg:ml-8">{title}</h3>
                <p className="text-2xl font-light lg:font-medium leading-10 max-w-[520px]">{text}</p>
        </div>
    )
}

export default MethodWithoutImg;