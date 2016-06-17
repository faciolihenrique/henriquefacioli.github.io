---
layout: code
title: henrique - o resto
postName: <a href="https://susy.ic.unicamp.br:9999/mc102ij/16/enunc.html">Laboratório 16 - Ordenação de números grandes</a>
anterior: ../
---

Boa sorte :)

{% highlight bash linenos%}

## Acredito que não terei tempo para postar aqui um pseudocódigo essa semana.
## Espero que vocês consigam fazer muito bem esse aqui!
## Ele não é difícil, é só necessário entender como funciona ordenação e seu al-
## gorítimo e implementar usando seu lab8 :D

{% endhighlight %}

### F.A.Q
aqui estão algumas perguntas que foram perguntadas e respondidas. Foram respondidads de forma informal e sem uma revisão do texto! qualquer erro a culpa é sua?

1. *__"Eu não entendi como fazer essa leitura e de que maneira vou "guardar" n números em um vetor."__*

    primeiramente, tente ler um único número e colocá-lo em um vetor com 30 posições. um jeito de fazer é ler o número como uma string, criar um vetor de inteiros e passar esse número para esse vetor de inteiro. o jeito de fazer isso é usar aquela tabela ascii. (inteiro_daquela posição = string[posição atual) - '0')

    ex: Foi passado para você o número 19
    String:->[1][9][\0]
    você deve passar esse número para o vetor de inteiros do seguinte modo: preenche todas as posições (aqui, no caso, o número pode ter 30 caracteres, então será um vetor com 30 posições) com 0 e coloca o número o mais a direita possível:

    Inteiros:-> [0][0][0][0][0][0][0][0][0][0][0][0][0][0][0][0][0][0][0][0][0][0][0][0][0][0][0][0][1][9]

    depois que você ver que está tudo imprimindo certinho, para armazenar todos os números passados no laboratório 16, crie um vetor de inteiros de modo que cada linha do vetor será um vetor de 30 inteiros, mais ou menos assim:

    0-[0][0][0][0][0][0][0][0][0][0][0][0][0][0][0][0][0][0][0][0][0][0][0][0][0][0][0][0][1][9]

    1-[0][0][0][0][0][0][0][0][0][0][0][0][0][0][0][0][0][0][0][0][0][0][0][0][0][8][7][5][1][4]

    2-[0][0][0][0][0][0][0][0][0][0][0][0][0][0][0][0][0][0][0][0][0][0][0][0][2][3][0][0][1][7]

    (...)

    ou seja : mat[Valor_MAX_de_N][30]

    fica claro que para ler os números é só fazer um loop até n repetindo a leitura feita do lab 8?



2. *__"Não entendi como faço para passar o valor salvo na string para um vetor de inteiros"__*

    Então, você precisa saber o tamnho (tam) do número e "jogar" ele para o "fundo" do vetor de inteiros.

    Então a primeira posição (pos = 0) que no no exemplo tem o valor [1] deve ir para a posição 28, que é 30-tam+pos

    então voce deve primeiro zerar todo o vetor de inteiros (percorre ele inteiro colocando em todas as suas posiçõe o número 0)

    deve ficar mais ou menos assim (talvez a formula mude um pouco, não sei)...

        for(i = 0; i < tam; i++){
            vet[30-tam+i] = string[i]
        }

