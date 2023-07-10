import React from "react";
import Address from "./Address";
import Bank from "./Bank";

function UserCard(props) {
    return (
        <div className="userCard">
            <div className="name"> {props.name } </div>
            <div className="email"> 
                <span className="red">@</span>
                {props.email }</div> 
            <div className="age"> {props.age }</div>

            <div className="content">
               <div className="personal">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,</p> 
               </div>

               <div className="info">
                <h4>Address</h4>
                    <Address addr = {props.address } />
                    <details>
                        <summary>Bank Details</summary>
                        <Bank details = {props.bank} />

                    </details>
               </div>

            </div> 
       </div>
    )
}

export default UserCard