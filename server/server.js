const express = require('express');
const app = express();
const cors = require('cors');
const port = 8000;

require("./config/mongoose.config");

app.use(cors({credentials: true, origin: 'http://localhost:5173'}));
app.use(express.json(), express.urlencoded({ extended: true }));

const StoryRoutes = require('./routes/Story.routes');
StoryRoutes(app);

app.listen(port, () => console.log(`Listening on port: ${port}`) );