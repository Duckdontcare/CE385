const express = require("express");
const app = express();

app.use(express.json()); // ใช้รับ json

let students = [
    {id:1, name:"node", age: 18 },
    {id:2, name:"express", age: 19 },
    {id:3, name:"javascript", age: 20 }
]

app.get("/students", (req,res) => {
    res.json(students);
});

app.get("/students/:id", (req,res) => {
    const id = parseInt(req.params.id);
    const student = students.find(s => s.id === id);

    if (!student) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    res.json(student);
});

function validateStudent(req,res ,next) {
    const {name,age} = req.body;

    if (!name || !age) {
        return res.status(400).json({
            message: "Invalid data"
        });
    }
    next(); //ผ่านไปต่อ
}

app.post("/students", validateStudent, (req,res) => {
    const { name, age } = req.body;

    if (!name || !age) {
        return res.status(404).json({
            message: "Not found"
        })
    }

    const newStudent = {
        id: students.length + 1,
        name,
        age
    };

    students.push(newStudent);
    res.status(201).json(newStudent);
});

app.put("/students/:id", (req,res) => {
    const id = parseInt(req.params.id);
    const { name, age } = req.body;

    const student = students.find(s => s.id === id);

    if (!student) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    if (name) student.name = name;
    if (age) student.age = age;

    res.json(student);
});

app.delete("/students/:id", (req,res) => {
    const id = parseInt(req.params.id);
    
    const index = students.findIndex(s => s.id === id);

    if (index === -1) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    const deleted = students.splice(index, 1);

    res.json({
        message: "Deleted",
        data: deleted[0]
    });
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000')
})