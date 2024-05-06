import { readFile, writeFile } from "../functions/func.js";


export const userRegister =  (req, res) => {

    const {username, password, fullname, age, email, gender} = req.body 

    if(!username || !password || !fullname || !age || !email || !gender){
        res.send(`The information is incomplete`)
    }

    const body = {
        username: username,
        password: password,
        fullname: fullname,
        age: age,
        email: email,
        gender: gender
    }

    const usersJson = readFile('users.json')

    const check = usersJson.find(user => user.username == username)

    if(!check){
        usersJson.push(body)
        
        if(writeFile('users.json', usersJson)){
            res.send("User added.")
        } else {
            res.send('Error writing to file')
        }
    } else {
        res.status(404).send('User is already exist')
    }
}


export const userLogin =  (req, res) => {
    const {username, password} = req.body

    if(!username || !password){
        res.status(400).send("The information is incomplete")
    }

    const userJson = readFile('users.json')

    const user = userJson.find( elem => elem.username == username && elem.password == password)

    if(user){
        res.status(200).send(user)
    } else {
        res.status(400).send("Not registered")
    }
}

export const userProfile = (req, res) => {
    const username = req.params.username || ''

    const userJson = readFile('users.json')

    const user = userJson.find( user => user.username == username)

    if(user){
        res.status(200).send(user)
    }else {
        res.status(404).send('User not found.')
    }

}

export const allUser = (req, res) => {
    const userJson = readFile('users.json')

    res.status(200).send(userJson)
}