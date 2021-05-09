import axios from "axios";

export default {
    getRandomUsers: function () {
        return axios
            .get("https://randomuser.me/api/?results=300")
            .then(res => {
                const users = res.data.results;
                return users.map(user => {
                    return {
                        title: user.name.title,
                        firstName: user.name.first,
                        lastName: user.name.last,
                        email: user.email,
                        phone: user.phone,
                        location: user.location.city,
                        photo: user.picture.large
                    }
                })
            })

    }
}



