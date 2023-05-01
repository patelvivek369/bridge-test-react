import React, { useContext } from 'react'
import { SelectionListItem } from './SelectionListItem'
import { GlobalDataContext } from '../../context/AppContextProvider';
import "./FirstSlide.scss"

import Button from '../FormControls/Button';
import nextIcon from "../../images/next.svg"

function FirstSlide() {
  const sitedata = useContext(GlobalDataContext);
  const onSelectItem = (item) => {
    const objIndex = sitedata.initalData.findIndex((obj => obj === item));
    sitedata.initalData[objIndex].selected = !sitedata.initalData[objIndex].selected
    let a = sitedata.initalData.reduce((partialSum, a) => {
        return a.selected ? partialSum + a.price : partialSum
    }, 0)
    
    sitedata.setAppData({...sitedata, initalData: sitedata.initalData, total: a.toFixed(2)})
  }
  return (
    <section className={sitedata.slideIndex === 1 ? "slide active-anim" : "slide"} >
        <div className='wrapper'>
            {sitedata.initalData.map((e,i) => 
                <SelectionListItem 
                    key={"key"+ i} 
                    title={e.title} 
                    price={e.price} 
                    onClick={()=> onSelectItem(e)} 
                    selected={e.selected} 
                />
            )}
            <div className='empty-wrapper'></div>
            <div className='selection total'>
                <div><strong>TOTAL</strong></div>
                <div className='price'>£ {sitedata.total}</div>
            </div>
            <div className='empty-wrapper'>
                <Button 
                    icon={nextIcon}
                    text="Continue"
                    onClick={()=> { sitedata.setAppData({...sitedata, slideIndex: 2}) }}
                />
            </div>
        </div>
    </section>
  )
}

export default FirstSlide