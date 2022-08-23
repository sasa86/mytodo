const express = require('express');
const router = express.Router();
const TodoItem = require('../models/TodoItem');
//const { paginatedItems } = require('../middleware/pagination')
const { filterdItems } = require('../middleware/filtering')

// get all
router.get('/', filterdItems(TodoItem), async ( req, res ) => {
    // try {
        
        
    //     const todoItems = await TodoItem.find().sort({ date: -1 });
    //     res.json(todoItems);

    // } catch (error) {
    //     res.status(500).json({ message: error.message });
    // }
    res.json(res.filterdTodos)
});

// get one
async function getTodo( req, res, next ) {
    let todo;

    try {
        
        todo = await TodoItem.findById( req.params.id );
        if (todo == null) {
            return res.status(404).json({ message: 'Can not find todo' });
        }

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
    res.todo = todo;
    next();
}


//post one
router.post('/', async ( req, res ) => {
    const todoItem = new TodoItem({
        name: req.body.name
    })

    try {

        const NewTodo = await todoItem.save();
        res.status(201).json(NewTodo)

    } catch (error) {
        res.status(400).json({ message:error.mesage });
    }
});

// update one
router.patch('/:id', getTodo, async ( req, res ) => {    

    if (req.body.name != null) {
        res.todo.name = req.body.name
    }
    if (req.body.name == null) {
        res.todo.completed = !res.todo.completed
    }

    try {
        
        const updatedTodo = await res.todo.save();
        res.json(updatedTodo);

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// update all todos status to completed
router.patch ('/', async ( req, res ) => {
    try {
        await TodoItem.updateMany({ completed: false }, { $set: { completed: true } });
        res.json({ message: 'Status updated to completed' });
        
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
});


// delete one
router.delete('/:id', getTodo, async ( req, res ) => {
    try {
        
        await res.todo.remove();
        res.json({ message: 'Todo deleted' });

    } catch (error) {
        res.status(500).json({ message: error.message});
    }
})

//delete all completed
router.delete('/', async ( req, res ) => {

    
    try {

        await TodoItem.remove({ completed: true })
        res.json({ message: 'completed todos deleted' });

    } catch (error) {
        res.status(500).json({ message: error.mesage });
    }
})

module.exports = router;