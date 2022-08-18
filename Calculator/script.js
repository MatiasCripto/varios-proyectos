var operandoA;
var operandoB;
var operador;

function johnny()
{
var resultado;
var siete;
var ocho;
var nueve;
var dividir;
var cuatro;
var cinco;
var seis;
var multiplicar;
var uno;
var dos;
var tres;
var restar;
var limpiar;
var cero;
var igual;
var sumar;

resultado = document.getElementById("resultado");
siete = document.getElementById("siete");
ocho = document.getElementById("ocho");
nueve = document.getElementById("nueve");
dividir = document.getElementById("division");
cuatro = document.getElementById("cuatro");
cinco = document.getElementById("cinco");
seis = document.getElementById("seis");
multiplicar = document.getElementById("multiplicar");
uno = document.getElementById("uno");
dos = document.getElementById("dos");
tres = document.getElementById("tres");
restar = document.getElementById("restar");
limpiar = document.getElementById("limpiar");
cero = document.getElementById("cero");
igual = document.getElementById("igual");
sumar = document.getElementById("sumar");
}
//eventos

uno.onclick = function(e)
{
    resultado.textContent = resultado.textContent + "1"
}
dos.onclick = function(e)
{
    resultado.textContent = resultado.textContent + "2"
}
tres.onclick = function(e)
{
    resultado.textContent = resultado.textContent + "3"
}
cuatro.onclick = function(e)
{
    resultado.textContent = resultado.textContent + "4"
}
cinco.onclick = function(e)
{
    resultado.textContent = resultado.textContent + "5"
}
seis.onclick = function(e)
{
    resultado.textContent = resultado.textContent + "6"
}
siete.onclick = function(e)
{
    resultado.textContent = resultado.textContent + "7"
}
ocho.onclick = function(e)
{
    resultado.textContent = resultado.textContent + "8"
}
nueve.onclick = function(e)
{
    resultado.textContent = resultado.textContent + "9"
}
cero.onclick = function(e)
{
    resultado.textContent = resultado.textContent + "0"
}
limpiar.onclick = function(e)
{
    resetear();
}
sumar.onclick = function(e)
{
    operandoA = resultado.textContent;
    operador = "+"
    limpio();
}
restar.onclick = function(e)
{
    operandoA = resultado.textContent;
    operador = "-"
    limpio();
}
multiplicar.onclick = function(e)
{
    operandoA = resultado.textContent;
    operador = "*"
    limpio();
}
division.onclick = function(e)
{
    operandoA = resultado.textContent;
    operador = "/"
    limpio();
}
igual.onclick = function(e)
{
    operandoB = resultado.textContent;
    resolver();
}
function limpio()
{
    resultado.textContent = "";
}
function resetear()
{
    resultado.textContent = "";
    operandoA = 0;
    operandoB = 0;
    operador = "";
}
function resolver()
{
    var res = 0;
    switch(operador)
    {
        case "+":
            res = parseFloat(operandoA) + parseFloat(operandoB);
        break;
        case "-":
            res = operandoA - operandoB;
        break;
        case "*": 
            res = operandoA * operandoB;
        break;
        case "/":
            res = operandoA / operandoB;
        break;    
    }
    resetear();
    resultado.textContent = res;
}
