const adminAuth = (req, res , next) => {
    console.log("admin auth is checked")
    const token = "abc";
    const isAdminAuthorized = token == "abc";
    if(!isAdminAuthorized){
        res.status(401).send("unauthorized request")
    } else {
        next();
    }
}

const userAuth = (req, res , next) => {
    console.log("admin auth is checked")
    const token = "abc";
    const isAdminAuthorized = token == "abc";
    if(!isAdminAuthorized){
        res.status(401).send("unauthorized request")
    } else {
        next();
    }
}

module.exports = {
    adminAuth,
    userAuth,
};