const express = require("express");
const port = 3000;
const app = express();
const path = require("path");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/curriculo", (req, res, next) => {
    res.render("curriculo", {
        title: "Meu currículo",
        name: "Álisson Miquelace",
        profession: "Auxiliar de T.I.",
        description:
            "Auxiliar de tecnologia da informação com experiencia windows e linux",
        experience: [
            {
                company: "Unifcv",
                office: "Auxiliar de T.I.",
                description:
                    "Trabalho dando suporte aos usuarios docentes, colaboradores e alunos.",
            },
        ],
        education: [
            {
                institution: "Feitep",
                description: "Engenharia elétrica (Trancado)",
            },
        ],
        skills: ["Javascript", "Node Js", "HTML5", "CSS"],
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
