//declare the first array
//la correción la hicimos en clase pero para formalizar aca va:
let v1: number[] = new Array(6);
let numberv1: number;
let indicev1: number;// que pasa si usas un solo indice en vez de uno por cada for?
//declaro el prompt de ingreso de valores
for (indicev1 = 0; indicev1 < 6; indicev1++) {// lo ideal seria usar v1.length ya que si necesitas cambiar la cantidad de elementos solo cambias en la primer asignacion y no en el resto del codigo.
  numberv1 = Number(
    prompt(
      "Indique el número que desea incorporar en la posición " + indicev1,
      ":"
    )
  );
  v1[indicev1] = numberv1;
  console.log(
    "usted ingreso el valor " + numberv1,
    "en la la ubicacion " + indicev1
  );
}

//declare the second array
let v2: number[] = new Array(6);
let numberv2: number;
let indicev2: number;
//declaro el prompt de ingreso de valores
for (indicev2 = 0; indicev2 < 6; indicev2++) {
  numberv2 = Number(
    prompt(
      "Indique el número que desea incorporar en la posición " + indicev2,
      ":"
    )
  );
  v2[indicev2] = numberv2;
  console.log(
    "usted ingreso el valor " + numberv2,
    "en la la ubicacion " + indicev2
  );
}

//declare the third array y un for para que recorra las variables
let vSuma: number[] = new Array(6);
let indicevSuma: number;
for (indicevSuma = 0; indicevSuma < 6; indicevSuma++) {
  vSuma[indicevSuma] = v1[indicev1] + v2[indicev2];//ojo con el indice que usas, indicev1 y indicev2 son correctos? o que deberias usar?
}
let i: number = 0;
for (i = 0; i < 6; i++) {
  console.log("el resultado de " + vSuma[indicevSuma]);
}
//solucionado lo de los indices la suma que esta arriba va a funcionar y la de abajo deja de tener sentido
console.log(
  "la suma de los numeros igresados es :",
  v1[0] + v2[0],
  v1[1] + v2[1],
  v1[2] + v2[2],
  v1[3] + v2[3],
  v1[4] + v2[4],
  v1[5] + v2[5]
);
