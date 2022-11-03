// valor de ticket
const valorTicket = 200;

// porcentajes de descuento según categoría
let descEstudiante = 80;
let descTrainee    = 50;
let descJunior     = 15;

// Elementos en variables
let nombre          = document.getElementById("nombre");
let apellido        = document.getElementById("apellido");
let mail            = document.getElementById("mail");
let cantTickets     = document.getElementById("cantTickets");
let categoria       = document.getElementById("categoria");
let error           = document.getElementById("error");

function valorTotal()
{
    quitarClaseError();

    if(nombre.value==="")
    {
        //alert("Escribir nombre...");
        nombre.classList.add("is-invalid");
        nombre.focus();
        return ;
    }

    if(apellido.value==="")
    {
        //alert("Escribir apellido...");
        apellido.classList.add("is-invalid");
        apellido.focus();
        return ;
    }

    if(mail.value==="")
    {
        //alert("Escribir mail...");
        mail.classList.add("is-invalid");
        mail.focus();
        return ;
    }

     // Para determinar si el correo electrónico es válido o no
     const emailValido = mail => 
     {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail);
     }

     if(!emailValido(mail.value))
     {

        mail.classList.add("is-invalid");
        mail.focus();
        error.innerHTML = "Formato de correo inválido";
        return ;
     } else
        error.innerHTML="";

    if( (cantTickets.value<=0) || (isNaN(cantTickets.value)))
    {
        //alert("Definir cantidad de tickes...");
        cantTickets.classList.add("is-invalid");
        cantTickets.focus();
        return ;
    }

    if(categoria.value==="")
    {
       // alert("Seleccionar categoría...");
        categoria.classList.add("is-invalid");
        categoria.focus();
        return ;
    }


    //multiplico total * entradas

    let totalValorTickets=(cantTickets.value)*valorTicket;

    if(categoria.value==0)
    {
        totalValorTickets=totalValorTickets;
    }
    if(categoria.value==1)
    {
        totalValorTickets=totalValorTickets-(descEstudiante/100*totalValorTickets);
    }
    if(categoria.value==2)
    {
        totalValorTickets=totalValorTickets-(descTrainee/100*totalValorTickets);
    }
    if(categoria.value==3)
    {
        totalValorTickets=totalValorTickets-(descJunior/100*totalValorTickets);
    }
    console.log(categoria.value);
    totalPago.innerHTML="Total a Pagar: $"+totalValorTickets;
}

function quitarClaseError()
{
    let x=document.querySelectorAll(".form-control,.form-select");
    let i;
    for(i=0;i<x.length;i++)
    {
        x[i].classList.remove("is-invalid");
    }
}


//Desarrollo funcion 
function limpiarForm()
{
    quitarClaseError();
    totalPago.innerHTML="Total a Pagar: $";
}

function limpiarError()
{
    error.innerHTML="";
    mail.classList.remove("is-invalid");
}

//boton resumen.
btnResumen.addEventListener("click",valorTotal);
//boton borrar.
btnBorrar.addEventListener("click",limpiarForm);