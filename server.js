const express = require('express')
const app = express()
const PORT = 3300

//used to consume json data in routes (copy and paste for future projects)
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//api for info for characters
const characters = [
    {
        name: 'Olivia Benson',
        age: '57',
        avatar: 'https://images6.fanpop.com/image/photos/41100000/Law-and-Order-SVU-Season-19B-Portrait-Olivia-Benson-law-and-order-svu-41102183-720-960.jpg',
        role: 'Lieutenant',
        routeName: 'oliviabenson',
    },
    {
        name: 'Odafin Tutuola',
        age: '62',
        avatar: 'https://static.wikia.nocookie.net/lawandorder/images/4/4b/Odafintutuolaseason21.jpeg/revision/latest/scale-to-width-down/340?cb=20190917051558',
        role: 'Sergeant',
        routeName: 'odafintutuola',
    },
    {
        name: 'Elliot Stabler',
        age: '59',
        avatar: 'https://pyxis.nymag.com/v1/imgs/fb5/f59/8507c2585afe0752f59ac92b63cfa032fe-31-christopher-meloni.jpg',
        role: 'Detective',
        routeName: 'elliotstabler',
    }
]

app.get('/', (req, res) => {
    res.send('“The world is changing. We need new rules.” -Olivia Benson')
})

//api/characters - show all character data
app.get('/api/characters', (req, res) => {
    res.json(characters)
})

// /api/characters/:routeName
app.get('/api/characters/:routeName', (req, res) => {
    const targetCharacter = req.params.routeName
    const character = characters.find(character => {

        return character.routeName === targetCharacter
    })

    res.json(character)
})

app.post('/api/characters/add', (req, res) => {
    const newCharacter = req.body
    newCharacter.routeName = newCharacter.name.replace(/ /g, '').toLowerCase()
    characters.push(newCharacter)
    console.log(characters);
    res.status(200).send
})

app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
})

