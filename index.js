const express = require("express");
const cors = require("cors");

const { getSightings } = require("./utils.js");
require("dotenv").config();

const PORT = process.env.PORT;
const app = express();
app.use(cors());

//DONE & working
app.get("/sightings", async (req, res) => {
  const sightings = await getSightings();
  res.json(sightings);
});
//Sighting based on index 0-467
app.get("/sightings/:sightingIndex", async (req, res) => {
  const { sightingIndex } = req.params;
  const sightings = await getSightings();
  const sighting = sightings[sightingIndex];
  res.json(sighting);
});

//Example:
// app.get("/sightings/:sightingIndex", async (req, res) => {
//   const sightings = await getSightings();
//   res.json(sightings[req.params.sightingIndex]);
// });

app.listen(PORT, () => {
  console.log(`Express app listening on port ${PORT}!`);
});
