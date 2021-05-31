/*Marvel's Teams*/
const XMEN = {
			render: () => { 
				const urlXMEN = 'https://gateway.marvel.com:443/v1/public/characters?name=X-Men&ts=1622418622&apikey=422749bb52e2f36fa725581966133fe0&hash=2898de91e5bd3b57fcf7d8ed209681e5';

				fetch(urlXMEN)
					.then((response) => {
					return response.json();
				})
					.then((jsonParsed => {
					const divXMEN = document.querySelector('#xmen');

					
					jsonParsed.data.results.forEach(element => {
						const imagemXMEN = element.thumbnail.path + '.' + element.thumbnail.extension ;
						const nomeXMEN = element.name;
						const descricaoXMEN = element.description;

						let imgDiv = document.getElementById('imgXMEN')
						imgDiv.src = imagemXMEN;

						let nameDiv = document.getElementById('nameXMEN')
						nameDiv.textContent = nomeXMEN;

						let descriptionDiv = document.getElementById('descriptionXMEN')
						descriptionDiv.textContent = descricaoXMEN;
						
						/*createDivXMEN (imagemXMEN, nomeXMEN, divXMEN);*/
					});
								
					console.log(jsonParsed);
					
				}))

				/*function createDivXMEN(imgDiv, nameDiv, divToAppend)
				{
					const divPai = document.createElement('div');
					const divFilho = document.createElement('div');
					const textName = document.createElement('text');
					const imagem = document.createElement('img');

					const par = document.getElementById('paragrafo');
					par.innerHTML = '<h1>Eita!</h1>';

					textName.textContent = nameDiv;
					imagem.src = imgDiv;

					divFilho.appendChild(imagem);
					divFilho.appendChild(textName);
					divPai.appendChild(divFilho);
					divToAppend.appendChild(divPai);

					divPai.classList.add("personagem");
				}*/
			}
};
XMEN.render();

const Avengers = {
			render: () => { 
				const urlAvengers = 'https://gateway.marvel.com:443/v1/public/characters?name=Avengers&ts=1622418622&apikey=422749bb52e2f36fa725581966133fe0&hash=2898de91e5bd3b57fcf7d8ed209681e5';

				fetch(urlAvengers)
					.then((response) => {
					return response.json();
				})
					.then((jsonParsed => {
					const divAvengers = document.querySelector('#avengers');

					
					jsonParsed.data.results.forEach(element => {
						const imagemAvengers = element.thumbnail.path + '.' + element.thumbnail.extension ;
						const nomeAvengers = element.name;
						const descricaoAvengers = element.description;

						let imgDiv = document.getElementById('imgAvengers')
						imgDiv.src = imagemAvengers;

						let nameDiv = document.getElementById('nameAvengers')
						nameDiv.textContent = nomeAvengers;

						let descriptionDiv = document.getElementById('descriptionAvengers')
						descriptionDiv.textContent = descricaoAvengers;


						/*createDivAvengers(imagemAvengers, nomeAvengers, divAvengers);*/
					});
								
					console.log(jsonParsed);
					
				}))

				function createDivAvengers(imgDiv, nameDiv, divToAppend)
				{
					const divPai = document.createElement('div');
					const divFilho = document.createElement('div');
					const textName = document.createElement('text');
					const imagem = document.createElement('img');

					

					textName.textContent = nameDiv;
					imagem.src = imgDiv;

					divFilho.appendChild(imagem);
					divFilho.appendChild(textName);
					divPai.appendChild(divFilho);
					divToAppend.appendChild(divPai);

					divPai.classList.add("personagem");
				}
			}
};
Avengers.render();
		
const Guardians = {
			render: () => { 
				const urlGuardians = 'https://gateway.marvel.com:443/v1/public/characters?name=Guardians%20of%20the%20Galaxy&ts=1622418622&apikey=422749bb52e2f36fa725581966133fe0&hash=2898de91e5bd3b57fcf7d8ed209681e5';

				fetch(urlGuardians)
					.then((response) => {
					return response.json();
				})
					.then((jsonParsed => {
					const divGuardians = document.querySelector('#guardians');

					
					jsonParsed.data.results.forEach(element => {
						const imagemGuardians = element.thumbnail.path + '.' + element.thumbnail.extension ;
						const nomeGuardians = element.name;
						const descricaoGuardians = element.description;

						let imgDiv = document.getElementById('imgGuardians')
						imgDiv.src = imagemGuardians;

						let nameDiv = document.getElementById('nameGuardians')
						nameDiv.textContent = nomeGuardians;

						let descriptionDiv = document.getElementById('descriptionGuardians')
						descriptionDiv.textContent = descricaoGuardians;


						/*createDivEternals(imagemEternals, nomeEternals, divEternals);*/
					});
								
					console.log(jsonParsed);
					
				}))

				/*function createDivEternals(imgDiv, nameDiv, divToAppend)
				{
					const divPai = document.createElement('div');
					const divFilho = document.createElement('div');
					const textName = document.createElement('text');
					const imagem = document.createElement('img');

					

					textName.textContent = nameDiv;
					imagem.src = imgDiv;

					divFilho.appendChild(imagem);
					divFilho.appendChild(textName);
					divPai.appendChild(divFilho);
					divToAppend.appendChild(divPai);

					divPai.classList.add("personagem");
				}*/
			}
};
Guardians.render();

