/* ============================================*/
function soma(x, y){ return x + y; }
function subi(x, y){ return x - y; }
function mult(x, y){ return x * y; }
function divi(x, y){ return x / y; }
function resto(x, y){
    var str = '';
    if(x%2==0){
        str = `2`;
    }else if(x%3==0){
        str = `3`;
    }
    if(y%2==0){
        str += `\t2`;
    }else if(y%3==0){
        str += `\t3`;
    }
    return str;
}   

const btn = document.querySelector('#btn');
const div = document.getElementById('container');
var result = [];

function gerarTabela(arr){
    var table = document.createElement('table');
    arr.forEach((elt, ind) => {
        var tr = document.createElement('tr');
        var td = document.createElement('td');
        td.innerText = `${elt.opr}`;
        td.classList = `coluna`;
        tr.className = `linha linha-${ind+1}`;
        tr.appendChild(td);
        table.appendChild(tr);
    });
    return table;
}
function preecheTabela(tab, result){
    var rows = tab.querySelectorAll('tr');
    rows.forEach((row, ind)=> {
        var td = document.createElement('td');
        td.innerText = `${result[ind]}`;
        td.className = `coluna col-result`;
        row.appendChild(td);
        tab.appendChild(row);
    });
    
    return tab;
}
/* ==================================================================*/
btn.addEventListener('click', ()=>{
    const a = Number(document.getElementById('um').value);
    const b = Number(document.getElementById('dois').value);
    const arr = [
        {opr:'multiplicação', func: mult(a, b)},
        {opr:'subitração', func: subi(a, b)},
        {opr:'somatória', func: soma(a, b)},
        {opr:'divisão', func: divi(a, b)},
        {opr:'resto', func: resto(a, b)}
    ];
    for(let [chave, valor] of Object.entries(arr)){
        result[chave] = valor.func;
    }
   var table = gerarTabela(arr);
   var novo = preecheTabela(table, result);
   novo.classList = 'tabela';
   div.appendChild(novo);
});