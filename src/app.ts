import express from 'express';

const app = express();

app.get('/', (_request, response) => {
  const version = process.env.APP_VERSION ?? 'development';

  response.type('html').send(`

    <h1>CI/CD Lab</h1>
     <p>Verified by GitHub Actions. Deployed on Render.</p>
    <p>The application is running.</p>
    <p>Version ${version}</p>
  `);
});

app.get('/api/health', (_request, response) => {
  response.json({
    status: 'ok',
  });
});

export default app;
app.get('/api/version', (_request, response) => {
  response.json({
    version: process.env.APP_VERSION ?? 'development',
  });
});
