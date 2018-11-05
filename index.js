const express = require("express");
const app = express();
require("./services/passport");
require("./routes/authRoutes")(app);
const PORT = process.env.PORT || 3000;
app.listen(PORT);
