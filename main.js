
var nome = "Estudante";
alert("Bem vindo "  +  nome);


function clicou(){
    document.getElementById("agradecimento")
    console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar");
}

function redirecionar(){
    window.open("https://github.com/Luiz-code-dev/aula_JavaScript");
    //window.location.href = "https://github.com/Luiz-code-dev/aula_JavaScript";
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse";
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("Pagina Carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value)
}

/*/array 
var lista = ["maça", "pêra", "uva"];
console.log(lista);
console.log(lista.toString());
console.log(lista.join("  - ")) 
*/

/*
var frutas = [{nome: "maça", cor:"vermelha"}, {nome:"uva", cor:"roxa"}]
console.log(frutas);*/

/*
var idade = prompt("Qual sua idade");
if (idade > 18){
    alert("maior de idade");
}else{
    alert("menor de idade");
}; 
*/

//laço de repetição
/*
var count = 1;
while(count <= 5){
    console.log(count);
    count++; //ou pode colocar count = count+1
};
*/

//laço de repetição
/*
var count;
for(count=0; count <=5; count++){
    alert(count);
};
*/

//datas e horas
/*
var d = new Date();
alert(d.getDay());
*/

/*
function soma(n1,n2){
    return n1 + n2;
}
*/

/*
function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
}

alert(soma(5,10));
alert(setReplace("Vai Japão", "Japão", "Brasil"));
*/

/*
var idade =0;

function validaIdade(idade){
    
    if (idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}

var idade = prompt("Qual sua idade");
validaIdade(idade)
console.log(validaIdade(idade));
*/