/*========================*/
/*Avenger's Heroes*/
const IronMan = {
			render: () => { 
				const urlIronMan = 'https://gateway.marvel.com:443/v1/public/characters?name=Iron%20Man&ts=1622418622&apikey=422749bb52e2f36fa725581966133fe0&hash=2898de91e5bd3b57fcf7d8ed209681e5';

				fetch(urlIronMan)
					.then((response) => {
					return response.json();
				})
					.then((jsonParsed => {
					const divIronMan = document.querySelector('#IronMan');

					
					jsonParsed.data.results.forEach(element => {
						const imagemIronMan = element.thumbnail.path + '.' + element.thumbnail.extension ;
						const nomeIronMan = element.name;
						const descricaoIronMan = element.description;

						let imgDiv = document.getElementById('imgIronMan')
						imgDiv.src = imagemIronMan;

						let nameDiv = document.getElementById('nameIronMan')
						nameDiv.textContent = nomeIronMan;

						let descriptionDiv = document.getElementById('descriptionIronMan')
						descriptionDiv.textContent = descricaoIronMan; 
					});
					console.log(jsonParsed);
				})) 
			}
};
IronMan.render();

const CapAmerica = {
			render: () => { 
				const urlCapAmerica = 'https://gateway.marvel.com:443/v1/public/characters?name=Captain%20America&ts=1622418622&apikey=422749bb52e2f36fa725581966133fe0&hash=2898de91e5bd3b57fcf7d8ed209681e5';

				fetch(urlCapAmerica)
					.then((response) => {
					return response.json();
				})
					.then((jsonParsed => {
					const divCapAmerica = document.querySelector('#CapAmerica');

					
					jsonParsed.data.results.forEach(element => {
						const imagemCapAmerica = element.thumbnail.path + '.' + element.thumbnail.extension ;
						const nomeCapAmerica = element.name;
						const descricaoCapAmerica = element.description;

						let imgDiv = document.getElementById('imgCapAmerica')
						imgDiv.src = imagemCapAmerica;

						let nameDiv = document.getElementById('nameCapAmerica')
						nameDiv.textContent = nomeCapAmerica;

						let descriptionDiv = document.getElementById('descriptionCapAmerica')
						descriptionDiv.textContent = descricaoCapAmerica; 
					});
					console.log(jsonParsed);
				})) 
			}
};
CapAmerica.render();

const Thor = {
			render: () => { 
				const urlThor = 'https://gateway.marvel.com:443/v1/public/characters?name=Thor&ts=1622418622&apikey=422749bb52e2f36fa725581966133fe0&hash=2898de91e5bd3b57fcf7d8ed209681e5';

				fetch(urlThor)
					.then((response) => {
					return response.json();
				})
					.then((jsonParsed => {
					const divThor = document.querySelector('#Thor');

					
					jsonParsed.data.results.forEach(element => {
						const imagemThor = element.thumbnail.path + '.' + element.thumbnail.extension ;
						const nomeThor = element.name;
						const descricaoThor = element.description;

						let imgDiv = document.getElementById('imgThor')
						imgDiv.src = imagemThor;

						let nameDiv = document.getElementById('nameThor')
						nameDiv.textContent = nomeThor;

						let descriptionDiv = document.getElementById('descriptionThor')
						descriptionDiv.textContent = descricaoThor; 
					});
					console.log(jsonParsed);
				})) 
			}
};
Thor.render();	

/*========================*/
/*X-Men's Heroes*/
const Wolverine = {
			render: () => { 
				const urlWolverine = 'https://gateway.marvel.com:443/v1/public/characters?name=Wolverine&ts=1622418622&apikey=422749bb52e2f36fa725581966133fe0&hash=2898de91e5bd3b57fcf7d8ed209681e5';

				fetch(urlWolverine)
					.then((response) => {
					return response.json();
				})
					.then((jsonParsed => {
					const divWolverine = document.querySelector('#Wolverine');

					
					jsonParsed.data.results.forEach(element => {
						const imagemWolverine = element.thumbnail.path + '.' + element.thumbnail.extension ;
						const nomeWolverine = element.name;
						const descricaoWolverine = element.description;

						let imgDiv = document.getElementById('imgWolverine')
						imgDiv.src = imagemWolverine;

						let nameDiv = document.getElementById('nameWolverine')
						nameDiv.textContent = nomeWolverine;

						let descriptionDiv = document.getElementById('descriptionWolverine')
						descriptionDiv.textContent = descricaoWolverine; 
					});
					console.log(jsonParsed);
				})) 
			}
};
Wolverine.render();

