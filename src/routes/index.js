const { Hono } = require("hono");
const { html } = require("hono/html");
const layout = require("../layout");

const app = new Hono();

app.get("/", (c) => {
  const session = c.get("session");
  return c.html(
    layout(
      "Home",
      html`
        <h1>Hello Hono!</h1>
        ${session.user
          ? html`
              <p>Hello, ${session.user.name}!</p>
              <p>
                <a href="/logout">Logout</a>
              </p>
            `
          : html`
              <p>
                <a href="/login">Login</a>
              </p>
            `}
        <div
          id="block"
          class="block"></div>
        <button id="scaling-button">拡大縮小</button>
        <button id="moving-button">移動</button>
        <div id="root"></div>
      `
    )
  );
});

module.exports = app;
