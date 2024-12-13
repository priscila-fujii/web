var table = document.createElement('table');
const lista = ["a", "b", "c", "d"];
const thead = document.createElement('thead');
const tbody = document.createElement('tbody');
table.appendChild(thead);

lista.forEach((valor, indice)=>{
    var tr = document.createElement('tr');
    tr.className =`linha linha-${indice+1}`;
    tbody.appendChild(tr);
    table.appendChild(tbody);
});
console.log(table);
/*
//Objeto do tipo array ou um array de Objetos?
const x=3;
const y=4;
function soma(x, y){ return x + y; }
function subi(x, y){ return x - y; }
function mult(x, y){ return x * y; }
const arr = [
    {
        soma: soma(x, y),
        opr: 'somatoria'
    },
    {
        sub: subi(x, y),
        opr: 'subitracao'
    },
    {
        multi: mult(x, y),
        opr: 'multiplicacao'
    }
];
for(let [chave, valor] of Object.entries(arr)){
    console.log(valor.opr);
}
*/