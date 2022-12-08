let newTarea = document.querySelector ("#newTarea")
let btnAgregar = document.querySelector("#btnAgregar")
let totalTareas = document.querySelector ("#totalTareas")
let totalRealizadas = document.querySelector ("#totalRealizadas")
let listaTareas = document.querySelector ("#listaTareas")


let tareas = [
{ id: Date.now()+ 1, nameTarea:"Hacer Mercado", check: false},
{ id: Date.now()+ 2, nameTarea:"Estudiar ", check: false},
{ id: Date.now()+ 3, nameTarea:"Hacer la torta", check: false},
]

function totalCompletadas() {
    arrayCompletado = tareas.filter((completadas) => {
        return completadas.check === true
    })
    return arrayCompletado.length
}

function render() {
    listaTareas.innerHTML = ""
    totalTareas.innerHTML = `${tareas.length}`
    totalRealizadas.innerHTML = totalCompletadas()

    tareas.forEach(function (tarea) {
        if (tarea.check === false) {
            listaTareas.innerHTML += `
        <tr><td> ${tarea.id}</td><td> ${tarea.nameTarea} </td>
        <td><input type="checkbox" class= "check" onclick="checkTarea(${tarea.id})"id="${tarea.id}" ></td>
        <td> <button class= "btnDelete" onclick="deleteTarea(${tarea.id})" id="${tarea.id}">❌</button></td>
        </tr>`
        } else {
            listaTareas.innerHTML += `
        <tr> <td> ${tarea.id}</td><td> ${tarea.nameTarea} </td>
        <td><input type="checkbox" class= "check" checked onclick="checkTarea(${tarea.id})"id="${tarea.id}" ></td>
        <td> <button class= "btnDelete" onclick="deleteTarea(${tarea.id})" id="${tarea.id}">❌</button></td>
        </tr>`
        }
    })
}
render()
const checkTarea = function (chekeador) {
    tareas.forEach(function (tarea) {
        if (tarea.id === chekeador) {
            if (tarea.check === false) {
                tarea.check = true
                render()
            } else {
                tarea.check = false
                render()
            }
        }
    })
};

btnAgregar.addEventListener("click", function () {
        if (newTarea.value == "") {
            alert("Coloca una Tarea")
        } else {
            tareas.push({
                id: Date.now(),
                nameTarea: `${newTarea.value}`,
                check: false,
            })
            newTarea.value = ""
            return render()
        }
    })

function deleteTarea(btnDelete) {
    tareas = tareas.filter((elim) => elim.id !== btnDelete)
    render()
}