import Spline from "@splinetool/react-spline";
import IconInteraction from "./IconInteraction";
import DevStack from "./DevStack";
import CRUD from "./CRUD";

export default function SectionOne({motion}) {

    return (
        <>
            <div className="font-paperlogy w-full h-[100vh] max-md:h-auto max-md:py-24 flex items-center justify-center">

                <div className='flex flex-col w-full gap-6 relative'>
                    <p className="text-4xl max-md:text-3xl font-bold text-[#f9f9f9] tracking-wide mb-10">Skills & Background</p>

                    <div className='grid grid-cols-3 max-md:grid-cols-1 w-full gap-6 place-content-between'>
                    
                    <motion.div
                        whileInView={{ y: 0, opacity: 1}}
                        initial={{ y: 200,  opacity: 0}}
                        whileHover={{ y: -10 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="h-80 border rounded-2xl border-[#f9f9f9]/10 hover:border-[#f9f9f9]/20 backdrop-blur-2xl flex flex-col">
                        <div className='relative w-full flex-1 min-h-0 overflow-hidden'>
                            <IconInteraction motion={motion}/>
                        </div>
                        <hr className="border-[#f9f9f9]/15 mb-2" />
                        <div className='px-6 flex flex-col gap-2 mb-6 min-h-27'>
                            <p className='text-[#f9f9f9] md:text-sm text-lg font-bold'>프론트엔드, 거기에 디자인 툴까지</p>
                            <p className='text-[#f9f9f9]/50 text-sm'>모션그래픽·3D 백그라운드에서 비롯된 시각적 감각을 코드로 구현합니다.</p>
                        </div>
                    </motion.div>

                    <motion.div
                        whileInView={{ y: 0, opacity: 1}}
                        initial={{ y: 200,  opacity: 0}}
                        whileHover={{ y: -10 }}
                        transition={{ duration: 0.3, delay: 0.1, ease: "easeInOut" }}
                        className="h-80 border rounded-2xl border-[#f9f9f9]/10 hover:border-[#f9f9f9]/20 backdrop-blur-2xl flex flex-col">
                        <div className='relative w-full flex-1 min-h-0 mt-4 overflow-hidden'>
                            <div className="absolute inset-0 w-full h-full object-cover">
                                <DevStack />
                            </div>
                        </div>
                        <hr className="border-[#f9f9f9]/15 my-4" />
                        <div className='px-6 flex flex-col gap-2 mb-6 min-h-27'>
                            <p className='text-[#f9f9f9] md:text-sm text-lg font-bold'>개발 스택</p>
                            <p className='text-[#f9f9f9]/50 text-sm'>HTML / CSS / JavaScript를 기반으로 React와 Tailwind CSS, Framer Motion을 주력으로 사용합니다.</p>
                        </div>
                    </motion.div>

                    <motion.div
                        whileInView={{ y: 0, opacity: 1}}
                        initial={{ y: 200,  opacity: 0}}
                        whileHover={{ y: -10 }}
                        transition={{ duration: 0.3, delay: 0.4, ease: "easeInOut" }}
                        className="row-span-2 max-md:row-span-1 max-md:order-5 max-md:h-160 border rounded-2xl border-[#f9f9f9]/10 hover:border-[#f9f9f9]/20 backdrop-blur-2xl flex flex-col">
                        <div className='relative w-full flex-1 min-h-0 flex justify-center overflow-hidden'>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-full aspect-430/530 touch-none">
                                <Spline
                                    scene="https://prod.spline.design/9SbFqL8Lea8RLHEh/scene.splinecode"
                                    style={{ width: '100%', height: '100%' }} />
                            </div>
                        </div>
                        <hr className="border-[#f9f9f9]/15 mb-4" />
                        <div className='px-6 flex flex-col gap-2 mb-6 min-h-27'>
                            <p className='text-[#f9f9f9] md:text-sm text-lg font-bold'>3D 웹 & 3D 모델링</p>
                            <p className='text-[#f9f9f9]/50 text-sm'>Cinema 4D 폴리곤 모델링과 Fusion 360 넙스 모델링으로 3D를 다뤄왔습니다. 이제 Blender와 Spline으로 그 감각을 웹 환경에 옮기고자 합니다.</p>
                        </div>
                    </motion.div>

                    <motion.div
                        whileInView={{ y: 0, opacity: 1}}
                        initial={{ y: 200,  opacity: 0}}
                        whileHover={{ y: -10 }}
                        transition={{ duration: 0.3, delay: 0.2, ease: "easeInOut" }}
                        className="h-80 border rounded-2xl border-[#f9f9f9]/10 hover:border-[#f9f9f9]/20 backdrop-blur-2xl flex flex-col">
                        <div className='relative w-full flex-1 min-h-0 scale-65 mt-6'>

                        </div>
                        <hr className="border-[#f9f9f9]/15 my-4" />
                        <div className='px-6 flex flex-col gap-2 mb-6 min-h-27'>
                            <p className='text-[#f9f9f9] md:text-sm text-lg font-bold'>모션그래픽 - 인터랙션으로의 전환</p>
                            <p className='text-[#f9f9f9]/50 text-sm'>After Effects로 다양한 분야의 모션그래픽과 2D 리깅을 다뤄왔습니다. 그 경험이 지금은 웹 애니메이션 감각으로 이어집니다.</p>
                        </div>
                    </motion.div>

                    <motion.div
                        whileInView={{ y: 0, opacity: 1}}
                        initial={{ y: 200,  opacity: 0}}
                        whileHover={{ y: -10 }}
                        transition={{ duration: 0.3, delay: 0.3, ease: "easeInOut" }}
                        className="h-80 border rounded-2xl border-[#f9f9f9]/10 hover:border-[#f9f9f9]/20 backdrop-blur-2xl flex flex-col">
                        <div className='relative w-full flex-1 min-h-0 px-4 overflow-hidden '>
                            <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                                <CRUD />
                            </div>
                        </div>
                        <hr className="border-[#f9f9f9]/15 mb-4" />
                        <div className='px-6 flex flex-col gap-2 mb-6 min-h-27'>
                            <p className='text-[#f9f9f9] md:text-sm text-lg font-bold'>CRUD & 상태 관리</p>
                            <p className='text-[#f9f9f9]/50 text-sm'>React 상태 관리와 fetch API를 기반으로 데이터를 다루는 로직을 연습합니다. CRUD, 페이지네이션, 필터, 검색까지 실무형 흐름으로 구현합니다.</p>
                        </div>
                    </motion.div>
                    </div>

                </div>

            </div>
        </>
    )
}