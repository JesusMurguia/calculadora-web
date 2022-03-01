const express = require("express");
const router = express.Router();
const GeneticScoreDictionaryController = require("../controllers/genetic_score_dictionary_controller");

const genetic_score_dictionary_controller =
  new GeneticScoreDictionaryController();

router.get("/", async (req, res, next) => {
  try {
    const result = await genetic_score_dictionary_controller.find();
    res.status(200).send(result);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
