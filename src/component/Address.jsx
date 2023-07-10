import React from "react";

function Address(props) {
    return (
        <div className="Address">
            <div className="city"> { props.addr.city }</div>
            <div className="pin"> { props.addr.pin } </div>
        </div>
    )
}
export default Address