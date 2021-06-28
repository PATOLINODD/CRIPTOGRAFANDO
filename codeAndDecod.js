	let qual   	 	= document.getElementById('qual?');
	const btn    		= document.querySelector('button');
	const checar  	 	= document.querySelector('#checar');
	const dcrip  	 	= document.querySelector('#dCodf');
	const crip   	 	= document.querySelector('#codf');
	const aAlterar  	= document.querySelector('#aCodificar');
	const mostra    	= document.querySelector('#mostra');
	const numero		= document.querySelector('#numero');
	const show		= document.querySelector('#show');
	const mensagem		= document.querySelector('#mensagem');
	const body		= document.querySelector('#body');
	let bordas 		= document.querySelectorAll('.borda');
		
		function base64(str, deslocamento){
			
		}

		qual.onchange = function(){
				if(qual.value === 'Cesar'){
					document.querySelector('#mensagem').style.backgroundColor 	= 'white';
					document.querySelector('#mensagem').style.border 		= '1px solid gray';
					document.querySelector('#moeda').style.backgroundImage 		= "url('imagens/cesar.jpg')";
					document.querySelector('body').style.backgroundImage 		= "url('imagens/criptografia.jpg')";
					document.querySelector('#moeda').style.color			= 'black';
					for(let i of bordas){
						i.style.borderColor 	= 'gray';
						i.style.color 		= 'black';
						i.style.backgroundColor = 'white';
					}
					show.style.display = 'flex';
				}
				else{
					document.querySelector('#mensagem').style.backgroundColor 	= 'black';
					document.querySelector('body').style.backgroundImage 		= "url('imagens/base64.jpg')";
					document.querySelector('#moeda').style.backgroundImage 		= "none";
					document.querySelector('#moeda').style.backgroundColor 		= '#00FF00';
					document.querySelector('#moeda').style.color 			= '#00FF00';
						for(let i of bordas){
							i.style.borderColor 	= '#00FF00';
							i.style.backgroundColor = '#000000';
							i.style.color 		= '#00FF00';
						}
					show.style.display = 'none';
				}
		}
		
		function cifraDeCesar(str, deslocamento){
			let newDesloc;
				if(deslocamento < 0){
					newDesloc = 26 + parseInt(deslocamento);
				}else{
					newDesloc = parseInt(deslocamento);
				}
			let newStr = [];
			let newCode;
			let cripto;
			for(i = 0; i < checar.length; i++){
			if(checar[i].value === 'criptografando' && crip.checked == true){
				console.log('criptografando');
				for(let i of str.split('')){
					newStr.push(i.charCodeAt());
					newCode = newStr.map( value => {
						if(value >= 97 && value <= 122){
							return ((value - 97 + newDesloc) % 26) + 97;
						}else if(value >= 65 && value <= 90){
							return ((value - 65 + newDesloc) % 26) + 65;
						}else{
							return value;
						}
					});
					cripto = newCode.map( value => {
						return String.fromCharCode(value);
					}).join('');
				}
			}else if(checar[i].value === 'descriptografando' && dcrip.checked == true){
				mensagem.style.display = 'none';
				console.log('descriptografando');
				for(let i of str.split('')){
					newStr.push(i.charCodeAt());
					newCode = newStr.map( value => {
						if(value >= 97 && value <= 122){
							return ((value - 97 + (26 - newDesloc )) % 26) + 97;
						}else if(value >= 65 && value <= 90){
							return ((value - 65 + (26 - newDesloc)) % 26) + 65;
						}else{
							return value;
						}
					});
					cripto = newCode.map( value => {
						return String.fromCharCode(value);
					}).join('');
				}
			}
			}
			mostra.innerHTML = cripto;
		}
		
		function base64(str){
			let newStr;
				for(i = 0; i < checar.length; i++){
					if(checar[i].value === 'criptografando' && crip.checked == true){
						newStr = window.btoa(str);
					}else if(checar[i].value === 'descriptografando' && dcrip.checked == true){
						newStr = window.atob(str);
					}
				}
			mostra.innerHTML = newStr;
		}
	
	
	btn.onclick = (event) => {
		event.preventDefault();
		for(let i = 0; i < checar.length; i++){
			if(qual.value == 'Cesar'){
				if(crip.checked == false && dcrip.checked == false){
					mensagem.style.display = 'flex';
				}else{
					cifraDeCesar(aAlterar.value, numero.value);
					mensagem.style.display = 'none';
				}
			}else if(qual.value == 'Base64'){
				if(crip.checked == false && dcrip.checked == false){
					mensagem.style.display = 'flex';
				}else{
					base64(aAlterar.value);
					mensagem.style.display = 'none';
				}
			}
		}
	}