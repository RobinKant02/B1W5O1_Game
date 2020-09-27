alert("Welkom bij mijn game!");
var pokemon
var team = prompt("Kies hier uw team! Rood | Geel | Blauw");
team = team.toLowerCase();
if(team == "rood"){
	alert("Je hebt gekozen voor team Rood!");
	pokemon = prompt("Kies hier uw start Pokemon! Bulbasaur | Squirtle | Charmander.");
	if(pokemon == "bulbasaur"){
		alert("Gefeliciteerd met je aller eerste pokemon!");
		const pokeleeftijd = prompt("Hoe oud is je pokemon?");
		alert("je pokemon is" + " " + pokeleeftijd + " " + "jaar oud");
		pokemon = pokemon.toLowerCase();
		var pad = prompt("Je gaat nu op pad met je aller eerste pokemon! Waar ga je heen? Huis | Trainingscomplex | Winkel");
		pad = pad.toLowerCase();
		if(pad == "huis"){
			alert("Oke je gaat naar huis.");
			alert("Onderweg kom je een Weedle tegen! VANG HEM!");
			alert("Goedzo! Je hebt gewonnen! VICTORY!");
		}
		else if(pad == "trainingscomplex"){
			alert("Je gaat je pokemon meteen trainen! Goedzo!");
			alert("Onderweg kom je een Charizard tegen! Vecht tegen hem!");
			alert("HIJ VERLIEST!");
			alert("Ohneeeee!" + " " + pokemon + " " + "is DOOD!");
			alert("GAME OVER");
		}
		else if(pad == "winkel"){
			alert("Je gaat eten halen voor" + " " + pokemon + "." + " " + "Goedzo!");
			alert("Onderweg kom je een Pigeot tegen! Probeer hem te vangen!");
			alert(pokemon + " " + "heeft op het nippertje gewonnen!");
			alert("GEFELICITEERD! JE HEBT GEWONNEN!");
		}
		else{
			alert("Kies 1 van de 3 paden!!!");
		}
	}
	else if(pokemon == "squirtle"){
		alert("Gefeliciteerd met je aller eerste pokemon!");
		pokeleeftijd = prompt("Hoe oud is je pokemon?");
		alert("je pokemon is" + " " + pokeleeftijd + " " + "jaar oud");
		pad = prompt("Je gaat nu op pad met je aller eerste pokemon! Waar ga je heen? Huis | Trainingscomplex | Winkel");
		pad = pad.toLowerCase();
		if(pad == "huis"){
			alert("Oke je gaat naar huis.");
			alert("Onderweg kom je een Weedle tegen! VANG HEM!");
			alert("Goedzo! Je hebt gewonnen! VICTORY!");
		}
		else if(pad == "trainingscomplex"){
			alert("Je gaat je pokemon meteen trainen! Goedzo!");
			alert("Onderweg kom je een Charizard tegen! Vecht tegen hem!");
			alert("HIJ VERLIEST!");
			alert("Ohneeeee!" + " " + pokemon + " " + "is DOOD!");
			alert("GAME OVER");
		}
		else if(pad == "winkel"){
			alert("Je gaat eten halen voor" + " " + pokemon + "." + " " + "Goedzo!");
			alert("Onderweg kom je een Pigeot tegen! Probeer hem te vangen!");
			alert(pokemon + " " + "heeft op het nippertje gewonnen!");
			alert("GEFELICITEERD! JE HEBT GEWONNEN!");
		}
		else{
			alert("Kies 1 van de 3 paden!!!");
		}
	}
	else if(pokemon == "charmander"){
		alert("Gefeliciteerd met je aller eerste pokemon!");
		pokeleeftijd = prompt("Hoe oud is je pokemon?");
		alert("je pokemon is" + " " + pokeleeftijd + " " + "jaar oud");
		pad = prompt("Je gaat nu op pad met je aller eerste pokemon! Waar ga je heen? Huis | Trainingscomplex | Winkel");
		pad = pad.toLowerCase();
		if(pad == "huis"){
			alert("Oke je gaat naar huis.");
			alert("Onderweg kom je een Weedle tegen! VANG HEM!");
			alert("Goedzo! Je hebt gewonnen! VICTORY!");
		}
		else if(pad == "trainingscomplex"){
			alert("Je gaat je pokemon meteen trainen! Goedzo!");
			alert("Onderweg kom je een Charizard tegen! Vecht tegen hem!");
			alert("HIJ VERLIEST!");
			alert("Ohneeeee!" + " " + pokemon + " " + "is DOOD!");
			alert("GAME OVER");
		}
		else if(pad == "winkel"){
			alert("Je gaat eten halen voor" + " " + pokemon + "." + " " + "Goedzo!");
			alert("Onderweg kom je een Pigeot tegen! Probeer hem te vangen!");
			alert(pokemon + " " + "heeft op het nippertje gewonnen!");
			alert("GEFELICITEERD! JE HEBT GEWONNEN!");
		}
		else{
			alert("Kies 1 van de 3 paden!!!");
		}
	}
	else{
		alert("Kies 1 van de 3 pokemons!");
	}
}
else if(team == "geel"){
	alert("Je hebt gekozen voor team Geel!");
	pokemon = prompt("Kies hier uw start Pokemon! Bulbasaur | Squirtle | Charmander.");
	if(pokemon == "bulbasaur"){
		alert("Gefeliciteerd met je aller eerste pokemon!");
		const pokeleeftijd = prompt("Hoe oud is je pokemon?");
		alert("je pokemon is" + " " + pokeleeftijd + " " + "jaar oud");
		pokemon = pokemon.toLowerCase();
		var pad = prompt("Je gaat nu op pad met je aller eerste pokemon! Waar ga je heen? Huis | Trainingscomplex | Winkel");
		pad = pad.toLowerCase();
		if(pad == "huis"){
			alert("Oke je gaat naar huis.");
			alert("Onderweg kom je een Weedle tegen! VANG HEM!");
			alert("Goedzo! Je hebt gewonnen! VICTORY!");
		}
		else if(pad == "trainingscomplex"){
			alert("Je gaat je pokemon meteen trainen! Goedzo!");
			alert("Onderweg kom je een Charizard tegen! Vecht tegen hem!");
			alert("HIJ VERLIEST!");
			alert("Ohneeeee!" + " " + pokemon + " " + "is DOOD!");
			alert("GAME OVER");
		}
		else if(pad == "winkel"){
			alert("Je gaat eten halen voor" + " " + pokemon + "." + " " + "Goedzo!");
			alert("Onderweg kom je een Pigeot tegen! Probeer hem te vangen!");
			alert(pokemon + " " + "heeft op het nippertje gewonnen!");
			alert("GEFELICITEERD! JE HEBT GEWONNEN!");
		}
		else{
			alert("Kies 1 van de 3 paden!!!");
		}
	}
	else if(pokemon == "squirtle"){
		alert("Gefeliciteerd met je aller eerste pokemon!");
		pokeleeftijd = prompt("Hoe oud is je pokemon?");
		alert("je pokemon is" + " " + pokeleeftijd + " " + "jaar oud");
		pad = prompt("Je gaat nu op pad met je aller eerste pokemon! Waar ga je heen? Huis | Trainingscomplex | Winkel");
		pad = pad.toLowerCase();
		if(pad == "huis"){
			alert("Oke je gaat naar huis.");
			alert("Onderweg kom je een Weedle tegen! VANG HEM!");
			alert("Goedzo! Je hebt gewonnen! VICTORY!");
		}
		else if(pad == "trainingscomplex"){
			alert("Je gaat je pokemon meteen trainen! Goedzo!");
			alert("Onderweg kom je een Charizard tegen! Vecht tegen hem!");
			alert("HIJ VERLIEST!");
			alert("Ohneeeee!" + " " + pokemon + " " + "is DOOD!");
			alert("GAME OVER");
		}
		else if(pad == "winkel"){
			alert("Je gaat eten halen voor" + " " + pokemon + "." + " " + "Goedzo!");
			alert("Onderweg kom je een Pigeot tegen! Probeer hem te vangen!");
			alert(pokemon + " " + "heeft op het nippertje gewonnen!");
			alert("GEFELICITEERD! JE HEBT GEWONNEN!");
		}
		else{
			alert("Kies 1 van de 3 paden!!!");
		}
	}
	else if(pokemon == "charmander"){
		alert("Gefeliciteerd met je aller eerste pokemon!");
		pokeleeftijd = prompt("Hoe oud is je pokemon?");
		alert("je pokemon is" + " " + pokeleeftijd + " " + "jaar oud");
		pad = prompt("Je gaat nu op pad met je aller eerste pokemon! Waar ga je heen? Huis | Trainingscomplex | Winkel");
		pad = pad.toLowerCase();
		if(pad == "huis"){
			alert("Oke je gaat naar huis.");
			alert("Onderweg kom je een Weedle tegen! VANG HEM!");
			alert("Goedzo! Je hebt gewonnen! VICTORY!");
		}
		else if(pad == "trainingscomplex"){
			alert("Je gaat je pokemon meteen trainen! Goedzo!");
			alert("Onderweg kom je een Charizard tegen! Vecht tegen hem!");
			alert("HIJ VERLIEST!");
			alert("Ohneeeee!" + " " + pokemon + " " + "is DOOD!");
			alert("GAME OVER");
		}
		else if(pad == "winkel"){
			alert("Je gaat eten halen voor" + " " + pokemon + "." + " " + "Goedzo!");
			alert("Onderweg kom je een Pigeot tegen! Probeer hem te vangen!");
			alert(pokemon + " " + "heeft op het nippertje gewonnen!");
			alert("GEFELICITEERD! JE HEBT GEWONNEN!");
		}
		else{
			alert("Kies 1 van de 3 paden!!!");
		}
	}
	else{
		alert("Kies 1 van de 3 pokemons!");
	}
}
else if(team == "blauw"){
	alert("Je hebt gekozen voor team Blauw!");
	pokemon = prompt("Kies hier uw start Pokemon! Bulbasaur | Squirtle | Charmander.");
	if(pokemon == "bulbasaur"){
		alert("Gefeliciteerd met je aller eerste pokemon!");
		const pokeleeftijd = prompt("Hoe oud is je pokemon?");
		alert("je pokemon is" + " " + pokeleeftijd + " " + "jaar oud");
		pokemon = pokemon.toLowerCase();
		var pad = prompt("Je gaat nu op pad met je aller eerste pokemon! Waar ga je heen? Huis | Trainingscomplex | Winkel");
		pad = pad.toLowerCase();
		if(pad == "huis"){
			alert("Oke je gaat naar huis.");
			alert("Onderweg kom je een Weedle tegen! VANG HEM!");
			alert("Goedzo! Je hebt gewonnen! VICTORY!");
		}
		else if(pad == "trainingscomplex"){
			alert("Je gaat je pokemon meteen trainen! Goedzo!");
			alert("Onderweg kom je een Charizard tegen! Vecht tegen hem!");
			alert("HIJ VERLIEST!");
			alert("Ohneeeee!" + " " + pokemon + " " + "is DOOD!");
			alert("GAME OVER");
		}
		else if(pad == "winkel"){
			alert("Je gaat eten halen voor" + " " + pokemon + "." + " " + "Goedzo!");
			alert("Onderweg kom je een Pigeot tegen! Probeer hem te vangen!");
			alert(pokemon + " " + "heeft op het nippertje gewonnen!");
			alert("GEFELICITEERD! JE HEBT GEWONNEN!");
		}
		else{
			alert("Kies 1 van de 3 paden!!!");
		}
	}
	else if(pokemon == "squirtle"){
		alert("Gefeliciteerd met je aller eerste pokemon!");
		pokeleeftijd = prompt("Hoe oud is je pokemon?");
		alert("je pokemon is" + " " + pokeleeftijd + " " + "jaar oud");
		pad = prompt("Je gaat nu op pad met je aller eerste pokemon! Waar ga je heen? Huis | Trainingscomplex | Winkel");
		pad = pad.toLowerCase();
		if(pad == "huis"){
			alert("Oke je gaat naar huis.");
			alert("Onderweg kom je een Weedle tegen! VANG HEM!");
			alert("Goedzo! Je hebt gewonnen! VICTORY!");
		}
		else if(pad == "trainingscomplex"){
			alert("Je gaat je pokemon meteen trainen! Goedzo!");
			alert("Onderweg kom je een Charizard tegen! Vecht tegen hem!");
			alert("HIJ VERLIEST!");
			alert("Ohneeeee!" + " " + pokemon + " " + "is DOOD!");
			alert("GAME OVER");
		}
		else if(pad == "winkel"){
			alert("Je gaat eten halen voor" + " " + pokemon + "." + " " + "Goedzo!");
			alert("Onderweg kom je een Pigeot tegen! Probeer hem te vangen!");
			alert(pokemon + " " + "heeft op het nippertje gewonnen!");
			alert("GEFELICITEERD! JE HEBT GEWONNEN!");
		}
		else{
			alert("Kies 1 van de 3 paden!!!");
		}
	}
	else if(pokemon == "charmander"){
		alert("Gefeliciteerd met je aller eerste pokemon!");
		pokeleeftijd = prompt("Hoe oud is je pokemon?");
		alert("je pokemon is" + " " + pokeleeftijd + " " + "jaar oud");
		pad = prompt("Je gaat nu op pad met je aller eerste pokemon! Waar ga je heen? Huis | Trainingscomplex | Winkel");
		pad = pad.toLowerCase();
		if(pad == "huis"){
			alert("Oke je gaat naar huis.");
			alert("Onderweg kom je een Weedle tegen! VANG HEM!");
			alert("Goedzo! Je hebt gewonnen! VICTORY!");
		}
		else if(pad == "trainingscomplex"){
			alert("Je gaat je pokemon meteen trainen! Goedzo!");
			alert("Onderweg kom je een Charizard tegen! Vecht tegen hem!");
			alert("HIJ VERLIEST!");
			alert("Ohneeeee!" + " " + pokemon + " " + "is DOOD!");
			alert("GAME OVER");
		}
		else if(pad == "winkel"){
			alert("Je gaat eten halen voor" + " " + pokemon + "." + " " + "Goedzo!");
			alert("Onderweg kom je een Pigeot tegen! Probeer hem te vangen!");
			alert(pokemon + " " + "heeft op het nippertje gewonnen!");
			alert("GEFELICITEERD! JE HEBT GEWONNEN!");
		}
		else{
			alert("Kies 1 van de 3 paden!!!");
		}
	}
	else{
		alert("Kies 1 van de 3 pokemons!");
	}
}
else{
	alert("Kies team Rood, Geel of Blauw!");
}