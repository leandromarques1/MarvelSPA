
function goXMEN (elemento)
{	
	let logoAleatorio = document.getElementById('divAleatorio');
	let logoXMEN = document.getElementById('divXMEN');
	let logoAvengers = document.getElementById('divAvengers');
	let logoGuardians = document.getElementById('divGuardians');

	if (logoXMEN.style.display === 'none')
	{
		logoAleatorio.style.display = 'none';
		logoXMEN.style.display = 'block';
		logoAvengers.style.display = 'none';
		logoGuardians.style.display = 'none';
	}
	
}

function goAvengers (elemento)
{
	let logoAleatorio = document.getElementById('divAleatorio');
	let logoXMEN = document.getElementById('divXMEN');
	let logoAvengers = document.getElementById('divAvengers');
	let logoGuardians = document.getElementById('divGuardians');

	if (logoAvengers.style.display === 'none')
	{
		logoAleatorio.style.display = 'none';
		logoXMEN.style.display = 'none';
		logoAvengers.style.display = 'block';
		logoGuardians.style.display = 'none';
	}
	
}

function goGuardians (elemento)
{
	let logoAleatorio = document.getElementById('divAleatorio');
	let logoXMEN = document.getElementById('divXMEN');
	let logoAvengers = document.getElementById('divAvengers');
	let logoGuardians = document.getElementById('divGuardians');

	if (logoGuardians.style.display === 'none')
	{
		logoAleatorio.style.display = 'none';
		logoXMEN.style.display = 'none';
		logoAvengers.style.display = 'none';
		logoGuardians.style.display = 'block';
	}
	
}
	