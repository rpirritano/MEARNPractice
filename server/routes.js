let express = require('express'),
    router = express.Router();

let studentModel = require("./userModel");


//write
router.post("/api/createstudent",(req, res) => {     
    let modelObject = new studentModel(
        {         
            Name: req.body.userName,        
            Password: req.body.password    
        });      
        
        modelObject.save(function(err, obj) {         
            console.log(err);         
            if (err) {             
                res.send(err);             
                return;         
            };      
            
            res.send("done");         
            
            console.log('Data saved successfully!');     
        });  
    })

 //read
router.get("/api/getstudents",(req, res) =>{
    console.log("Get all Students");
    studentModel.find((err, students) => {
        if (err){
            console.log("got an error!");
            res.send(err);
        }
    
        console.log("we made in send response", students);
        res.json(students);
       
    });
})

router.get('/api/getstudentbyid/:id', (req, res) => {     
    console.log("Get user by id", req.params.id);
    studentModel.findById({_id:req.params.id},(err, student) => {
        if (err){
            console.log("got an error!");
            res.send(err);
        }
    
        console.log("returned user", student);
        res.json(student);
    });  
})

//update student
router.post('/api/updatestudent', (req, res) => {    
    console.log("body :",req.body);
    
    console.log("ID :",req.body._id);
    studentModel.findById({_id:req.body._id}, (err, student) => {
        if (err) {
            res.send(err);
            return;
        };
        console.log("student", student);
        if (student == null) {
            res.send("Can't be edited!");
            return;
        };

        student.Name = req.body.userName;
        student.Password = req.body.password;
        // save the student
        student.save(function(err) {
            //if (err) throw err;
            if (err) {
            res.send(err);
            return;
        };
        
        console.log('student successfully updated!');
        res.send(student);
        return;
        });
    })  
});

//delete student
router.post('/api/deletestudent', (req, res) => {    

    studentModel.findById(req.body._id, function(err, student) {
    
        if (err) {
            res.send(err);
            return;
        };

        if (student == null) {
            res.send("Can't be deleted!");
            return;
        };

      // delete the user
      studentModel.deleteOne({ _id: req.body._id }, function (err) {
        //if (err) throw err;
        if (err) {
          res.send(err);
          return;
        };

        console.log('student successfully deleted!');
        res.send(student);
        return;
      });
    });  
});











router.get('/gethtml', (req, res) => {
    res.sendFile('./index.html', {"root": __dirname});
});

//API for getEmployee
router.get('/getemployee', (req, res) => {
    res.sendFile('./emp.json',  {"root": __dirname});
});


//Default call
router.get('*', (req, res) => {
    console.log("I am in routes");
    res.send("Hello World");
});

module.exports = router;