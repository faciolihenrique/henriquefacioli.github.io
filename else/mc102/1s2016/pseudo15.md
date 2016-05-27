---
layout: code
title: henrique - o resto
postName: <a href="https://susy.ic.unicamp.br:9999/mc102ij/15/enunc.html">Laboratório 15 - Registros com Ponteiros </a>
anterior: ../
---

### Em andamento

{% highlight bash linenos%}

    criar_base(Base* base, int n) {
        # Voce deve fazer os campos da estrutura base passada como argumento
        # receber os valores necessários
        base->armazenado recebe 0
        base->capacidade recebe n
        base->registros recebe a alocação de um vetor de n registros

        printf("Base criada.\n");
        return;
    }

    buscar(Base* base, int ra) {
        # Percorre o vetor de registros que foi alocado por você na estrutura
        # base, verificando se registro->ra é igaul a ra, se sim, retorna a posi
        # ção daquele registro no vetor de registro daquela base

        return -1;
    }

    imprimir(Base* base, int ra) {
        printf("Aluno %d nao encontrado.\n", ra);
    }

    adicionar(Base* base, int ra, int telefone, char* nome) {
        return;
    }

    remover(Base* base, int ra) {
      return;
    }

    liberar_base(Base* base) {
        # Deve ser liberado o vetor de registro
        # e depois liberado a base

        return;
    }



{% endhighlight %}

### Dicas
1. Para saber o tamanho de uma estrutura é possível usar a função size_of(ESTRUTURA). Ex: Para saber o tamanho de um inteiro podemos usar size_of(int)
2. A função para alocar algo na memória é malloc(TAMANHO_DA_ALOCAÇÃO). Ex. Se queremos alocar um vetor de 5 inteiros podemos usar malloc( (size_of(int) * 5) )


### Como rodar com dois arquivos?

#### Compilando:
1. Crie um diretório (pasta) para o laboratorio 15. Por exemplo, criarei uma pasta em Documentos com o nome lab15
2. Faça o download dos dois arquivos [lab15.c](https://susy.ic.unicamp.br:9999/mc102ij/15/aux/lab15.c) e [lab15_main.c](https://susy.ic.unicamp.br:9999/mc102ij/15/aux/lab15_main.c) deixando os dois dentro do diretório que voce criou para o laboratório 15
3. Nesse laboratório, o unico arquivo que você deverá editar é o lab15.c
4. Para compilar esse laboratório, abra o terminal e navegue até o diretório (utilizando o comando 'cd' Ex. <code>cd Documents/lab15</code>). Quando estiver dentro do diretório, rode o seguinte código:
<code>gcc lab15.c lab15_main.c -o lab15</code>
5. Para rodar o executável, rode <code>./lab15</code>

#### Usando o [testador](http://www.ic.unicamp.br/~zanoni/mc102/2016-1s/testador/)
O testador é um script criado pelo professor Zanoni, disponível em sua página. Aqui é apenas um miniguia de como utilizar.
Ele é muito bom pois já compila e testa seu código com os testes abertos do susy. Aconselho a usá-lo

 1. Crie um diretório (pasta) para o laboratorio 15. Por exemplo, criarei uma pasta em Documentos com o nome lab15
 2. Faça o download dos dois arquivos [lab15.c](https://susy.ic.unicamp.br:9999/mc102ij/15/aux/lab15.c) e [lab15_main.c](https://susy.ic.unicamp.br:9999/mc102ij/15/aux/lab15_main.c) deixando os dois dentro do diretório que voce criou para o laboratório 15
 3. Faça o download do [testador](http://www.ic.unicamp.br/~zanoni/mc102/2016-1s/testador/testador.sh) que está na página do zanoni na mesma pasta que está o seu código. Uma dica é clicar com o botão direito do mouse e então salvar-como, pois aí você já pode salvá-lo diretamente na pasta.
 4. Abra o terminal.
 5. Navegue até o diretório (pasta) que estão os arquivos. (utilizando o comando 'cd' Ex. `cd Documentos/lab15`).
 6. Execute o comando : `chmod a+x testador.sh`
 7. Execute o comando : `./testador.sh mc102ij 15`

#### CodeBlocks

" Em File você vai em New e lá tem a opção Projects, clicando em Projects você escolhe "empty project" clica em Go e depois escolhe um nome para o projeto (lab14) e clica em Finish. Vai aparecer na barra lateral o seu projeto, ai com o botão direito você vai em add files e coloca o arquivo das funções e da main ali. Ai clicando em cada um dá para editar e ele compila com a main. "
