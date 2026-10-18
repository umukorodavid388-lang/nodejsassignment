const express = require('express');
const app = express();
require('dotenv').config();

app.use(express.json());



app.get('/', (req, res) => {
    res.send('My Week 2 API!');
});

app.post('/user', (req, res, next) => {
    const { name, email } = req.body;
    // Here you can handle the user data, e.g., save it to a database
    if (!name || !email) {
        res.status(400).json({ message: 'Name and email are required' });   
    }
    res.status(201).json(`Hello ${name}, This Is My Email ${email}.`);
    next();
}) 


app.get('/user/:id', (req, res) => {
    const pk = req.params.id;
    // Here you can fetch the user data from a database using the primary key
    res.status(200).json({ message: `User ID is ${pk}` });
})






// PORT SERVER
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});