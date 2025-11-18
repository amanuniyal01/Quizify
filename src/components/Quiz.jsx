import React, { useRef, useState } from 'react'
import { data } from '../Data'
import { useNavigate } from 'react-router-dom';
function Quiz() {

    const [index, setIndex] = useState(0);
    const [question, setQuestion] = useState(data[index])
    const [isOpenSelected, setIsOpenSelected] = useState(false)
    let [score, SetScore] = useState(0);
    let [result, setResult] = useState(false)
    const navigate = useNavigate()

    let Option1 = useRef(null)
    let Option2 = useRef(null)
    let Option3 = useRef(null)
    let Option4 = useRef(null)
    let option_array = [Option1, Option2, Option3, Option4]


    const nextQuestion = () => {


        const nextIndex = index + 1;

        if (nextIndex < data.length) {
            setIndex(nextIndex);
            setQuestion(data[nextIndex]);
            setIsOpenSelected(false);

            option_array.map((option) => {
                option.current.classList.remove("incorrect")
                option.current.classList.remove("correct")
                return null
            })
        }
        if (nextIndex === data.length) {
            setResult(true);
            return;
        }
    };
    const reset = () => {
        setIndex(0);
        setQuestion(data[0]);
        setResult(false);
        SetScore(0);
        setIsOpenSelected(false);
    }

    const ChangeClass = (e, ans) => {
        if (isOpenSelected === false) {


            if (question.ans === ans) {
                SetScore((prev) => prev + 1)
                e.target.classList.add("correct")
                setIsOpenSelected(true)



            } else {
                e.target.classList.add("incorrect")
                setIsOpenSelected(true)
                option_array[question.ans - 1].current.classList.add("correct")

            }

        }



    };

    return (
        <div className=' bg-white text-gray-600 flex text-2xl w-[360px] md:text-3xl justify-center flex-col md:w-[620px] border-none border-black m-auto mt-10  gap-4 md:py-2 px-8 md:gap-5 rounded-2xl'>
            <h1 className='text-center font-medium text-blue-800'>Quiz App</h1>
            <hr className='h-0.5 border-none bg-gray-500' />

            {result ? (<div>
            </div>) : (<>
                <h1 className='md:text-[27px] text-[21px] font-medium'>{index + 1} .{question.question}</h1> <ul className="  ml-6 ">
                    <li ref={Option1} className='list-none flex items-center h-[50px] md:h-[60px] cursor-pointer border-2 border-gray-400 rounded-1xl my-3 pl-[15px] rounded-lg text-[20px]  ' onClick={(e) => { ChangeClass(e, 1) }}>{question.option1}</li>
                    <li ref={Option2} className='list-none flex items-center h-[50px] md:h-[60px] cursor-pointer border-2 border-gray-400 rounded-1xl my-3 pl-[15px] rounded-lg text-[20px] ' onClick={(e) => { ChangeClass(e, 2) }}>{question.option2}</li>
                    <li ref={Option3} className='list-none flex items-center h-[50px] md:h-[60px] cursor-pointer border-2 border-gray-400 rounded-1xl my-3 pl-[15px] rounded-lg text-[20px] ' onClick={(e) => { ChangeClass(e, 3) }}>{question.option3}</li>
                    <li ref={Option4} className='list-none flex items-center h-[50px] md:h-[60px] cursor-pointer border-2 border-gray-400 rounded-1xl my-3 pl-[15px] rounded-lg text-[20px] ' onClick={(e) => { ChangeClass(e, 4) }}>{question.option4}</li>
                </ul>

                <button onClick={nextQuestion} className="bg-blue-900 w-44 h-10 md:h-12 text-[18px] md:text-[20px] text-center m-auto text-white p-2 mt-2 rounded">
                    Next
                </button>


                <p className="m-auto text-[18px] font-medium text-gray-800 ">{index + 1} of {data.length} Questions</p></>)}

            {result ? <>
                <h2>You Scored {score} out of {data.length}</h2>
                <button onClick={reset} className="bg-blue-900 w-44 h-10 mb-5 md:h-12 text-[18px] md:text-[20px] text-center m-auto text-white p-2 mt-2 rounded">Reset</button>
            </> : <>
            </>}


        </div>
    )
}

export default Quiz
