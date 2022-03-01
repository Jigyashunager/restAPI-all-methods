const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://jigyashunager:Admin1234@cluster0.hlp4x.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connection Done !!!");
  })
  .catch((e) => {
    console.log("Not connected");
  });
