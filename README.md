# Bíblia API<p>

API de consulta há Bíblia Sagrada. (Hospedagem no Firebase)<br />
Projeto criado para estudos, os resultados são em formato JSON<br />
Todas as versões da Bíblia foram obtidas no GitHub do [Thiago Bodruk][https://github.com/thiagobodruk].<br /><p>

## Get<p>

[Link da API][http://us-central1-bibleapi-kll.cloudfunctions.net/bible]<br />
[Link Genesis 1:1 (pt-br, NVI)][https://us-central1-bibleapi-kll.cloudfunctions.net/bible?book=genesis&chapter=1&verse=1]<br /><p>

Para utilizar a API utilizei a seguinte formatação da URL:<br /><p>

https://.../bible?language=pt-br&version=NVI&book=genesis&chapter=1&verse=1<br /><p>

Parametros:<br /><p>

    - language  = pt-br     (Idioma)
    - version   = NVI       (Versão)
    - book      = Genesis   (Livro)
    - chapter   = 1         (Captulo)
    - verse     = 1         (Versos)

__Obs:__   
 - Caso não passa o idioma e versão, a api retonar como padrão em português na versão NVI.<br />
- Para evitar problemas no get a api faz a formatação na chamada do livro, tirando assentos, tranforma os numero 1,2,3 em i,ii,iii e faz o .toLowerCase().<br />
- Numeros negativos nos campos capitulo e versos retornam 1.<br />
- Numeros não existentes nos campos capitulo e versos retornam o ultimo valor valido.<br />
