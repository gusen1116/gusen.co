"use strict";

import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import express from "express";

// express 인스턴스 만들기
const app = express();

// 템플릿 엔진 모듈 가져오기
import engine from "express-template-engine";

// 템플릿 엔진 설정하기
app.engine("html", engine());
app.set("view engine", "html");
app.set("views", path.resolve(__dirname, "./views"));

app.use(express.static(path.resolve(__dirname, "./public")));

// 루트 페이지 응답 설정
import rootRouter from "./routes/root.mjs";
app.use(rootRouter);

// 웹 서버 실행
app.listen(5566, () => {
  console.log("Server started");
});
