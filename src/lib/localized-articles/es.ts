import type { LocalizedArticle, LocalizedArticleId } from './types';

export const esArticles: Record<LocalizedArticleId, LocalizedArticle> = {
  walkthrough: {
    id: 'walkthrough', keyword: 'guía completa de The Skin Stapler',
    title: 'Guía completa de The Skin Stapler: Todos los capítulos',
    description: 'La guía completa de The Skin Stapler recorre la historia desde el piso de Fefe y el CCPD hasta Closing In y el desenlace dentro de The Flesh Pit.',
    eyebrow: 'Recorrido de la versión completa',
    directAnswer: 'La campaña empieza en el piso de Fefe y continúa por el CCPD, Quick Fix, Gutters End, Luna’s Cream Filled Donut Holes, Underworld VHS y Lazar’s Blood Bank. Tras Closing In, la investigación termina en The Flesh Pit; si la historia no avanza, suele faltar una conversación, una prueba, una tarea del turno o una cinta dañada.',
    sections: [
      { title: 'Orden correcto de los capítulos', paragraphs: ['La versión publicada sigue un recorrido narrativo fijo. Entre los escenarios jugables aparecen varios segmentos Aftermath en los que Slater y Robbie comentan las pistas recién encontradas.', 'Dos partidas completas consultadas mantienen el mismo orden general. El tiempo de juego cambia entre una y otra, pero no la sucesión de lugares.'], bullets: ['The Night Before at the Burrows Apartments — Fefe', 'Carrion City Police Department — Dick Slater', 'The Quick Fix — Hexy', 'Gutters End Bowling Alley — Blair', 'Luna’s Cream Filled Donut Holes — Luna', 'Underworld VHS — Scaroline', 'Lazar’s Blood Bank — Nurse Layna', 'Closing In — Dick Slater', 'The Flesh Pit — final'] },
      { title: 'Cómo hacer que avance la historia', paragraphs: ['The Skin Stapler no plantea un mundo abierto. El progreso depende de agotar diálogos, revisar la escena del crimen, completar cada paso del trabajo nocturno y reparar o reproducir las cintas que pide el objetivo.', 'No hay constancia de una contraseña universal ni de un código que permita saltarse todos los puzles. Cuando el marcador no se actualiza, normalmente queda una interacción pendiente en la sala actual.'], bullets: ['Leer por completo el objetivo activo', 'Terminar todas las líneas de diálogo', 'Revisar escritorios, puertas, mostradores y pruebas', 'Completar cada paso de la tarea del turno', 'Volver a probar accesos cerrados después de cambiar de objetivo'] },
      { title: 'La demo y el juego completo no son iguales', paragraphs: ['La demo gratuita incluye el CCPD, Quick Fix y Gutters End. El piso de Fefe, los empleos posteriores, Closing In y The Flesh Pit forman parte del recorrido ampliado de la versión completa.', 'Por eso conviene comenzar una partida nueva desde el principio. Entrar solo a los capítulos conocidos de la demo no reproduce toda la secuencia definitiva de la historia.'] },
      { title: 'Duración y logros', paragraphs: ['Tainted Pact presenta el juego como una historia de terror corta para una noche. Las partidas completas revisadas duran entre 2 horas y 46 minutos y 3 horas y 5 minutos; explorar con calma o repetir escenas puede alargar ese tiempo.', 'Steam muestra 16 logros. Las fuentes consultadas no confirman el requisito exacto de cada uno, así que esta guía no inventa objetivos perdibles.'] },
      { title: 'Detalles todavía pendientes', paragraphs: ['Una wiki de fans menciona pequeños cambios en el texto del epílogo según las cintas escuchadas. No encontramos dos rutas comparables que demuestren esas variaciones, por lo que siguen pendientes de confirmar.', 'Las transcripciones automáticas también alternan grafías como Fefe/Fifi y Kain/Kane. Para Fefe se usa la forma que aparece en el cartel oficial del reparto.'] }
    ],
    faq: [
      { question: '¿Cuánto dura The Skin Stapler?', answer: 'Una partida directa ronda las tres horas en los vídeos analizados. Explorar, repetir escenas y buscar logros puede aumentar la duración.' },
      { question: '¿Cuántos capítulos principales tiene?', answer: 'El recorrido verificado pasa por nueve grandes escenarios jugables, además de varios segmentos Aftermath que enlazan la investigación.' },
      { question: '¿Existe un código para todos los puzles?', answer: 'No hay un código universal confirmado. Casi siempre falta un diálogo, una prueba, una cinta o un paso de la tarea actual.' },
      { question: '¿La guía sirve para la demo?', answer: 'No. Sigue la versión completa publicada en agosto de 2026; la demo solo contiene tres secciones tempranas.' }
    ]
  },
  ending: {
    id: 'ending', keyword: 'final de The Skin Stapler',
    title: 'Final de The Skin Stapler explicado: Historia completa',
    description: 'El final de The Skin Stapler revela a Elias Crow, su venganza, el destino de Robbie y la decisión de Slater. Las variantes del epílogo siguen pendientes.',
    eyebrow: 'Spoilers importantes de la historia',
    directAnswer: 'El Skin Stapler es Elias Crow, propietario del restaurante Flesh Pit. Quiere vengarse de Dick Slater porque este mató a su hermano Silus Kain; en el enfrentamiento final Robbie cae, Slater utiliza el arma de su compañero para matar a Elias y después abandona Carrion City.',
    sections: [
      { title: '¿Quién es el Skin Stapler?', paragraphs: ['La investigación conduce hasta Elias Crow y The Flesh Pit. Los diálogos de la versión completa revelan su nombre, su escondite y su motivo antes del último enfrentamiento.', 'La identidad no procede de una teoría creada a partir de la demo. Dos transcripciones independientes de partidas completas presentan la misma revelación.'] },
      { title: 'Por qué Elias persigue a Dick Slater', paragraphs: ['Elias busca vengar a su hermano Silus Kain. Le recuerda a Slater que le arrebató a una persona importante y promete hacerle sufrir una pérdida equivalente.', 'Algunos subtítulos automáticos escriben el apellido como Kane. La grafía exacta de los créditos finales sigue pendiente de confirmar.'] },
      { title: 'Qué ocurre con Robbie', paragraphs: ['Elias reduce y ata a los dos investigadores. Durante el forcejeo, Robbie queda derribado y le pide a Slater que use su arma.', 'Slater mata a Elias y se despide de su compañero. Robbie no vuelve a levantarse antes de que termine la escena, y las palabras de Slater tratan la pérdida como definitiva.'] },
      { title: 'Por qué Slater deja Carrion City', paragraphs: ['Resolver el caso no devuelve a Slater la confianza en la ciudad. Después de perder a Robbie, afirma que ya no seguirá intentando salvar Carrion City y se marcha.', 'El cierre es amargo, no una victoria limpia. Elias muere, pero Slater deja de creer que su trabajo pueda arreglar aquel lugar.'] },
      { title: '¿Hay varios finales?', paragraphs: ['Las partidas completas consultadas confirman un desenlace principal. Una wiki de fans menciona cambios menores en el epílogo según las cintas escuchadas, aunque no aporta una comparación directa entre rutas.', 'Un vídeo de la demo publicado en febrero incluye “all endings” en el título, pero no documenta los finales de la versión completa de agosto. Cualquier variante adicional sigue pendiente de confirmar.'] }
    ],
    faq: [
      { question: '¿Quién es el asesino?', answer: 'Elias Crow, propietario de The Flesh Pit, es el Skin Stapler.' },
      { question: '¿Cuál es el motivo de Elias?', answer: 'Quiere vengar a su hermano Silus Kain, a quien mató Dick Slater.' },
      { question: '¿Muere Robbie?', answer: 'Robbie queda derribado, entrega su arma a Slater y no regresa. La despedida de Slater presenta su destino como definitivo.' },
      { question: '¿Slater se queda en Carrion City?', answer: 'No. Después de matar a Elias, renuncia a salvar la ciudad y se marcha.' }
    ]
  },
  wiki: {
    id: 'wiki', keyword: 'wiki de The Skin Stapler',
    title: 'Wiki de The Skin Stapler: Guía, reparto y final',
    description: 'La wiki de The Skin Stapler reúne guía completa, final, personajes, reparto de voces, demo, lanzamiento y datos verificados de la versión para PC.',
    eyebrow: 'Guía independiente de Carrion City',
    directAnswer: 'Esta wiki de The Skin Stapler reúne el recorrido completo, el final, los personajes, el reparto de voces, la demo, el lanzamiento y los enlaces oficiales. Es una guía independiente creada por fans y no está vinculada con Tainted Pact ni Assemble Entertainment.',
    sections: [
      { title: 'Qué es The Skin Stapler', paragraphs: ['The Skin Stapler es un juego de terror para un jugador con estética retro de PSX y tono grindhouse. Dick Slater y Robbie Knox investigan a un asesino en Carrion City, mientras otros capítulos muestran la historia desde la perspectiva de civiles relacionados con el caso.', 'Tainted Pact desarrolló el juego y Assemble Entertainment publicó la versión para Windows el 6 de agosto de 2026. El soporte oficial de idioma incluye interfaz, voces y subtítulos en inglés.'] },
      { title: 'Por dónde empezar', paragraphs: ['Quien quiera evitar spoilers debería empezar por la guía para principiantes y la explicación del sistema de juego. La guía completa muestra el orden de los escenarios y las tareas necesarias para seguir avanzando.', 'La página del final revela al asesino, su motivo y lo que ocurre con Robbie y Slater. Por eso está separada del resto del centro de contenidos.'] },
      { title: 'Datos confirmados', paragraphs: ['Steam clasifica el título como juego para un jugador y muestra 16 logros. La demo gratuita apareció el 30 de enero de 2026 e incluye el CCPD, Quick Fix y Gutters End.', 'Las fuentes oficiales consultadas no anuncian versiones para PlayStation, Xbox, Switch, móviles o macOS. Esas plataformas siguen pendientes de confirmar.'], bullets: ['Lanzamiento: 6 de agosto de 2026', 'Plataforma: PC con Windows mediante Steam y GOG', 'Desarrollador: Tainted Pact', 'Editora: Assemble Entertainment', 'Idioma oficial: inglés', 'Logros de Steam: 16'] },
      { title: 'Fuentes oficiales y wikis de fans', paragraphs: ['No se ha encontrado una wiki oficial mantenida por el estudio. Las fuentes primarias son las páginas de Steam e itch.io, los foros de Steam y los anuncios de Tainted Pact o Assemble Entertainment.', 'En buscadores aparecen dos wikis independientes. Aquí solo se incorporan sus datos cuando coinciden con material oficial o con escenas de juego que pueden comprobarse.'] },
      { title: 'Información descartada o pendiente', paragraphs: ['Se excluyó un agregador con versiones móviles, Cheat Engine y trainers porque sus plataformas contradicen el lanzamiento oficial para Windows. Una ficha antigua de IGN con la ventana Q3 2026 tampoco sustituye a la fecha ya confirmada.', 'Las cifras de jugadores, reseñas, precios y descuentos cambian con el tiempo. Los finales alternativos o listas antiguas del reparto sin una prueba directa se marcan como pendientes de confirmar.'] }
    ],
    faq: [
      { question: '¿Esta es una wiki oficial?', answer: 'No. Es una guía independiente que enlaza a las tiendas, el desarrollador y la editora cuando el dato necesita una fuente oficial.' },
      { question: '¿Ya salió el juego completo?', answer: 'Sí. La versión para Windows se publicó el 6 de agosto de 2026 en Steam y GOG.' },
      { question: '¿The Skin Stapler tiene multijugador?', answer: 'Las tiendas oficiales solo indican un jugador. No hay un modo multijugador confirmado.' },
      { question: '¿Existen códigos de canje?', answer: 'No se ha documentado un sistema oficial de códigos, y esta wiki no inventa códigos.' }
    ]
  },
  fefe: {
    id: 'fefe', keyword: 'Fefe en The Skin Stapler',
    title: 'Fefe en The Skin Stapler: Personaje y actriz de voz',
    description: 'Fefe en The Skin Stapler abre el juego completo en un piso. Descubre quién presta su voz, por qué no aparece en la demo y qué datos siguen pendientes.',
    eyebrow: 'Personaje jugable y voz',
    directAnswer: 'Fefe es el personaje controlable al inicio de la versión completa. Despierta en su piso durante una tormenta y cuenta con la voz de FeFe, conocida públicamente como @CovfefeChan.',
    sections: [
      { title: 'El papel de Fefe en la apertura', paragraphs: ['Una reseña publicada el día del lanzamiento identifica a Fefe como la primera perspectiva jugable. La escena transcurre de noche en su piso, durante una tormenta, y menciona un “midnight matcha” antes de que la situación se tuerza.', 'Después, la campaña salta al CCPD y a la investigación de Dick Slater. Fefe abre la historia, pero no sustituye a Slater como figura central del caso.'] },
      { title: 'Quién pone voz a Fefe', paragraphs: ['El cartel del reparto relaciona a Fefe con la cuenta @CovfefeChan. La intérprete utiliza el nombre FeFe y se presenta públicamente como VTuber punk-rock y actriz de voz.', 'Tainted Pact anunció su incorporación al reparto el 3 de junio de 2026. Las fuentes disponibles no incluyen su nombre civil ni otros datos privados.'] },
      { title: '¿Fefe aparece en la demo?', paragraphs: ['No figura en la descripción oficial. La demo solo enumera el CCPD con Dick Slater, Quick Fix con Hexy y Gutters End con Blair.', 'La escena del piso pertenece a la versión completa de agosto. No está confirmado si se creó después de la demo o si simplemente quedó fuera de la muestra gratuita.'] },
      { title: 'Fefe, FeFe y Fifi', paragraphs: ['Fefe es la grafía del personaje en el cartel; FeFe es el nombre artístico de la actriz. Las dos formas no representan personajes diferentes.', 'Una transcripción automática registra “Fifi” al reconocer el texto de un logro. Puede ser un error del subtítulo o una grafía usada dentro del juego; el detalle sigue pendiente de confirmar.'] },
      { title: 'Lo que todavía no sabemos', paragraphs: ['Las fuentes de personajes no confirman el apellido, la edad, la profesión, las relaciones ni el destino completo de Fefe. Tampoco se ha publicado un título oficial completo para su capítulo.', 'Esos huecos no se rellenan con teorías. Cualquier dato nuevo debería aparecer en una escena, en los créditos o en una descripción oficial.'] }
    ],
    faq: [
      { question: '¿Fefe es jugable?', answer: 'Sí. La cobertura de la versión completa y el orden de los capítulos la sitúan como la primera perspectiva jugable.' },
      { question: '¿Quién interpreta a Fefe?', answer: 'FeFe, conocida como @CovfefeChan, presta su voz al personaje.' },
      { question: '¿Fefe está en la demo?', answer: 'No aparece en la descripción oficial de las tres secciones de la demo.' },
      { question: '¿Fifi es otro personaje?', answer: 'No hay pruebas de ello. Fifi solo aparece en una transcripción automática; la grafía confirmada es Fefe.' }
    ]
  },
  'hot-dog': {
    id: 'hot-dog', keyword: 'escena del perrito caliente de The Skin Stapler',
    title: 'Escena del perrito caliente de The Skin Stapler',
    description: 'La escena del perrito caliente de The Skin Stapler ocurre en Quick Fix. Sigue la receta de Hexy y descubre por qué la animación del cliente se hizo meme.',
    eyebrow: 'Turno de Hexy en Quick Fix',
    directAnswer: 'La escena del perrito caliente aparece en el capítulo Quick Fix de la demo gratuita, durante el turno nocturno de Hexy. El pedido se prepara en un orden concreto, y la forma extraña en que el cliente se lo come convirtió el fragmento en un meme.',
    sections: [
      { title: 'Dónde aparece la escena', paragraphs: ['Quick Fix es una de las tres secciones oficiales de la demo. Las otras dos son el CCPD con Dick Slater y Gutters End con Blair.', 'La propia descripción de Steam invita a servir “questionable hot dogs”. No se trata de un mod, un desafío independiente ni una misión inventada por la comunidad.'] },
      { title: 'Orden confirmado de la preparación', paragraphs: ['Hexy contesta al teléfono, recoge la carne en la parte trasera y empieza a montar el pedido. Dos transcripciones de partidas muestran la misma secuencia.', 'Hay que usar pan tostado, salchicha cocinada, mostaza, kétchup y relish. Después se elige “the works”, se coloca el perrito en el envase y se sirve.'], bullets: ['Pan tostado', 'Salchicha cocinada', 'Mostaza y kétchup', 'Relish', 'Opción “the works”', 'Colocar en el envase y servir'] },
      { title: 'Por qué se convirtió en meme', paragraphs: ['El cliente se come el perrito de una manera deliberadamente incómoda y cómica. Los vídeos de reacción circularon por TikTok, YouTube Shorts, Instagram, Facebook y los comentarios de itch.io.', '“Hotdog Eating Challenge” es una etiqueta creada por la comunidad, no un modo oficial. Las cifras de visitas o me gusta cambian y no se presentan como datos permanentes.'] },
      { title: 'La escena en el juego completo', paragraphs: ['Quick Fix forma parte del recorrido confirmado de la versión final. Sin embargo, los pasos exactos de la receta solo se han comprobado línea por línea en la demo.', 'Sigue pendiente confirmar que todos los ingredientes, diálogos y animaciones permanecieran idénticos en el lanzamiento de agosto. Se separa la presencia del capítulo de los detalles concretos de la tarea.'] },
      { title: 'Lo que la escena no ofrece', paragraphs: ['Quick Fix no funciona como simulador de restaurante repetible. La preparación es una tarea breve dentro de un capítulo lineal de terror.', 'No hay pruebas de una receta secreta, una puntuación de calidad o un final alternativo por cambiar ingredientes. Esas afirmaciones siguen pendientes de confirmar.'] }
    ],
    faq: [
      { question: '¿A quién controla el jugador?', answer: 'El jugador controla a Hexy durante su turno nocturno en Quick Fix.' },
      { question: '¿La escena es oficial?', answer: 'Sí. La descripción oficial de la demo menciona Quick Fix y sus perritos calientes.' },
      { question: '¿Es un modo de juego separado?', answer: 'No. La tarea forma parte de un capítulo de la historia.' },
      { question: '¿La versión final es idéntica a la demo?', answer: 'Quick Fix está presente, pero la coincidencia exacta de todos los detalles sigue pendiente de confirmar.' }
    ]
  },
  'release-date': {
    id: 'release-date', keyword: 'fecha de lanzamiento de The Skin Stapler',
    title: 'Fecha de lanzamiento de The Skin Stapler y plataformas',
    description: 'La fecha de lanzamiento de The Skin Stapler fue el 6 de agosto de 2026 en PC. Consulta Steam, GOG, la demo, el precio inicial y las plataformas.',
    eyebrow: 'Lanzamiento comprobado',
    directAnswer: 'The Skin Stapler se publicó el 6 de agosto de 2026 para PC con Windows en Steam y GOG. La demo gratuita, distribuida como una aplicación separada en Steam, había salido antes: el 30 de enero de 2026.',
    sections: [
      { title: 'Fecha confirmada del juego completo', paragraphs: ['Steam, GOG, el anuncio de la editora y la cobertura del estreno coinciden en el 6 de agosto de 2026. Ya no se trata de una previsión ni de una ventana de lanzamiento.', 'Algunas regiones muestran el 7 de agosto por la diferencia horaria. Las fichas antiguas con Q3 2026 o 31 de diciembre estaban desactualizadas o utilizaban fechas provisionales.'] },
      { title: 'Plataformas de lanzamiento', paragraphs: ['La versión completa llegó a Windows mediante Steam y GOG. GOG ofrece distribución sin DRM y un instalador para jugar sin conexión.', 'PlayStation, Xbox, Nintendo Switch, Android, iOS y macOS no aparecen como lanzamientos confirmados en las fuentes oficiales consultadas. Esas plataformas siguen pendientes.'] },
      { title: 'Cuándo salió la demo', paragraphs: ['La demo usa el identificador 4343530 de Steam y se publicó el 30 de enero de 2026. La tienda indica una duración de 30 a 45 minutos y enumera el CCPD, Quick Fix y Gutters End.', 'La promoción creció durante febrero, en plena temporada de demos. Ese impulso explica artículos posteriores, pero no cambia la fecha registrada por Steam.'] },
      { title: 'Precio en el lanzamiento', paragraphs: ['El precio normal documentado fue de 14,99 euros o 14,99 dólares. Steam y GOG aplicaron un descuento del 20 % hasta el 20 de agosto de 2026, y GOG mostró 11,99 euros durante esa promoción.', 'El precio actual depende de la región, los impuestos y futuras ofertas. Conviene comprobar la tienda antes de comprar en lugar de asumir que el importe inicial sigue vigente.'] },
      { title: 'Contenido y datos pendientes', paragraphs: ['Steam muestra 16 logros, préstamo familiar y voces completas en inglés. El paquete de GOG también incluía The Skin Jankers DLC en el momento de la consulta.', 'No se ha confirmado un historial completo de parches, futuros paquetes o transferencia de partidas guardadas entre tiendas. Esos detalles necesitan una fuente actualizada.'] }
    ],
    faq: [
      { question: '¿Cuándo se lanzó The Skin Stapler?', answer: 'El 6 de agosto de 2026; algunas tiendas regionales pueden mostrar el día 7 por el huso horario.' },
      { question: '¿En qué plataformas está disponible?', answer: 'Steam y GOG para PC con Windows son las plataformas confirmadas.' },
      { question: '¿Cuándo salió la demo?', answer: 'La demo independiente de Steam se publicó el 30 de enero de 2026.' },
      { question: '¿Hay una versión para PS5?', answer: 'Ninguna versión de PlayStation está confirmada en las fuentes oficiales consultadas.' }
    ]
  },
  'voice-cast': {
    id: 'voice-cast', keyword: 'reparto de voces de The Skin Stapler',
    title: 'Reparto de voces de The Skin Stapler confirmado',
    description: 'El reparto de voces de The Skin Stapler reúne a quienes interpretan en inglés a Dick Slater, Robbie Knox, Fefe, Hexy, Nurse Layna, Blair y más.',
    eyebrow: 'Voces originales en inglés',
    directAnswer: 'Todos los personajes de The Skin Stapler tienen voz en inglés. El reparto confirmado incluye a RJ Green, Daniel Suraci, HexyIRL, Layna Lazar, Runebee, Luna Arcana, Blairvira, FeFe, Scaroline y KingWoolz; HexyIRL interpreta dos papeles.',
    sections: [
      { title: 'Personajes e intérpretes confirmados', paragraphs: ['Un cartel del reparto relaciona once personajes con diez perfiles públicos. Dos referencias independientes reproducen el mismo cuadro, y varias publicaciones del equipo o de los artistas respaldan esas correspondencias.', 'Steam confirma por separado que todos los personajes tienen voz. El único audio oficial indicado en las fuentes consultadas es el inglés.'], bullets: ['Dick Slater — RJ Green / @RJGreenVA', 'Robbie Knox — Daniel Suraci / @Daniel_Suraci', 'Hexy y The Skin Stapler — @HexyIRL', 'Nurse Layna — Layna Lazar', 'Bee — @Runebee', 'Luna — Luna Arcana', 'Blair — @Blairvira', 'Fefe — FeFe / @CovfefeChan', 'Scaroline — @Scarolinetv_', 'DJ Woolz — @KingWoolz'] },
      { title: 'Slater, Robbie y el doble papel de HexyIRL', paragraphs: ['RJ Green interpreta al detective Dick Slater y Daniel Suraci da voz a Robbie Knox. El cartel ofrece una relación directa entre cada personaje y su intérprete.', 'HexyIRL aparece como Hexy y también como el Skin Stapler. Una publicación del desarrollador respalda ese doble papel.'] },
      { title: 'La incorporación posterior de FeFe', paragraphs: ['Tainted Pact anunció a FeFe como parte del reparto el 3 de junio de 2026. El cartel final vincula la cuenta @CovfefeChan con el personaje de Fefe.', 'Una lista anterior incluía a @wolfatyourgate y todavía no mostraba a @CovfefeChan. La presencia de @wolfatyourgate en los créditos finales sigue pendiente de confirmar.'] },
      { title: 'Idiomas y otros doblajes', paragraphs: ['Steam indica interfaz, voces completas y subtítulos en inglés. Que esta web tenga una versión en español no significa que el juego incluya doblaje en español.', 'No se ha encontrado un reparto oficial en español, alemán o portugués. Los doblajes de fans y posibles actualizaciones de idioma siguen pendientes.'] },
      { title: '¿La lista cubre todos los créditos?', paragraphs: ['La relación recoge los papeles principales respaldados por el cartel. La investigación no capturó el texto completo de los créditos finales.', 'Podrían faltar voces incidentales, cameos o diálogos añadidos mediante parches. “Papeles confirmados” no significa necesariamente que la lista incluya cada sonido de voz del juego.'] }
    ],
    faq: [
      { question: '¿Quién interpreta a Dick Slater?', answer: 'RJ Green, también identificado como @RJGreenVA.' },
      { question: '¿Quién pone voz a Robbie Knox?', answer: 'Daniel Suraci, identificado como @Daniel_Suraci.' },
      { question: '¿Quién interpreta al Skin Stapler?', answer: '@HexyIRL interpreta al asesino y también a Hexy.' },
      { question: '¿El juego tiene doblaje en español?', answer: 'No en las fuentes oficiales consultadas. Solo está confirmado el audio en inglés.' }
    ]
  }
};
