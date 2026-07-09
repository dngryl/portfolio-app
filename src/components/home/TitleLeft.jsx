import RainbowFont from "../common/RainbowFont";


export default function TitleLeft({swapped, setSwapped, motion, progress, progress2}) {

   return (
       <>
           <div className="flex flex-col gap-6 w-full">
                <div className="grid grid-cols-2 h-10 w-100 max-md:w-full gap-2 rounded-lg relative place-items-center border text-[#f9f9f9] border-[#f9f9f9]/10 px-3 py-1 backdrop-blur-2xl">
                    <motion.div
                        initial={false}
                        animate={{ left: !swapped ? "8px" : "",  right: swapped ? "8px":""  }}
                        transition={{ duration: 0.3, delay: 0, ease: "easeInOut" }}

                        className="bg-[#00bf9f] absolute rounded-md -translate-y-1/2 top-1/2 w-[48%] h-[70%] -z-10">
                    </motion.div>
                    <motion.p
                        animate={{ fontWeight: !swapped ? 700 : 400}}
                        transition={{ duration: 0.3, delay: 0, ease: "easeInOut" }}
                        className={`${!swapped ? "" : "hover:text-[#00bf9f]"} text-sm cursor-pointer flex flex-row items-center leading-4`} onClick={()=> setSwapped(!swapped)}>{swapped ? <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256"><path d="M168,48V208a8,8,0,0,1-13.66,5.66l-80-80a8,8,0,0,1,0-11.32l80-80A8,8,0,0,1,168,48Z" className="w-4 hover:text-[#00bf9f]"></path></svg> :""}CREATIVE DEV.</motion.p>
                    <motion.p  
                        animate={{ fontWeight: swapped ? 700 : 400}}
                        transition={{ duration: 0.3, delay: 0, ease: "easeInOut" }}
                        className={`${swapped ? "" : "hover:text-[#00bf9f]"} text-sm cursor-pointer flex flex-row items-center leading-4`} onClick={()=> setSwapped(!swapped)}>LEE DONG RYEUL{!swapped ? <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256"><path d="M181.66,133.66l-80,80A8,8,0,0,1,88,208V48a8,8,0,0,1,13.66-5.66l80,80A8,8,0,0,1,181.66,133.66Z" className="w-4 hover:text-[#00bf9f]"></path></svg> :""}</motion.p>
                </div>
                <div>
                    {!swapped ?
                        <div className="flex flex-row">
                            <RainbowFont progress={progress} className="text-6xl max-md:text-5xl font-black text-[#f9f9f9] tracking-wide leading-snug">
                                디자인
                            </RainbowFont>
                            <p className="text-6xl max-md:text-5xl font-black text-[#f9f9f9] tracking-wide leading-snug">
                                을 
                            </p>
                        </div> : 
                        <div> 
                            <p className="text-6xl max-md:text-5xl font-black text-[#f9f9f9] tracking-wide leading-snug">코드로 디자인을</p>
                        </div>
                    }
                    
                    {!swapped ?
                        <div className="flex flex-row">
                            <RainbowFont progress={progress2} className="text-6xl max-md:text-5xl font-black text-[#f9f9f9] tracking-wide leading-snug">
                                코드 
                            </RainbowFont>
                            <p className="text-6xl max-md:text-5xl font-black text-[#f9f9f9] tracking-wide leading-snug">
                                로 옮깁니다. 
                            </p>
                        </div> :
                        <div>
                            <p className="text-6xl max-md:text-5xl font-black text-[#f9f9f9] tracking-wide leading-snug">표현합니다.</p>
                        </div>
                    }
                    
                </div>
                <p className="text-[#f9f9f9]/75 md:font-bold font-medium ">
                    3D 모델링과 모션 그래픽을 거쳐&nbsp;
                    <br className="md:hidden block"/>
                    이제는 코드로 화면을 만듭니다.
                    <br /><br className="md:hidden block"/>
                    시각적인 감각으로 사용자가 마주하는&nbsp;화면을&nbsp;
                    <br className="md:hidden block"/>
                    직접 구현하는&nbsp;
                    <br className="md:block hidden"/>프론트엔드 개발자 이동렬입니다.
                </p>
                <p className="rounded-xl bg-[#00bf9f] hover:bg-[#00ab8f] w-fit text-[#f9f9f9] px-4 py-2 font-bold">작업물 보기</p>
            </div>
       </>
   )
}