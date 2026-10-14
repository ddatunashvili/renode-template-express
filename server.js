const fs = require('node:fs');
const express = require('express');

// A .env uploaded through the panel's Files tab, if there is one. Node 22 reads
// it without a dependency; the real values never live in the repository.
if (fs.existsSync('.env')) {
    process.loadEnvFile('.env');
}

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: 'Hello from Renode', name: process.env.APP_NAME || 'renode-express' });
});

app.get('/health', (req, res) => {
    res.json({ ok: true, uptime: process.uptime() });
});

app.post('/echo', (req, res) => {
    res.json({ received: req.body });
});

// The panel sets SERVER_PORT (and PORT) to this server's port. It is the only
// port reachable from outside, and 0.0.0.0 is the only address that is.
const port = Number(process.env.SERVER_PORT || process.env.PORT || 3000);

app.listen(port, '0.0.0.0', () => {
    console.log(`Listening on 0.0.0.0:${port}`);
});
