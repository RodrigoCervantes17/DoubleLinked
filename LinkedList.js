class Nodo {
  constructor(dato) {
    this.dato = dato;
    this.siguiente = null;
    this.anterior = null;
  }
}

class LinkedList {
  constructor() {
    this.primero = null;
  }
  agregar(nuevo) {
    if (this.primero == null) this.primero = nuevo;
    else {
      let aux = this.primero;
      while (aux.siguiente != null) aux = aux.siguiente;
      aux.siguiente = nuevo;
      nuevo.anterior = aux;
    }
  }

  listar() {
    if (this.primero == null) return "";
    else return this._recListar(this.primero);
  }
  _recListar(nodo) {
    if (nodo.siguiente == null) return nodo.dato;
    else return nodo.dato + " " + this._recListar(nodo.siguiente);
  }

  buscar(dato) {
    let aux = this.primero;

    while (aux !== null) {
      if (aux.dato == dato) {
        return aux;
      }
      aux = aux.siguiente;
    }

    return null;
  }
  agregarInicio(nodo) {
    if (this.primero === null) {
      this.primero = nodo;
    } else {
      nodo.siguiente = this.primero;
      this.primero.anterior = nodo;
      this.primero = nodo;
    }
  }

  agregarAntes(dato, nuevo) {
    let nodoEncontrado = this.buscar(dato);

    if (nodoEncontrado !== null) {
      nuevo.siguiente = nodoEncontrado;
      nuevo.anterior = nodoEncontrado.anterior;
      if (nodoEncontrado.anterior !== null) {
        nodoEncontrado.anterior.siguiente = nuevo;
      } else {
        this.primero = nuevo;
      }
      nodoEncontrado.anterior = nuevo;
    } else {
      console.log(`Nodo con dato '${dato}' no encontrado en la lista.`);
    }
  }
  agregarDespues(dato, nuevo) {
    let ultimo = this.primero;

    if (ultimo == null) {
      this.primero = nuevo;
    } else {
      while (ultimo.dato != dato) {
        ultimo = ultimo.siguiente;
      }

      if (ultimo.siguiente == null) {
        nuevo.anterior = ultimo;
        ultimo.siguiente = nuevo;
      } else {
        nuevo.siguiente = ultimo.siguiente;
        nuevo.anterior = ultimo;
        ultimo.siguiente.anterior = nuevo;
        ultimo.siguiente = nuevo;
      }
    }
  }
  extraer(dato) {
    let actual = this.primero;

    // Manejar el caso especial si el nodo a extraer es el primero
    if (actual && actual.dato === dato) {
      this.primero = actual.siguiente;
      if (this.primero) {
        this.primero.anterior = null;
      }
      return actual;
    }

    while (actual) {
      if (actual.dato === dato) {
        if (actual.anterior) {
          actual.anterior.siguiente = actual.siguiente;
        }
        if (actual.siguiente) {
          actual.siguiente.anterior = actual.anterior;
        }
        return actual;
      }
      actual = actual.siguiente;
    }

    return null; // Devolver null si el nodo no se encuentra
  }

  listarInverso() {
    if (this.primero == null) {
      return "";
    } else {
      return this._recListarInverso(this.primero);
    }
  }

  _recListarInverso(nodo) {
    if (nodo.siguiente == null) {
      return nodo.dato;
    } else {
      return this._recListarInverso(nodo.siguiente) + " " + nodo.dato;
    }
  }
}

export { Nodo, LinkedList };
