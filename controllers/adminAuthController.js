const adminSignup = (req, res) => {
    res.send("Admin Signup")
}
const adminLogin = (req, res) => {
    res.send("Admin Login ")
}

module.exports = {
    adminLogin, adminSignup
}