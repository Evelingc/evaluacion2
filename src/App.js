import React, { useState } from 'react';
// se crea un componente
const ListaNumeros = () => {
  const [numeros, setNumeros] = useState([]);//se crea una variable de estado llamada numero que esta vacia
  //almacena el estado de numero ingresados por el usuario al mismo tiempo nos permite actualizar el varlor

  // se encarga de capturar el evento de cambio en el 
  //campo de entrada y actualizar el estado con los números ingresados
  const manejarCambios = (event) => {
    //para obtener el valor del campo de entrada, luego lo divide en un arreglo de números
    const numerosIngresados = event.target.value.split(',').map(num => parseInt(num.trim(), 10));
    setNumeros(numerosIngresados); // esta funcion permite actualizar el valor
  };
  // cuenta la cantidad de numeros pares en el arreglos
  
  const contarNumerosPares = () => {
    let contadorPares = 0;
    for (let i = 0; i < numeros.length; i++) {//para recorrer cada elemento del arreglo y verificar si es par
      if (numeros[i] % 2 === 0) {
        contadorPares++;
      }
    }
    return contadorPares;
  };
  
  return (// representa la estructura del componente e incluye un elemento de tipo texto donde el usuario puede
  //asignar los nuemeros 
    <div>
      <input type="text" onChange={manejarCambios} />
      <p>Cantidad de números pares: {contarNumerosPares()}</p>
    </div>
  );
};

export default ListaNumeros;// se exporta el componente para que pueda ser utilizado en otros archivos