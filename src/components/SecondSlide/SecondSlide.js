import React, { useContext, useRef } from 'react'
import "./SecondSlide.scss"

import { GlobalDataContext } from "../../context/AppContextProvider";

import Button from "../FormControls/Button";

import prevIcon from "../../images/left.svg"
import nextIcon from "../../images/right.svg"

function SecondSlide() {
  const sitedata = useContext(GlobalDataContext);
  const title = useRef()
  const onChange = (e) => {
    let questions = sitedata.questions
    questions[sitedata.questionSelected].value = e.target.value
    sitedata.setAppData({...sitedata, questions: questions}) 
  }
  return (
    <section className={sitedata.slideIndex === 2 ? "slide active-anim" : "slide"} >
        <div className='question-box' ref={title}>
            <Button
                icon={prevIcon}
                onClick={()=> { 
                    title.current.classList.add("right")
                    setTimeout(() => {
                        if(sitedata.questionSelected > 0) {
                            sitedata.setAppData({...sitedata, questionSelected: sitedata.questionSelected - 1}) 
                        } else {
                            sitedata.setAppData({...sitedata, slideIndex: 1}) 
                        }
                        title.current.classList.remove("right")
                    }, 300);
                    
                }}
            />
            <div className="question">
                <h4>
                    {sitedata.questions[sitedata.questionSelected].question} 
                </h4>
                <span>{sitedata.questionSelected + 1} <span>of</span> {sitedata.questions.length}</span>
            </div>
            <Button
                icon={nextIcon}
                onClick={()=> { 
                    title.current.classList.add("left")
                    setTimeout(() => {
                        if(sitedata.questionSelected < sitedata.questions.length - 1) {
                            sitedata.setAppData({...sitedata, questionSelected: sitedata.questionSelected + 1}) 
                        } else {
                            sitedata.setAppData({...sitedata, slideIndex: 3}) 
                        }
                        title.current.classList.remove("left")
                    }, 300);
                    }}
            />
            <input type='number' value={sitedata.questions[sitedata.questionSelected].value} onChange={(e)=> onChange(e)} placeholder='Enter value'></input>
        </div>
    </section>
  )
}

export { SecondSlide }