3. *__Já construi a parte do meu programa que faz a leitura dos n números, coloca zeros a esquerda, passa esse vetor para uma linha de uma matriz e imprime essa matriz com a ordem que foram digitados. Minha dúvida é em como ordenar as linhas dessa matriz... Mas não sei como fazer a ordenação das linhas dessa matriz. Não consegui entender a função compara, ela iria comparar as linhas da matriz? Como coloco a matriz como parametro para comparar apenas o valor cheio da linha?__*

    você deve tratar cada uma das linhas como um único número. No lab 14, por exemplo, existiam matrizes de caracteres em que cada uma das linhas dessa matriz era uma palavra.

    para ordenar você pode escolher qualquer um dos algorítimos, mas é importante ver quais são as operações que esses algoritimos fazem.

    este é o código do professor para ordenar um único vetor com o Selection Sort (cada um dos números nesse vetor é realmente um número, no seu caso, você terá uma matriz[A][B] para que cada 0 <= x <= A é um único número, então você não pode mexer nele)

        void selectionSort(int vet[], int tam){
            int i, j, min;
            for(i=0; i<tam; i++){
            min = i;
            for(j = i+1; j<tam; j++){//Acha posicao do menor elemento a partir de i
                if(vet[min] > vet[j])
                    min = j;
            }
            troca(&vet[i], &vet[min]);
            }
        }

    veja que temos uma comparação (`vet[min] > vet[j]``), então você precisa implementar a operação comparação para o seu bignum (a vetor de números). Como implementar? Crie uma função! No proprio enunciado ele ja te ajuda com essa ideia de criar essa função!

    `int compara(int n1[30], int n2[30]);`
    você deve fazer uma função que recebe duas linhas da matriz, ou seja, recebe um vetor, e compara qual deles é menor/maior/igual (leia o enunciado e implemente a função do jeito que ele fala). É relativamente fácil fazer essa função. Comece comparando a posição mais a esquerda do número, quem tiver o valor maior é o maior número

    n1: [0][0][2][3][4][5]

    n2: [0][1][2][3][4][5] <- maior por que [1] na posição n2(1) é maior que [0] na posição n1(1)

    e veja que você também tem a função troca, que no caso, foi implementada para trocar um número com outro. No seu caso, essa função troca tem trocar um vetor (linha da matriz) com outro!
    o jeito mais 'facil' de fazer isso é fazer assim:

        void troca(int n1[30], int n2[30]){
            int aux[30]
            //copia com um loop todos os números do vetor n1 para aux
            //copia com um loop todos os números do vetor n2 para n1
            //copa com um loop todos os números do vetor aux para n2
        }

    dai é só usar essas duas funções no algoritmo de ordenação!


### Dicas
1. Faça a leitura dos número igual você fez o lab 8, só que n-vezes!
2. Utilize uma das 3 funções de ordenação vistas em aula: Selection-Sort, Bubble-Sort, Insertion-Sort. Todas as tres possuem duas coisas em comum: elas comparam dois números e trocam esses números de posição!
3. Crie a função compara do jeito que foi dito no programa.
4. Crie uma função troca(n1,n2) em que troca o número passado em 1 pelo número passado em 2 e o número passado em 2 pelo número passado em 1 - todas as funções de ordenação fazem essa troca!
5. Boa sorte! Estarei nos horários de monitoria para ajudar!

### Compilando:
#### Usando o terminal
 1. Crie um diretório (pasta) para o laboratorio 16. Por exemplo, criarei uma  pasta em Documentos com o nome lab16
 2. Seu programa pode usar somente um único arquivo nesse laboratório. Aqui,  chamaremos de lab16.c
 3. Para compilar esse laboratório, abra o terminal e navegue até o diretório  (utilizando o comando 'cd' Ex. <code>cd Documents/lab16</code>). Quando estiver  dentro do diretório, rode o seguinte código:
 <code>gcc lab16.c lab16_main.c -o lab16</code>
 4. Para rodar o executável, rode <code>./lab16</code>
 5.

#### Usando o [testador](http://www.ic.unicamp.br/~zanoni/mc102/2016-1s/testador/)
O testador é um script criado pelo professor Zanoni, disponível em sua página. Aqui é apenas um miniguia de como utilizar.
Ele é muito bom pois já compila e testa seu código com os testes abertos do susy. Aconselho a usá-lo

 1. Crie um diretório (pasta) para o laboratorio 16. Por exemplo, criarei uma pasta em Documentos com o nome lab16
 2. Seu programa pode usar somente um único arquivo nesse laboratório. Aqui, chamaremos de lab16.c
 3. Faça o download do [testador](http://www.ic.unicamp.br/~zanoni/mc102/2016-1s/testador/testador.sh) que está na página do zanoni na mesma pasta que está o seu código. Uma dica é clicar com o botão direito do mouse e então salvar-como, pois aí você já pode salvá-lo diretamente na pasta.
 4. Abra o terminal.
 5. Navegue até o diretório (pasta) que está o arquivo utilizando o comando 'cd' Ex. `cd Documentos/lab16`).
 6. Execute o comando : `chmod a+x testador.sh`
 7. Execute o comando : `./testador.sh mc102ij 16`
