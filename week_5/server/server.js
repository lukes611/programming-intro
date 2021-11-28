const express = require('express');

const app = express();

app.use(express.static('./'));

let count = 0;

app.get('/add', (req, res) => {
    count++;
    const sum = Number(req.query.a) + Number(req.query.b);
    res.send(`
        <html>
            <body>
                hello there, you've been here ${count} times.

                ${JSON.stringify(req.query)}<br/>
                ${sum}
            </body>
        </html>

    `);
});

let color = 'green';
app.get('/save-color', (req, res) => {
    const newColor = req.query.color;
    color = newColor;
    res.json({
        ok: true,
    });
});
app.get('/get-color', (req, res) => {
    res.json({
        color,
    });
});

app.listen(3000, () => {
    console.log('server setup');
});
