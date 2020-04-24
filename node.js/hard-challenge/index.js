let express = require('express');

let app = express();

let data = require('./public/employees.json')

// .env is used for security purpose
const port = process.env.PORT || 3001;

// Assign a value to PORT by running express PORT=5000 in terminal
app.listen(3001, () => {
    console.log(`Listening on port ${port}`);
})


app.get('/employees', (req, res) => {
    if (!data) res.status(404).send(`Couldn't find the employees path.`);

    res.send(data);
});


app.get('/employees/:id', (req,res) =>{


    const eData = data.employees.find( (employees) => {
        console.log(employees.id);

        return parseInt(req.params.id) === employees.id;
    })

    if (!eData) res.status(404).send(`Couldn't find the employees path.`);

    res.send(eData)

})