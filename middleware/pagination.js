

module.exports.paginatedItems =  async function (req, res, next) {

        const page = parseInt(req.query.page)
        const limit = parseInt(req.query.limit)

        const startIndex = (page - 1) * limit
        const endIndex = page * limit

        const results = {}

        if (endIndex < res.filterdTodos.length) {
            results.next = {
                page: page + 1,
                limit: limit
            }
        }

        if (startIndex > 0) {
            results.previous = {
                page: page - 1,
                limit: limit
            }
        }
        try {
            results.results = res.filterdTodos.slice(startIndex, endIndex)//await model.find().limit(limit).skip(startIndex).exec()
            res.paginatedTodos = results           
            next()
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
        
    
}

