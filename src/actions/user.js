import axios from "axios";


export const login = (email, password) => {
    return async dispatch => {
        try {
            const response = await axios.post('https://api.fit-meetups.ru/auth/login', {
                "email": "jim@dundermifflin.com",
                "password": "password",
                "fio": "fio"
            })
            console.log(response.data)
        } catch (e) {
            alert(e.response.data.message)
        }
    }

}