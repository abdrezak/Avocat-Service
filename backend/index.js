// Assuming you have the necessary imports and middleware already set up as per your example

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    const sql = "SELECT * FROM users WHERE email = ? AND password = ?";
    db.query(sql, [email, password], (err, data) => {
        if (err) return res.status(500).json({ error: "Database error" });
        
        if (data.length > 0) {
            // User authenticated successfully
            return res.status(200).json({ message: "Login successful" });
        } else {
            return res.status(401).json({ error: "Invalid credentials" });
        }
    });
});