const Rogue = {
			render: () => { 
				const urlRogue = 'https://gateway.marvel.com:443/v1/public/characters?name=Rogue&ts=1622418622&apikey=422749bb52e2f36fa725581966133fe0&hash=2898de91e5bd3b57fcf7d8ed209681e5';

				fetch(urlRogue)
					.then((response) => {
					return response.json();
				})
					.then((jsonParsed => {
					const divRogue = document.querySelector('#JeanGrey');

					
					jsonParsed.data.results.forEach(element => {
						const imagemRogue = element.thumbnail.path + '.' + element.thumbnail.extension ;
						const nomeRogue = element.name;
						const descricaoRogue = element.description;

						let imgDiv = document.getElementById('imgRogue')
						imgDiv.src = imagemRogue;

						let nameDiv = document.getElementById('nameRogue')
						nameDiv.textContent = nomeRogue;

						let descriptionDiv = document.getElementById('descriptionRogue')
						descriptionDiv.textContent = descricaoRogue; 
					});
					console.log(jsonParsed);
				})) 
			}
};
Rogue.render();

const Cyclops = {
			render: () => { 
				const urlCyclops = 'https://gateway.marvel.com:443/v1/public/characters?name=Cyclops&ts=1622418622&apikey=422749bb52e2f36fa725581966133fe0&hash=2898de91e5bd3b57fcf7d8ed209681e5';

				fetch(urlCyclops)
					.then((response) => {
					return response.json();
				})
					.then((jsonParsed => {
					const divCyclops = document.querySelector('#Cyclops');

					
					jsonParsed.data.results.forEach(element => {
						const imagemCyclops = element.thumbnail.path + '.' + element.thumbnail.extension ;
						const nomeCyclops = element.name;
						const descricaoCyclops = element.description;

						let imgDiv = document.getElementById('imgCyclops')
						imgDiv.src = imagemCyclops;

						let nameDiv = document.getElementById('nameCyclops')
						nameDiv.textContent = nomeCyclops;

						let descriptionDiv = document.getElementById('descriptionCyclops')
						descriptionDiv.textContent = descricaoCyclops; 
					});
					console.log(jsonParsed);
				})) 
			}
};
Cyclops.render();

/*========================*/
/*Guardians's Heroes*/
const Drax = {
			render: () => { 
				const urlDrax = 'https://gateway.marvel.com:443/v1/public/characters?name=Drax&ts=1622418622&apikey=422749bb52e2f36fa725581966133fe0&hash=2898de91e5bd3b57fcf7d8ed209681e5';

				fetch(urlDrax)
					.then((response) => {
					return response.json();
				})
					.then((jsonParsed => {
					const divDrax = document.querySelector('#Drax');

					
					jsonParsed.data.results.forEach(element => {
						const imagemDrax = element.thumbnail.path + '.' + element.thumbnail.extension ;
						const nomeDrax = element.name;
						const descricaoDrax = element.description;

						let imgDiv = document.getElementById('imgDrax')
						imgDiv.src = imagemDrax;

						let nameDiv = document.getElementById('nameDrax')
						nameDiv.textContent = nomeDrax;

						let descriptionDiv = document.getElementById('descriptionDrax')
						descriptionDiv.textContent = descricaoDrax; 
					});
					console.log(jsonParsed);
				})) 
			}
};
Drax.render();

const Gamora = {
			render: () => { 
				const urlGamora = 'https://gateway.marvel.com:443/v1/public/characters?name=Gamora&ts=1622418622&apikey=422749bb52e2f36fa725581966133fe0&hash=2898de91e5bd3b57fcf7d8ed209681e5';

				fetch(urlGamora)
					.then((response) => {
					return response.json();
				})
					.then((jsonParsed => {
					const divGamora = document.querySelector('#Gamora');

					
					jsonParsed.data.results.forEach(element => {
						const imagemGamora = element.thumbnail.path + '.' + element.thumbnail.extension ;
						const nomeGamora = element.name;
						const descricaoGamora = element.description;

						let imgDiv = document.getElementById('imgGamora')
						imgDiv.src = imagemGamora;

						let nameDiv = document.getElementById('nameGamora')
						nameDiv.textContent = nomeGamora;

						let descriptionDiv = document.getElementById('descriptionGamora')
						descriptionDiv.textContent = descricaoGamora; 
					});
					console.log(jsonParsed);
				})) 
			}
};
Gamora.render();

const Groot = {
			render: () => { 
				const urlGroot = 'https://gateway.marvel.com:443/v1/public/characters?name=Groot&ts=1622418622&apikey=422749bb52e2f36fa725581966133fe0&hash=2898de91e5bd3b57fcf7d8ed209681e5';

				fetch(urlGroot)
					.then((response) => {
					return response.json();
				})
					.then((jsonParsed => {
					const divGroot = document.querySelector('#Groot');

					
					jsonParsed.data.results.forEach(element => {
						const imagemGroot = element.thumbnail.path + '.' + element.thumbnail.extension ;
						const nomeGroot = element.name;
						const descricaoGroot = element.description;

						let imgDiv = document.getElementById('imgGroot')
						imgDiv.src = imagemGroot;

						let nameDiv = document.getElementById('nameGroot')
						nameDiv.textContent = nomeGroot;

						let descriptionDiv = document.getElementById('descriptionGroot')
						descriptionDiv.textContent = descricaoGroot; 
					});
					console.log(jsonParsed);
				})) 
			}
};
Groot.render();