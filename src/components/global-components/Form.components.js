import React from 'react'

function InputComponents(props) {
    return (
        <input id={props.id} className={props.cn} type={props.typ} placeholder={props.plh} name={props.nm} required />
    )
}

function TextAreaComponents(props) {
    return (
        <textarea id={props.id} className={props.cn} type={props.typ} placeholder={props.plh} name={props.nm} rows={props.rw} />
    )
}

function LabelComponents(props) {
    return (
        <label className={props.cn}>{props.lbn}</label>
    )
}

function ButtonComponents(props) {
    return (
        <button style={{backgroundColor:"#bfa9ac", }} type={props.typ} className={props.cn}>{props.btnname}</button>
    )
}
export { InputComponents, TextAreaComponents, LabelComponents, ButtonComponents }
