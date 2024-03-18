"use strict";

import { Router } from "express";
const router = Router();

router.get("/", (req, res) => {
  res.render("pages/root/root", {
    hello: "world",
  });
});

router.get("/articles", (req, res) => {
  res.render("pages/article/article", {
    hello: "world",
  });
});

router.all("*", (req, res) => {
  res.status(404).send("gusen not found");
});

export default router;
