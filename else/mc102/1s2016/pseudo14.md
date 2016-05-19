---
layout: code
title: henrique - o resto
postName: <a href="https://susy.ic.unicamp.br:9999/mc102ij/14/enunc.html">Laboratório 14 - Pesquisas</a>
anterior: ../
---

### Em andamento

{% highlight bash linenos%}

{% endhighlight %}

### Dicas

### Como rodar com dois arquivos?

#### Compilando:
1. Crie um diretório (pasta) para o laboratorio 14. Por exemplo, criarei uma pasta em Documentos com o nome lab14
2. Faça o download dos dois arquivos [lab14.c](https://susy.ic.unicamp.br:9999/mc102ij/14/aux/lab14.c) e [lab14_main.c](https://susy.ic.unicamp.br:9999/mc102ij/14/aux/lab14_main.c) deixando os dois dentro do diretório que voce criou para o laboratório 13
3. Nesse laboratório, o unico arquivo que você deverá editar é o lab12.c
4. Para compilar esse laboratório, abra o terminal e navegue até o diretório (utilizando o comando 'cd' Ex. <code>cd Documents/lab14</code>). Quando estiver dentro do diretório, rode o seguinte código:
<code>gcc lab14.c lab14_main.c -o lab14</code>
5. Para rodar o executável, rode <code>./lab14</code>

#### Usando o [testador](http://www.ic.unicamp.br/~zanoni/mc102/2016-1s/testador/)
O testador é um script criado pelo professor Zanoni, disponível em sua página. Aqui é apenas um miniguia de como utilizar.

 1. Crie um diretório (pasta) para o laboratorio 14. Por exemplo, criarei uma pasta em Documentos com o nome lab14
 2. Faça o download dos dois arquivos [lab14.c](https://susy.ic.unicamp.br:9999/mc102ij/14/aux/lab14.c) e [lab14_main.c](https://susy.ic.unicamp.br:9999/mc102ij/14/aux/lab14_main.c) deixando os dois dentro do diretório que voce criou para o laboratório 14
 3. Faça o download do testador na página do zanoni
 4. Abra o terminal.
 5. Navegue até o diretório (pasta) que estão os arquivos. (utilizando o comando 'cd' Ex. `cd Documentos/lab14`).
 6. Execute o comando : `chmod a+x testador.sh`
 7. Execute o comando : `./testador.sh mc102ij 14`
