const btnOpciones = document.getElementById("btnOpciones");
const listaDepartaments = document.getElementById("listaDepartaments");
const inputAceptDepart = document.getElementById("inputAceptDepart");
const btnAceptDepart = document.getElementById("btnAceptDepart");
const btnAddDepart = document.getElementById("btnAddDepart");
const labelAside = document.getElementById("labelAside");

const imgOppenedFileReader = document.getElementById("imgOppenedFileReader");
const fileReader = document.getElementById("fileReader");

const templateAddEmpleado = document.getElementById("templateAddEmpleado");
const btnCreateEmpleado = document.getElementById("btnCreateEmpleado");
const baseAddEmpleado = document.getElementById("baseAddEmpleado");
const capterNombre = document.getElementById("capterNombre");
const capterNumProyects = document.getElementById("capterNumProyects");
const capterDescription = document.getElementById("capterDescription");
const selectDepartCreation = document.getElementById("selectDepartCreation");
const capterDepartamentos = document.getElementById("selectDepartCreation");
const tableProjects = document.getElementById("tableProjects");
const inpNProject = document.getElementById("inpNProject");
const inpDProject = document.getElementById("inpDProject");
const inpEProject = document.getElementById("inpEProject");
const inpSProject = document.getElementById("inpSProject");


let contDeparts = 0;
let Departaments = [];
let contEmpled = 0;
let Emplead = [];
let contProjects = 0;
let Projects = [];
function desplegar() {
  if (listaDepartaments.getAttribute("hidden") == null) {
    listaDepartaments.setAttribute("hidden", "");
  } else {
    listaDepartaments.removeAttribute("hidden");
  }
}
function addDepart() {
  if (
    inputAceptDepart.getAttribute("hidden") == null ||
    btnAceptDepart.getAttribute("hidden") == null
  ) {
    inputAceptDepart.setAttribute("hidden", "");
    btnAceptDepart.setAttribute("hidden", "");
  } else {
    inputAceptDepart.removeAttribute("hidden");
    btnAceptDepart.removeAttribute("hidden");
  }
}
function aceptDepart() {
  listaDepartaments.insertAdjacentHTML(
    "afterbegin",
    `
    <li ><button class="btnOpciones2" id="depart${contDeparts}" onclick="selectDepart(this.id)">${inputAceptDepart.value}</button></li>  
    
    
    `
  );

  let aux = inputAceptDepart.value;
  Departaments.push({
    name: aux,
    id: `depart${contDeparts}`,
    position: contDeparts,
  });
  console.log(Departaments);
  inputAceptDepart.value = "";
  addDepart();
  contDeparts = contDeparts + 1;

  alert("Departamento Agregado Exitosamente");
}
function selectDepart(id) {
  const item = document.getElementById(`${id}`);
  labelAside.innerHTML = item.textContent;
  desplegar();
  filtrarempleados();
}
function openfilereader() {
  fileReader.click();
}
function actualizardeps(){
    Departaments.forEach((valor,clave)=>{
        let name = valor['name'];
        console.log(name);
        selectDepartCreation.insertAdjacentHTML('afterbegin',`
                <option value="${name}">${name}</option>
            `);

        
        
    });
}
function addEmpleado() {
    
    templateAddEmpleado.style.display = "flex";
    actualizardeps();
    
}
function createEmpleado() {
  baseAddEmpleado.insertAdjacentHTML(
    "afterbegin",
    `
    <td class="infoEmpleado" id="baseAddEmpleado${contEmpled}">
                            <div>
                                <img class="perfilEmpleado" src="https://placehold.co/50" alt="perfilEmpleado" />
                            </div>
                            <div class="nombreInfoEmpleado">
                                <strong id="nombreEmpleado">${capterNombre.value}</strong>
                                <div>
                                    <strong id="labelProyects">Proyectos: </strong>
                                    <label id="numeroProyects">${capterNumProyects.value}</label>
                                </div>
                            </div>
                            <div>
                                <label id="descriptionEmpleado">${capterDescription.value}</label>
                            </div>
                            <div id="btnBorrarEmpleado">
                                <i class="fa fa-trash" id="btnDelete${contEmpled}"  onclick="deletempleado(this.id)"   ></i>
                            </div>
                        </td>
    `
  );
  
  Emplead.push({"id":`baseAddEmpleado${contEmpled}`,
  "nombre":`${capterNombre.value}`,
  "numProyects":`${capterNumProyects.value}`,
  "descripcion":`${capterDescription.value}`,
  "idDelete":`btnDelete${contEmpled}`,
  "departamento":` ${capterDepartamentos.options[capterDepartamentos.selectedIndex].text}`

    });
    
  templateAddEmpleado.style.display = "none";
  contEmpled = contEmpled +1;
}
function deletempleado(id){
    Emplead.forEach((valor,clave)=>{
        let aux = valor['idDelete'];       
        
        if(id===aux){
            
            document.getElementById(`${valor['id']}`).remove();
        };
       
        
        
       
    });
    
}
function filtrarempleados(){
    Emplead.forEach((valor,clave)=>{
        let aux= valor['departamento']
        console.log(aux);
        if(labelAside.textContent!==aux){
            
            document.getElementById(`${valor['id']}`).style.display = 'none';
        }
    })
}
function newProject(){
    tableProjects.insertAdjacentHTML('afterbegin',`
    <tr class="itemProyect">
    <td id="nomProject${contProjects}">${inpNProject}</td>
    <td>${inpDProject}</td>
    <td>${inpEProject}</td>
    <td>${inpSProject}</td>
    <td>
        <button>ver</button>
    </td>
    <td>
        <button class="btnOps">Agregar Empleado</button>
        <button class="btnOps">Eliminar Empleado</button>
        <button class="btnOps">Finalizar Proyecto</button>
    </td>
</tr>
    `);
}
