---
layout: code
title: henrique - o resto
postName: <a href="https://susy.ic.unicamp.br:9999/mc102ij/12/enunc.html">Laboratório 12 - Conjuntos</a>
anterior: ../
---
Como rodar o programa:

  1. Crie um diretório (pasta) para o laboratorio 12. Por exemplo, criarei uma pasta em Documentos com o nome lab12
  2. Faça o download dos dois arquivos [lab12.c](https://susy.ic.unicamp.br:9999/mc102ij/12/aux/lab12.c) e [lab12_main.c](https://susy.ic.unicamp.br:9999/mc102ij/12/aux/lab12_main.c) deixando os dois dentro do diretório que voce criou para o laboratório 12
  3. Nesse laboratório, o unico arquivo que você deverá editar é o lab12.c
  4. Para compilar esse laboratório, abra o terminal e navegue até o diretório (utilizando o comando 'cd' Ex. <code>cd Documents/lab12</code>). Quando estiver dentro do diretório, rode o seguinte código:
  <code>gcc lab12.c lab12_main.c -o lab12</code>
  5. Para rodar o executável, rode <code>./lab12</code>

**Em andamento**

{% highlight bash linenos%}
    pertence{
      loop (percorrendo o vetor até o fim){
        se o num estiver dentro do vetor{
          retorna 1
        }
      }
      retorna 0
    }

    contido{
      loop (percorre todos os valores do conjunto1){
        loop (enquanto não achar o valor atual do conjunto1 em conjunto2)  {
        }
        se percorreu todo o conjunto2{
            retorna 0
        }
      }
      ## Se chegou até aqui, significa que nenhuma vez ele percorreu todo o con-
      ## junto 2 inteiro, ou seja, ele encontrou todo elemento do conj1 no conj2
      retorna 1
    }

    adicao{
      loop (percorre todo o conjunto){
          se encontrou o valor no conjunto{
            retorna num;
          }
      }
      ## Se chegou até aqui, significa que não encontrou o valor no vetor ##
      adiciona o valor no vetor
      retorna num+1;
    }

    subtracao{
      loop (percorre todo o conjunto){
          se encontrou o valor no conjunto{
            remove ele do vetor;
            retorna num-1;
          }
      }
      retorna num;
    }
    uniao:

    intersecao:

    diferenca:

{% endhighlight %}
