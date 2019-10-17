var EntradaEnteros;
var a ="a"
console.log(Buscar("1234567890",a));

function Buscar(cadena,caracter)
{
    for(i=0 ; i<cadena.length ; i++)
    {
        if(caracter == cadena[i])
        {
            return true;
        }
    }
    return false;
}
function Validar(AlfabetoEnteros,cadena)
{
    for(k=0 ; k< cadena.length ; k++)
    {
        var aux = false;
        for(l=0 ; l<AlfabetoEnteros.length ; l++)
        {
            if(AlfabetoEnteros[l] == cadena[k])
            {
                aux = true;
                l=AlfabetoEnteros.length;
            }
        }
        if( aux == false){
            return false;
        }
    }
    return true;
}

function LeerEntradaEnteros()
{
    var AlfabetoEnteros = ["-","1","2","3","4","5","6","7","8","9"];
    var EntradaEnteros = document.getElementById('EntradaEnteros').value;
    var longitudEntrada = EntradaEnteros.length;
    var validar = Validar(AlfabetoEnteros,EntradaEnteros);
    if(validar)
    {
        var estado = 4;
        for(k=0 ; k<longitudEntrada ; k++)
        {
            switch(estado)
            {
                case 0:
                    if(Buscar("13579",EntradaEnteros[k]))
                    {
                        estado = 2;
                        break;
                    }
                    if(Buscar("2468",EntradaEnteros[k]))
                    {
                        estado = 1;
                        break;
                    }
                    estado = 3
                    break;
                case 1:
                    if(Buscar("13579",EntradaEnteros[k]))
                    {
                        estado = 2;
                        break;
                    }
                    if(Buscar("2468",EntradaEnteros[k]))
                    {
                        estado = 3;
                        break;
                    }
                    estado = 3;
                case 2:
                    if(Buscar("13579",EntradaEnteros[k]))
                    {
                        estado = 3;
                        break;
                    }
                    if(Buscar("2468",EntradaEnteros[k]))
                    {
                        estado = 1;
                        break;
                    }
                    estado = 3;
                    break;
                case 3:
                    estado = 3;
                    break;
                case 4:
                    if(EntradaEnteros[k] == "-")
                    {
                        estado = 0;
                        break;
                    }
                    if(Buscar("13579",EntradaEnteros[k]))
                    {
                        estado = 2;
                        break;
                    }
                    if(Buscar("2468",EntradaEnteros[k]))
                    {
                        estado = 1;
                        break;
                    }
                    estado = 3;
                    break;
            }
        }
        if(estado == 1 || estado == 2)
        {
            document.getElementById('EntradaEnteros').style.background = "green";
        }
        else
        {
            document.getElementById('EntradaEnteros').style.background = "red";
        }  
    }  
    else{
        alert("uno o mas caracteres de la cadena no pertenece al alfabeto del automata");
    }
}


function LeerEntradaReales(){
    var AlfabetoReales = ["-",".","0","1","2","3","4","5","6","7","8","9"];
    var EntradaReales = document.getElementById('EntradaReales').value;
    var longitudEntrada = EntradaReales.length;
    var validar = Validar(AlfabetoReales,EntradaReales);
    if(validar)
    {
        var estado = 0;
        for(k=0 ; k<longitudEntrada ; k++)
        {
            console.log(EntradaReales[k],EntradaReales,k,estado);
            switch(estado)
            {
                case 0:
                    if(Buscar("0123456789",EntradaReales[k]))
                    {
                        estado = 2;
                        break;
                    }
                    if(Buscar("-",EntradaReales[k]))
                    {
                        estado = 1;
                        break;
                    }
                    estado = 9 ;
                    break;
                case 1:
                    if(Buscar("0123456789",EntradaReales[k]))
                    {
                        estado = 2;
                        break;
                    }
                    estado = 9;
                    break;
                case 2:
                    if(Buscar("0123456789",EntradaReales[k]))
                    {
                        estado = 2;
                        break;
                    }
                    if(Buscar(".",EntradaReales[k]))
                    {
                        estado = 3;
                        break;
                    }
                case 3:
                    if(Buscar("0123456789",EntradaReales[k]))
                    {
                        estado = 4;
                        break;
                    }
                    estado = 9;
                    break;
                case 4:
                    if(Buscar("0123456789",EntradaReales[k]))
                    {
                        estado = 5;
                        break;
                    }
                    estado = 9;
                    break;
                case 5:
                    if(Buscar("0123456789",EntradaReales[k]))
                    {
                        estado = 4;
                        break;
                    }
                    estado = 9;
                    break;
            }
        }
        if(estado == 2 || estado == 5)
        {
            document.getElementById('EntradaReales').style.background = "green";
        }
        else
        {
            document.getElementById('EntradaReales').style.background = "red";
        }  
    }  
    else{
        alert("uno o mas caracteres de la cadena no pertenece al alfabeto del automata");
    }
}
function LeerEntradaVariables(){
    EntradaVariables = document.getElementById('EntradaVariables').value;
}

function Limpiar(){
    document.getElementById('EntradaEnteros').value = "";
    document.getElementById('EntradaReales').value = "";
    document.getElementById('EntradaVariables').value = "";
    document.getElementById('EntradaEnteros').style.background = "white";
    document.getElementById('EntradaReales').style.background = "white";
    document.getElementById('EntradaVariables').style.background = "white";
}

function MostrarEnteros(){

    document.getElementById('EntradaReales').value = "";
    document.getElementById('EntradaVariables').value = "";

    document.getElementById('article-1').style.display = "flex";
    document.getElementById('article-2').style.display = "none";
    document.getElementById('article-3').style.display = "none";
}
function MostrarReales(){
    
    document.getElementById('EntradaEnteros').value = "";
    document.getElementById('EntradaVariables').value = "";

    document.getElementById('article-1').style.display = "none";
    document.getElementById('article-2').style.display = "flex";
    document.getElementById('article-3').style.display = "none";
}
function MostrarVariables(){
    
    document.getElementById('EntradaEnteros').value = "";
    document.getElementById('EntradaReales').value = "";

    document.getElementById('article-1').style.display = "none";
    document.getElementById('article-2').style.display = "none";
    document.getElementById('article-3').style.display = "flex";
}

function EsOperador(pChar){
    if(pChar == "+" || pChar == "-" || pChar == "*" || pChar == "/"){
        return True
    }
    else{return False}
}