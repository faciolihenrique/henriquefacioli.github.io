---
layout: code
title: henrique - o resto
postName: <a href="https://susy.ic.unicamp.br:9999/mc102ij/13/enunc.html">Laboratório 13 - Conjuntos</a>
anterior: ../
---

### Em andamento

{% highlight bash linenos%}
    removeEspacos(char s[]){
        # precisa de 2 variaveis, uma que controla o andamento de s
        # e outra que controla a posicao de copia
        percorre s até o final (utilizando a posicao_andamento){
            # Se for espaço no meio de s
            se s[posicao_andamento] for espaço E posicao_andamento diferente de 0{
                faz s na posicao_copia receber s na posicao_andamento
                incremente posicao_copia
                enquanto s na posicao_andamento for espaço{
                    incrementa posicao_andamento;
                }
            }
            # Se for espaço na primeira letra de s
            ou se s[posicao_andamento] for espaço{
                enquanto s na posicao_andamento for espaço{
                    incrementa posicao_andamento;
                }
            }
            # Agora, se tivesse espaço entre uma letra e outra, copia sem
            faz s na posicao_copia receber s na posicao_andamento
            incremente posicao_copia
        }
        # Finalizar a string significa colocar um \0 em sua ultima posicao
        finaliza a string*;
    }

    contemPalavra(char s1[], char s2[]){
        percorre s1{
            # Se a primeira letra for igual, entra no loop e percorre letra por
            # letra de s1 junto com s2
            se s1 na posição atual for igual ao s2[0] E ela for começo de palavra{
                enquanto s1[posicao atual + cont] = s2[cont]{
                    incrementa o cont
                }

                se percorreu a s2 inteira E antes é um espaço E depois da palavra é um espaço {
                    retorna posicao atual;
                }
                ou se percorreu a s2 inteira E antes é um espaço E depois é o  finalde s1{
                    retorna posicao atual;
                }
                ou se percorreu a s2 inteira E é a primeira letra de s1 E depois   dapalavra é um espaço{
                    retorna posicao atual;
                }
          }
        }

        se terminou de percorrer s1{
            retorna -1
        }
    }

    apagaPalavra(char s1[], char s2[]){
        ## Doing
    }

    removePalavras(char s[],  char vs[][MAX], int n){
        loop em n{
            enquanto apagaPalavra(s, s[n]) for 1
        }
        removeEspacos de s

    }

{% endhighlight %}

### Dicas
  - Comece pela função remove espaço -> remove palavra ->  apaga palavra -> removePalavra. Elas devem estar nessa ordem declaradas no arquivo!
  - Pode-se usar a biblioteca string.h . No arquivo, lab13 disponível no susy ela já esta declara!
  - Utiliza a função strlen(string) que está contida na string.h . Ela retorna o tamanho da string. Ex. Seja s1[TAM] uma string e tam um inteiro. `tam = strlen(s1);`
  - Terminar uma string significa colocar o '\0' em sua ultima posição

### Como rodar com dois arquivos?

#### Compilando:
1. Crie um diretório (pasta) para o laboratorio 13. Por exemplo, criarei uma pasta em Documentos com o nome lab13
2. Faça o download dos dois arquivos [lab13.c](https://susy.ic.unicamp.br:9999/mc102ij/13/aux/lab13.c) e [lab13_main.c](https://susy.ic.unicamp.br:9999/mc102ij/13/aux/lab13_main.c) deixando os dois dentro do diretório que voce criou para o laboratório 13
3. Nesse laboratório, o unico arquivo que você deverá editar é o lab12.c
4. Para compilar esse laboratório, abra o terminal e navegue até o diretório (utilizando o comando 'cd' Ex. <code>cd Documents/lab13</code>). Quando estiver dentro do diretório, rode o seguinte código:
<code>gcc lab13.c lab13_main.c -o lab13</code>
5. Para rodar o executável, rode <code>./lab13</code>

#### Usando o [testador](http://www.ic.unicamp.br/~zanoni/mc102/2016-1s/testador/)
O testador é um script criado pelo professor Zanoni, disponível em sua página. Aqui é apenas um miniguia de como utilizar.

 1. Crie um diretório (pasta) para o laboratorio 13. Por exemplo, criarei uma pasta em Documentos com o nome lab13
 2. Faça o download dos dois arquivos [lab13.c](https://susy.ic.unicamp.br:9999/mc102ij/13/aux/lab13.c) e [lab13_main.c](https://susy.ic.unicamp.br:9999/mc102ij/13/aux/lab13_main.c) deixando os dois dentro do diretório que voce criou para o laboratório 13
 3. Faça o download do testador na página do zanoni
 4. Abra o terminal.
 5. Navegue até o diretório (pasta) que estão os arquivos. (utilizando o comando 'cd' Ex. `cd Documentos/lab13`).
 6. Execute o comando : `chmod a+x testador.sh`
 7. Execute o comando : `./testador.sh mc102ij 13`
