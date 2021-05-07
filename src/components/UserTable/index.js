import React, { useState, useEffect } from "react";
import API from "../../Utils/API";
import User from "../User";


function UserTable() {
    const [user, setUser] = useState({});
    const [users, setUsers] = useState([]);

    useEffect(() => {
        loadUsers();
    }, []);

    function loadUsers() {
        API.getRandomUsers()
            .then(users => {
                setUsers(users);
                setUser(user);
            })
            .catch(err => console.log(err));
    }


    return (
        <div>
            {[...users].map(user => (
                <User
                    title={user.title}
                    firstName={user.firstName}
                />
            ))}
        </div>
    )

}


export default UserTable;