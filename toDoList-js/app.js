import { Item } from "./Item.js"
const btnInserir = document.getElementById('btn-inserir')

const adicionaItem = (e) =>{
    e.preventDefault()
    const item = new Item() 
    document.createElement(`item`)
}
 



btnInserir.addEventListener('click', adicionaItem)

