let form = document.querySelector("form");
let listarCitas = document.getElementById("listarCitas");
let citas = [];
let buscar = document.getElementById("btnBuscar");
let busqueda = document.getElementById("busqueda");

const capturarDatos = () => {
  let nombre = document.getElementById("nombre").value;
  let fecha = document.getElementById("fecha").value;
  let hora = document.getElementById("hora").value;
  let sintomas = document.getElementById("sintomas").value;

  let registro = {
    nombre,
    fecha,
    hora,
    sintomas,
  };

  swal
    .fire({
      title: "¿Seguro que quieres agendar la cita?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Guardar",
      denyButtonText: `No guardar`,
    })
    .then((result) => {
      if (result.isConfirmed) {
        swal.fire("Agenda guardada!", "", "success");
        citas.unshift(registro);
        localStorage.setItem("citas", JSON.stringify(citas));
        pintarDatos();
      } else if (result.isDenied) {
        swal.fire("Changes are not saved", "", "info");
      }
    });
  formulario.reset();
};

formulario.addEventListener("submit", (e) => {
  capturarDatos();
  e.preventDefault();
});

if (localStorage.getItem("citas")) {
  citas = JSON.parse(localStorage.getItem("citas"));
}

const pintarDatos = () => {
  let citasLocalStorage = JSON.parse(localStorage.getItem("citas"));
  console.log(citasLocalStorage);

  listarCitas.innerHTML = "";

  citasLocalStorage.map((cita) => {
    const { nombre, fecha, hora, sintomas } = cita;
    listarCitas.innerHTML += `
      <tr>
        <td>${nombre}</td>
        <td>${fecha}</td>
        <td>${hora}</td>
        <td>${sintomas}</td>
      </tr>
    `;
  });
};

document.addEventListener("DOMContentLoader", pintarDatos());

buscar.addEventListener("click", (e) => {
  e.preventDefault();
  let input = document.getElementById("inputBuscar").value;
  let data = JSON.parse(localStorage.getItem("citas"));

  let filtro = data.filter((cita) => cita.nombre.toLowerCase() === input.toLowerCase());
  console.log(filtro);

  filtro.length === 0
    ? (busqueda.innerHTML += `
      <div style="color: white;">El nombre ${input} no existe</div>
    `)
    : filtro.map((cita) => {
        const { nombre, fecha, hora, sintomas } = cita;
        busqueda.innerHTML += `
        <div style="color: white;">${nombre}</div>
        <div style="color: white;">${fecha}</div>
        <div style="color: white;">${hora}</div>
        <div style="color: white;">${sintomas}
          <button 1d='${id}'>Borrar</button>
        </div>
        `
      });
});

let nombre= document.getElementById("nombres");
let apellido= document.getElementById("apellidos");
let correo= document.getElementById("correo");
let contraseña= document.getElementById("pas");
let registro= document.getElementById("reg");

registro.addEventListener("click", () => {
	console.log(nombre.textContent)
    localStorage.setItem("nombre", nombre.value)
    localStorage.setItem("apellido", apellido.value)
    localStorage.setItem("correo", correo.value)
    localStorage.setItem("clave", contraseña.value)

})
