//Se solicita Usuario y Contraseña a la persona para registrarse en el sitio web y adquirir un plán médico a través del cotizador de SMG

//Algoritmo Condicional, Cíclico y Funciones

/*

alert("Regístrate en SMG para acceder a las cotizaciones de planes médicos.");

let mail = prompt(
  "Ingresa un correo eléctronico para asociarlo a tu cuenta SMG."
);
let user = prompt(
  "Ingresa un nombre de usuario para registrarte en Smart Medical Group."
);
let pass = prompt("Ingresa una contraseña para tu usuario en SMG.");

alert("Inicia sesión en SMG para conocer nuestros planes.");

let usuario = prompt("Ingresa tu nombre de usuario para iniciar sesión.");
let contrasenia = prompt(
  "Ingresa tu contraseña para el usuario " + usuario + "."
);

function cotizarPlanMedico() {

  let planmedico = prompt(
    "Indícanos las especialidades médicas que quisieras tener en tu plan / cartilla de Smart Medical Group. Ej: odontologia, psicologia, enfermeria, otros. Recomendamos escribirlas todas en minúsucula y sin tildes."
  );

  while (planmedico != "plansmg") {
    switch (planmedico) {
      case "odontologia":
        console.log("Odontología");
        break;
      case "enfermeria":
        console.log("Enfermería");
        break;
      case "emergencias":
        console.log("Emergencias");
        break;
      case "cirugia":
        console.log("Cirugía");
        break;
      case "cirugia bucal":
        console.log("Cirugía Bucal");
        break;
      case "psicologia":
        console.log("Psicología");
        break;
      case "gastroenterologia":
        console.log("Gastroenterología");
        break;
      case "dermatologia":
        console.log("Dermatología");
        break;
      case "cardiologia":
        console.log("Cardiología");
        break;
      case "medicina general":
        console.log("Medicina General");
        break;
      default:
        console.log("No contamos con ese servicio.");
        break;
    }
    planmedico = prompt(
      "Ingresa la especialidad médica (escribe plansmg para finalizar)."
    );
  }

  console.log(
    "Señor/a " +
      user +
      ": En base a tu selección de especialidades médicas te haremos llegar a tu correo electrónico '" +
      mail +
      "' el plan médico SMG que más se adecúe a tus preferencias. ¡Está atento/a!"
  );
}

if (usuario == user && contrasenia == pass) {
  console.log("¡Bienvenido al cotizador de planes SMG!");

cotizarPlanMedico();

} else {
  console.log(
    "Usuario y/o contraseña erróneos, por favor verifica tus datos para poder acceder al cotizador."
  );
}

*/

//ACLARATORIA: Decidí comentar el resto del código para que la lógica del desafío actual esté definida por lo que recién desarrollé y no se solape con las primeras partes.

//Lista de planes médicos

const planesSMG = [
  { id: 01,
    nombre: "PlanSMG 01",
    ubicación: "Sanatorio SMG",
    precio: 58000,
  },
  { id: 02,
    nombre: "PlanSMG 02",
    ubicación: "Sanatorio SMG",
    precio: 62000,
  },
  { id: 03,
    nombre: "PlanSMG 03",
    ubicación: "Sanatorio SMG",
    precio: 79000,
  },
  { id: 04,
    nombre: "PlanSMG 04",
    ubicación: "Sanatorio SMG",
    precio: 88000,
  },
  { id: 05,
    nombre: "PlanSMG 01 - Exclusive",
    ubicación: "Sanatorio SMG Exclusive",
    precio: 128000,
  },
  { id: 06,
    nombre: "PlanSMG 02 - Exclusive",
    ubicación: "Sanatorio SMG Exclusive",
    precio: 142000,
  },
  { id: 07,
    nombre: "PlanSMG 03 - Exclusive",
    ubicación: "Sanatorio SMG Exclusive",
    precio: 167000,
  },
  { id: 08,
    nombre: "PlanSMG 04 - Exclusive",
    ubicación: "Sanatorio SMG Exclusive",
    precio: 188000,
  },
];

console.log("Bienvenido/a a Smart Medical Group. A continuación te dejamos un listado de nuestros planes médicos en cartilla para que puedas seleccionar el que más se adecúe a tus necesidades. Estos valores no poseen el IVA agregado.");
console.table(planesSMG);

let planId = prompt ("Por favor, introduzca el número de ID del plan médico de su preferencia.");

const planEscogido = planesSMG.find((plan) => plan.id == planId);

console.log("Este es el plan de salud SMG que Ud. ha seleccionado, para continuar con la cotización ahora deberá escoger la modalidad de pago que desea seleccionar.")

if (planEscogido != undefined){
  console.log(planEscogido);;
}else{
  console.log("Ud. no ha seleccionado el ID de un plan de la cartilla SMG.");
}

modoDePago = prompt("Si desea cancelar su plan médico en un pago escriba 'de contado', si por el contrario desea cancelar el mismo en cuotas sin interés por favor escriba 'cuotas'.");

function decontado (){
  precio = planEscogido.precio * 1.21;
}

function cutoas (){
  precio = (planEscogido.precio * 1.21 * 1.30)/3;
}

if (modoDePago == "de contado"){
  decontado()
  planEscogido.precio = precio;
  console.log("El plan que Ud. ha escogido es el siguiente:","\nACLARATORIA: Precio con IVA incluido.");
  console.table(planEscogido);
}else if (modoDePago == "cuotas"){
  cutoas()
  planEscogido.precio = precio;
  console.log("El plan que Ud. ha escogido es el siguiente:", "\nACLARATORIA: El precio que verá reflejado es la cuota mensual que deberá abonar por el plan médico.", "\nEl financimiento es de 3 cuotas sin interés.");
  console.table(planEscogido);
}else{
  console.log("No ha escogido una de las modalidades predefinidas para el cotizador. Por favor reintente de nuevo con las opciones 'de contado' o 'cuotas'. Muchas gracias.")
}