//console.log("Hola mundo")

function scrollToTop(){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}

document.getElementById('scrollToTopButton').addEventListener('click', scrollToTop)

window.onscroll = function () {
    var button = document.getElementById('scrollToTopButton');

    if(document.body.scrollTop > 40 || document.documentElement.scrollTop > 40){
        button.style.display = "block"
    }else{
        button.style.display = "none" 
    }
};

const firstname = document.querySelector('#firstName');
const lastname = document.querySelector('#lastName');
const errorFirstname = document.querySelector('#error-firstname');
const formRegister = document.querySelector('#formRegister');



if(firstname && lastname && errorFirstname && formRegister){
    formRegister.addEventListener('submit', validarFormulario)
}else{
    console.log("error no se puede manejar eventos no encontrados")
}


function validarFormulario(event){
    event.preventDefault();

    let validation = true;

    if(firstname.value===''){
        firstname.classList.add("error");
        errorFirstname.textContent = "El nombre no puede estar vacio"
        validation = false
    }else{
        firstname.classList.remove("error");
        errorFirstname.textContent = ""
       
    }

    if(lastname.value===''){
        lastname.classList.add("error");
        alert("El apellido no puede estar vacio");
        validation = false
    }else{
        firstname.classList.remove("error");
       
       
    }

    if(validation){
        console.log("Nombre y apellidos validos")
    }else{
        console.log("el formulario tienen errores, no se puede enviar")
    }

    firstname.addEventListener('input', () =>{
        if(firstname.value !== ''){
            firstname.classList.remove('error')
            errorFirstname.textContent = "";
        }
    } );

    lastname.addEventListener('input', () =>{
       
            lastname.classList.remove('error')
        
    } );





}










