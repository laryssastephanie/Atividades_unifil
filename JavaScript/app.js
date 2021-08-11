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
    reader.onload = function(){ // evento onload será chamado quando o content for lido. 
      var text = reader.result; // já terá o conteúdo como um texto
      var node = document.getElementById('output'); // identifica a div output (html)
      node.innerText = text; // coloca o conteúdo do arquivo lido na div output
      var resultado = document.getElementById('resultado'); // identifica a div resultado (html)
      resultado.innerText = descriptar(text); // imprime o texto decriptado chamando a função descriptar()
    };
    reader.readAsText(input.files[0]); // primeiro arquivo, indice 0. Ler como texto.
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