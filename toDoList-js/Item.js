import { excluiItem } from "./ExcluiItem.js"
export class Item{
    
    constructor(){
        
        const listaItens = document.getElementById('lista-itens')
        const templateItem = document.getElementById('template-item').content
        const divItem = templateItem.querySelector('div')
        const id = Math.ceil(Math.random()*100)
        divItem.setAttribute('id', id)
        let item = document.getElementById('item-input')
        const fragment = document.createDocumentFragment()
        templateItem.querySelector('label').textContent = `${item.value}`
        //templateItem.querySelector('button').dataset.id = id
        const btnExcluir = templateItem.querySelector('button') 
        btnExcluir.dataset.id = id
        
        
        
        const clone = templateItem.cloneNode(true)
        fragment.appendChild(clone)
        return listaItens.appendChild(fragment)
    }

}