import React from 'react'

const FormInputModule = (props) => {
    return (
        <input onBlur={props.onBlur} value={props.val} type={props.typ} name={props.nm} className={props.cn} onChange={props.onChange}/>
    )
}

const FormButtonModule = (props) => {
    return (
        <button  disabled={props.disabled} className={props.cn} type={props.typ}>{props.btntitle}</button>
    )
}

const FormLabelModule = (props) => {
    return (
        <label className={props.cn}>{props.title}</label>
    )
}

export { FormInputModule, FormButtonModule, FormLabelModule }