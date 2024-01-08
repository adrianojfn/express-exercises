function salutation(nome) {
    return function(req, res, next) {
        console.log(`Welcome ${nome}.`)
        next()
    }
}

module.exports = salutation