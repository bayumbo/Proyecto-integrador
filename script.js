/*var usuarios= [
    {
        email: 'asda@gmail.com', nombre: 'Juan', apellido: 'Pérez', edad: 20
    },
    {
        email: 'asda@hotmail.com', nombre: 'Lili', apellido: 'Luna', edad: 20
    },
    {
        email: 'asda@edu.com',nombre: 'Hector', apellido: 'Insuasti', edad: 20
    }
];
*/

var usuarios= [];

function crear(email, usuario) {
   
    const indice = usuarios.includes(usuario);
    guardarStorage();
  }
function modificar (email, usuario){
    const indice = usuarios.findIndex(usuario => usuario.email == email);
    usuarios [indice] = usuario;
    guardarStorage();
}

function guardarStorage(){
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
}

function recuperarUsuarios(){
    usuarios = JSON.parse(localStorage.getItem('usuarios'));
}
recuperarUsuarios();