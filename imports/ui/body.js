import { Template } from "meteor/templating";
import { Tasks } from "../api/tasks.js";
import "./task.js";
import "./body.html";

Template.body.helpers({
  tasks() {
    // Pega todas as Tasks do Mongo
    return Tasks.find({}, { sort: { createdAt: -1 } });
  },
});

Template.body.events({
  "submit .new-task"(event) {
    // Previne envio vazio
    event.preventDefault();

    // Pega o valor do Form
    const target = event.target;
    const text = target.text.value;

    // Insere esse valor na Lista
    Tasks.insert({
      text,
      createdAt: new Date(), // Hora atual
    });

    target.text.value = "";
  },
});
