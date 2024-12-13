function soma(a, b){ return a+b; }
function sub(a, b){return a-b; }
function multi(a, b){ return a*b; }
function divi(a, b){ return a/b; }
function mod(a, b){ return (a%b==0); }
const arrOPs = ['+', '-', 'x', '/', 'mod'];

function preencheTabela(tab, funclist){
    var linhas = tab.querySelectorAll('.linha');
    linhas.forEach((item, indice)=>{
        var td = document.createElement('td');
        td.className = 'coluna';
        td.innerText = funclist[indice];
        item.appendChild(td);
        tab.appendChild(item);
    });
    return tab;
}

function criaTabela(lista, table, x, y){
    var div = document.body.querySelector('#container');
    table.className = 'tabela'; 
    lista.forEach((element, indice)=>{
        var tr = document.createElement('tr');
        tr.className = `linha linha-${indice}`;
        var td = document.createElement('td');
        td.className = `coluna coluna-${indice}`;  
        td.innerText = `${x} ${element} ${y}`;
        tr.appendChild(td);// problema está aqui
        table.appendChild(tr);
        div.appendChild(table);
        
    });
    return div;
}
function estilizacao(tabela){
    tabela.style.marginLeft = "100px";
    tabela.style.justifyContent = "center";
    tabela.style.alignItems = "center";
    tabela.style = "border-top: 1px solid black;";
    var linhas = tabela.querySelectorAll('.linha');
    linhas.forEach((valor)=>{
       valor.style.backgroundColor = "orange";
       valor.style.fontStyle = "20px";
    });
}
const btn = document.querySelector('.btn');


// adicionando uma Classe: tagName.className = 'class Name';

btn.addEventListener('click', function(){
    const a = document.getElementById('um').value;
    const b = document.getElementById('dois').value;
    x = Number(a);
    y = Number(b);
    const functionList = [soma(x,y), sub(x,y), multi(x,y), mod(x,y)];
    var table = document.createElement('table'); //Function create table? and others....
    var novaTabela = criaTabela(arrOPs, table, x, y); 
    var tabelacompleta = preencheTabela(novaTabela, functionList);
    var tabelaEstilo = estilizacao(tabelacompleta);
    
});