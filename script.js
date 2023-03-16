var botao = document.querySelector('input#b-contar');

botao.addEventListener('click', contar);

function contar() {
    var txt = document.querySelector('div#txt');
    //'limpa' a variável para não acumular os valores na tela
    txt.innerHTML = "";

    var inicioN = document.querySelector('input#start');
    var fimN = document.querySelector('input#end');
    var passoN = document.querySelector('input#step');

    //pegando os valores das variáveis e transformando elas em numero
    var inicio = Number(inicioN.value);
    var fim = Number(fimN.value);
    var passo = Number(passoN.value);

    var emojis = document.getElementsByName('emojis');

    if (emojis[0].checked || emojis[1].checked || emojis[2].checked || emojis[3].checked) {
        //verificando se todos os campos estão preenchidos e são válidos
        if ((inicioN.value).length == 0 || (fimN.value).length == 0 || (passoN.value).length == 0) {

            alert("Preencha todos os campos!!!");

        } else if (inicio >= fim) {

            alert("Início/fim inválido. Tente novamente!");

        } else if (passo > fim) {

            alert("Passo/fim inválido. Tente novamente!");

        } else {

            if (emojis[0].checked){

                emojis = `\u{1F331}`;
        
            } else if (emojis[1].checked) {
        
                emojis = `\u{1F31F}`;
        
            } else if (emojis[2].checked) {
        
                emojis = `\u{1F449}`
        
            } else {
                emojis = `\u{1F496}`;
            }

            //repetição que imprime os valores na tela
            for (var i = inicio; i <= fim; i += passo) {
                txt.innerHTML += `${emojis} ${i}`;
            }
        
            txt.innerHTML += `\u{1F3C1}`;
            txt.style.marginTop = "20px";
        }
    } else {
        alert("Selecione um emoji.");
    }
}