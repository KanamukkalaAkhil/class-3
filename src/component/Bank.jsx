import React from "react"
import Details from "./Details"

function Bank(props) {
    return (
        <div className="bank">
            {
                props.details.map((item, index) => {
                    return (
                        <Details Key={index} {...item} />
                    )
                })
            }
        </div>
    )
}
export default Bank