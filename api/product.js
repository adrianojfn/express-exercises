module.exports = (app, text) => {
    function save(req, res) {
        res.send('Product > Save' + text)
    }

    function getProduct(req, res) {
        res.send('Product > Get' + text)
    }

    app.post('/product', save)
    app.get('/product', getProduct)

    return { save, getProduct }
}