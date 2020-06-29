class Personagem extends Animacao {
    constructor(matriz, imagem, x, variacaoY, largura, altura,
        larguraSprite, alturaSprite) {
        super(matriz, imagem, x, variacaoY, largura, altura,
            larguraSprite, alturaSprite)
        
        this.variacaoY = variacaoY
        this.yInicial = height - this.altura - this.variacaoY
        this.y = this.yInicial
        this.pulo = 0
        this.gravidade = 3
        this.alturaDoPulo = -30
        this.pulos = 0
        this.invencivel = false
    }

    pula() {
        if (this.pulos < 2) {
            this.pulo = this.alturaDoPulo
            this.pulos ++
            somDoPulo.play()
        }
    }

    aplicaGravidade() {
        this.y += this.pulo
        this.pulo += this.gravidade

        if(this.y > this.yInicial) {
            this.y = this.yInicial
            this.pulos = 0
        }
    }

    tornarInvencivel() {
        this.invencivel = true
        setTimeout(() => {
            this.invencivel = false
        }, 1000)
    }

    colisao(inimigo) {
        if (this.invencivel) {
            return false
        }
        const precisao = .7
        const colide = collideRectRect(
            this.x,
            this.y,
            this.largura * precisao,
            this.altura * precisao,
            inimigo.x,
            inimigo.y,
            inimigo.largura * precisao,
            inimigo.altura * precisao
            )

            return colide
    }
}