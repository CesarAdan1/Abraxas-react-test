import React, { useState, Fragment } from 'react'

export const Modal = ({
    titleAction,
    onClickAction,
    children,
    nameLabelTitle
}) => {

    const [close, setClose] = useState(true);

    const onClickClose = () => {
        setClose(!close)
    }
    return (
        <Fragment>

            {
                close
                    ?
                    <div className="flex flex-center full-width absolute full-height ">
                        <div className="flex flex-center width-half modalContainer">
                            <div className="padding-cont flex flex-center width">
                                <label className="label text-center marginTop">{nameLabelTitle}</label>
                                <form className="marginTop" >
                                    <div className="marginTop width">
                                        {children}
                                    </div>
                                    <div className="flex left-orientation width">
                                        <div className="margin-sides margin buttonAction pointer" onClick={onClickAction}>
                                            <span>{titleAction}</span>
                                        </div>
                                        <div className="margin-sides pointer close" onClick={onClickClose}>
                                            <span>Cancelar</span>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    : null
            }
        </Fragment>
    )
}
