const express = require('express');
require('./services/passport');
const app = express();
require('./routes/Auth')(app);




const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});