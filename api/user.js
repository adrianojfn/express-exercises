function save(req, res) {
    res.send('User > Save')
}

function getUser(req,res) {
    res.send('User > Get')
}

module.exports = { save, getUser }