const btnInserir = document.getElementById('btn-inserir')


const adicionaItem = (e) =>{
	e.preventDefault()

    const listaItens = document.getElementById('lista-itens')
    //construindo a 'div'
	listaItens.appendChild(check) 
	listaItens.appendChild(p) 
	listaItens.appendChild(btnExcluir)
	
	
	/* let item = document.getElementById('item-input').value 
		
		//criando o 'checkbox'
		let check = document.createElement('input')
		check.setAttribute('type','checkbox')
		
		//criando a TAG 'p' com o item
		let p = document.createElement('p')
		p.innerText = `${item}`

		//criando o 'btn' delete
		let btnExcluir = document.createElement('button')
		btnExcluir.innerText = 'Excluir' */
		
		 
}
btnInserir.addEventListener('click', adicionaItem)

