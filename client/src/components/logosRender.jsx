import Logo from "./logo";
import Styles from "../styles/logoRender.module.css"
import { useEffect } from "react";
import { useState } from "react";




export default function LogosRender() {

    let id = 0
    
    const [data, setData]= useState([])
    let position = 0
    
    function reply( cantidad) {
        const components = []
        for (let i = 0; i < cantidad; i++) {
            
            components.push(!components.length
                         ?
                 <div className={Styles.selected} key={id++}><Logo/></div> 
                         : 
                <div className={Styles.unselected} key={id++}><Logo/></div>)
             
        }
        
        return components
    }


    useEffect(()=>{
        !data.length 
            &&
        setData(reply(4))
    },[])

    function handleClick (e){
        const value = e.target.value
        value === "last" ?  position > 0 ? position-- : position = 3 : position < 3 ? position++ : position = 0 
        const target = e.target.parentNode.childNodes[1].children
        Array.from(target).forEach(logo => logo.className = Styles.unselected)
        target[position].className= Styles.selected
        console.log(target)
    }


    

    return (
        <div className={Styles.container}>
            <button value="last" onClick={handleClick} className={Styles.last}></button>
            
            <div className={Styles.logos}>
                {data?.map(logo =>  logo ) }
            </div>
            <button values="next" onClick={handleClick} className={Styles.next}></button>

        </div>
    )
}