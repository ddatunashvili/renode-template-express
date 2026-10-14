# Express API on Renode

A small Express HTTP API that already follows every Renode rule:

- `server.js` listens on `0.0.0.0` on `SERVER_PORT`, the one port the server
  is given.
- `npm run start` runs `node server.js`; there is nothing to build.
- `.nvmrc` pins **Node 22**, which the Node.js egg offers.
- A `.env`, if you upload one, is read with Node's own `process.loadEnvFile()`.

Endpoints: `GET /`, `GET /health`, `POST /echo`.

## Deploy on Renode

1. Create your own repository from this template (**Use this template** on GitHub, or **Start from a template** on the panel's GitHub tab).
2. Order a server that runs it: an **App Runtimes → Node.js** plan, with **Nodejs 22** picked under *Runtime version*.
3. On the server's **GitHub** tab, connect GitHub and pick the new repository and its `main` branch, then **Deploy**.
4. Upload a filled-in `.env` through the **Files** tab if you need any settings.
5. Start the server. The console shows the install, then the app.

## Run it locally

```bash
npm install
npm run dev        # http://localhost:3000
```
