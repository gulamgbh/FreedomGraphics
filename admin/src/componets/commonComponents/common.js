import React from 'react'

const PageHeader = (props) => {
    return (
        <div className="d-sm-flex align-items-center justify-content-center">
          <h1 className={props.cn}>{props.pagetitle}</h1>
        </div>
    )
}

export default PageHeader