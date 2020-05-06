// Building a server using express

let express = require("express");

let app = express();

const Joi = require('joi');

app.use(express.json());

const fs = require("fs");

let data = require("./public/employees.json");

// let data = fs.readFileSync('./public/employees.json');
// let info = JSON.parse(data);

// .env is used for security purpose
const port = process.env.PORT || 3001;

// Assign a value to PORT by running express PORT=X in terminal
app.listen(3001, () => {
  console.log(`Listening on port ${port}`);
});

// Making 404 status code using an if statement
// req = request && res = response
app.get("/employees", (req, res) => {
  if (!data) res.status(404).send(`Couldn't find the employees path.`);
  // Displays data of employees
  res.send(data);
});

// Made a function for accessing the ids in json file
app.get("/employees/:id", (req, res) => {
  // finding a specific employees
  const eData = data.employees.find((employees) => {
    console.log(employees.id);

    return parseInt(req.params.id) === employees.id;
  });

  // Displaying 404 statement if url id isn't found
  if (!eData) res.status(404).send(`Couldn't find the employees path.`);

  res.send(eData);
});

// POST request
app.post("/employees", (req, res) => {

    const schema = {
        name: Joi.string().min(3).required()
    };

    const result = Joi.validate(req.body, schema)

  const { error } = validateData(req.body);
  if (error) {
    res.status(400).send(result.error.details[0].message);
    return;
  }

  const employee = {
    name: req.body.name,
    id: data.employees.length + 1,
    salary: req.body.salary,
    department: req.body.department,
  };
  data.employees.push(employee);
  res.send(employee);
});

// let convert = JSON.stringify(info, null, 2);

// function done(err) {
//     if (err) return res.status(404).send(`Could not post data.`)
// };

// if (!employee) {
//     console.log("Please enter an object");
// } else {
//     fs.writeFile('/medium-challenge-2/public/employees.json', convert, done);
// }
//  res.status(200).json(info).push(employee)
//  req.write(data)
//  res.send()

// PUT request
app.put("/employees/:id", (req, res) => {
    const eData = data.employees.find((employees) => {
        console.log(employees.id);
    
        return parseInt(req.params.id) === employees.id;
      });


  if (!eData) res.status(404).send("The employeee with the given ID was not found");

  const { error } = validateData(req.body);
  if (error) {
    res.status(400).send(result.error.details[0].message);
    return;
  }

  eData.name = req.body.name;
  res.send(edata);
});

function validateData(eData) {
  const schema = {
    name: Joi.string().min(11).required(),
  };
};


// Delete Request
app.delete('/employees/:id', (req, res) => {
    const eData = data.employees.find((employees) => {
        console.log(employees.id);
    
        return parseInt(req.params.id) === employees.id;
      });

      const index = data.indexOf(eData);
      data.splice(index, 1);

      res.send(data);
})
