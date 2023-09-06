const adviceIdNumber = document.getElementById("advice-id-number")
const adviceText = document.getElementById("advice-text")
const btnNuevaCita = document.getElementById("btn-nueva-cita");

function traerNuevaCita() {
  fetch("https://api.adviceslip.com/advice")
    .then(res => {
        // Verificar si la solicitud fue exitosa (código de estado 200)
        if (!res.ok) {
            throw new Error("Hubo un error en la solicitud");
        }
        // Analizar la respuesta JSON
        return res.json();
     })
     .then(data => {
        // Manipular los datos obtenidos de la API aquí
        adviceIdNumber.innerText = data.slip.id
        adviceText.innerText = data.slip.advice
     })
     .catch(err => {
        // Manejar cualquier error que pueda ocurrir durante la solicitud
        console.error("Ocurrió un error", err)
     })
}

btnNuevaCita.addEventListener("click", traerNuevaCita);
