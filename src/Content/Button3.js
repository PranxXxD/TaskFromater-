import React from 'react'
import { useState } from 'react';
import {AssemblerVeevaIB,AssemblerVeevaCR,AssemblerSfmcIB,AssemblerSfmcCR} from "./Data"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import ContentCopyRoundedIcon from '@mui/icons-material/ContentCopyRounded';

const Buttons3 = (props) => {
    const [dropDown, setDropDown] = useState(false);
    const [text1, setText1] = useState(AssemblerVeevaIB)
    const [text2, setText2] = useState(AssemblerVeevaCR)
    const [text3, setText3] = useState(AssemblerSfmcIB)
    const [text4, setText4] = useState(AssemblerSfmcCR)

    const copyAssemblerVeevaIB = async () => {
        navigator.clipboard.writeText(text1).then(() => {
            // console.log('Text copied to clipboard');
            toast("Content Copied to Clipboard", {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                type: "success",

            })
            setTimeout(() => {
                navigator.clipboard.writeText(" ")
                // console.log("clr clipboard")
            }, 12000);
        }).catch(() => {
            // console.error('Failed to copy text: ', err);
            toast("Failed to copy content to clipboard", {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                type: "error",

            });
        })
    }

    const copyAssemblerVeevaCR = async () => {
        navigator.clipboard.writeText(text2).then(() => {
            // console.log('Text copied to clipboard');
            toast("Content Copied to Clipboard", {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                type: "success",

            })
            setTimeout(() => {
                navigator.clipboard.writeText(" ")
                // console.log("clr clipboard")
            }, 12000);
        }).catch(() => {
            // console.error('Failed to copy text: ', err);
            toast("Failed to copy content to clipboard", {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                type: "error",

            });
        })
    }
    
    const copyAssemblerSfmcIB = async () => {
        navigator.clipboard.writeText(text3).then(() => {
            // console.log('Text copied to clipboard');
            toast("Content Copied to Clipboard", {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                type: "success",

            })
            setTimeout(() => {
                navigator.clipboard.writeText(" ")
                // console.log("clr clipboard")
            }, 12000);
        }).catch(() => {
            // console.error('Failed to copy text: ', err);
            toast("Failed to copy content to clipboard", {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                type: "error",

            });
        })
    }
    const copyAssemblerSfmcCR = async () => {
        navigator.clipboard.writeText(text4).then(() => {
            // console.log('Text copied to clipboard');
            toast("Content Copied to Clipboard", {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                type: "success",

            })
            setTimeout(() => {
                navigator.clipboard.writeText(" ")
                // console.log("clr clipboard")
            }, 12000);
        }).catch(() => {
            // console.error('Failed to copy text: ', err);
            toast("Failed to copy content to clipboard", {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                type: "error",

            });
        })
    }
    return (
        <div>
            <ToastContainer
                position="top-center"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                style={{width:"280px", marginLeft:"60px"}}
            />
                <div>
                    <div className="flex m-auto items-center justify-between w-full">
                        <span
                            className="flex justify-evenly right-[24rem] top-3 cursor-pointer"
                            onMouseOver={() => {
                                setDropDown(true);
                            }}
                            onMouseLeave={() => {
                                setDropDown(false);
                            }}
                        >
                            {dropDown && <div
                                onMouseOver={() => {
                                    setDropDown(true);
                                }}
                                onMouseLeave={() => {
                                    setDropDown(false);
                                }}
                                className="fixed bg-white shadow-lg border-2 top-[7rem] py-2 rounded-md px-4 w-auto z-30"
                            >
                                <ul className="flex-col justify-center items-center">
                                    <li className="flex justify-between py-2 hover:text-[#00857C] text-black text-md items-center font-medium border-b-2" onClick={copyAssemblerVeevaIB}>
                                        {props.VeevaIB} <ContentCopyRoundedIcon className='mx-2'/>  
                                    </li>
                                    <li className="flex justify-between py-2 hover:text-[#00857C] text-black text-md items-center font-medium border-b-2" onClick={copyAssemblerVeevaCR}>
                                        {props.VeevaCR} <ContentCopyRoundedIcon className='mx-2'/>  
                                    </li>
                                    <li
                                        className="flex justify-between py-2 hover:text-[#00857C] text-black text-md items-center font-medium border-b-2" onClick={copyAssemblerSfmcIB}
                                    >
                                        {props.SfmcIB} <ContentCopyRoundedIcon className='mx-2'/>  
                                    </li>
                                    <li
                                        className="flex justify-between py-2 hover:text-[#00857C] text-black text-md items-center font-medium" onClick={copyAssemblerSfmcCR}
                                    >
                                        {props.SfmcCR} <ContentCopyRoundedIcon className='mx-2'/>  
                                    </li>
                                    
                                </ul>
                            </div>}
                            <button className='flex justify-evenly m-auto text-center text-white bg-[#1b9a92] border-0 p-2 focus:outline-none hover:bg-[#00857C] rounded text-xs w-20'>
                                {props.name}
                            </button>
                        </span>
                    </div>
                </div>
            </div>
    )
}

export default Buttons3;