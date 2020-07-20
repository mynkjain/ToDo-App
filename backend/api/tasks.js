const Router = require('express');
const connection = require('../db.js');

const router = new Router();

router.get('/' , (req, res) => {
    connection.query('SELECT * FROM tasks WHERE 1', function (error, results){
        if(error){
            res.status(404).send(error);
            return;
        }else{
            res.status(200).send(results);   
        }
    });
})

router.post('/', (req, res) => {
    if(!req.body.Title){
        res.status(400).send({
            message: "Title is required !"
        });
        return;
    }
    connection.query({
        sql: "INSERT INTO tasks (Title, Status) values (?, ?)",
        values: [req.body.Title, req.body.Status ? req.body.Status : '0']
    }, function (error, results){
        if(error){
            res.status(404).send(error);
            return;
        }else{
            results.message = 'Task Created Successfully !';
            res.status(200).send(results); 
        }    
    });
});

router.get('/:id', (req, res) => {
    const id = req.params.id;
    connection.query({
        sql: "SELECT * FROM tasks WHERE ID = ? ",
        values: [id]
    }, function (error, results){
        if(error){
            res.status(404).send(error);
            return;
        }else{
            if(results.length > 0){
                res.status(200).send(results);
            }else{
                res.status(404).send({message: 'Task does not exists'});
            } 
        }    
    });
});

router.put("/:id", (req, res) => {
    const id = req.params.id;
    connection.query({
        sql: "UPDATE tasks SET Title = ?, Status = ? WHERE ID = ? ",
        values: [req.body.Title, req.body.Status ? req.body.Status : '0', id]
    }, function (error, results){
        if(error){
            res.status(404).send(error);
            return;
        }else{
            res.status(200).send(results);
        }    
    });
});

router.delete("/:id",  (req, res) => {
    const id = req.params.id;
    connection.query({
        sql: "DELETE FROM tasks WHERE ID = ? ",
        values: [id]
    }, function (error, results){
        if(error){
            res.status(404).send(error);
            return;
        }else{
            res.status(200).send(results); 
        }    
    });
});

router.delete("/",  (req, res) => {
    connection.query("DELETE FROM tasks WHERE 1", function (error, results){
        if(error){
            res.status(404).send(error);
            return;
        }else{
            res.status(200).send(results); 
        }    
    });
});

module.exports = router
