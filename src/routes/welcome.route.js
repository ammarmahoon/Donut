module.exports = (app) => {
    app.get("/api/welcome",  (req, res) => {
        res.json({ message: "Welcome" });
    });
}