import axios from "axios";

export default {
    getRandomUsers: function () {
        return axios
            .get("https://randomuser.me/api/?results=10")
            .then(res => {
                const users = res.data.results;
                return users.map(user => {
                    return {
                        title: user.name.title,
                        firstName: user.name.first
                        // lastName
                        // email
                        // phone
                        // age OR dob
                        // location
                    }
                })
            })

    }
}



