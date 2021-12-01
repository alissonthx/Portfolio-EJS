const express = require("express");
const port = 3000;
const app = express();
const path = require("path");
const createError = require("http-errors");
app.use(express.static(path.join(__dirname, "public")));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/curriculo", (req, res, next) => {
    res.render("curriculo", {
        title: "Meu currículo",
        name: "Álisson Miquelace",
        profession: "Desenvolvedor Web, focado em frontend.",
        description:
            "Desenvolvedor Web",
        experience: [
            {
                company: "UniFCV",
                office: "Desenvolvedor Web",
                description:
                    "Desenvolvimento web, focado em sistemas php, manutenção a páginas wordpress e outros projetos de Js e afins.",
            },
        ],
        education: [
            {
                institution: "Unicesumar",
                description: "Análise e Desenvolvimento de Sistemas",
            },
        ],
        skills: ["HTML5", "CSS", "PHP", "Javascript", "Node Js"],
    });
});

app.get("/", function (req, res, next) {
    res.render("index", {
        title: "My First Express Server",
        version: "0.0.0",
    });
});

app.listen(port, (err) => {
    console.log(`server is listening on ${port}`);
});

// 404
app.use((req, res, next) => {
    next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};
    res.status(err.status || 500);
    res.render("error");    
});
