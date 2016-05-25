---
layout: code
title: henrique - o resto
postName: <a href="https://susy.ic.unicamp.br:9999/mc102ij/14/enunc.html">Laboratório 14 - Pesquisas</a>
anterior: ../
---

### Em andamento

{% highlight bash linenos%}
    # As 3 funções abaixo são "importadas" do lab13.
    # Copie e cole elas no topo do arquivo, entre os define's
    # e a função remove palavra

    int contemPalavra(s1[],s2){
        # ESSA FUNCAO DEVE SER ADICIONA POR VOCE AO ARQUIVO,
        # ela é igual ao do laboratório anterior
    }
    void removeEspacos(s[]){
        # ESSA FUNCAO DEVE SER ADICIONA POR VOCE AO ARQUIVO,
        # ela é igual ao do laboratório anterior
    }
    int apagaPalavra(char s1[], char s2[]){
        # ESSA FUNCAO DEVE SER ADICIONA POR VOCE AO ARQUIVO,
        # ela é igual ao do laboratório anterior
    }


    int contemPalavras(s[],vs[][MAX],n){
        loop de 0 até n{
            se contemPalavra(s, vs[posicao_atual]) for -1{
                retorna 0
            }
        }
        retorna 1
    }

    void removePalavras(s[],vs[][MAX], n){
        # Se reparar, apesar se ter que implementar essa função no lab 14,
        # ela é a mesma do lab 13
        # então, é só copiar!
    }

    void pagsResposta(paginas[][MAX],numPag,termosBusca[][MAX], numTer,resp[]){

    }
    void linksResposta(links[MAX_PAG][MAX_PAG],numPag, resp[],numLinks[])

{% endhighlight %}

### Dicas
1. Adicione ao arquivo a função contemPalavra do ultimo laboratório!
2. Alguns alunos tiveram problema no laboratório 13 devido a ordem de declaração das funções. Se você vai usar uma função X em uma outra função Y, a função X deve ser implementada antes E deve ser escrita "acima" da função . Ex: Usaremos a funcao contemPalavra em contemPalavras, então, a declaração de contemPalavra deve estar acima de contemPalavras, como visto...

### Como rodar com dois arquivos?

#### Compilando:
1. Crie um diretório (pasta) para o laboratorio 14. Por exemplo, criarei uma pasta em Documentos com o nome lab14
2. Faça o download dos dois arquivos [lab14.c](https://susy.ic.unicamp.br:9999/mc102ij/14/aux/lab14.c) e [lab14_main.c](https://susy.ic.unicamp.br:9999/mc102ij/14/aux/lab14_main.c) deixando os dois dentro do diretório que voce criou para o laboratório 14
3. Nesse laboratório, o unico arquivo que você deverá editar é o lab14.c
4. Para compilar esse laboratório, abra o terminal e navegue até o diretório (utilizando o comando 'cd' Ex. <code>cd Documents/lab14</code>). Quando estiver dentro do diretório, rode o seguinte código:
<code>gcc lab14.c lab14_main.c -o lab14</code>
5. Para rodar o executável, rode <code>./lab14</code>

#### Usando o [testador](http://www.ic.unicamp.br/~zanoni/mc102/2016-1s/testador/)
O testador é um script criado pelo professor Zanoni, disponível em sua página. Aqui é apenas um miniguia de como utilizar.

 1. Crie um diretório (pasta) para o laboratorio 14. Por exemplo, criarei uma pasta em Documentos com o nome lab14
 2. Faça o download dos dois arquivos [lab14.c](https://susy.ic.unicamp.br:9999/mc102ij/14/aux/lab14.c) e [lab14_main.c](https://susy.ic.unicamp.br:9999/mc102ij/14/aux/lab14_main.c) deixando os dois dentro do diretório que voce criou para o laboratório 14
 3. Faça o download do [testador](http://www.ic.unicamp.br/~zanoni/mc102/2016-1s/testador/testador.sh) que está na página do zanoni na mesma pasta que está o seu código. Uma dica é clicar com o botão direito do mouse e então salvar-como, pois aí você já pode salvá-lo diretamente na pasta.
 4. Abra o terminal.
 5. Navegue até o diretório (pasta) que estão os arquivos. (utilizando o comando 'cd' Ex. `cd Documentos/lab14`).
 6. Execute o comando : `chmod a+x testador.sh`
 7. Execute o comando : `./testador.sh mc102ij 14`

#### CodeBlocks
Agradecimento a Sabrina:

" Em File você vai em New e lá tem a opção Projects, clicando em Projects você escolhe "empty project" clica em Go e depois escolhe um nome para o projeto (lab14) e clica em Finish. Vai aparecer na barra lateral o seu projeto, ai com o botão direito você vai em add files e coloca o arquivo das funções e da main ali. Ai clicando em cada um dá para editar e ele compila com a main. "
