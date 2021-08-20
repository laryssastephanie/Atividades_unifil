from desafio import *  # importando todas as funções contidas no arquivo desafio.py

# chamando a função ler_arquivo, que faz a leitura do arquivo passado como parâmetro
conteudo = ler_arquivo('Frase_Encriptada.TXT') 

# criando um novo arquivo 'resultado.txt' no modo escrita (w)
arquivo_resultado = open('resultado.TXT', 'w')

# escrevendo o resultado do texto decriptado no arquivo 'resultado.txt'
arquivo_resultado.write(descriptografar_texto(conteudo))

# fechando o arquivo 'resultado.txt'
arquivo_resultado.close()

""" 
    Entidade: Unifil EAD
    Nome: Laryssa Stephanie Andrade da Costa Silva
    Data: 10-08-2021 00:40
    Objetivo: Ler arquivo TXT e decriptar seu conteudo
"""