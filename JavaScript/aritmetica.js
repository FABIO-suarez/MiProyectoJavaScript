function suma() {

    let valor1=document.getElementById("dato1").value;
    let valor2=document.getElementById("dato2").value;
    
    let resultadoTotal=document.getElementById("resultado");

    let resultadoSuma=parseFloat(valor1) + parseFloat(valor2);
    
    if(valor1 == "" || valor2 == "")
        {alert("el campo esta vacio");

        }
    else
    {
        resultadoTotal.innerHTML="el resultado es: " + resultadoSuma;
    }
}

function resta() {

    let valor1=document.getElementById("dato1").value;
    let valor2=document.getElementById("dato2").value;
    
    let resultadoTotal=document.getElementById("resultado");

    let resultadoresta=parseFloat(valor1) - parseFloat(valor2);
    
    if(valor1 == "" || valor2 == "")
        {alert("el campo esta vacio");

        }
    else
    {
        resultadoTotal.innerHTML="el resultado es: " + resultadoresta;
    }
}
function multi() {

    let valor1=document.getElementById("dato1").value;
    let valor2=document.getElementById("dato2").value;
    
    let resultadoTotal=document.getElementById("resultado");

    let resultadomulti=parseFloat(valor1) * parseFloat(valor2);
    
    if(valor1 == "" || valor2 == "")
        {alert("el campo esta vacio");

        }
    else
    {
        resultadoTotal.innerHTML="el resultado es: " + resultadomulti;
    }
}
function division() {

    let valor1=document.getElementById("dato1").value;
    let valor2=document.getElementById("dato2").value;
    
    let resultadoTotal=document.getElementById("resultado");

    let resultadodivision=parseFloat(valor1) / parseFloat(valor2);
    
    if(valor1 == "" || valor2 == "")
        {alert("el campo esta vacio");

        }
    else
    {
        resultadoTotal.innerHTML="el resultado es: " + resultadodivision;
    }
}

