import { createContext } from "react"

const UserContext = createContext({
    user:{
        name: 'Monkey D luffy',
        email: 'king@pirates.com'
    }
})

export default UserContext;