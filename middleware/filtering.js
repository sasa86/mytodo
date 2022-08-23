

module.exports.filterdItems = function (model) {
    return async ( req, res, next ) => {
        const queryFilter = req.query.filter
        let filter;          
        
        if (queryFilter === 'completed') {
            filter = true
        }
        if (queryFilter === 'uncompleted') {
            filter = false
        }
        const results = {}
        results.appliedFilter = queryFilter

        try {
           
            

            if (queryFilter === 'all') {
                results.results = await model.find()
            } else {
                results.results = await model.find({ completed: filter })
            }

            res.filterdTodos = results
            next()
            

        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    }
}