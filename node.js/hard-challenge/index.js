// Building a server using express

let express = require('express');

let app = express();

// Made this data variable to connect to objects made in json file
let data = require('./public/employees.json')

// .env is used for security purpose
const port = process.env.PORT || 3001;


// Assign a value to PORT by running express PORT=X in terminal
app.listen(3001, () => {
    console.log(`Listening on port ${port}`);
})

// Making 404 status code using an if statement
// req = request && res = response
app.get('/employees', (req, res) => {
    if (!data) res.status(404).send(`Couldn't find the employees path.`);
    // Displays data of employees
    res.send(data);
});

// Made a function for accessing the ids in json file
app.get('/employees/:id', (req,res) =>{

    // finding a specific employees
    const eData = data.employees.find( (employees) => {
        console.log(employees.id);

        return parseInt(req.params.id) === employees.id;
    })

    // Displaying 404 statement if url id isn't found
    if (!eData) res.status(404).send(`Couldn't find the employees path.`);

    res.send(eData)

})