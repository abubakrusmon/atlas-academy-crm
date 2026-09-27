import { app } from './app';

const PORT = Number(process.env.PORT || 5000);

app.listen(PORT, () => {
  console.log(`Atlas Academy CRM backend running on http://localhost:${PORT}`);
});
