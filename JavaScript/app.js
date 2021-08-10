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