# Desafio: ler um arquivo encriptado, decriptar e listar o texto decriptado
# O programa será rodado através do arquivo main.py contido neste mesmo diretório

def ler_arquivo(nome_arquivo):
    """Função que faz a leitura do arquivo, recebendo como parâmetro o nome do arquivo .txt a ser descriptado"""
    arquivo = open(nome_arquivo, 'r')
    return arquivo.readlines()

def descriptografar_texto(conteudo):
    """Função para percorrer o conteúdo do arquivo encriptado e substituir os números por letras conforme solicitado"""
    texto_decriptado = ""
    for linha in conteudo:
        texto_decriptado = texto_decriptado + linha.replace("4", "a").replace("3", "e").replace("1", "i").replace("0", "o").replace("7", "u")
    return texto_decriptado

""" 
    Entidade: Unifil EAD
    Nome: Laryssa Stephanie Andrade da Costa Silva
    Data: 10-08-2021 00:40
    Objetivo: Ler arquivo TXT e decriptar seu conteudo
"""