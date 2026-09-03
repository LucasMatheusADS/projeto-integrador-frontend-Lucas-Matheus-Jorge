# projeto-integrador-frontend-Lucas-Matheus-Jorge

🏎️ Aluguel de Carros Esportivos

Projeto de site estático para uma locadora de carros esportivos de alto padrão, desenvolvido em **HTML5** e **CSS3**.

📋 Sobre o Projeto

O site permite que o usuário visualize um catálogo de carros esportivos disponíveis para aluguel e solicite o aluguel através de um formulário. O projeto foi desenvolvido como atividade prática de HTML5, incluindo recursos de multimídia (vídeo com fallback de formatos).

✨ Funcionalidades

- **Banner com vídeo** no header, com poster (imagem estática) como fallback
- **Catálogo de carros** com foto, descrição e preço de aluguel por dia
- **Formulário de solicitação de aluguel** com validação nativa HTML5
- **Design responsivo** com CSS reset e estilização personalizada

🚗 Carros Disponíveis

| Carro | Preço por Dia |
|-------|---------------|
| Porsche 911 | R$ 3.500 |
| Audi R8 | R$ 4.000 |
| Nissan Skyline R34 | R$ 5.000 |

🛠️ Tecnologias Utilizadas

- **HTML5** — estrutura semântica (header, main, section, article, footer)
- **CSS3** — reset.css + style.css para estilização
- **Multimídia HTML5** — tag `<video>` com múltiplos formatos (WebM + MP4)





































## Avaliação

DATA - 02/09/2026
Avaliação em pares

## Aula 03 — HTML5 Semântica e Formulários

| Requisito                                                                   | Situação | Observação                                                                                              |
| --------------------------------------------------------------------------- | :------: | ------------------------------------------------------------------------------------------------------- |
| Utilizar HTML5 semântico (`header`, `main`, `section`, `article`, `footer`) |     ✅    | As principais tags semânticas estão presentes e existe apenas um `main`.                                |
| Manter hierarquia correta de títulos                                        |     ✅    | As seções utilizam `h2` e os artigos utilizam `h3`, sem saltos na hierarquia.                           |
| Criar formulário relacionado ao tema                                        |     ✅    | O formulário é destinado à solicitação de aluguel de carros.                                            |
| Utilizar tipos de campos adequados                                          |     ✅    | Foram utilizados `text`, `email`, `tel`, `number`, `date`, `select` e `textarea`.                       |
| Utilizar validação nativa                                                   |     ✅    | Foram utilizados `required`, `pattern`, `min` e `max`.                                                  |
| Utilizar `fieldset` e `legend`                                              |     ✅    | O formulário possui agrupamento com `fieldset` e `legend`.                                              |
| Associar corretamente `label` e campos                                      |     ✅    | Os valores de `for` dos `label` correspondem aos `id` dos campos.                                       |
| Utilizar elementos semânticos para interação                                |     ✅    | Os botões utilizam `button`, não `div` ou `span`.                                                       |
| Verificar nome acessível no Accessibility Panel                             |     ✅    | A associação no código está correta.                                                                    |

---

## Aula 04 — Multimídia

| Requisito                                   | Situação | Observação                                                                                                                         |
| ------------------------------------------- | :------: | ---------------------------------------------------------------------------------------------------------------------------------- |
| Utilizar mídia relacionada ao tema          |     ✅    | O vídeo e o áudio estão relacionados ao tema de carros esportivos.                                                                 |
| Disponibilizar o vídeo em dois formatos     |     ✅    | O vídeo possui versões MP4 e WebM.                                                                                                 |
| Utilizar múltiplos `source`                 |     ✅    | O elemento `video` possui os dois formatos com seus respectivos tipos MIME.                                                        |
| Definir ordem dos formatos                  |     ✅    | O WebM está primeiro e possui tamanho menor que o MP4, priorizando eficiência.                                                     |
| Justificar o uso de `preload`               |     ✅    | Foi utilizado `preload="none"` e a escolha está explicada em comentário no código.                                                 |
| Utilizar `poster` no vídeo                  |     ✅    | O vídeo possui uma imagem representativa como `poster`.                                                                            |
| Utilizar legendas com `track` e `.vtt`      |     ✅    | Não se aplica neste caso, pois o vídeo não possui fala ou narração.                                                                |
| Testar compatibilidade com `canPlayType()`  |    ⚠️    | O teste foi realizado, porém WebM e MP4 retornaram `maybe`, enquanto a atividade pede pelo menos um formato retornando `probably`. |
| Utilizar áudio em dois formatos             |    ⚠️    | O código possui MP3 e OGG, porém os dois arquivos apresentaram erro `404 (Not Found)` durante o teste local.                       |
| Realizar commit relacionado à atividade     |     ✅    | Existem commits relacionados à implementação do vídeo e do áudio.                                                                  |
| Criar Pull Request                          |    ⚠️    | Não foi encontrado Pull Request no repositório.                                                                                    |
| Utilizar branch específica para a atividade |    ⚠️    | Os commits estão diretamente na branch `main`.                                                                                     |

---

## Pontos que precisam de atenção

* ⚠️ Não foi encontrada a branch `feature/html-semantica-formulario`.
* ⚠️ Não foi encontrado Pull Request no repositório.
* ⚠️ O teste `canPlayType()` retornou `maybe` para WebM e MP4, sem nenhum formato retornar `probably`.
* ⚠️ Os arquivos de áudio apresentaram erro `404 (Not Found)` durante o teste local.
* ✅ O arquivo WebM é menor que o MP4 e está corretamente priorizado no código.
* ✅ O vídeo não possui fala ou narração, portanto o uso de legendas `track`/`.vtt` não é necessário neste caso.
