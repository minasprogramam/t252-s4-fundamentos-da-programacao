## 📂 conteúdo
- Map, Filter e Reduce
---

## contexto
Imagina que você trabalha no YouTube e acabou de receber uma lista gigante de vídeos (o nosso videos.json).
Cada vídeo tem informações como título, canal, duração, número de views, likes, dislikes e categoria.

Seu desafio é percorrer esse array de vídeos e usar os métodos map, filter e reduce pra resolver os desafios abaixo.

### Exercício – map
Você recebeu um array de vídeos e precisa exibir apenas as informações principais de cada um, de forma amigável.
Voce deve usar o método map para transformar o array original em um novo array de strings no formato:
````
"título do vídeo: "aula da jess",
 autor: "minas programam"
 visualizações: 1000000000000000 
 duração (min): 30"
````
Dica: 
- A duração está em segundos (duracaoSeg), então divida por 60 pra transformar em minutos.
- Depois exiba no console o resultado do map.

### Exercício – filter

Agora que você já consegue exibir os vídeos, o time quer aplicar alguns filtros.

- Parte A
Liste apenas os vídeos que estão bombando (ou seja, com mais de 2000 visualizações).

- Parte B
Liste os vídeos com mais dislikes (aqueles que receberam mais reações negativas).


Voce deve usar o filter para criar um novo array com vídeos que tenham `views > 2000`.

Voce deve usar outro filter para mostrar os vídeos com o maior número de dislikes.

Dica:
- Use for ou reduce para encontrar o vídeo com maior número de dislike e depois use no filter para fazer a comparaçao.

### Exercício – reduce

- Parte A
Calcule o total de views somando o campo views de todos os vídeos.

- Parte B
Calcule o total de views de um canal específico (por exemplo, "DevGirls BR").

Voce deve usar o reduce para somar todos os valores de views.
Depois, use um if/else dentro do reduce pra somar apenas os vídeos do canal escolhido.