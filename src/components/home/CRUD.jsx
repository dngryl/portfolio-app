import { useRef, useState } from "react"
import unCheck from "../../assets/icons/circle-light.svg"
import check from "../../assets/icons/check-circle-light.svg"
import CloseIcon from "../../assets/icons/x.svg?react";
import editIcon from "../../assets/icons/pencil-line-light.svg";
import saveIcon from "../../assets/icons/floppy-disk-back-light.svg";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { motion } from "motion/react";

export default function CRUD() {
    
    const MotionCloseIcon = motion.create(CloseIcon)
    

    const [toDoList, setToDoList] = useState([
        {id: 1, text: "React CRUD", done:false},
        {id: 2, text: "Motion", done:false},
        {id: 3, text: "3D 씬 렌더링", done:true}
    ])

    const [toDoId, setToDoId] = useState(5)
    const [textInput, setTextInput] = useState("")

    const showLottieRef = useRef(null);
    const closeLottieRef = useRef(null);
    const blankTimerRef = useRef(null);

    const [blankAlert, setBlankAlert] = useState("idle")

    const addList = () => {
        if(textInput === "") {
            setBlankAlert("show")
            showLottieRef.current?.setFrame(0)
            showLottieRef.current?.play()

            if (blankTimerRef.current) clearTimeout(blankTimerRef.current)
            blankTimerRef.current = setTimeout(() => {
                setBlankAlert("close")
                closeLottieRef.current?.setFrame(0)
                closeLottieRef.current?.play()
            }, 1000)

            return;
        }
        setToDoList(prev => [...prev, {id:toDoId, text: textInput, done:false}])
        setToDoId(toDoId=> toDoId+1)
        setTextInput("")
        setBlankAlert("idle")
    };

    const delList = (item) => {
        setToDoList(prev => prev.filter((p) => p.id !== item.id))
    };

    const editStatus = (item) => {
        setToDoList(prev => prev.map((p) => p.id === item.id ? { ...p, done: !item.done } : p))
    };

    const [pageNum, setPageNum] = useState(0)
    const pagenation = toDoList.slice(pageNum*4, pageNum*4+4)
    const totalPages = Math.ceil(toDoList.length/4)

    const prevPage = () => {
        if(pageNum === 0) {
            return;
        }
        setPageNum(pageNum-1)
    };
    
    const nextPage = () => {
        if(pageNum === totalPages-1) {
            return
        }
        setPageNum(pageNum+1)
    };  

    const [showBtnId, setShowBtnId] = useState(null)

    const timerRef = useRef(null)

    const handleStart = (item) => {
        timerRef.current = setTimeout(() => {
            setShowBtnId(item.id)
            delList(item)
        }, 500);
    }; 

    const handelCancel = () => {
        if(timerRef.current) {
            clearTimeout(timerRef.current)
            setShowBtnId(null)
        }
    };

    const [editId, setEditId] = useState(null)
    const [editInput, setEditInput] = useState("")

    const editStart = (item) => {
        setEditId(item.id)
        setEditInput(item.text)
    };

    const editSave = (item) => {
        setToDoList(prev => prev.map((p) => p.id === item.id ? { ...p, text:  editInput} : p))
        setEditId(null)
    };



    return (
        <>  
            <div className="font-paperlogy w-full h-60 items-center justify-start flex flex-col gap-2">
                
                <div className="mt-14 grid grid-cols-2 w-80 gap-2">
                    {pagenation.map((item) => {
                        return (
                            <motion.div
                                key={item.id}
                                initial={{ backgroundColor: "rgba(0, 0, 0, 0.25)"}}
                                onTapStart={()=>handleStart(item)}
                                onTap={handelCancel}
                                onTapCancel={handelCancel}
                                whileTap={{backgroundColor: "rgba(0, 191, 159, 1)", transition: { duration: 0.5, ease: "linear" }}}
                                exit={{ backgroundColor: "rgba(0, 0, 0, 0.25)" }}
                                transition={{ duration: 0.3, delay: 0, ease: "easeInOut" }}
                                className="flex justify-between w-full p-2 rounded-lg text-sm cursor-pointer">
                                <div
                                    key={item.id} className="flex items-center flex-row gap-2 text-[#f9f9f9] h-4 w-full relative">
                                    <div className="flex flex-row items-center gap-2 ">
                                        <img src={item.done ? check : unCheck} className={`${item.done ? "opacity-50" : ""} cursor-pointer w-5 h-5`} onClick={()=> {editStatus(item)}} />
                                        {editId === item.id ?
                                            <input type="text" className="text-xs text-[#f9f9f9] w-22" placeholder="입력" value={editInput} onChange={(event) => setEditInput(event.target.value)} />
                                            :<p className={`${item.done ? "line-through text-[#f9f9f9]/50" : ""} text-xs`}>{item.text}</p>}
                                    </div>
                                </div>
                                <motion.img
                                    initial={{opacity: 0}}
                                    whileHover={{opacity: 1}}
                                    src={editId === item.id ? saveIcon:editIcon} className="w-5 text-xs text-[#f9f9f9]/50" onClick={() => editId === item.id ? editSave(item) :editStart(item)}/>
                            </motion.div>
                        )
                    })}
                </div>

                {toDoList.length === 0 && <p className="mt-10 flex items-center justify-center text-[#f9f9f9]/50">리스트가 비었습니다.</p>}

                {toDoList.length === 0  ? "" :
                    <div className="flex flex-row gap-2 justify-between w-full relative">
                        <p className="text-[10px] text-[#f9f9f9]/50 font-thin">길게 눌러 삭제하기</p>
                        <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                            <div className={`${toDoList.length === 0 ? "hidden" : "block"} flex flex-row gap-2 cursor-pointer`}>
                                <div className={`${pageNum ===0 ? "hidden" : "block"} rounded-full bg-[#f9f9f9]/25 w-2 aspect-square`} onClick={()=>prevPage()}></div>
                                <div className="rounded-full bg-[#f9f9f9]/50 w-2 aspect-square" ></div>
                                <div className={`${pageNum === totalPages-1 ? "hidden" : "block"} rounded-full bg-[#f9f9f9]/25 w-2 aspect-square`} onClick={()=>nextPage()}></div>
                            </div>
                        </div>
                        <div className="text-[10px] text-[#f9f9f9]/50 font-thin">{pageNum+1}/{totalPages}</div>
                    </div>
                }

                <div className="absolute -translate-x-1/2 -translate-y-1/2 top-46 left-1/2 flex items-center w-full justify-between text-[#f9f9f9]">
                    <label className="flex flex-row gap-2 text-sm whitespace-nowrap shrink-0" onKeyDown={(event) => { if (event.key === 'Enter') addList() }}>
                        메모:
                        <input type="text" className="w-54 font-light" placeholder="내용을 입력하세요." value={textInput} onChange={(event) => setTextInput(event.target.value)} />
                    </label>
                    <div className="relative w-16 h-16">
                        <DotLottieReact
                            dotLottieRefCallback={(instance) => { showLottieRef.current = instance; }}
                            src={"/lottie/showAlert.json"} loop={false} autoplay={false}
                            className={`${blankAlert === "show" ? "block" : "hidden"} absolute w-70 -translate-x-40 -translate-y-1/2 -top-4 left-1/2 pointer-events-none`} />
                        <DotLottieReact
                            dotLottieRefCallback={(instance) => { closeLottieRef.current = instance; }}
                            src={"/lottie/closeAlert.json"} loop={false} autoplay={false}
                            className={`${blankAlert === "close" ? "block" : "hidden"} absolute w-70 -translate-x-40 -translate-y-1/2 -top-4 left-1/2 pointer-events-none`} />
                        <motion.div className="scale-65 absolute top-1/2 left-1/2 translate-x-0 -translate-y-1/2 w-15 h-15 flex items-center justify-center">
                            <MotionCloseIcon
                                initial={{ width: 40, height: 40 }}
                                whileTap={{ width: 60, height: 60 }}
                                transition={{ duration: 0.1, ease: "easeInOut" }}
                                className="rotate-45 p-3 aspect-square cursor-pointer bg-[#00bf9f] focus:outline-none rounded-full" onClick={()=> addList()}></MotionCloseIcon>
                        </motion.div>

                    </div>
                </div>
            </div>
        </>
    )
}