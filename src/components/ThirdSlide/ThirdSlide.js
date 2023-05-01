import React, { useContext } from 'react'
import "./ThirdSlide.scss"
import { GlobalDataContext } from "../../context/AppContextProvider";

import Button from "../FormControls/Button";
import backIcon from "../../images/back.svg"

function ThirdSlide() {
  const sitedata = useContext(GlobalDataContext);
  const {computed: { titles, finalTotal }} = sitedata;
  return (
    <section className={sitedata.slideIndex === 3 ? "slide result active-anim" : "slide result"} >
        <div className="result">
          <div className='side'>
              <h4>By utilising the Bridge Sales Enablement Agency calculator organisations can simplify the processes associated with indirect procurement and unlock significant typical savings of up to 60% of process costs.</h4>
              <p className='subtitle'>Based on what you have told us about your process we can estimate that the following costs are being insured within your procurement processes.</p>
              <Button
                iconPreOrPost="pre"
                text="Go Back"
                icon={backIcon}
                onClick={()=> { sitedata.setAppData({...sitedata, slideIndex: 2}) }}
              />
          </div>
          <div className='side'>
              <ul>
                  <li>Supplier & product <span>£  {titles['Supplier & product']}</span></li>
                  <li>Quotation to order process <span>£ {titles['Quotation to order process']}</span> </li>
                  <li>Expediting & receiving orders <span>£ {titles['Expediting & receiving orders']}</span> </li>
                  <li>Processing invoices <span>£ {titles['Processing invoices']}</span> </li>
                  <li>Paying suppliers <span>£ {titles['Paying suppliers']}</span> </li>
                  <li className='total'>Total Process Costs (year) - <span>£ {finalTotal}</span> </li>
              </ul>
              <Button
                text="Send me this report"
                onClick={()=> { sitedata.setAppData({...sitedata, slideIndex: 4}) }}
              />
          </div>
        </div>
    </section>
  )
}

export { ThirdSlide }