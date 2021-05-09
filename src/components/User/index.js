import React from "react";

function User(props) {
    return (
        <thead>
        <tr key={props.id}>
            <th>
                <img alt={props.photo} src={props.photo}></img>
            </th>
            <td>{props.title} {props.firstName} {props.lastName}</td>
            <td>{props.email}</td>
            <td>{props.location}</td>
            <td>{props.phone}</td>
        </tr>
    </thead>
  
    )

}

export default User;
