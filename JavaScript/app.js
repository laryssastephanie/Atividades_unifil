/* 
Código com funções para leitura do arquivo encriptado
e função para decriptar o mesmo através de uma entrada 
e saída executada no arquivo index.html contido neste diretório.

Abrir o arquivo index.html em um navegador, adicionar o arquivo
encriptado no input para ver o texto decriptado na saída.
*/

var lerArquivo = function(arquivo) {
    var input = arquivo.target;

    var reader = new FileReader();
    reader.onload = function(){
      var text = reader.result;
      var node = document.getElementById('output');
      node.innerText = text;
      var resultado = document.getElementById('resultado');
      resultado.innerText = descriptar(text);
    };
    reader.readAsText(input.files[0]);
};

function descriptar(texto) {
    return texto.replaceAll('4', 'a').replaceAll('3', 'e').replaceAll('1', 'i').replaceAll('0', 'o').replaceAll('7', 'u');
}

/*  
    Entidade: Unifil EAD
    Nome: Laryssa Stephanie Andrade da Costa Silva
    Data: 10-08-2021 00:40
    Objetivo: Ler arquivo TXT e decriptar seu conteudo
*/