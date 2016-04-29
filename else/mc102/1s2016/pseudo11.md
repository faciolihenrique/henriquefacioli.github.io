---
layout: code
title: henrique - o resto
postName: "Laboratório 11 - Batalha Naval"
anterior: ../
---
{% highlight bash linenos%}
    leia o número de navios que serão fornecidos
    leia o tamanho do tabuleiro (matriz)

    loop (enquanto houver embarcações do jogador 1 para serem alocadas){
        leia a posição de inicio do navio
        leia o tamanho do navio
        indique que naquelas posições da matriz existe um navio
    }
    loop (enquanto houver embarcações do jogador 2 para serem alocadas){
        leia a posição de inicio do navio
        leia o tamanho do navio
        indique que naquelas posições da matriz existe um navio
    }

    loop (enquanto não destruir todos os navios de um dos dois){
        leia a posição de ataque
        se(jogador 1){
            (aplique o ataque na posição do tabuleiro do oponente):
            se acertou
                remova o navio do tabuleiro
            imprima o caso
        }
        ou, se(jogador 2){
            (aplique o ataque na posição do tabuleiro do oponente):
            se acertou
                remova o navio do tabuleiro
            imprima o caso
        }

        incremente o contador de jogadas
    }

    Dicas:
        - São nescessários dois tabuleiros!
        - Utilize matrizes e as inicialize com um valor para sinalizar o mar.
        Ex: 0 sinaliza agua.
        - Ao indicar a posição que contem um navio, utilize símbolos
        (caracteres/numeros) diferentes para cada embarcação.
        Ex: primeira embarcação = 1 , segunda embarcação = 2 ...
        - Para saber qual jogador está jogando, ~~uma das soluções~~ é definir
        com o contador de jogadas numeros pares para um jogador e impar para o
        outro.
        Ex: jogador1->numero de jogadas impar | jogador2->numero de jogadas par
{% endhighlight %}
