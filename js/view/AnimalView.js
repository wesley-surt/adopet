export class AnimalView {
    constructor(elemente) {
        this._elemente = elemente;
    }

    template(list) {
        return `
            ${list
                .map((animal) => {
                    return `
                    <section class="card" data-card>
                        <div class="conteiner--card">

                            <div class="imagem_do_pet">
                                <img src="${animal.photo}">
                            </div>
                            
                            <div class="conteudo_do_pet">
                                <div class="info_do_pet">

                                    <p class="nome_do_pet">${animal.name}</p>

                                    <ul class="descricao_do_pet">
                                        <li class="idade">${animal.age} ${animal.measure}</li>
                                        <li class="porte">Porte ${animal.size}</li>
                                        <li class="comportamento">${animal.characteristics1} e ${animal.characteristics2}</li>
                                    </ul>
                                </div>

                                <div class="info_da_regiao">
                                    <p class="estado_do_pet" data-estado>${animal.city} (${animal.state})</p>

                                    <a class="icone_chamada--link" href="#">
                                        <img src="../image/ícone mensagem.png">
                                        <p>Falar com responsável</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <span class="animal-id" style="display: none;">${animal._id}</span>
                    </section>
                `;
                })
                .join("")}
        `;
    }

    loadCard(list) {
        this._elemente.innerHTML = this.template(list);
    }
}
