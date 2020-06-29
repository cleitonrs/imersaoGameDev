class Pontuacao {
    constructor() {
        this.pontos = 0
    }

    exibe() {
        textAlign(RIGHT)
        fill('PINK')
        textSize(70)
        text('Pontos: ' + parseInt(this.pontos), width - 30, 70)
    }

    adicionarPonto() {
        this.pontos += .08
    }
}