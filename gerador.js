function soma(a, b){ return a+b; }
function sub(a, b){return a-b; }
function multi(a, b){ return a*b; }
function mod(a, b){ return (a%b==0); }

function criaTabela(lista, d){
    var table = document.createElement('table'); //Function create table? and others....
    table.className = 'tabela';
    
    lista.forEach(element => {
        var tr = document.createElement('tr');
        tr.className = 'linha';
        var td = document.createElement('td');
        td.className = 'coluna';

        td.innerText = element;
        tr.appendChild(td);// problema está aqui
        table.appendChild(tr);
        d.appendChild(table);
    });
    return d;
}
function outraTabela(lista, d){
    var table = document.createElement('table'); //Function create table? and others....
    table.className = 'tabela';
    
    lista.forEach(element => {
        var tr = document.createElement('tr');
        tr.className = 'linha';
        var td = document.createElement('td');
        td.className = 'coluna';

        td.innerText = element;
        tr.appendChild(td);// problema está aqui
        table.appendChild(tr);
        d.appendChild(table);
    });
    return d;
}
function estilizacao(tabela){
    console.log(tabela);
}
const btn = document.querySelector('.btn');


// adicionando uma Classe: tagName.className = 'class Name';

btn.addEventListener('click', function(){
    const a = document.getElementById('um').value;
    const b = document.getElementById('dois').value;
    const div = document.body.querySelector('#container');
    x = Number(a);
    y = Number(b);
    const functionList = [soma(x,y), sub(x,y), multi(x,y), mod(x,y)];

    var novaTabela = criaTabela(functionList, div);
    //estilizacao(novaTabela);
    var teste = outraTabela(functionList, div);
    
});