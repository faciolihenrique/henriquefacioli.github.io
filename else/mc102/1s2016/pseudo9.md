---
layout: code
title: henrique - o resto
postName: <a href="https://susy.ic.unicamp.br:9999/mc102ij/09/enunc.html">Laboratório 9 - Código da Vinci</a>
anterior: ../
---
{% highlight bash linenos%}
    leia o número de linhas que será passado
    loop ( enquanto existe linha para ler ){
        leia a linha
        loop(enquanto a linha não terminar){
            marque o inicio de uma palavra
            procure o final da palavra e guarde
            se( chegou no final ){
                imprima do final até o começo caracter/caracter
            }
        }
    }

    Dicas:
     - Como saber se a linha terminou?  veja se chegou no '\n'
     - O final de uma palavra são os caracteres que separam duas palavras
     - A função fgets é, as vezes, chata. Tome cuidado com os '\n'. alguns erros
     são corrigidos colocando o comando fflush(stdin); logo antes de executar o
     fgets.
{% endhighlight %}
