// Importar la lógica de LinkedList desde LinkedList.js
import { LinkedList, Nodo } from "./LinkedList.js";

// Obtener una referencia a los elementos del DOM
const inputDato = document.getElementById("inputDato");
const listarBtn = document.getElementById("listarBtn");
const agregarInicioBtn = document.getElementById("agregarInicioBtn");
const agregarAntesBtn = document.getElementById("agregarAntesBtn");
const agregarDespuesBtn = document.getElementById("agregarDespuesBtn");
const extraerBtn = document.getElementById("extraerBtn");
const listarInversoBtn = document.getElementById("listarInversoBtn");
const outputDiv = document.getElementById("output");

// Crear una instancia de tu LinkedList
let grupo = new LinkedList();

// Agregar manejadores de eventos para los botones
listarBtn.addEventListener("click", () => {
  outputDiv.textContent = grupo.listar();
});

agregarInicioBtn.addEventListener("click", () => {
  const dato = inputDato.value;
  if (dato !== "") {
    const nuevo = new Nodo(dato);
    grupo.agregarInicio(nuevo);
    inputDato.value = "";
    outputDiv.textContent = "Nodo agregado al inicio.";
  } else {
    outputDiv.textContent = "Ingrese un dato válido.";
  }
});

agregarAntesBtn.addEventListener("click", () => {
  const dato = inputDato.value;
  const referencia = inputReferencia.value;
  if (dato !== "" && referencia !== "") {
    const nuevo = new Nodo(dato);
    grupo.agregarAntes(referencia, nuevo);
    inputDato.value = "";
    inputReferencia.value = "";
    outputDiv.textContent = "Nodo agregado antes del dato especificado.";
  } else {
    outputDiv.textContent = "Ingrese datos válidos.";
  }
});

agregarDespuesBtn.addEventListener("click", () => {
  const dato = inputDato.value;
  const referencia = inputReferencia.value;
  if (dato !== "" && referencia !== "") {
    const nuevo = new Nodo(dato);
    grupo.agregarDespues(referencia, nuevo);
    inputDato.value = "";
    inputReferencia.value = "";
    outputDiv.textContent = "Nodo agregado después del dato especificado.";
  } else {
    outputDiv.textContent = "Ingrese datos válidos.";
  }
});

extraerBtn.addEventListener("click", () => {
  const dato = inputDato.value;
  if (dato !== "") {
    const extraido = grupo.extraer(dato);

    if (extraido) {
      inputDato.value = "";
      outputDiv.textContent = `Nodo con dato '${dato}' ha sido extraído.`;
    } else {
      outputDiv.textContent = `Nodo con dato '${dato}' no encontrado en la lista.`;
    }
  } else {
    outputDiv.textContent = "Ingrese un dato válido.";
  }
});

listarInversoBtn.addEventListener("click", () => {
  outputDiv.textContent = grupo.listarInverso();
});
