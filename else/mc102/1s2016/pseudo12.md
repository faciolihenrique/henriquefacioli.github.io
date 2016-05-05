---
layout: code
title: henrique - o resto
postName: <a href="https://susy.ic.unicamp.br:9999/mc102ij/12/enunc.html">Laboratório 12 - Conjuntos</a>
anterior: ../
---

### Em andamento

{% highlight bash linenos%}
    pertence{
      loop (percorrendo o vetor até o fim){
        se num estiver dentro do vetor{
          retorna 1
        }
      }
      retorna 0
    }

    contido{
      loop (percorre todos os valores do conjunto1){
        loop (enquanto não achar o valor atual do conjunto1 em conjunto2);
        ## Se voce saiu do loop antes de terminar, significa que o elemento está
        ## dentro do conjunto. Se voce foi até o fim, significa que o elemento
        ## não está dentro, e então, conjunto 2 não está contido no conjunto 1
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

    uniao{
      loop (percorre o primeiro conjunto até tam1){
          loop (percorre o segundo conjunto até tam2){
            se o elemento dos dois forem iguais{
              adiciona o elemento no conjunto conjRes;
              # Utilize a função adicao() implementada por voce(tamanho = adicao())
              # lembre-se que ela retorna o numero de elementos no conjunto após
              # a adição
            }
          }
      }

      retorna tamanho
    }

    intersecao{
      loop (percorre o primeiro conjunto até tam1){
        adiciona os elentos do primeiro conjunto no conjRes
      }
      loop (percorre o segundo conjunto até tam2){
          adiciona os elemento do conjunto2 em conjRes;
          # Utilize a função adicao() implementada por voce
          #já que ela garante que não serão adicionados dois elementos iguais
      }

      retorna tamanho;
    }

    diferenca{

    }

{% endhighlight %}

### Dicas

  - Comece fazendo pela função adição. Para inserir qualquer elemento no conjunto, o
    programa main utiliza a função adição.
    Para testar se a sua adição está funcionando, utilize o teste abaixo. Sua saida deve ser igual a entrada:
    {% highlight bash%}
        A = {2, 5, 7}
        B = {2, 5}
    {% endhighlight %}

### Como rodar com dois arquivos?

#### Compilando:
1. Crie um diretório (pasta) para o laboratorio 12. Por exemplo, criarei uma pasta em Documentos com o nome lab12
2. Faça o download dos dois arquivos [lab12.c](https://susy.ic.unicamp.br:9999/mc102ij/12/aux/lab12.c) e [lab12_main.c](https://susy.ic.unicamp.br:9999/mc102ij/12/aux/lab12_main.c) deixando os dois dentro do diretório que voce criou para o laboratório 12
3. Nesse laboratório, o unico arquivo que você deverá editar é o lab12.c
4. Para compilar esse laboratório, abra o terminal e navegue até o diretório (utilizando o comando 'cd' Ex. <code>cd Documents/lab12</code>). Quando estiver dentro do diretório, rode o seguinte código:
<code>gcc lab12.c lab12_main.c -o lab12</code>
5. Para rodar o executável, rode <code>./lab12</code>

#### Usando o [testador](http://www.ic.unicamp.br/~zanoni/mc102/2016-1s/testador/)
Usando o testador, você só precisa colocar os dois arquivos ([lab12.c](https://susy.ic.unicamp.br:9999/mc102ij/12/aux/lab12.c) e [lab12_main.c](https://susy.ic.unicamp.br:9999/mc102ij/12/aux/lab12_main.c)) na mesma pasta, e usar o testador normalmente. :D
