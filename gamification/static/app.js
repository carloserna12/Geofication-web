
const AC = document.getElementById('AC');
const IN = document.getElementById('IN');
const textContainer = document.getElementById('textContainer');
const LS = document.getElementById('LS');
const AS = document.getElementById('AS');



const saldo = document.getElementById('saldo');
const textField = document.getElementById('textField');
const go = document.getElementById('go');

var contadorSeguidos = 0;
var contadorAciertos = 0;
//const C1 = document.getElementById('C1');
//const C2 = document.getElementById('C2');
//const C3 = document.getElementById('C3');
function defineC() {
    for (let i = 1; i < 32; i++) {
        var name = "C";
        eval("const "+name+i+" = document.getElementById('"+name+i+"');");
    }
}

function defineDepartamentos() {
    for (let i = 0; i < 31; i++) {
        eval("const "+nuevoArray[i]+" = document.getElementById('"+nuevoArray[i]+"');");
    }
}


var nuevoArray = ["Amazonas","Antioquia","Arauca","Atlantico","Bolivar","Boyaca","Caldas","Caqueta","Casanare","Cauca","Cesar","Choco","Cordoba","Cundinamarca","Guainia","Guaviare","Huila","LaGuajira","Magdalena","Meta","Nariño","NorteDeSantander","Putumayo","Quindio","Risaralda","SanAndresYProvidencia","Santander","Sucre","Tolima","ValleDelCauca","Vaupes","Vichada"];




function capturaBoton(comp){
    let id = comp.id;
    if(id == "btn1"){
        $("#"+comp.dataset.name).css("display", "block");
        $("#"+comp.dataset.name+"1").css("display", "none");
        $("#"+comp.dataset.name+"2").css("display", "none");
        $("#"+comp.dataset.name+"3").css("display", "none");
    }else if (id == "btn2"){
        if (comp.textContent == "$200") {
            if ((parseInt(saldo.textContent))>= 200) {
                $("#"+comp.dataset.name+"1").css("display", "block");
                $("#"+comp.dataset.name).css("display", "none");
                $("#"+comp.dataset.name+"2").css("display", "none");
                $("#"+comp.dataset.name+"3").css("display", "none");
                saldo.innerHTML= (parseInt(saldo.textContent))-200;
                comp.innerHTML=2; 
            }else{
                console.log("Saldo Insuficiente")
            }
        }else{
            $("#"+comp.dataset.name+"1").css("display", "block");
            $("#"+comp.dataset.name).css("display", "none");
            $("#"+comp.dataset.name+"2").css("display", "none");
            $("#"+comp.dataset.name+"3").css("display", "none");
        }     
    }else if (id == "btn3") {
        if (comp.textContent == "$200") {
            if ((parseInt(saldo.textContent))>= 200) {
                $("#"+comp.dataset.name+"2").css("display", "block");
                $("#"+comp.dataset.name).css("display", "none");
                $("#"+comp.dataset.name+"1").css("display", "none");
                $("#"+comp.dataset.name+"3").css("display", "none");
                saldo.innerHTML= (parseInt(saldo.textContent))-200;
                comp.innerHTML=3; 
            }else{
                console.log("Saldo Insuficiente")
            }
        }else{
            $("#"+comp.dataset.name+"2").css("display", "block");
            $("#"+comp.dataset.name).css("display", "none");
            $("#"+comp.dataset.name+"1").css("display", "none");
            $("#"+comp.dataset.name+"3").css("display", "none");
        }     
    }else if (id == "btn4") {
        if (comp.textContent == "$200") {
            if ((parseInt(saldo.textContent))>= 200) {
                $("#"+comp.dataset.name+"3").css("display", "block");
                $("#"+comp.dataset.name).css("display", "none");
                $("#"+comp.dataset.name+"2").css("display", "none");
                $("#"+comp.dataset.name+"1").css("display", "none");
                saldo.innerHTML= (parseInt(saldo.textContent))-200;
                comp.innerHTML=4; 
            }else{
                console.log("Saldo Insuficiente")
            }
        }else{
            $("#"+comp.dataset.name+"3").css("display", "block");
            $("#"+comp.dataset.name).css("display", "none");
            $("#"+comp.dataset.name+"2").css("display", "none");
            $("#"+comp.dataset.name+"1").css("display", "none");
        }  
    }
}


