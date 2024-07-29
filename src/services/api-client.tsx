import axios from 'axios'

export default axios.create(
    {
        baseURL : "https://api.rawg.io/api",
        params : {
            key : "c35ea1abc8fe4158adb8fd535cbc4ec8"
        }
    }
)
