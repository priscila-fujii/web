function soma(x, y){ return x + y; }
function subi(x, y){ return x - y; }
function mult(x, y){ return x * y; }

/*for(let [chave, valor] of Object.entries(arr)){
    console.log(valor.opr);
}*/
function geraTabela(arr){
    var table = document.createElement('table');
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');
    table.appendChild(thead);

    arr.forEach((valor, indice)=>{
        var tr = document.createElement('tr');
        var td = document.createElement('td');
        td.innerText = `${valor.opr}`;
        td.classList = `coluna`;
        tr.className =`linha linha-${indice+1}`;
        tr.appendChild(td);
        tbody.appendChild(tr);
        table.appendChild(tbody);
    });
    return table;
}
/*
function preencheTabela(arr){
    var tab = geraTabela(arr);
    var linhas = tab.querySelectorAll('tr');
    
    linhas.forEach((valor, indice)=>{

        console.log(valor, indice);
    });
}
*/
const btn = document.querySelector('.btn');
const div = document.getElementById('container');
btn.addEventListener('click', function(){
    const arr = [
        {soma: soma(x, y), opr: 'somatoria'},
        {sub: subi(x, y),opr: 'subitracao'},
        {multi: mult(x, y),opr: 'multiplicacao'}
    ];
    const a = document.getElementById('um').value;
    const b = document.getElementById('dois').value;
    var x = Number(a);
    var y = Number(b);
    var newTab = geraTabela(arr);
    div.appendChild(newTab);
});