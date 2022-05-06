const btnExcluir = document.querySelectorAll('.btn-excluir')



export const excluiItem = (e) =>{
    e.preventDefault()
    console.log('click')
    const deletButton = e.target.parentElemt
    deletButton.remove()

    return deletButton

}

btnExcluir.addEventListener('click', excluiItem(e))

