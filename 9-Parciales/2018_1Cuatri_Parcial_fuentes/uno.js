
function mostrar()
{
	var ancho
	var largo
	var perimetro
	
	ancho = prompt("introduzca el ancho")
	largo = prompt("introduzca el largo")

	ancho = parseInt(ancho);
	largo = parseInt(largo);

	perimetro = (ancho + largo) *2;

	alert("el perimetro es de: " +perimetro);




}
