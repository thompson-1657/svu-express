const express = require('express')
const app = express()
const PORT = 3300

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

app.get('/api/characters', (req, res) => {
    res.json(characters)
})

app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
})

