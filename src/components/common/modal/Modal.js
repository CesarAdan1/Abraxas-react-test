import React from 'react'

export const Modal = ({
    titleAction, 
    onClickAction, 
    onClickClose
}) => {
    return (
        <div className="">
           <div>
               <div onClick={onClickAction}>
                   <span>{titleAction}</span>
               </div>
               <div onClick={onClickClose}>
                   <span>{Cerrar}</span>
               </div>
           </div>
        </div>
    )
}

const Label = ({ labelName, placeholderName }) => {
    return <label>
        {labelName}
        <input 
            placeholder={placeholderName}
        />
    </label>
}