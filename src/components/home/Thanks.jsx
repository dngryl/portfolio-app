export default function Thanks() {
    return (
        <>
            <div className=" h-screen sticky top-0 flex items-center justify-center overflow-hidden">
                <div className="bg-[#00bf9f] w-full h-[90%] rounded-2xl">
                    
                    <div className="h-full w-full grid place-items-center gap-10 px-50 relative ">
                        <div className="absolute top-0 left-0 mt-20">
                            <p className="bg-[#181e1d] mx-10 rounded-lg text-[#00bf9f] w-20 h-20 flex font-bold items-center justify-center text-lg">Thanks</p>
                        </div>

                        <div className="text-[#181e1d] flex flex-col gap-6 justify-center text-center">
                            <div className="h-100 flex flex-col justify-between">
                                <div className="text-4xl">
                                    <p>감사하게도,</p>
                                    <p>그동안 만난 모든 프로젝트 덕분에,</p>
                                </div>
                                <p className="text-8xl font-bold">될 때까지 다듬는</p>
                                <div className="text-4xl">
                                    <p>습관이 생겼습니다.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}