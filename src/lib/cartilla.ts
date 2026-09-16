export type PoseId =
  | "neckFlex"
  | "neckSide"
  | "neckTurn"
  | "shoulderCircles"
  | "armCross"
  | "armsUp"
  | "wristFlex"
  | "handsOpen"
  | "wristCircles"
  | "backFold"
  | "trunkTwist"
  | "eyes"
  | "hugOpen"
  | "ankle"
  | "march"
  | "lumbarExt"
  | "walkArms"
  | "quadStretch"
  | "sideBend"
  | "wristStretch"
  | "kneeLift"
  | "hipCircle"
  | "calf"
  | "hamstring"
  | "gluteFig4"
  | "pecStretch"
  | "shrug"
  | "trunkFlex"
  | "elbowFlex"
  | "sitGlute"
  | "ankleSit"
  | "chestOpen";

export type Exercise = {
  id: string;
  name: string;
  execution: string;
  dose: string;
  pose: PoseId;
  where: string;
  benefit: string;
};

export type Group = {
  id: string;
  title: string;
  purpose: string;
  exercises: Exercise[];
};

export type AreaId = "admin" | "conductores" | "mantenimiento";

export type Area = {
  id: AreaId;
  title: string;
  kicker: string;
  context: string;
  risks: string[];
  frequency: string;
  image: string;
  imageAlt: string;
  groups: Group[];
  session: string[];
};

