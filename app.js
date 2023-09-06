const adviceIdNumber = document.getElementById("advice-id-number");
const adviceText = document.getElementById("advice-text");
const btnNuevaCita = document.getElementById("btn-nueva-cita");

async function traerNuevaCita() {
  try {
    const res = await fetch("https://api.adviceslip.com/advice");

    // Verificar si la solicitud fue exitosa (código de estado 200)
    if (!res.ok) {
      throw new Error("Hubo un error en la solicitud");
    }
    
    const data = await res.json();

    // Manipular los datos obtenidos de la API aquí
    adviceIdNumber.innerText = data.slip.id;
    adviceText.innerText = data.slip.advice;
  } catch (err) {
    console.error("Ocurrió un error", err);
  }
}

btnNuevaCita.addEventListener("click", traerNuevaCita);

