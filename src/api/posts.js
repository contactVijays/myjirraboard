import axios from "axios";
// http://localhost:3500/posts

export default axios.create({
    baseURL:"http://localhost:3500"
})