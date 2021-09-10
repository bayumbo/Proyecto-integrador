

function crearUsuario(usuario) {
    crear(usuario);
    document.getElementById('usuario').value = '';
    document.getElementById('listaUsuariosTabla').innerHTML = usuarios;
  }  

function actualizarUsuario (emailModificado,nombreModificado,apellidoModificado, edadModificada){
    const usuario= 
    {
        email: emailModificado, 
        nombre: nombreModificado, 
        apellido: apellidoModificado, 
        edad: edadModificada 
    };
    
    modificar(emailModificado, usuario); 
    listarUsuariosTabla();
}    


function listarUsuariosTabla(){
 
    document.getElementById('listaUsuariosTabla').innerHTML= '';

    for (var i=0; i< usuarios.length; i++){
        document.getElementById('listaUsuariosTabla').innerHTML += 
    `   
     
    <tr>
        <td>
            ${usuarios[i].email}
        <td>
            ${usuarios [i]. nombre}
        </td>
        <td>
            ${usuarios [i]. apellido} 
        </td>
        <td>  
            ${usuarios [i]. edad} 
        </td>
        <td>
            <button onclick= "editar('${usuarios[i].email}','${usuarios [i]. nombre}','${usuarios [i]. apellido}','${usuarios [i]. edad}')"> Editar </button>
            <button onclick= "eliminar('${usuarios[i].email}')"> Eliminar </button>
            
        </td> 
    </tr>
        
        `
 
    }
}
function editar (email, nombre, apellido, edad){
    document.getElementById('email').value = email;
    document.getElementById('nombre').value = nombre;
    document.getElementById('apellido').value = apellido
    document.getElementById('edad').value = edad;
}

function eliminar (email){

    document.getElementById('nombre').value= "";
    document.getElementById('apellido').value = '';
    document.getElementById('edad').value = '';
}

listarUsuariosTabla();