import type { LocalizedArticle, LocalizedArticleId } from './types';

export const ptBrArticles: Record<LocalizedArticleId, LocalizedArticle> = {
  walkthrough: {
    id: 'walkthrough', keyword: 'detonado de The Skin Stapler',
    title: 'Detonado de The Skin Stapler: Todos os capítulos',
    description: 'O detonado de The Skin Stapler vai do apartamento de Fefe ao CCPD, passa pelos turnos de trabalho e chega a Closing In e ao final no Flesh Pit.',
    eyebrow: 'Rota completa da versão 1.0',
    directAnswer: 'A campanha começa no apartamento de Fefe, segue por CCPD, Quick Fix, Gutters End, a loja de Luna, Underworld VHS e Lazar’s Blood Bank, e termina em Closing In e The Flesh Pit. Se o jogo travar, confira o objetivo atual, termine os diálogos e procure provas, fitas e tarefas de turno ainda pendentes.',
    sections: [
      { title: 'Ordem correta dos capítulos', paragraphs: ['A versão completa segue uma rota linear. Entre os locais jogáveis, os trechos Aftermath devolvem o foco a Slater e Robbie e organizam as novas pistas do caso.', 'Dois vídeos completos confirmam a mesma ordem geral. A duração muda de jogador para jogador, mas a sequência dos locais permanece estável.'], bullets: ['The Night Before at the Burrows Apartments — Fefe', 'Carrion City Police Department — Dick Slater', 'The Quick Fix — Hexy', 'Gutters End Bowling Alley — Blair', 'Luna’s Cream Filled Donut Holes — Luna', 'Underworld VHS — Scaroline', 'Lazar’s Blood Bank — Nurse Layna', 'Closing In — Dick Slater', 'The Flesh Pit — final'] },
      { title: 'Como avançar sem ficar preso', paragraphs: ['The Skin Stapler não é um mundo aberto. O progresso depende de conversar com personagens, examinar a cena do crime, concluir o trabalho do turno e reparar ou ouvir as fitas encontradas.', 'Não há prova de uma senha universal, código secreto de capítulo ou comando que pule todos os puzzles. Quando o objetivo não muda, quase sempre falta uma interação no local atual.'], bullets: ['Leia o objetivo atual', 'Espere o diálogo terminar', 'Examine balcões, mesas, portas e provas', 'Finalize cada etapa do turno', 'Teste novamente caminhos depois que o objetivo mudar'] },
      { title: 'Diferenças entre demo e jogo completo', paragraphs: ['A demo gratuita inclui CCPD, Quick Fix e Gutters End. O apartamento de Fefe, os locais posteriores, Closing In e o Flesh Pit fazem parte da campanha ampliada.', 'Por isso, vale começar a versão final do início. Os três capítulos de demonstração não representam sozinhos a ordem narrativa do lançamento.'] },
      { title: 'Tempo de jogo e conquistas', paragraphs: ['A Tainted Pact descreve o jogo como uma experiência curta para terminar em uma sessão. Os vídeos completos analisados duram entre 2h46 e 3h05, sem transformar esse intervalo em uma promessa para todo jogador.', 'A Steam lista 16 conquistas. As fontes não confirmam a condição de cada uma, então este detonado não inventa objetivos perdíveis.'] },
      { title: 'O que ainda precisa de confirmação', paragraphs: ['Uma wiki de fãs relata pequenas diferenças no epílogo conforme as fitas ouvidas. Como não foi possível comparar duas campanhas equivalentes, essas variações continuam com confirmação pendente.', 'As legendas automáticas também oscilam entre Fefe/Fifi e Kain/Kane. Para Fefe, este site segue a grafia do pôster do elenco.'] }
    ],
    faq: [
      { question: 'Quanto tempo leva para zerar?', answer: 'Uma rota direta fica perto de três horas nos vídeos analisados. Exploração, tentativas extras e busca por conquistas podem aumentar esse tempo.' },
      { question: 'Quantos capítulos principais existem?', answer: 'A rota verificada reúne nove grandes locais jogáveis, além dos trechos Aftermath que conectam a investigação.' },
      { question: 'Existe um código para todos os puzzles?', answer: 'Não há um código universal confirmado. Normalmente falta um diálogo, uma prova, uma fita ou uma etapa do turno.' },
      { question: 'Este detonado serve para a demo?', answer: 'Não. Ele segue a versão completa de agosto de 2026; a demo contém apenas três seções iniciais.' }
    ]
  },
  ending: {
    id: 'ending', keyword: 'final de The Skin Stapler',
    title: 'Final de The Skin Stapler explicado: História completa',
    description: 'O final de The Skin Stapler revela Elias Crow, sua vingança, o destino de Robbie e a decisão de Slater. Variações do epílogo seguem sem confirmação.',
    eyebrow: 'Spoilers pesados da história',
    directAnswer: 'O Skin Stapler é Elias Crow, dono do restaurante Flesh Pit. Ele quer se vingar porque Dick Slater matou seu irmão, Silus Kain; no confronto final, Robbie cai, Slater usa a arma do parceiro para matar Elias e deixa Carrion City.',
    sections: [
      { title: 'Quem é o Skin Stapler?', paragraphs: ['A investigação identifica Elias Crow e aponta o Flesh Pit como seu esconderijo. O diálogo da versão completa revela nome, localização e motivo antes do último confronto.', 'A identidade não vem de uma teoria da demo. Duas transcrições independentes da campanha final apresentam a mesma revelação.'] },
      { title: 'Por que Elias persegue Slater?', paragraphs: ['Elias busca vingança por Silus Kain, seu irmão. Ele diz que Slater tirou alguém importante dele e promete fazer o detetive sofrer a mesma perda.', 'Legendas automáticas registram o sobrenome também como Kane. A grafia exata nos créditos finais continua com confirmação pendente.'] },
      { title: 'O que acontece com Robbie?', paragraphs: ['Elias domina e prende os dois investigadores. Robbie é derrubado durante a cena e manda Slater usar sua arma.', 'Slater mata Elias e se despede do parceiro. Robbie não volta a se levantar, e as falas de Slater tratam a perda como definitiva.'] },
      { title: 'Por que Slater abandona Carrion City?', paragraphs: ['Resolver o caso não recupera a confiança de Slater na cidade. Depois de perder Robbie, ele diz que terminou de tentar salvar Carrion City e vai embora.', 'O encerramento é amargo, não uma vitória limpa. Elias morre, mas o detetive já não acredita que seu trabalho possa consertar aquele lugar.'] },
      { title: 'Existem vários finais?', paragraphs: ['Os vídeos completos consultados comprovam um final principal. Uma wiki de fãs menciona pequenas mudanças no epílogo de acordo com as fitas ouvidas, mas não há comparação direta entre duas rotas.', 'Um vídeo da demo publicado em fevereiro usa “all endings” no título, porém não documenta os finais da versão lançada em agosto. Qualquer variação adicional segue com confirmação pendente.'] }
    ],
    faq: [
      { question: 'Quem é o assassino?', answer: 'Elias Crow, proprietário do Flesh Pit, é o Skin Stapler.' },
      { question: 'Qual é o motivo de Elias?', answer: 'Ele quer vingar Silus Kain, seu irmão, morto por Dick Slater.' },
      { question: 'Robbie morre?', answer: 'Robbie é derrubado, entrega a arma a Slater e não retorna. A despedida de Slater trata seu destino como final.' },
      { question: 'Slater continua em Carrion City?', answer: 'Não. Após matar Elias, ele desiste de salvar a cidade e vai embora.' }
    ]
  },
  wiki: {
    id: 'wiki', keyword: 'wiki de The Skin Stapler',
    title: 'Wiki de The Skin Stapler: Detonado, elenco e final',
    description: 'A wiki de The Skin Stapler reúne detonado, final, personagens, elenco de voz, demo, lançamento e fatos verificados sobre a versão completa para PC.',
    eyebrow: 'Guia independente de Carrion City',
    directAnswer: 'Esta wiki de The Skin Stapler reúne a rota completa, o final, os personagens, o elenco de voz, a demo, o lançamento e os links oficiais. É um guia independente feito por fãs, sem vínculo com a Tainted Pact ou a Assemble Entertainment.',
    sections: [
      { title: 'O que é The Skin Stapler?', paragraphs: ['The Skin Stapler é um jogo de terror para um jogador com visual retrô de PSX e clima grindhouse. Dick Slater e Robbie Knox investigam um assassino em Carrion City, enquanto outros capítulos mostram civis ligados ao caso.', 'A Tainted Pact desenvolveu o jogo, e a Assemble Entertainment publicou a versão para Windows em 6 de agosto de 2026. O suporte oficial de idioma inclui interface, áudio e legendas em inglês.'] },
      { title: 'Por onde começar', paragraphs: ['Quem quer evitar spoilers deve abrir primeiro o guia para iniciantes e a página de gameplay. O detonado completo traz a ordem dos locais, as tarefas que fazem a história avançar e a diferença entre demo e versão final.', 'A página do final revela o assassino, seu motivo e o destino de Robbie e Slater. Por isso, ela fica separada do restante do hub.'] },
      { title: 'Dados confirmados', paragraphs: ['A Steam classifica o jogo como single-player e lista 16 conquistas. A demo gratuita, lançada em 30 de janeiro de 2026, contém CCPD, Quick Fix e Gutters End.', 'Nenhuma versão de PlayStation, Xbox, Switch, celular ou macOS foi confirmada nas fontes oficiais consultadas. Outras plataformas seguem com confirmação pendente.'], bullets: ['Lançamento: 6 de agosto de 2026', 'Plataforma: Windows PC via Steam e GOG', 'Desenvolvedora: Tainted Pact', 'Publicadora: Assemble Entertainment', 'Idioma oficial: inglês', 'Conquistas na Steam: 16'] },
      { title: 'Fontes oficiais e wikis de fãs', paragraphs: ['Não foi encontrada uma wiki oficial mantida pelo estúdio. As fontes primárias são as páginas da Steam e itch.io, as discussões da Steam e os anúncios da Tainted Pact ou Assemble Entertainment.', 'Duas wikis independentes aparecem nas buscas. Este site só aproveita suas informações quando elas combinam com material oficial ou gameplay verificável.'] },
      { title: 'Informações descartadas ou pendentes', paragraphs: ['Um agregador com conteúdo de celular, Cheat Engine e trainers foi excluído porque suas plataformas contradizem o lançamento oficial para Windows. Uma página desatualizada da IGN com janela Q3 2026 também não substitui a data oficial.', 'Contagens de jogadores, avaliações, preços e promoções mudam com o tempo. Finais alternativos e listas antigas de elenco sem prova direta ficam marcados como confirmação pendente.'] }
    ],
    faq: [
      { question: 'Esta é uma wiki oficial?', answer: 'Não. É um guia independente que aponta para as lojas, a desenvolvedora e a publicadora quando a informação precisa ser oficial.' },
      { question: 'O jogo completo já saiu?', answer: 'Sim. A versão para Windows foi lançada em 6 de agosto de 2026 na Steam e no GOG.' },
      { question: 'The Skin Stapler tem multiplayer?', answer: 'As lojas oficiais listam apenas single-player. Não há multiplayer confirmado.' },
      { question: 'Existem códigos de resgate?', answer: 'Nenhum sistema oficial de códigos foi documentado, e esta wiki não inventa códigos.' }
    ]
  },
  fefe: {
    id: 'fefe', keyword: 'Fefe em The Skin Stapler',
    title: 'Fefe em The Skin Stapler: Personagem e voz',
    description: 'Fefe em The Skin Stapler abre o jogo completo em um apartamento. Veja quem faz sua voz, por que ela não está na demo e quais dados seguem pendentes.',
    eyebrow: 'Personagem jogável e dubladora',
    directAnswer: 'Fefe é a personagem controlada no começo da versão completa. Ela acorda em seu apartamento durante uma tempestade e tem a voz de FeFe, conhecida publicamente como @CovfefeChan.',
    sections: [
      { title: 'O papel de Fefe na abertura', paragraphs: ['Uma impressão publicada no dia do lançamento identifica Fefe como a primeira personagem jogável. A cena mostra o apartamento durante a tempestade e menciona um “midnight matcha” antes de tudo dar errado.', 'Depois, a campanha muda para o CCPD e para a investigação de Dick Slater. Fefe abre a história sem substituir Slater como protagonista da trama policial.'] },
      { title: 'Quem faz a voz de Fefe?', paragraphs: ['O pôster do elenco liga Fefe ao perfil @CovfefeChan. A artista usa o nome FeFe e se apresenta publicamente como VTuber punk-rock e atriz de voz.', 'A Tainted Pact anunciou sua entrada no elenco em 3 de junho de 2026. Nome civil, idade e outras informações privadas não aparecem nas fontes.'] },
      { title: 'Fefe aparece na demo?', paragraphs: ['Não na descrição oficial. A demo lista apenas CCPD com Dick Slater, Quick Fix com Hexy e Gutters End com Blair.', 'A cena do apartamento pertence à versão completa. Não está confirmado se ela foi criada depois da demo ou apenas retirada do recorte gratuito.'] },
      { title: 'Fefe, FeFe e Fifi', paragraphs: ['Fefe é a grafia da personagem no pôster; FeFe é o nome artístico da dubladora. As duas formas não indicam personagens diferentes.', 'Uma legenda automática registra “Fifi” em um texto de conquista. Pode ser erro de transcrição ou grafia usada no jogo; o detalhe segue com confirmação pendente.'] },
      { title: 'O que ainda não sabemos', paragraphs: ['Sobrenome, idade, profissão, relações e destino completo de Fefe não foram confirmados pelas fontes de personagem. O nome oficial completo do capítulo também não foi publicado.', 'Essas lacunas não são preenchidas com teorias. Uma nova informação precisa aparecer no jogo, nos créditos ou em uma descrição oficial.'] }
    ],
    faq: [
      { question: 'Fefe é jogável?', answer: 'Sim. A cobertura da versão completa e a ordem dos capítulos a colocam como a primeira perspectiva jogável.' },
      { question: 'Quem dubla Fefe?', answer: 'FeFe, conhecida como @CovfefeChan, faz a voz da personagem.' },
      { question: 'Fefe está na demo?', answer: 'Ela não aparece na descrição oficial das três seções da demo.' },
      { question: 'Fifi é outra personagem?', answer: 'Não há prova disso. Fifi aparece apenas em transcrição automática; a grafia confirmada é Fefe.' }
    ]
  },
  'hot-dog': {
    id: 'hot-dog', keyword: 'cena do cachorro-quente de The Skin Stapler',
    title: 'Cena do cachorro-quente de The Skin Stapler',
    description: 'A cena do cachorro-quente de The Skin Stapler fica no Quick Fix. Confira a receita de Hexy e entenda por que a animação do cliente virou meme.',
    eyebrow: 'Turno de Hexy no Quick Fix',
    directAnswer: 'A cena do cachorro-quente acontece no capítulo Quick Fix da demo gratuita, com Hexy trabalhando no turno da noite. O preparo segue uma ordem específica, e a maneira estranha como o cliente come o pedido transformou o trecho em meme.',
    sections: [
      { title: 'Onde a cena aparece', paragraphs: ['Quick Fix é uma das três seções oficiais da demo. As outras são CCPD, com Dick Slater, e Gutters End, com Blair.', 'A própria página da Steam manda servir “questionable hot dogs”. A cena não é mod, desafio separado ou invenção da comunidade.'] },
      { title: 'Ordem confirmada do preparo', paragraphs: ['Hexy atende o telefone, busca a carne nos fundos e começa o pedido. Duas transcrições de gameplay mostram a mesma sequência.', 'Use pão tostado, salsicha cozida, mostarda, ketchup e relish. Depois selecione “the works”, coloque o cachorro-quente na embalagem e entregue.'], bullets: ['Pão tostado', 'Salsicha cozida', 'Mostarda e ketchup', 'Relish', 'Opção “the works”', 'Embalagem e entrega'] },
      { title: 'Por que virou meme', paragraphs: ['O cliente come o cachorro-quente de um jeito propositalmente desconfortável e cômico. Clipes de reação circularam no TikTok, YouTube Shorts, Instagram, Facebook e nos comentários do itch.io.', '“Hotdog Eating Challenge” é um rótulo criado pela comunidade, não um modo oficial. Números de curtidas e visualizações mudam e não são tratados como dados permanentes.'] },
      { title: 'A cena está no jogo completo?', paragraphs: ['O local Quick Fix faz parte da rota confirmada da versão final. Porém, os passos detalhados da receita foram verificados linha por linha na demo.', 'Ainda falta confirmação de que todas as falas, ingredientes e animações permaneceram idênticos no lançamento de agosto. O artigo separa a presença do capítulo da forma exata da tarefa.'] },
      { title: 'O que a cena não oferece', paragraphs: ['Quick Fix não é um simulador de restaurante repetível. O preparo é uma tarefa curta dentro de um capítulo linear de terror.', 'Não há prova de receita secreta, pontuação de qualidade ou final alternativo por trocar ingredientes. Essas ideias seguem com confirmação pendente.'] }
    ],
    faq: [
      { question: 'Quem o jogador controla?', answer: 'O jogador controla Hexy durante o turno noturno no Quick Fix.' },
      { question: 'A cena é oficial?', answer: 'Sim. A descrição oficial da demo cita Quick Fix e os cachorros-quentes.' },
      { question: 'É um modo de jogo separado?', answer: 'Não. A tarefa faz parte de um capítulo da história.' },
      { question: 'A versão final é igual à demo?', answer: 'Quick Fix está presente, mas a igualdade de todos os detalhes ainda precisa de confirmação.' }
    ]
  },
  'release-date': {
    id: 'release-date', keyword: 'data de lançamento de The Skin Stapler',
    title: 'Data de lançamento de The Skin Stapler e plataformas',
    description: 'A data de lançamento de The Skin Stapler foi 6 de agosto de 2026 no PC Windows. Confira Steam, GOG, demo, preço inicial e plataformas confirmadas.',
    eyebrow: 'Lançamento verificado',
    directAnswer: 'The Skin Stapler foi lançado em 6 de agosto de 2026 para Windows PC na Steam e no GOG. A demo gratuita, distribuída como aplicativo separado na Steam, saiu antes, em 30 de janeiro de 2026.',
    sections: [
      { title: 'Data confirmada do jogo completo', paragraphs: ['Steam, GOG, o anúncio da publicadora e a cobertura do lançamento apontam para 6 de agosto de 2026. A data já não é uma previsão ou janela de lançamento.', 'Algumas regiões exibiram 7 de agosto por causa do fuso horário. Entradas de terceiros com Q3 2026 ou 31 de dezembro estavam desatualizadas ou usavam datas provisórias.'] },
      { title: 'Plataformas de lançamento', paragraphs: ['A versão completa chegou ao Windows pela Steam e pelo GOG. O GOG oferece instalador offline e distribuição sem DRM.', 'PlayStation, Xbox, Nintendo Switch, Android, iOS e macOS não aparecem como lançamentos confirmados nas fontes oficiais analisadas. Outras plataformas seguem pendentes.'] },
      { title: 'Quando a demo saiu', paragraphs: ['A demo usa o app 4343530 da Steam e foi lançada em 30 de janeiro de 2026. A loja informa duração de 30 a 45 minutos e lista CCPD, Quick Fix e Gutters End.', 'A divulgação cresceu em fevereiro durante a temporada de demos. Esse pico explica artigos mais recentes, mas não muda o registro da Steam.'] },
      { title: 'Preço no lançamento', paragraphs: ['O preço normal documentado foi €14,99 ou US$14,99. Steam e GOG aplicaram 20% de desconto até 20 de agosto de 2026, e o GOG mostrou €11,99 nesse período.', 'Preços atuais variam por região, impostos e promoções futuras. Consulte a loja antes da compra em vez de tratar o valor de lançamento como permanente.'] },
      { title: 'Conteúdo e pontos pendentes', paragraphs: ['A Steam lista 16 conquistas, Compartilhamento Familiar e áudio completo em inglês. O pacote do GOG também incluía The Skin Jankers DLC no recorte pesquisado.', 'Histórico completo de patches, pacotes futuros e transferência de saves entre lojas não foram confirmados. Esses itens precisam de uma fonte atualizada.'] }
    ],
    faq: [
      { question: 'Quando The Skin Stapler foi lançado?', answer: 'Em 6 de agosto de 2026; algumas lojas regionais podem mostrar o dia 7 por causa do fuso.' },
      { question: 'Em quais plataformas está disponível?', answer: 'Steam e GOG para Windows PC estão confirmados.' },
      { question: 'Quando a demo saiu?', answer: 'A demo separada da Steam foi lançada em 30 de janeiro de 2026.' },
      { question: 'Existe versão para PS5?', answer: 'Nenhuma versão de PlayStation foi confirmada nas fontes oficiais consultadas.' }
    ]
  },
  'voice-cast': {
    id: 'voice-cast', keyword: 'elenco de voz de The Skin Stapler',
    title: 'Elenco de voz de The Skin Stapler: Papéis confirmados',
    description: 'O elenco de voz de The Skin Stapler reúne as vozes em inglês de Dick Slater, Robbie Knox, Fefe, Hexy, Nurse Layna, Blair e outros personagens.',
    eyebrow: 'Vozes originais em inglês',
    directAnswer: 'The Skin Stapler tem todos os personagens dublados em inglês. O elenco confirmado inclui RJ Green, Daniel Suraci, HexyIRL, Layna Lazar, Runebee, Luna Arcana, Blairvira, FeFe, Scaroline e KingWoolz; HexyIRL interpreta dois papéis.',
    sections: [
      { title: 'Personagens e intérpretes confirmados', paragraphs: ['Um pôster do elenco relaciona onze personagens a dez perfis públicos. Duas referências independentes reproduzem o mesmo quadro, e publicações da equipe ou dos artistas sustentam várias das relações.', 'A Steam confirma separadamente que todos os personagens têm voz. O único áudio oficial listado no recorte pesquisado é o inglês.'], bullets: ['Dick Slater — RJ Green / @RJGreenVA', 'Robbie Knox — Daniel Suraci / @Daniel_Suraci', 'Hexy e The Skin Stapler — @HexyIRL', 'Nurse Layna — Layna Lazar', 'Bee — @Runebee', 'Luna — Luna Arcana', 'Blair — @Blairvira', 'Fefe — FeFe / @CovfefeChan', 'Scaroline — @Scarolinetv_', 'DJ Woolz — @KingWoolz'] },
      { title: 'Slater, Robbie e o papel duplo de HexyIRL', paragraphs: ['RJ Green interpreta o detetive Dick Slater, e Daniel Suraci faz Robbie Knox. O pôster oferece a ligação direta entre personagem e artista.', 'HexyIRL aparece como Hexy e como o Skin Stapler. Essa função dupla também é apoiada por uma publicação do desenvolvedor.'] },
      { title: 'A entrada tardia de FeFe', paragraphs: ['A Tainted Pact anunciou FeFe no elenco em 3 de junho de 2026. O pôster final liga @CovfefeChan à personagem Fefe.', 'Uma lista anterior incluía @wolfatyourgate e ainda não trazia @CovfefeChan. A presença de @wolfatyourgate nos créditos finais continua com confirmação pendente.'] },
      { title: 'Idiomas e outras dublagens', paragraphs: ['A Steam lista interface, áudio completo e legendas em inglês. A interface em português deste site não significa que o jogo tenha dublagem em português.', 'Não foi encontrado elenco oficial em português, alemão ou espanhol. Dublagens de fãs e futuras atualizações de idioma seguem pendentes.'] },
      { title: 'A lista cobre todos os créditos?', paragraphs: ['A relação cobre os papéis principais sustentados pelo pôster. A pesquisa não capturou todo o texto dos créditos finais.', 'Vozes incidentais, participações e diálogos adicionados por patch podem não aparecer. “Papéis confirmados” não significa necessariamente todo som de voz do jogo.'] }
    ],
    faq: [
      { question: 'Quem faz a voz de Dick Slater?', answer: 'RJ Green, também identificado como @RJGreenVA.' },
      { question: 'Quem dubla Robbie Knox?', answer: 'Daniel Suraci, identificado como @Daniel_Suraci.' },
      { question: 'Quem faz o Skin Stapler?', answer: '@HexyIRL interpreta o assassino e também Hexy.' },
      { question: 'O jogo tem dublagem em português?', answer: 'Não nas fontes oficiais consultadas. Apenas a voz em inglês está confirmada.' }
    ]
  }
};
