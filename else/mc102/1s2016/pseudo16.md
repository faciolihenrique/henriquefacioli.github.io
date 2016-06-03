---
layout: code
title: henrique - o resto
postName: <a href="https://susy.ic.unicamp.br:9999/mc102ij/16/enunc.html">Laboratório 16 - Ordenação de números grandes</a>
anterior: ../
---

{% highlight bash linenos%}

## Acredito que não terei tempo para postar aqui um pseudocódigo essa semana.
## Espero que vocês consigam fazer muito bem esse aqui!
## Ele não é difícil, é só necessário entender como funciona ordenação e seu al-
## gorítimo e implementar usando seu lab8 :D

{% endhighlight %}

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
