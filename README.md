# Bíblia API

API de consulta há Bíblia Sagrada. (Hospedagem no Firebase)
Projeto criado para estudos, os resultados são em formato JSON
Todas as versões da Bíblia foram obtidas no GitHub do [Thiago Bodruk][https://github.com/thiagobodruk].

## Get

[Link da API][http://us-central1-bibleapi-kll.cloudfunctions.net/bible]
[Link Genesis 1:1 (pt-br, NVI)][https://us-central1-bibleapi-kll.cloudfunctions.net/bible?book=genesis&chapter=1&verse=1]

Para utilizar a API utilizei a seguinte formatação da URL:

https://.../bible?language=pt-br&version=NVI&book=genesis&chapter=1&verse=1

Parametros:
    - language  = pt-br     (Idioma)
    - version   = NVI       (Versão)
    - book      = Genesis   (Livro)
    - chapter   = 1         (Captulo)
    - verse     = 1         (Versos)

__Obs:__    - Caso não passa o idioma e versão, a api retonar como padrão em português na versão NVI.
            - Para evitar problemas no get a api faz a formatação na chamada do livro, tirando assentos, tranforma os numero 1,2,3 em i,ii,iii e faz o .toLowerCase().
            - Numeros negativos nos campos capitulo e versos retornam 1.
            - Numeros não existentes nos campos capitulo e versos retornam o ultimo valor valido.