export const AREAS: Area[] = [
  {
    id: "admin",
    title: "Administrativos",
    kicker: "Oficina · pantallas · teclado",
    context:
      "En Let's Móvil el equipo administrativo permanece en sedestación frente al computador: atención a conductores, programación de servicios, facturación y gestión de la flota eléctrica. Los ejercicios se hacen en el puesto, sin salir del área de trabajo.",
    risks: [
      "Cuello adelantado por pantallas",
      "Muñecas y túnel carpiano (mouse y teclado)",
      "Hombros elevados y trapecios tensos",
      "Lumbar por silla y sedestación prolongada",
      "Fatiga visual",
    ],
    frequency:
      "Pausa activa de 6 a 8 minutos cada 2 horas. Parpadear y cambiar de foco cada 20 minutos.",
    image: "/images/admin.jpg",
    imageAlt:
      "Persona del área administrativa estirando el cuello frente al computador",
    session: [
      "admin-cerv-1",
      "admin-cerv-3",
      "admin-homb-1",
      "admin-homb-3",
      "admin-mun-1",
      "admin-lum-1",
      "admin-vis-2",
      "admin-lum-3",
    ],
    groups: [
      {
        id: "cervical",
        title: "Movilidad cervical",
        purpose:
          "Baja la tensión de cuello y trapecios acumulada por horas frente al computador y al teléfono.",
        exercises: [
          {
            id: "admin-cerv-1",
            name: "Flexión y extensión de cuello",
            execution:
              "Sentado, espalda apoyada. Incline la cabeza hacia adelante llevando el mentón al pecho y luego míre arriba con movimiento lento, sin rebotar.",
            dose: "10 repeticiones · 3 series",
            pose: "neckFlex",
            where: "Escritorio",
            benefit: "Libera la nuca y restaura el rango cervical.",
          },
          {
            id: "admin-cerv-2",
            name: "Giros cervicales",
            execution:
              "Gire la cabeza hacia la derecha y luego a la izquierda, como diciendo «no». Mantenga los hombros bajos.",
            dose: "10 repeticiones · 3 series",
            pose: "neckTurn",
            where: "Escritorio",
            benefit: "Reduce la rigidez por mirar un solo punto de la pantalla.",
          },
          {
            id: "admin-cerv-3",
            name: "Inclinación hacia el hombro",
            execution:
              "Lleve la oreja hacia el hombro sin encogerlo. Puede ayudar suavemente con la mano del mismo lado. No force.",
            dose: "15 segundos por lado · 3 series",
            pose: "neckSide",
            where: "Escritorio",
            benefit: "Estira trapecio superior y angular del omóplato.",
          },
        ],
      },
      {
        id: "hombros",
        title: "Estiramiento de hombros y brazos",
        purpose:
          "Alivia la tensión del teclado, el mouse y el uso del teléfono entre el hombro y la oreja.",
        exercises: [
          {
            id: "admin-homb-1",
            name: "Brazo cruzado al pecho",
            execution:
              "Lleve un brazo cruzado hacia el pecho y sosténgalo con la otra mano a la altura del codo. Hombros lejos de las orejas.",
            dose: "15 segundos por lado · 3 veces",
            pose: "armCross",
            where: "Escritorio",
            benefit: "Abre la cara posterior del hombro y deltoides.",
          },
          {
            id: "admin-homb-2",
            name: "Brazos por encima de la cabeza",
            execution:
              "Entrelace los dedos, gire las palmas hacia arriba y eleve ambos brazos. Estire hacia el techo sin arquear la lumbar.",
            dose: "15 segundos · 3 veces",
            pose: "armsUp",
            where: "Escritorio o de pie",
            benefit: "Descomprime hombros y abre la caja torácica.",
          },
          {
            id: "admin-homb-3",
            name: "Círculos de hombros",
            execution:
              "Con brazos relajados, realice círculos amplios hacia adelante y luego hacia atrás. El movimiento nace en el hombro, no en el codo.",
            dose: "10 adelante y 10 atrás",
            pose: "shoulderCircles",
            where: "Escritorio",
            benefit: "Mejora circulación en miembros superiores y baja trapecios.",
          },
        ],
      },
      {
        id: "manos",
        title: "Ejercicios para muñecas y manos",
        purpose:
          "Pensados para quien usa computador de forma constante en programación, tesorería y atención.",
        exercises: [
          {
            id: "admin-mun-1",
            name: "Flexión y extensión de muñecas",
            execution:
              "Con el antebrazo apoyado, lleve la palma hacia abajo y luego hacia arriba en todo el rango, sin dolor.",
            dose: "10 a 15 movimientos",
            pose: "wristFlex",
            where: "Escritorio",
            benefit: "Previene sobrecarga de flexores y extensores.",
          },
          {
            id: "admin-mun-2",
            name: "Abrir y cerrar las manos",
            execution:
              "Abra los dedos al máximo y cierre en un puño suave. Alterne rítmicamente.",
            dose: "10 a 15 movimientos",
            pose: "handsOpen",
            where: "Escritorio",
            benefit: "Activa circulación y reduce rigidez de dedos.",
          },
          {
            id: "admin-mun-3",
            name: "Rotación circular de muñecas",
            execution:
              "Con los puños suaves, gire ambas muñecas en círculos lentos a un lado y al otro.",
            dose: "10 a 15 movimientos por sentido",
            pose: "wristCircles",
            where: "Escritorio",
            benefit: "Lubrica la articulación de la muñeca.",
          },
          {
            id: "admin-mun-4",
            name: "Estiramiento de palma y dedos",
            execution:
              "Brazo al frente, palma hacia abajo. Con la otra mano lleve suavemente los dedos hacia el cuerpo.",
            dose: "15 segundos por lado",
            pose: "wristStretch",
            where: "Escritorio",
            benefit: "Estira la cadena anterior del antebrazo.",
          },
        ],
      },
      {
        id: "lumbar",
        title: "Estiramientos de espalda y zona lumbar",
        purpose:
          "Disminuye la presión sobre la columna por la postura sedente prolongada.",
        exercises: [
          {
            id: "admin-lum-1",
            name: "Flexión suave de tronco",
            execution:
              "Sentado, pies apoyados. Incline el tronco hacia adelante dejando caer los brazos. Respire y suba vértebra a vértebra.",
            dose: "10 a 20 segundos · 3 series",
            pose: "backFold",
            where: "Silla",
            benefit: "Alivia la fascia lumbar y el dorsal.",
          },
          {
            id: "admin-lum-2",
            name: "Extensión de espalda en silla",
            execution:
              "Manos en la cintura baja. Abra el pecho y extienda suavemente el tronco, abdomen activo. Vuelva al neutro.",
            dose: "10 repeticiones",
            pose: "lumbarExt",
            where: "Silla",
            benefit: "Compensa la cifosis de escritorio.",
          },
          {
            id: "admin-lum-3",
            name: "Giro de tronco sentado",
            execution:
              "Gire el tronco a un lado tomando el respaldo de la silla. Pelvis quieta. Cambie de lado.",
            dose: "15 segundos por lado",
            pose: "trunkTwist",
            where: "Silla",
            benefit: "Restaura rotación torácica perdida al teclear.",
          },
        ],
      },
      {
        id: "visual",
        title: "Ejercicios de fatiga visual",
        purpose:
          "El uso continuo de pantallas genera cansancio ocular y baja la concentración.",
        exercises: [
          {
            id: "admin-vis-1",
            name: "Parpadeo consciente",
            execution:
              "Parpadee lento y completo varias veces, como si cerrara un libro suave.",
            dose: "15 parpadeos",
            pose: "eyes",
            where: "Puesto",
            benefit: "Humecta la superficie ocular.",
          },
          {
            id: "admin-vis-2",
            name: "Foco lejano (regla 20-20-20)",
            execution:
              "Cada 20 minutos, mire un objeto a más de 6 metros durante 20 segundos.",
            dose: "20 segundos",
            pose: "eyes",
            where: "Puesto",
            benefit: "Relaja el músculo ciliar.",
          },
          {
            id: "admin-vis-3",
            name: "Movilidad ocular",
            execution:
              "Sin mover la cabeza, mire arriba, abajo y a los lados. Luego dibuje un ocho acostado.",
            dose: "5 ciclos",
            pose: "eyes",
            where: "Puesto",
            benefit: "Reduce fatiga por fijación en pantalla.",
          },
        ],
      },
    ],
  },
  {
    id: "conductores",
    title: "Conductores",
    kicker: "Camionetas eléctricas · transporte especial",
    context:
      "Let's Móvil opera transporte especial premium en Bogotá con camionetas eléctricas. El asiento es más bajo que el de un bus: la cadera queda más flexionada, el volante más cerca y el cuello se adelanta en el tráfico. Entre servicios hay esperas. La movilidad se puede hacer en el asiento, con el vehículo inmovilizado; la activación y los estiramientos de pie, en la base o en un lugar seguro.",
    risks: [
      "Sedestación prolongada y lumbar acortada",
      "Tensión cervical por tráfico y GPS",
      "Hombros y muñecas por el volante",
      "Tobillos y rodillas por pedales",
      "Glúteos inhibidos (asiento bajo de camioneta)",
    ],
    frequency:
      "Activación de 5 minutos al iniciar el turno. Movilidad en cada espera segura. Estiramientos al finalizar la jornada.",
    image: "/images/conductores.jpg",
    imageAlt: "Conductor de Let's Móvil estirando los brazos junto a la camioneta eléctrica",
    session: [
      "con-mob-1",
      "con-mob-3",
      "con-mob-5",
      "con-act-1",
      "con-act-2",
      "con-est-1",
      "con-est-4",
      "con-est-5",
    ],
    groups: [
      {
        id: "movilidad",
        title: "Movilidad articular",
        purpose:
          "Disminuir la fatiga muscular asociada a la conducción urbana prolongada en camioneta eléctrica.",
        exercises: [
          {
            id: "con-mob-1",
            name: "Movilidad cervical (flexión-extensión)",
            execution:
              "Con el vehículo inmovilizado y el respaldo recto, incline la cabeza adelante y atrás de manera lenta. No lleve el mentón hacia adelante.",
            dose: "10 repeticiones",
            pose: "neckFlex",
            where: "Asiento de la camioneta",
            benefit: "Libera la nuca después de mirar el tráfico y el GPS.",
          },
          {
            id: "con-mob-2",
            name: "Giros cervicales laterales",
            execution:
              "Lleve lentamente la cabeza hacia cada lado, como decir «no». Hombros relajados sobre el asiento.",
            dose: "5 por cada lado",
            pose: "neckTurn",
            where: "Asiento de la camioneta",
            benefit: "Compensa la rotación repetida al revisar espejos.",
          },
          {
            id: "con-mob-3",
            name: "Movilidad de hombros (circunducción)",
            execution:
              "Rote los hombros hacia adelante y atrás con círculos amplios, sin despegar la espalda del respaldo.",
            dose: "10 adelante · 10 atrás",
            pose: "shoulderCircles",
            where: "Asiento o fuera del vehículo",
            benefit: "Baja trapecios tensos por el volante.",
          },
          {
            id: "con-mob-4",
            name: "Movilidad dorsal (abrazo y apertura)",
            execution:
              "Abrace el tronco y luego abra los brazos expandiendo el pecho, como si abriera las puertas de la camioneta.",
            dose: "10 repeticiones",
            pose: "hugOpen",
            where: "Asiento o de pie en la base",
            benefit: "Abre el pecho cerrado por la postura de conducción.",
          },
          {
            id: "con-mob-5",
            name: "Movilidad de tobillos",
            execution:
              "Con el pie libre del pedal, eleve talón y punta de forma alternada. Luego circule el tobillo.",
            dose: "10 repeticiones por pie",
            pose: "ankleSit",
            where: "Asiento (espera segura)",
            benefit: "Activa circulación en miembros inferiores.",
          },
          {
            id: "con-mob-6",
            name: "Muñecas del volante",
            execution:
              "Suelte el volante. Con los brazos a la altura del pecho, flexione, extienda y circule ambas muñecas.",
            dose: "10 repeticiones",
            pose: "wristCircles",
            where: "Asiento",
            benefit: "Previene tendinitis por agarre sostenido.",
          },
          {
            id: "con-mob-7",
            name: "Rotación de tronco sentado",
            execution:
              "Manos en el volante sin fuerza. Gire el tronco a un lado y al otro, pelvis apoyada. Movimiento pequeño y controlado.",
            dose: "5 por cada lado",
            pose: "trunkTwist",
            where: "Asiento",
            benefit: "Devuelve rotación torácica sin torcer lumbar con carga.",
          },
        ],
      },
      {
        id: "activacion",
        title: "Activación muscular",
        purpose:
          "Activar la musculatura estabilizadora lumbopélvica, dorsal y de cintura escapular para mejorar la tolerancia postural de la conducción en camioneta.",
        exercises: [
          {
            id: "con-act-1",
            name: "Marcha en el puesto",
            execution:
              "De pie en la base, levante rodillas hasta nivel de cadera, ritmo moderado, tronco estable.",
            dose: "10 repeticiones por pierna",
            pose: "march",
            where: "Base Let's Móvil",
            benefit: "Despierta glúteos e iliopsoas antes del turno.",
          },
          {
            id: "con-act-2",
            name: "Extensión lumbar funcional",
            execution:
              "Manos en la cadera. Extienda suavemente el tronco y vuelva al neutro. Mantenga el abdomen activo. No hiperextienda.",
            dose: "10 repeticiones",
            pose: "lumbarExt",
            where: "Base o parada segura",
            benefit: "Compensa las horas de cadera flexionada en asiento bajo.",
          },
          {
            id: "con-act-3",
            name: "Activación de glúteos sentado",
            execution:
              "En el asiento, pies apoyados. Apriete ambos glúteos 5 segundos y suelte, sin contener la respiración.",
            dose: "10 repeticiones",
            pose: "sitGlute",
            where: "Asiento de la camioneta",
            benefit: "Recluta glúteo mayor, inhibido por el asiento bajo.",
          },
          {
            id: "con-act-4",
            name: "Caminata con brazos en círculo",
            execution:
              "Camine en el patio de la base realizando círculos grandes con los brazos hacia adelante y atrás.",
            dose: "10 repeticiones por sentido",
            pose: "walkArms",
            where: "Base",
            benefit: "Integra marcha y cintura escapular.",
          },
          {
            id: "con-act-5",
            name: "Reto del espejo",
            execution:
              "En pareja, en la base: uno lidera pasos laterales, brazos arriba y mini saltos sin impacto; el otro imita en espejo.",
            dose: "10 repeticiones por gesto",
            pose: "march",
            where: "Base · en pareja",
            benefit: "Activa control motor y rompe la inactividad del turno.",
          },
        ],
      },
      {
        id: "estiramientos",
        title: "Estiramientos",
        purpose:
          "Disminuir la tensión muscular, mejorar la elasticidad y prevenir la sobrecarga musculoesquelética del conductor.",
        exercises: [
          {
            id: "con-est-1",
            name: "Estiramiento cervical lateral",
            execution:
              "Lleve la oreja al hombro, ayudando suavemente con la mano. El hombro contrario permanece abajo.",
            dose: "15 segundos por lado",
            pose: "neckSide",
            where: "Asiento o de pie",
            benefit: "Libera trapecio después del tráfico.",
          },
          {
            id: "con-est-2",
            name: "Estiramiento lateral de tronco",
            execution:
              "Eleve un brazo y flexione el tronco hacia el lado contrario. Cadera al frente.",
            dose: "15 segundos por lado",
            pose: "sideBend",
            where: "De pie, fuera del vehículo",
            benefit: "Estira cadena lateral acortada al volante.",
          },
          {
            id: "con-est-3",
            name: "Estiramiento de muñeca",
            execution:
              "Brazo adelante, palma hacia abajo. Tome los dedos y llévelos suavemente hacia el cuerpo.",
            dose: "15 segundos por lado",
            pose: "wristStretch",
            where: "Asiento",
            benefit: "Compensa el agarre del volante.",
          },
          {
            id: "con-est-4",
            name: "Estiramiento de cuádriceps",
            execution:
              "De pie, tome el empeine y lleve el talón hacia el glúteo sin arquear la espalda. Apóyese en la camioneta.",
            dose: "15 segundos por lado",
            pose: "quadStretch",
            where: "De pie, apoyado en el vehículo",
            benefit: "Abre la cadera flexionada todo el turno.",
          },
          {
            id: "con-est-5",
            name: "Glúteo en figura 4",
            execution:
              "Sentado, cruce un tobillo sobre la rodilla contraria. Incline el tronco hacia adelante con espalda larga.",
            dose: "15 segundos por lado",
            pose: "gluteFig4",
            where: "Asiento de la camioneta",
            benefit: "Libera piriforme y glúteo, típicos del asiento bajo.",
          },
          {
            id: "con-est-6",
            name: "Apertura de pectoral",
            execution:
              "En el marco de la puerta de la camioneta, apoye el antebrazo y gire el tronco suavemente hacia el lado contrario.",
            dose: "15 segundos por lado",
            pose: "pecStretch",
            where: "Puerta del vehículo",
            benefit: "Abre el pecho cerrado sobre el volante.",
          },
        ],
      },
    ],
  },
  {
    id: "mantenimiento",
    title: "Mantenimiento",
    kicker: "Flota eléctrica · taller y patio",
    context:
      "El personal de mantenimiento de Let's Móvil trabaja sobre camionetas eléctricas: revisión de tren delantero, llantas, frenos, conectores de carga y diagnóstico. El vehículo es más bajo que un bus, así que predominan la rodilla en el piso, la cuclilla y los brazos elevados en el puerto de carga — no el gateo debajo de un chasis alto.",
    risks: [
      "Rodillas y lumbar al agacharse junto a la camioneta",
      "Hombros y cuello con brazos elevados (conector de carga)",
      "Muñecas y antebrazos por herramientas",
      "Sobreesfuerzo al cambiar llantas o mover piezas",
      "Bipedestación prolongada en patio y taller",
    ],
    frequency:
      "Calentamiento de 5 a 8 minutos antes de iniciar labores. Pausas de 5 minutos cada 2 horas. Estiramiento al cierre de jornada.",
    image: "/images/mantenimiento.jpg",
    imageAlt: "Técnico de mantenimiento estirando la espalda junto a la flota eléctrica",
    session: [
      "man-sup-1",
      "man-sup-4",
      "man-tr-1",
      "man-inf-1",
      "man-est-4",
      "man-est-7",
      "man-est-1",
      "man-est-8",
    ],
    groups: [
      {
        id: "superior",
        title: "Movilidad — miembro superior y cuello",
        purpose:
          "Preparar cuello, hombros y manos antes de usar herramientas y conectar cargadores.",
        exercises: [
          {
            id: "man-sup-1",
            name: "Flexión y extensión de cuello",
            execution:
              "De pie, lleve la cabeza adelante y atrás, lento, sin empujar con las manos.",
            dose: "10 repeticiones",
            pose: "neckFlex",
            where: "Taller · inicio de turno",
            benefit: "Prepara cervicales para posturas agachadas.",
          },
          {
            id: "man-sup-2",
            name: "Inclinación lateral de cuello",
            execution:
              "Incline la oreja hacia cada hombro. El hombro contrario no sube.",
            dose: "5 por lado",
            pose: "neckSide",
            where: "Taller",
            benefit: "Libera tensión de trabajo bajo el capó.",
          },
          {
            id: "man-sup-3",
            name: "Rotación de cuello",
            execution:
              "Gire la cabeza a derecha e izquierda con la mirada al horizonte.",
            dose: "10 repeticiones",
            pose: "neckTurn",
            where: "Taller",
            benefit: "Recupera rotación después de inspecciones laterales.",
          },
          {
            id: "man-sup-4",
            name: "Circunducción de hombros",
            execution:
              "Círculos amplios con ambos hombros, adelante y atrás.",
            dose: "10 por sentido",
            pose: "shoulderCircles",
            where: "Taller",
            benefit: "Calienta manguito rotador antes de brazos elevados.",
          },
          {
            id: "man-sup-5",
            name: "Elevación de hombros",
            execution:
              "Suba ambos hombros a las orejas, sostenga 2 segundos y suelte con peso.",
            dose: "10 repeticiones",
            pose: "shrug",
            where: "Taller",
            benefit: "Descarga trapecios.",
          },
          {
            id: "man-sup-6",
            name: "Flexión y extensión de codos",
            execution:
              "Doblar y estirar ambos codos, como si usara una llave de forma lenta y completa.",
            dose: "15 repeticiones",
            pose: "elbowFlex",
            where: "Taller",
            benefit: "Prepara bíceps y tríceps para herramientas.",
          },
          {
            id: "man-sup-7",
            name: "Rotación de muñecas",
            execution:
              "Gire muñecas en ambos sentidos con los puños suaves.",
            dose: "10 repeticiones",
            pose: "wristCircles",
            where: "Taller",
            benefit: "Previene tendinitis de agarre.",
          },
          {
            id: "man-sup-8",
            name: "Apertura y cierre de manos",
            execution:
              "Abra los dedos al máximo y cierre con fuerza moderada.",
            dose: "15 repeticiones",
            pose: "handsOpen",
            where: "Taller",
            benefit: "Activa circulación de palma y dedos.",
          },
        ],
      },
      {
        id: "tronco",
        title: "Movilidad — tronco",
        purpose:
          "Preparar la columna para agacharse junto a la camioneta y para el trabajo en el puerto de carga.",
        exercises: [
          {
            id: "man-tr-1",
            name: "Rotación de tronco",
            execution:
              "De pie, pies al ancho de cadera, gire el tronco a ambos lados con brazos sueltos. Pelvis al frente.",
            dose: "10 repeticiones",
            pose: "trunkTwist",
            where: "Taller",
            benefit: "Calienta rotadores antes de manipular piezas.",
          },
          {
            id: "man-tr-2",
            name: "Flexión lateral de tronco",
            execution:
              "Deslice una mano por el muslo hacia la rodilla. El otro brazo cuelga. Cambie de lado.",
            dose: "8 por lado",
            pose: "sideBend",
            where: "Taller",
            benefit: "Prepara cadenas laterales para posturas asimétricas.",
          },
          {
            id: "man-tr-3",
            name: "Flexión de tronco",
            execution:
              "Incline el tronco hacia adelante con rodillas blandas y espalda larga. Suba vértebra a vértebra.",
            dose: "10 repeticiones",
            pose: "trunkFlex",
            where: "Taller",
            benefit: "Moviliza lumbar antes de agacharse a las llantas.",
          },
        ],
      },
      {
        id: "inferior",
        title: "Movilidad — miembro inferior",
        purpose:
          "Activar cadera, rodilla y tobillo para cuclillas, trabajo de rodillas y bipedestación en el patio.",
        exercises: [
          {
            id: "man-inf-1",
            name: "Elevación de rodillas",
            execution:
              "Levante una rodilla hacia la cadera y alterne, como marcha en el puesto.",
            dose: "15 repeticiones",
            pose: "kneeLift",
            where: "Patio",
            benefit: "Activa flexores de cadera y equilibrio.",
          },
          {
            id: "man-inf-2",
            name: "Rotación de cadera",
            execution:
              "De pie, realice círculos con la rodilla elevada, sosteniéndose si necesita.",
            dose: "10 por lado",
            pose: "hipCircle",
            where: "Patio",
            benefit: "Lubrica cadera antes de cuclillas.",
          },
          {
            id: "man-inf-3",
            name: "Flexión de rodillas",
            execution:
              "Mini sentadillas controladas, rodillas alineadas con los pies, talones al piso.",
            dose: "10 repeticiones",
            pose: "trunkFlex",
            where: "Patio",
            benefit: "Calienta cuádriceps para levantamiento de piezas.",
          },
          {
            id: "man-inf-4",
            name: "Rotación de tobillos",
            execution:
              "Apoye la punta del pie y circule el tobillo en ambos sentidos.",
            dose: "10 por pie",
            pose: "ankle",
            where: "Taller",
            benefit: "Previene fatiga de pie en jornada de pie.",
          },
        ],
      },
      {
        id: "estiramientos-man",
        title: "Estiramientos de cierre",
        purpose:
          "Bajar tono muscular al final de la jornada o en la pausa de media mañana.",
        exercises: [
          {
            id: "man-est-1",
            name: "Cervical",
            execution:
              "Incline la cabeza ayudando con la mano. 15 segundos por lado.",
            dose: "15 segundos por lado",
            pose: "neckSide",
            where: "Taller",
            benefit: "Reduce tensión cervical.",
          },
          {
            id: "man-est-2",
            name: "Hombro (brazo al pecho)",
            execution:
              "Cruce el brazo al pecho y sostenga el codo.",
            dose: "15 segundos por lado",
            pose: "armCross",
            where: "Taller",
            benefit: "Estira deltoides posterior.",
          },
          {
            id: "man-est-3",
            name: "Tríceps",
            execution:
              "Lleve una mano a la nuca y con la otra empuje suavemente el codo hacia atrás.",
            dose: "15 segundos por lado",
            pose: "armsUp",
            where: "Taller",
            benefit: "Compensa el trabajo de brazos elevados en el cargador.",
          },
          {
            id: "man-est-4",
            name: "Dorsal / pecho",
            execution:
              "Empuje ambos brazos al frente, redondee la espalda alta y luego abra el pecho.",
            dose: "20 segundos",
            pose: "hugOpen",
            where: "Taller",
            benefit: "Equilibra empuje y apertura.",
          },
          {
            id: "man-est-5",
            name: "Lumbar",
            execution:
              "Manos en la cadera, extensión suave, o flexión con rodillas blandas.",
            dose: "15 segundos",
            pose: "lumbarExt",
            where: "Taller",
            benefit: "Descarga lumbar después de agacharse.",
          },
          {
            id: "man-est-6",
            name: "Muñecas",
            execution:
              "Lleve dedos arriba y abajo ayudando con la otra mano.",
            dose: "15 segundos",
            pose: "wristStretch",
            where: "Taller",
            benefit: "Previene tendinitis.",
          },
          {
            id: "man-est-7",
            name: "Cuádriceps",
            execution:
              "Talón al glúteo, pelvis al frente. Apóyese en la camioneta.",
            dose: "20 segundos por lado",
            pose: "quadStretch",
            where: "Patio",
            benefit: "Abre cadera tras cuclillas.",
          },
          {
            id: "man-est-8",
            name: "Isquiotibiales",
            execution:
              "Un pie adelante, punta arriba. Incline el tronco con espalda larga.",
            dose: "20 segundos por lado",
            pose: "hamstring",
            where: "Patio",
            benefit: "Estira cadena posterior.",
          },
          {
            id: "man-est-9",
            name: "Pantorrilla",
            execution:
              "Apoye las manos en la camioneta, una pierna atrás con talón al piso.",
            dose: "20 segundos por lado",
            pose: "calf",
            where: "Patio, apoyado en el vehículo",
            benefit: "Alivia gemelos de la bipedestación.",
          },
        ],
      },
    ],
  },
];

export function findExercise(id: string): { area: Area; exercise: Exercise } | null {
  for (const area of AREAS) {
    for (const group of area.groups) {
      const exercise = group.exercises.find((item) => item.id === id);
      if (exercise) return { area, exercise };
    }
  }
  return null;
}

export function sessionExercises(area: Area): Exercise[] {
  return area.session
    .map((id) => findExercise(id)?.exercise)
    .filter((item): item is Exercise => Boolean(item));
}
