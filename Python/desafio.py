# Desafio: ler um arquivo encriptado, descriptar e listar o texto descriptado
# O programa será rodado através do arquivo main.py contido neste mesmo diretório

def ler_arquivo(nome_arquivo):
    """Função que faz a leitura do arquivo, recebendo como parâmetro o nome do arquivo .txt a ser descriptado"""
    arquivo = open(nome_arquivo, 'r')
    return arquivo.readlines()

def descriptografar_texto(conteudo):
    """Função para percorrer o conteúdo do arquivo encriptado e substituir os números por letras conforme solicitado"""
    texto_descriptado = ""
    for linha in conteudo:
        texto_descriptado = texto_descriptado + linha.replace("4", "a").replace("3", "e").replace("1", "i").replace("0", "o").replace("7", "u")
    return texto_descriptado
