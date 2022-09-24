const nascimento = {
    dia: 1,
    mes: 10,
    ano: 1992,
    exibir: function() {
        return `${this.dia}/${this.mes}/${this.ano}`;
    }
};

nascimento.dia = 21

console.log(nascimento.mes);
console.log(nascimento.exibir());