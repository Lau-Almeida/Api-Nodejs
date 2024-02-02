const express = require("express");
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
  
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
  });

const app = express();
app.use(express.json())
const port = 3000;
mongoose.connect('mongodb+srv://contatoslaudo:dNSGvdQIPhH7ZDu8@api-nodejs.tq1qpcm.mongodb.net/?retryWrites=true&w=majority');

const userModel = mongoose.model("userModel", UserSchema);
module.exports = userModel;

app.get("/", async (req, res) => {
    const users = await userModel.find()
    return res.send(users)
});

app.delete("/:id", async (req, res) => {
    const users = await userModel.findByIdAndRemove(req.params.id)
    return res.send(users)
});

app.put("/:id", async (req, res) => {
    const users = await userModel.findByIdAndUpdate(req.params.id, {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      location: req.body.location,
      date: req.body.date,
    })

    return res.send(users)
})

app.post("/", async (req, res) => {
    const user = new userModel({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        location: req.body.location,
        date: req.body.date,
    });

    try {
  // Salve o novo usuário
    const user = await newUser.save();
      console.log('Usuário criado com sucesso:', user);
    } 
    catch (error) {
  // Lida com erros de validação ou outros erros durante a criação do usuário
      console.error('Erro ao criar usuário:', error);
    }

    await user.save()
    return res.send(user)
});

app.listen(port, () => {
    console.log("app running")
});