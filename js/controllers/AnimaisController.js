class AnimaisController{

    constructor(){
        this._filtro = document.querySelector('[data-campoFiltro]');
        this._cards = document.querySelectorAll('[data-card]');
    }

    filtra(){
        let estadoSelecionado = this._filtro.options[this._filtro.selectedIndex].text;

        if (estadoSelecionado == 'Mostrar Todos') {
            this._cards.forEach(card => card.classList.remove('ocultar_card'));
        }

        else{
            this._cards.forEach(card => {
                let estado = card.querySelector('[data-estado]').textContent;
                
                if (estadoSelecionado == estado) {
                    card.classList.remove('ocultar_card');
                }
                else{
                    card.classList.add('ocultar_card');
                }
            });
        }
    }
}