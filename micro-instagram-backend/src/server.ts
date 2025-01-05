import app from './app';
import sequelize from './models';

const PORT = process.env.PORT || 3000;

sequelize
  .sync({ force: true }) // For demo, sync models
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => console.log('Database error:', err));
