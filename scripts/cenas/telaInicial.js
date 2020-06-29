class TelaInicial {
    constructor() {

    }

    draw() {
        this._imagemDeFundo()
        this._texto()
        this._botao()
    }

    _imagemDeFundo() {
        image(imagemTelaInicial, 0, 0, width, height)
    }

    _texto() {
        textFont(fonteTelaInicial)
        textAlign(CENTER)
        textSize(130)
        text('As aventuras de', width / 2, height / 3)
        text('Meskla', width / 2, height / 5 * 3)
    }

    _botao() {
        botaoGerenciador.y = height / 7 * 5
        botaoGerenciador.draw()
    }
}