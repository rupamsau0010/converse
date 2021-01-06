import axios from "axios"

if(process.env.NODE_ENV === "production") {
    SERVER_URI = "http://localhost:5000"
} else {
    SERVER_URI = 'HEROKU_URI'
}

const instance = axios.create({
    baseURL: SERVER_URI
})
console.log(process.env.NODE_ENV);

export default instance