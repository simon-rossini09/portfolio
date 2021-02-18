/*
	Maintenant, j'appelle bien ton script dans ton html
	Tu voulais faire quoi avec cette fonction toggle ???
	je voulais ajouter des items genre 'centres d'intérêt ' à mon CV et  les cacher ou 
	les faire apparaîte onclick ou mouseover
	'

	Quandje regarde ta fonction, tu veux juste cacher tes ID
	en fait je voudrais appliquer ça juste aux centres d'intérêt ; il faut une classe, non?
	non un id car c'est juste sur un Element. Mais cela va cibler tous mes id ...
	non l'id est sensé etre unique
En fait je voudrais afficher à la demande mes centres d'intérêt divers en hidden visible
*/
/*
document.querySelector('#centres-interet').onclick(
		document.querySelector("#centres").toggle()
	)

document.querySelector('#centres-interet').addEventListener('mouseover', function(){

	document.querySelector('#centres-interet').style.background="red";
	document.querySelector('#centres-interet').style.visibility="hidden";
});

document.querySelector('#centres-interet').addEventListener('mouseout', function(){

	document.querySelector('#centres-interet').style.background="white";
});*/

/** Fonction basculant la visibilité d'un élément dom
* @parameter anId string l'identificateur de la cible à montrer, cacher
*/
function toggle(centres_interet)
{
	node = document.getElementById(anId);
	if (node.style.visibility="hidden")
	{
	console.log(node)
		// Contenu caché, le montrer
		node.style.visibility = "visible";
		node.style.height = "auto";			
	}
	else
	{
	console.log("--------------"+node)
		// Contenu visible, le cacher
		node.style.visibility = "hidden";
		node.style.height = "0";			
	}
}

