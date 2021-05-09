import React, { useState, useEffect } from "react";
import API from "../../Utils/API";
import User from "../User";
import Search from "../Search"
import Column from "../Column";


function UserTable() {
    const [user, setUser] = useState({});
    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState("");

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

    function searchResults() {
        console.log('Searching for: ' + search);
        const searchUsers = users.filter(user => {
            if (user.firstName.toLowerCase() === search) {
                return search;
            }
            if (user.lastName.toLowerCase() === search) {
                return search;
            }
            if (user.title.toLowerCase() === search) {
                return search;
            }
        });
        setUsers(searchUsers);
    }

    function handleInputChange(event) {
        setSearch(event.target.value);

    }

    function handleFormSubmit(event) {
        event.preventDefault();
        searchResults(search);

    }


    return (
        <div>

            <Search value={search}
                handleInputChange={handleInputChange}
                handleFormSubmit={handleFormSubmit} />

            <Column 
            size="md-12">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Photo</th>
                            <th>Full Name</th>
                            <th>Email</th>
                            <th>Location</th>
                            <th>Phone</th>
                        </tr>
                    </thead>
                    {[...users].map(user => (
                        <User
                            title={user.title}
                            firstName={user.firstName}
                            lastName={user.lastName}
                            email={user.email}
                            phone={user.phone}
                            location={user.location}
                            photo={user.photo}
                        />
                    ))}
                </table>
            </Column>

        </div>
    )

}


export default UserTable;