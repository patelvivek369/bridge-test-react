import { GlobalDataContext } from "../../context/AppContextProvider";
import Button from "../FormControls/Button";
import "./ForthSlide.scss"
import React, { useContext } from 'react'
function ForthSlide() {
  const sitedata = useContext(GlobalDataContext);
  return (
    <section className={sitedata.slideIndex === 4 ? "slide active-anim" : "slide"} >
        <div className='thanks'>
          <h4>Thank you for using the Bridge Sales Enablement Agency calculator. A representative will be in touch with you soon.</h4>
          <Button
            text="Restart"
            onClick={()=> { sitedata.resetData() }}
          />
        </div>
    </section>
  )
}
export { ForthSlide }