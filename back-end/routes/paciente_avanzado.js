const express = require("express");
const router = express.Router();
const PacienteBasicoController = require("../controllers/paciente_avanzado_controller");

const pacienteController = new PacienteBasicoController();

router.get("/", async (req, res, next) => {
	try {
		const result = await pacienteController.find();
		res.status(200).send(result);
	} catch (err) {
		res.status(500).send(err);
	}
});

router.get("/:id", async (req, res, next) => {
	try {
		const result = await pacienteController.findById(req.params.id);
		res.status(200).send(result);
	} catch (err) {
		res.status(500).send(err);
	}
});

router.post("/", async (req, res, next) => {
	try {
		const result = await pacienteController.create(req.body);
		res.status(201).send(result);
	} catch (err) {
		res.status(500).send(err);
	}
});

router.put("/:id", async (req, res, next) => {
	try {
		const result = await pacienteController.update(req.params.id, req.body);
		res.status(200).send(result);
	} catch (err) {
		res.status(500).send(err);
	}
});

router.delete("/:id", async (req, res, next) => {
	try {
		const result = await pacienteController.delete(req.params.id);
		res.status(200).send(result);
	} catch (err) {
		res.status(500).send(err);
	}
});

router.post("/bulk", async (req, res, next) => {
	try {
		const result = await pacienteController.createBulk(req.body);
		res.status(201).send(result);
	} catch (err) {
		res.status(500).send(err);
	}
});

module.exports = router;