function sinIntentos(){
    if (IN.textContent == 0) {
        $("#C1").css("display", "none");
        $("#textContainer").css("display", "none");
        $("#LS").css("display", "block");
        LS.href = "1/"+saldo.textContent+"/"+contadorAciertos
        console.log(LS)

    }
}

function cambio(C_a,C_b) {
    contadorAciertos++;
    contadorSeguidos++;
    AS.innerHTML= contadorSeguidos
    $("#AC").css("display", "block");
    saldo.innerHTML= (parseInt(saldo.textContent))+200;
    setTimeout(function(){AC.style.display='none';},2000);
    setTimeout(function(){C_a.style.display='none';},2000);
    setTimeout(function(){C_b.style.display='block';},2000);
}



$(document).ready(function(){
    $("#C1").css("display", "block");
    $("#C2").css("display", "none");
    $("#C3").css("display", "none");
    $("#C4").css("display", "none");
    $("#C5").css("display", "none");
    $("#C6").css("display", "none");
    $("#C7").css("display", "none");
    $("#C8").css("display", "none");
    $("#C9").css("display", "none");
    $("#C10").css("display", "none");
    $("#C11").css("display", "none");
    $("#C12").css("display", "none");
    $("#C13").css("display", "none");
    $("#C14").css("display", "none");
    $("#C15").css("display", "none");
    $("#C16").css("display", "none");
    $("#C17").css("display", "none");
    $("#C18").css("display", "none");
    $("#C19").css("display", "none");
    $("#C20").css("display", "none");
    $("#C21").css("display", "none");
    $("#C22").css("display", "none");
    $("#C23").css("display", "none");
    $("#C24").css("display", "none");
    $("#C25").css("display", "none");
    $("#C26").css("display", "none");
    $("#C27").css("display", "none");
    $("#C28").css("display", "none");
    $("#C29").css("display", "none");
    $("#C30").css("display", "none");
    $("#C31").css("display", "none");
    $("#C32").css("display", "none");

    $("#AC").css("display", "none");
    defineC();
    defineDepartamentos();
/////////////////////////////////////////////////////
    $("#go").click(function() {
        //console.log(textField.value.toLowerCase());
        //console.log((textField.value.normalize('NFD').replace(/([aeio])\u0301|(u)[\u0301\u0308]/gi,"$1$2").normalize()).toLowerCase());
        if ((textField.value.normalize('NFD').replace(/([aeio])\u0301|(u)[\u0301\u0308]/gi,"$1$2").normalize()).toLowerCase() == Amazonas.id.toLowerCase() && C1.style.display == "block") {
            cambio(C1,C2)
        }else if ((textField.value.normalize('NFD').replace(/([aeio])\u0301|(u)[\u0301\u0308]/gi,"$1$2").normalize()).toLowerCase() == Antioquia.id.toLowerCase() && C2.style.display == "block") {
            cambio(C2,C3)
        }else if ((textField.value.normalize('NFD').replace(/([aeio])\u0301|(u)[\u0301\u0308]/gi,"$1$2").normalize()).toLowerCase() == Arauca.id.toLowerCase() && C3.style.display == "block") {
            cambio(C3,C4)
        }else if ((textField.value.normalize('NFD').replace(/([aeio])\u0301|(u)[\u0301\u0308]/gi,"$1$2").normalize()).toLowerCase() == Atlantico.id.toLowerCase() && C4.style.display == "block") {
            cambio(C4,C5)
        }else if ((textField.value.normalize('NFD').replace(/([aeio])\u0301|(u)[\u0301\u0308]/gi,"$1$2").normalize()).toLowerCase() == Bolivar.id.toLowerCase() && C5.style.display == "block") {
            cambio(C5,C6)
        }else if ((textField.value.normalize('NFD').replace(/([aeio])\u0301|(u)[\u0301\u0308]/gi,"$1$2").normalize()).toLowerCase() == Boyaca.id.toLowerCase() && C6.style.display == "block") {
            cambio(C6,C7)
        }else if ((textField.value.normalize('NFD').replace(/([aeio])\u0301|(u)[\u0301\u0308]/gi,"$1$2").normalize()).toLowerCase() == Caldas.id.toLowerCase() && C7.style.display == "block") {
            cambio(C7,C8)
        }else if ((textField.value.normalize('NFD').replace(/([aeio])\u0301|(u)[\u0301\u0308]/gi,"$1$2").normalize()).toLowerCase() == Caqueta.id.toLowerCase() && C8.style.display == "block") {
            cambio(C8,C9)
        }else if ((textField.value.normalize('NFD').replace(/([aeio])\u0301|(u)[\u0301\u0308]/gi,"$1$2").normalize()).toLowerCase() == Casanare.id.toLowerCase() && C9.style.display == "block") {
            cambio(C9,C10)
        }else if ((textField.value.normalize('NFD').replace(/([aeio])\u0301|(u)[\u0301\u0308]/gi,"$1$2").normalize()).toLowerCase() == Cauca.id.toLowerCase() && C10.style.display == "block") {
            cambio(C10,C11)
        }else if ((textField.value.normalize('NFD').replace(/([aeio])\u0301|(u)[\u0301\u0308]/gi,"$1$2").normalize()).toLowerCase() == Cesar.id.toLowerCase() && C11.style.display == "block") {
            cambio(C11,C12)
        }else if ((textField.value.normalize('NFD').replace(/([aeio])\u0301|(u)[\u0301\u0308]/gi,"$1$2").normalize()).toLowerCase() == Choco.id.toLowerCase() && C12.style.display == "block") {
            cambio(C12,C13)
        }else if ((textField.value.normalize('NFD').replace(/([aeio])\u0301|(u)[\u0301\u0308]/gi,"$1$2").normalize()).toLowerCase() == Cordoba.id.toLowerCase() && C13.style.display == "block") {
            cambio(C13,C14)
        }else if ((textField.value.normalize('NFD').replace(/([aeio])\u0301|(u)[\u0301\u0308]/gi,"$1$2").normalize()).toLowerCase() == Cundinamarca.id.toLowerCase() && C14.style.display == "block") {
            cambio(C14,C15)
        }else if ((textField.value.normalize('NFD').replace(/([aeio])\u0301|(u)[\u0301\u0308]/gi,"$1$2").normalize()).toLowerCase() == Guainia.id.toLowerCase() && C15.style.display == "block") {
            cambio(C15,C16)
        }else if ((textField.value.normalize('NFD').replace(/([aeio])\u0301|(u)[\u0301\u0308]/gi,"$1$2").normalize()).toLowerCase() == Guaviare.id.toLowerCase() && C16.style.display == "block") {
            cambio(C16,C17)
        }else if ((textField.value.normalize('NFD').replace(/([aeio])\u0301|(u)[\u0301\u0308]/gi,"$1$2").normalize()).toLowerCase() == Huila.id.toLowerCase() && C17.style.display == "block") {
            cambio(C17,C18)
        }else if ((textField.value.normalize('NFD').replace(/([aeio])\u0301|(u)[\u0301\u0308]/gi,"$1$2").normalize()).toLowerCase() == LaGuajira.id.toLowerCase() && C18.style.display == "block") {
            cambio(C18,C19)
        }else if ((textField.value.normalize('NFD').replace(/([aeio])\u0301|(u)[\u0301\u0308]/gi,"$1$2").normalize()).toLowerCase() == Magdalena.id.toLowerCase() && C19.style.display == "block") {
            cambio(C19,C20)
        }else if ((textField.value.normalize('NFD').replace(/([aeio])\u0301|(u)[\u0301\u0308]/gi,"$1$2").normalize()).toLowerCase() == Meta.id.toLowerCase() && C20.style.display == "block") {
            cambio(C20,C21)
        }else if ((textField.value.normalize('NFD').replace(/([aeio])\u0301|(u)[\u0301\u0308]/gi,"$1$2").normalize()).toLowerCase() == Nariño.id.toLowerCase() && C21.style.display == "block") {
            cambio(C21,C22)
        }else if ((textField.value.normalize('NFD').replace(/([aeio])\u0301|(u)[\u0301\u0308]/gi,"$1$2").normalize()).toLowerCase() == NorteDeSantander.id.toLowerCase() && C22.style.display == "block") {
            cambio(C22,C23)
        }else if ((textField.value.normalize('NFD').replace(/([aeio])\u0301|(u)[\u0301\u0308]/gi,"$1$2").normalize()).toLowerCase() == Putumayo.id.toLowerCase() && C23.style.display == "block") {
            cambio(C23,C24)
        }else if ((textField.value.normalize('NFD').replace(/([aeio])\u0301|(u)[\u0301\u0308]/gi,"$1$2").normalize()).toLowerCase() == Quindio.id.toLowerCase() && C24.style.display == "block") {
            cambio(C24,C25)
        }else if ((textField.value.normalize('NFD').replace(/([aeio])\u0301|(u)[\u0301\u0308]/gi,"$1$2").normalize()).toLowerCase() == Risaralda.id.toLowerCase() && C25.style.display == "block") {
            cambio(C25,C26)
        }else if ((textField.value.normalize('NFD').replace(/([aeio])\u0301|(u)[\u0301\u0308]/gi,"$1$2").normalize()).toLowerCase() == SanAndresYProvidencia.id.toLowerCase() && C26.style.display == "block") {
            cambio(C26,C27)
        }else if ((textField.value.normalize('NFD').replace(/([aeio])\u0301|(u)[\u0301\u0308]/gi,"$1$2").normalize()).toLowerCase() == Santander.id.toLowerCase() && C27.style.display == "block") {
            cambio(C27,C28)
        }else if ((textField.value.normalize('NFD').replace(/([aeio])\u0301|(u)[\u0301\u0308]/gi,"$1$2").normalize()).toLowerCase() == Sucre.id.toLowerCase() && C28.style.display == "block") {
            cambio(C28,C29)
        }else if ((textField.value.normalize('NFD').replace(/([aeio])\u0301|(u)[\u0301\u0308]/gi,"$1$2").normalize()).toLowerCase() == Tolima.id.toLowerCase() && C29.style.display == "block") {
            cambio(C29,C30)
        }else if ((textField.value.normalize('NFD').replace(/([aeio])\u0301|(u)[\u0301\u0308]/gi,"$1$2").normalize()).toLowerCase() == ValleDelCauca.id.toLowerCase() && C30.style.display == "block") {
            cambio(C30,C31)
        }else if ((textField.value.normalize('NFD').replace(/([aeio])\u0301|(u)[\u0301\u0308]/gi,"$1$2").normalize()).toLowerCase() == Vaupes.id.toLowerCase() && C31.style.display == "block") {
            cambio(C31,C32)
        }else if ((textField.value.normalize('NFD').replace(/([aeio])\u0301|(u)[\u0301\u0308]/gi,"$1$2").normalize()).toLowerCase()== Vichada.id.toLowerCase() && C32.style.display == "block") {
            contadorAciertos++;
            console.log("Ganaste wii")
        }else{
            IN.innerHTML= (parseInt(IN.textContent))-1;
            contadorSeguidos = 0
            AS.innerHTML= contadorSeguidos
            sinIntentos();
        }
        
    });
});