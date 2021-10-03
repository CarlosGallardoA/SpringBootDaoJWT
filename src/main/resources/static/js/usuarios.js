// Call the dataTables jQuery plugin
$(document).ready(function() {
    cargarUsuarios();
  $('#usuarios').DataTable();
});

async function cargarUsuarios() {
  const request = await fetch('api/usuarios', {
    method: 'GET',
    headers: getHeaders()
  });
  const usuarios = await request.json();

  let listadoHtml = '';
  for (let usuario of usuarios) {

    let btnDelete = `<a href="" onclick="deleteUsuer(${usuario.id})" class="btn btn-danger btn-circle btn-sm">
                    <i class="fas fa-trash"></i>
                </a>`
    let telefono = usuario.telefono == null ? '-' : usuario.telefono
    let usuarioHtml = `
        <tr>
            <td>${usuario.id}</td>
            <td>${usuario.nombre} ${usuario.apellido}</td>
            <td>${usuario.email}</td>
            <td>${telefono}</td>
            <td>
                ${btnDelete}
            </td>
        </tr>        
    `;
    listadoHtml += usuarioHtml;
  }
document.querySelector('#usuarios tbody').outerHTML = listadoHtml;
}

function getHeaders(){
    return {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization' : localStorage.token
    };
}
async function deleteUsuer(id) {
  if (!confirm("¿Desea eliminar este usuario?")) {
    return;
  } else {
    const request = await fetch('api/usuarios/' + id, {
      method: 'DELETE',
      headers: getHeaders()
    });
  }
}
