export type GuideFaq = { q: string; a: string };

export const GUIDE_FAQS: Record<string, GuideFaq[]> = {
  '/horarios/': [
    { q: '¿Cuál es el horario del Santuario de Cristo Rey?', a: 'La web del santuario publica apertura de 06:00 a 20:00 como referencia del recinto. Ese dato corresponde al santuario, no garantiza por sí solo el acceso a toda la montaña ni a cada servicio del día.' },
    { q: '¿El horario del santuario es igual al de toda la montaña?', a: 'No. La montaña, los accesos vehiculares, el estacionamiento y la caminata final pueden tener condiciones distintas. Confirma el acceso del día antes de subir.' },
    { q: '¿Dónde reviso si habrá misa?', a: 'Las misas tienen una página litúrgica aparte; revísala por separado del horario general y, si tu visita depende de una hora concreta, confirma por el canal oficial del santuario.' }
  ],
  '/horarios-de-misa/': [
    { q: '¿Dónde veo los horarios de misa?', a: 'En la página oficial de horarios de misas del santuario; conviene revisarla el mismo día o poco antes del viaje.' },
    { q: '¿El horario de misa es igual al de visita general?', a: 'No. La apertura del recinto y la programación litúrgica responden a preguntas distintas.' },
    { q: '¿Qué margen debo dejar si viajo por una misa?', a: 'Suma el tiempo de subida, la caminata final y el regreso; llegar con poco tiempo puede dejarte fuera aunque el santuario siga abierto.' }
  ],
  '/como-llegar/': [
    { q: '¿Cuál es la base para llegar al Cubilete?', a: 'Silao, en el mismo municipio del cerro, suele ser el punto de partida más directo para organizar el último tramo hacia el santuario.' },
    { q: '¿Puedo llegar en transporte público hasta la cima?', a: 'No asumas que cualquier referencia de transporte te deja en la misma zona ni que tiene regreso sencillo; confirma el último tramo y el punto de bajada.' },
    { q: '¿Qué debo guardar antes de salir?', a: 'La ubicación del cerro en Google Maps y el estado de la carretera y el clima; acuerda con tu conductor dónde termina el servicio ese día.' }
  ],
  '/ubicacion/': [
    { q: '¿Dónde está el Cerro del Cubilete?', a: 'En el municipio de Silao de la Victoria, estado de Guanajuato, México. En búsquedas en inglés también aparece como Cubilete Hill.' },
    { q: '¿El pin de Maps es el estacionamiento?', a: 'No. El pin de la montaña indica la ficha general, no un estacionamiento señalizado ni un acceso accesible.' },
    { q: '¿Qué ciudad es la salida más común?', a: 'Guanajuato capital y León son las salidas más consultadas; el aeropuerto del Bajío también queda en la zona de Silao.' }
  ],
  '/desde-guanajuato/': [
    { q: '¿Se puede visitar el Cubilete desde Guanajuato en un día?', a: 'Sí, como excursión de un día; conviene salir con tiempo y resolver el regreso antes de subir.' },
    { q: '¿Cuánto tiempo lleva aproximadamente?', a: 'Depende de tu transporte; además del viaje suma el ascenso, la visita a la explanada y el recinto, y las esperas.' },
    { q: '¿Qué debo confirmar antes de salir?', a: 'Horario del santuario o de misa, clima, modo de regreso y combustible o batería suficiente.' }
  ],
  '/desde-leon/': [
    { q: '¿Es largo el viaje desde León?', a: 'Se siente como una salida regional cercana, pero trátala con la misma seriedad que cualquier trayecto serrano.' },
    { q: '¿El regreso es sencillo?', a: 'Acuerda el punto de recogida y el tiempo de espera antes de subir; no lo dejes para el último momento.' },
    { q: '¿Qué revisar antes de arrancar?', a: 'Ruta guardada, horario del santuario o misa, clima y plan de regreso claro para el mismo día.' }
  ],
  '/en-coche/': [
    { q: '¿Puedo dejar el coche frente al santuario?', a: 'No lo des por hecho; confirma el punto de descenso permitido y si hay espacio ese día.' },
    { q: '¿La carretera es fácil?', a: 'Es de montaña, con curvas y pendientes; sube sin prisas, con combustible y agua, y con el regreso ya pensado.' },
    { q: '¿El nuevo arco elimina la caminata?', a: 'El acceso de 2026 mejora la llegada, pero no garantiza ruta sin escalones ni acceso para todos los vehículos.' }
  ],
  '/altitud/': [
    { q: '¿Qué altitud tiene el Cerro del Cubilete?', a: 'Unos 2.579 m s. n. m., una referencia útil para clima y sensación térmica durante la visita.' },
    { q: '¿La altitud es la altura de la estatua?', a: 'No; la cifra es la del cerro, no la del monumento ni la del Cristo.' },
    { q: '¿Hace frío arriba?', a: 'Con frecuencia más fresco y ventoso que en el valle; lleva agua, protector solar y una capa ligera casi todo el año.' }
  ],
  '/precio-de-entrada/': [
    { q: '¿Cuánto cuesta entrar al santuario?', a: 'No hemos confirmado una tarifa vigente en fuentes oficiales; no afirmamos un precio. Confírmalo con el santuario antes de tu visita.' },
    { q: '¿La entrada al cerro es gratuita?', a: 'No asumimos gratuidad ni costo; la condición de acceso y cualquier cuota deben verificarse con el recinto.' },
    { q: '¿Por qué no dan un precio?', a: 'Para no inventar cifras; las tarifas pueden cambiar y las fuentes consultadas no las confirman de forma actualizada.' }
  ],
  '/cuanto-tiempo-se-necesita/': [
    { q: '¿Cuántas horas se necesitan en el cerro?', a: 'Unas dos horas para una visita tranquila a la explanada y el recinto, además del tiempo de transporte.' },
    { q: '¿Qué alarga la visita?', a: 'Una misa, una peregrinación o la caminata desde el nuevo arco suman margen; el acceso reciente describe unos 800 m hasta el santuario.' },
    { q: '¿Cuento el viaje en esas dos horas?', a: 'No; esas dos horas cubren la explanada y el recinto, no el traslado desde Silao, León o Guanajuato.' }
  ],
  '/mejor-hora-para-visitar/': [
    { q: '¿Cuál es la mejor hora?', a: 'No hay una única; muchos prefieren entrar temprano por menos gente y luz suave, pero depende de clima y temporada.' },
    { q: '¿La niebla afecta siempre?', a: 'A 2.579 m la cima puede estar nublada a cualquier hora; revisa el pronóstico y no supongas cielo despejado por el mes.' },
    { q: '¿El horario del santuario limita la visita?', a: 'El santuario publica 06:00–20:00 como marco general, pero no garantiza condiciones iguales todo el día.' }
  ],
  '/antes-de-visitar/': [
    { q: '¿Qué confirmo antes de subir?', a: 'Horario del santuario, misa si aplica, estado de carretera, clima en altura y punto de regreso.' },
    { q: '¿El nuevo acceso cambia todo?', a: 'El arco y la explanada de 2026 mejoran la llegada y describen ~800 m al santuario, pero no certifican ruta sin escalones.' },
    { q: '¿A quién pregunto lo que no sé?', a: 'Al canal oficial del santuario; esta guía es independiente y no sustituye su información.' }
  ],
  '/desde-silao/': [
    { q: '¿Por qué salir de Silao?', a: 'El cerro está en ese municipio, así que acorta el tramo de montaña respecto a Guanajuato o León.' },
    { q: '¿Dónde termina el servicio?', a: 'Acuerda con tu conductor o grupo el punto de descenso y el regreso; no confundas el pin de la montaña con un estacionamiento.' },
    { q: '¿El último tramo es fácil?', a: 'Incluye carretera de sierra con curvas y pendientes; comprueba el acceso permitido para tu vehículo.' }
  ],
  '/transporte-publico/': [
    { q: '¿Hay autobús directo a la cima?', a: 'No confirmamos una corrida directa y permanente; verifica la ruta, el punto de bajada y el regreso antes de comprar.' },
    { q: '¿De dónde salen las corridas?', a: 'Referencias locales de Silao suelen concentrar las opciones; confirma horario y punto de regreso ese día.' },
    { q: '¿El regreso está resuelto?', a: 'No lo des por hecho; acuerda la vuelta antes de subir, sobre todo sin auto propio.' }
  ],
  '/estacionamiento/': [
    { q: '¿Hay estacionamiento en el cerro?', a: 'No confirmamos cupos ni tarifas; pregunta por el punto de descenso y el espacio disponible para el día.' },
    { q: '¿Es accesible sin escalones?', a: 'No confirmamos una ruta continua sin escalones; si necesitas reducir caminata, pregunta al santuario por rampas.' },
    { q: '¿El pin de Maps es el estacionamiento?', a: 'No; el pin indica la ficha general de la montaña, no un cupo señalizado.' }
  ],
  '/carretera-y-acceso/': [
    { q: '¿La carretera es peligrosa?', a: 'No es una autopista; es de montaña con curvas y pendientes. Reduce velocidad y conduce con precaución.' },
    { q: '¿El clima afecta el acceso?', a: 'Sí, lluvia o niebla reducen visibilidad y las peregrinaciones pueden cambiar la circulación; confirma antes de subir.' },
    { q: '¿El nuevo arco elimina precauciones?', a: 'No; la obra de 2026 mejora la llegada pero no quita las precauciones de una carretera de sierra.' }
  ],
  '/mapa/': [
    { q: '¿Dónde veo el mapa del cerro?', a: 'La ficha en Google Maps es la referencia práctica; úsala como punto de partida, no como garantía de acceso en vehículo.' },
    { q: '¿Las coordenadas son exactas?', a: 'Son de referencia (~21.0120, −101.3684); útiles para ubicar la montaña, no para señalar un punto final accesible.' },
    { q: '¿El mapa muestra el estacionamiento?', a: 'El pin general no equivale a un estacionamiento señalizado; confirma el punto de descenso con el santuario.' }
  ],
  '/miradores/': [
    { q: '¿Hay un mirador señalado?', a: 'No afirmamos una plataforma de observación etiquetada; la vista se aprecia desde la explanada del recinto.' },
    { q: '¿Siempre hay buena vista?', a: 'No; la visibilidad depende del clima y la niebla puede ocultar el panorama.' },
    { q: '¿Qué hora es mejor para fotos?', a: 'La luz de mañana y atardecer suele favorecer cuando el cielo está despejado.' }
  ],
  '/clima/': [
    { q: '¿Hace frío en la cima?', a: 'A 2.579 m suele hacer más fresco y ventoso que en el valle, incluso si abajo hace calor.' },
    { q: '¿Cuándo llueve más?', a: 'Las lluvias de verano son frecuentes en la región; revisa el pronóstico del día de tu visita.' },
    { q: '¿El clima afecta el acceso?', a: 'Sí; niebla, lluvia o viento pueden cambiar la visibilidad y la circulación. Lleva capa y revisa el estado de la carretera.' }
  ],
  '/cristo-rey/': [
    { q: '¿Qué es el monumento a Cristo Rey?', a: 'Es el monumento en la cima del Cerro del Cubilete, centro de devoción a Cristo Rey en México.' },
    { q: '¿Cuándo se construyó?', a: 'El santuario sitúa la construcción del monumento actual en 1944 y la bendición de la estatua en 1950.' },
    { q: '¿Es el primer Cristo del cerro?', a: 'No; el recinto lo describe como el quinto monumento de esta devoción.' }
  ],
  '/santuario/': [
    { q: '¿Qué es el Santuario de Cristo Rey?', a: 'El recinto religioso en la cima del cerro, con su propio horario, celebraciones y condiciones de acceso.' },
    { q: '¿Cuál es su horario?', a: 'Su web publica apertura de 06:00 a 20:00 como referencia del recinto, sin garantizar el acceso a toda la montaña.' },
    { q: '¿Dónde veo los horarios de misa?', a: 'En la página litúrgica aparte del santuario; no uses el horario de misa como horario de visita general.' }
  ],
  '/historia/': [
    { q: '¿Desde cuándo hay devoción en el cerro?', a: 'La web del santuario vincula la devoción a Cristo Rey al cerro desde el siglo XX.' },
    { q: '¿El monumento actual es de 1944?', a: 'La construcción del monumento actual inició en 1944 y la estatua se bendijo en 1950, según el santuario.' },
    { q: '¿Es el primer Cristo levantado ahí?', a: 'No; el recinto lo describe como el quinto monumento de esta devoción.' }
  ],
  '/arquitectura/': [
    { q: '¿Cómo es el monumento?', a: 'Reúne una base, una cúpula que enmarca la imagen y la figura de Cristo con los brazos abiertos como remate.' },
    { q: '¿Cuánto mide?', a: 'No incluimos altura ni diámetro porque no los confirmamos en una fuente respaldada; mejor remitir al santuario.' },
    { q: '¿Se puede entrar a la cúpula?', a: 'No afirmamos acceso abierto; respeta los espacios de oración y las indicaciones del recinto.' }
  ],
  '/guerra-cristera/': [
    { q: '¿Qué relación hay con el cerro?', a: 'El cerro es centro de devoción a Cristo Rey, cuya historia en México se entrelaza con la Guerra Cristera.' },
    { q: '¿Esta página toma postura?', a: 'No; ofrece contexto neutral y remite a fuentes históricas verificables.' },
    { q: '¿Dónde profundizar?', a: 'En la sección de historia del santuario y en fuentes académicas o institucionales sobre el periodo.' }
  ],
  '/peregrinaciones/': [
    { q: '¿Se puede peregrinar al cerro?', a: 'Sí, es un destino de peregrinación; confirma fechas y accesos con el santuario antes de tu visita.' },
    { q: '¿Afectan la afluencia?', a: 'Sí; en fechas señaladas aumentan personas, tráfico y tiempos de espera.' },
    { q: '¿Cómo prepararme?', a: 'Deja margen amplio, confirma estacionamiento y regreso, y respeta los espacios de oración.' }
  ],
  '/visita-en-familia/': [
    { q: '¿Es apto para niños?', a: 'Sí, con ritmo tranquilo, descansos y la caminata final sin correr; explica a los niños que es un lugar de oración.' },
    { q: '¿Cuánto caminan?', a: 'El acceso reciente describe unos 800 m desde el arco al santuario; confirma el punto de menor caminata.' },
    { q: '¿Qué llevar?', a: 'Agua, snacks, protección solar, una capa y calzado con agarre; la altura cansa más de lo esperado.' }
  ],
  '/adultos-mayores/': [
    { q: '¿Es adecuado para adultos mayores?', a: 'Sí, planéalo para reducir esfuerzo: menos caminata, más descanso y certeza del descenso.' },
    { q: '¿Hay ruta sin escalones?', a: 'No lo confirmamos; pregunta al santuario por descenso y rampas hacia el templo.' },
    { q: '¿Qué precauciones por la altura?', a: 'A 2.579 m el cuerpo se esfuerza más; lleva capa, agua y calzado seguro, y evita frío o calor extremo.' }
  ],
  '/accesibilidad/': [
    { q: '¿Es accesible el cerro?', a: 'No confirmamos una ruta continua sin escalones; pregunta al santuario por rampas y acceso al templo para tu fecha.' },
    { q: '¿Puedo llegar en silla de ruedas?', a: 'Confirma con el recinto el acceso y las rampas disponibles; no lo asumas por el pin de Maps.' },
    { q: '¿Qué debo llevar si camino poco?', a: 'Acuerda el punto de descenso más cercano al recinto y verifica que esté habilitado el día de tu visita.' }
  ],
  '/medio-dia/': [
    { q: '¿Cabe un medio día desde Silao?', a: 'Sí; Silao acorta el tramo de montaña y deja varias horas para la visita.' },
    { q: '¿Es un horario fijo?', a: 'No; es una propuesta con margen para clima y afluencia, no un horario oficial.' },
    { q: '¿Qué incluye?', a: 'Salida temprana, ascenso, explanada, recinto y regreso con luz suficiente.' }
  ],
  '/un-dia-desde-guanajuato/': [
    { q: '¿Un día completo desde la capital?', a: 'Sí, cómodo si sales con tiempo y defines el regreso antes de salir.' },
    { q: '¿Cuánto tiempo en el cerro?', a: 'Unas dos horas en el cerro son base razonable, sin contar el transporte.' },
    { q: '¿Puedo unir la ciudad?', a: 'Sí, pero trátala como parada aparte; planea con holgura para no apurarte.' }
  ],
  '/consejos-para-fotografiar/': [
    { q: '¿Cuándo fotografiar?', a: 'Luz de mañana o atardecer suele favorecer, solo si el cielo está claro.' },
    { q: '¿Puedo usar flash en el recinto?', a: 'Reduce el flash y el ruido durante misas o peregrinaciones; es un lugar de fe.' },
    { q: '¿Dónde encuadrar?', a: 'La explanada habilitada suele bastar; no trepes ni bloquees el paso de peregrinos.' }
  ],
  '/donde-comer/': [
    { q: '¿Hay dónde comer en el cerro?', a: 'Suelen haber puestos en días de afluencia; no confirmamos horarios fijos, así que lleva agua y snacks.' },
    { q: '¿Dónde comer con certeza?', a: 'En Silao, la ciudad del cerro, encuentras opciones antes o después del ascenso.' },
    { q: '¿Hay restaurantes señalados?', a: 'No listamos negocios sin confirmar; las mejores opciones verificables están en Silao.' }
  ],
  '/servicios-para-visitantes/': [
    { q: '¿Hay baños en el cerro?', a: 'Suelen haber en torno al acceso o la explanada; no confirmamos disponibilidad ni horario fijo.' },
    { q: '¿Hay atención médica?', a: 'Pregunta al santuario si necesitas primeros auxilios o atención concreta; no lo confirmamos en tiempo real.' },
    { q: '¿Qué llevar igualmente?', a: 'Agua, protección solar, capa y calzado; eso reduce la dependencia de servicios variables.' }
  ],
  '/lugares-cercanos/': [
    { q: '¿Qué visitar cerca?', a: 'Silao para servicios y un centro con historia, y el Parque Guanajuato Bicentenario como punto regional.' },
    { q: '¿Incluyo la ciudad de Guanajuato?', a: 'Sí como excursión más amplia, pero suma transporte y descansos para no sobrecargar el día.' },
    { q: '¿Hay lista de restaurantes?', a: 'No incluimos negocios sin verificar; señalamos destinos concretos y verificables.' }
  ],
  '/ruta-silao/': [
    { q: '¿Cómo armar la ruta Silao–Cubilete?', a: 'Parte de Silao para abastecerte, sube con luz y regresa a la ciudad con tiempo.' },
    { q: '¿Por qué base en Silao?', a: 'Está en el mismo municipio del cerro y acorta el tramo de montaña.' },
    { q: '¿Saturo el día?', a: 'No; deja margen para descansos y clima; una ruta cómoda vale más que un itinerario apretado.' }
  ],
  '/ruta-guanajuato/': [
    { q: '¿Ruta de un día desde la capital?', a: 'Sí; combina carretera de valle y tramo de sierra, con margen para el regreso.' },
    { q: '¿Cuánto en el cerro?', a: 'Unas dos horas en el cerro son base razonable, sin contar el transporte.' },
    { q: '¿Uso Silao como base?', a: 'Sí, puedes comer y abastecerte ahí para acortar el tramo de montaña.' }
  ]
};
