import { i as __toESM } from "../_runtime.mjs";
import { L as require_react, v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Printer, c as MapPin, i as ShieldCheck, l as Clock3, o as Play, r as SkipForward, s as Pause, t as X, u as ArrowLeft } from "../_libs/lucide-react.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-IdhfoBOJ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var AREAS = [
	{
		id: "admin",
		title: "Administrativos",
		kicker: "Oficina · pantallas · teclado",
		context: "En Let's Móvil el equipo administrativo permanece en sedestación frente al computador: atención a conductores, programación de servicios, facturación y gestión de la flota eléctrica. Los ejercicios se hacen en el puesto, sin salir del área de trabajo.",
		risks: [
			"Cuello adelantado por pantallas",
			"Muñecas y túnel carpiano (mouse y teclado)",
			"Hombros elevados y trapecios tensos",
			"Lumbar por silla y sedestación prolongada",
			"Fatiga visual"
		],
		frequency: "Pausa activa de 6 a 8 minutos cada 2 horas. Parpadear y cambiar de foco cada 20 minutos.",
		image: "/images/admin.jpg",
		imageAlt: "Persona del área administrativa estirando el cuello frente al computador",
		session: [
			"admin-cerv-1",
			"admin-cerv-3",
			"admin-homb-1",
			"admin-homb-3",
			"admin-mun-1",
			"admin-lum-1",
			"admin-vis-2",
			"admin-lum-3"
		],
		groups: [
			{
				id: "cervical",
				title: "Movilidad cervical",
				purpose: "Baja la tensión de cuello y trapecios acumulada por horas frente al computador y al teléfono.",
				exercises: [
					{
						id: "admin-cerv-1",
						name: "Flexión y extensión de cuello",
						execution: "Sentado, espalda apoyada. Incline la cabeza hacia adelante llevando el mentón al pecho y luego míre arriba con movimiento lento, sin rebotar.",
						dose: "10 repeticiones · 3 series",
						pose: "neckFlex",
						where: "Escritorio",
						benefit: "Libera la nuca y restaura el rango cervical."
					},
					{
						id: "admin-cerv-2",
						name: "Giros cervicales",
						execution: "Gire la cabeza hacia la derecha y luego a la izquierda, como diciendo «no». Mantenga los hombros bajos.",
						dose: "10 repeticiones · 3 series",
						pose: "neckTurn",
						where: "Escritorio",
						benefit: "Reduce la rigidez por mirar un solo punto de la pantalla."
					},
					{
						id: "admin-cerv-3",
						name: "Inclinación hacia el hombro",
						execution: "Lleve la oreja hacia el hombro sin encogerlo. Puede ayudar suavemente con la mano del mismo lado. No force.",
						dose: "15 segundos por lado · 3 series",
						pose: "neckSide",
						where: "Escritorio",
						benefit: "Estira trapecio superior y angular del omóplato."
					}
				]
			},
			{
				id: "hombros",
				title: "Estiramiento de hombros y brazos",
				purpose: "Alivia la tensión del teclado, el mouse y el uso del teléfono entre el hombro y la oreja.",
				exercises: [
					{
						id: "admin-homb-1",
						name: "Brazo cruzado al pecho",
						execution: "Lleve un brazo cruzado hacia el pecho y sosténgalo con la otra mano a la altura del codo. Hombros lejos de las orejas.",
						dose: "15 segundos por lado · 3 veces",
						pose: "armCross",
						where: "Escritorio",
						benefit: "Abre la cara posterior del hombro y deltoides."
					},
					{
						id: "admin-homb-2",
						name: "Brazos por encima de la cabeza",
						execution: "Entrelace los dedos, gire las palmas hacia arriba y eleve ambos brazos. Estire hacia el techo sin arquear la lumbar.",
						dose: "15 segundos · 3 veces",
						pose: "armsUp",
						where: "Escritorio o de pie",
						benefit: "Descomprime hombros y abre la caja torácica."
					},
					{
						id: "admin-homb-3",
						name: "Círculos de hombros",
						execution: "Con brazos relajados, realice círculos amplios hacia adelante y luego hacia atrás. El movimiento nace en el hombro, no en el codo.",
						dose: "10 adelante y 10 atrás",
						pose: "shoulderCircles",
						where: "Escritorio",
						benefit: "Mejora circulación en miembros superiores y baja trapecios."
					}
				]
			},
			{
				id: "manos",
				title: "Ejercicios para muñecas y manos",
				purpose: "Pensados para quien usa computador de forma constante en programación, tesorería y atención.",
				exercises: [
					{
						id: "admin-mun-1",
						name: "Flexión y extensión de muñecas",
						execution: "Con el antebrazo apoyado, lleve la palma hacia abajo y luego hacia arriba en todo el rango, sin dolor.",
						dose: "10 a 15 movimientos",
						pose: "wristFlex",
						where: "Escritorio",
						benefit: "Previene sobrecarga de flexores y extensores."
					},
					{
						id: "admin-mun-2",
						name: "Abrir y cerrar las manos",
						execution: "Abra los dedos al máximo y cierre en un puño suave. Alterne rítmicamente.",
						dose: "10 a 15 movimientos",
						pose: "handsOpen",
						where: "Escritorio",
						benefit: "Activa circulación y reduce rigidez de dedos."
					},
					{
						id: "admin-mun-3",
						name: "Rotación circular de muñecas",
						execution: "Con los puños suaves, gire ambas muñecas en círculos lentos a un lado y al otro.",
						dose: "10 a 15 movimientos por sentido",
						pose: "wristCircles",
						where: "Escritorio",
						benefit: "Lubrica la articulación de la muñeca."
					},
					{
						id: "admin-mun-4",
						name: "Estiramiento de palma y dedos",
						execution: "Brazo al frente, palma hacia abajo. Con la otra mano lleve suavemente los dedos hacia el cuerpo.",
						dose: "15 segundos por lado",
						pose: "wristStretch",
						where: "Escritorio",
						benefit: "Estira la cadena anterior del antebrazo."
					}
				]
			},
			{
				id: "lumbar",
				title: "Estiramientos de espalda y zona lumbar",
				purpose: "Disminuye la presión sobre la columna por la postura sedente prolongada.",
				exercises: [
					{
						id: "admin-lum-1",
						name: "Flexión suave de tronco",
						execution: "Sentado, pies apoyados. Incline el tronco hacia adelante dejando caer los brazos. Respire y suba vértebra a vértebra.",
						dose: "10 a 20 segundos · 3 series",
						pose: "backFold",
						where: "Silla",
						benefit: "Alivia la fascia lumbar y el dorsal."
					},
					{
						id: "admin-lum-2",
						name: "Extensión de espalda en silla",
						execution: "Manos en la cintura baja. Abra el pecho y extienda suavemente el tronco, abdomen activo. Vuelva al neutro.",
						dose: "10 repeticiones",
						pose: "lumbarExt",
						where: "Silla",
						benefit: "Compensa la cifosis de escritorio."
					},
					{
						id: "admin-lum-3",
						name: "Giro de tronco sentado",
						execution: "Gire el tronco a un lado tomando el respaldo de la silla. Pelvis quieta. Cambie de lado.",
						dose: "15 segundos por lado",
						pose: "trunkTwist",
						where: "Silla",
						benefit: "Restaura rotación torácica perdida al teclear."
					}
				]
			},
			{
				id: "visual",
				title: "Ejercicios de fatiga visual",
				purpose: "El uso continuo de pantallas genera cansancio ocular y baja la concentración.",
				exercises: [
					{
						id: "admin-vis-1",
						name: "Parpadeo consciente",
						execution: "Parpadee lento y completo varias veces, como si cerrara un libro suave.",
						dose: "15 parpadeos",
						pose: "eyes",
						where: "Puesto",
						benefit: "Humecta la superficie ocular."
					},
					{
						id: "admin-vis-2",
						name: "Foco lejano (regla 20-20-20)",
						execution: "Cada 20 minutos, mire un objeto a más de 6 metros durante 20 segundos.",
						dose: "20 segundos",
						pose: "eyes",
						where: "Puesto",
						benefit: "Relaja el músculo ciliar."
					},
					{
						id: "admin-vis-3",
						name: "Movilidad ocular",
						execution: "Sin mover la cabeza, mire arriba, abajo y a los lados. Luego dibuje un ocho acostado.",
						dose: "5 ciclos",
						pose: "eyes",
						where: "Puesto",
						benefit: "Reduce fatiga por fijación en pantalla."
					}
				]
			}
		]
	},
	{
		id: "conductores",
		title: "Conductores",
		kicker: "Camionetas eléctricas · transporte especial",
		context: "Let's Móvil opera transporte especial premium en Bogotá con camionetas eléctricas. El asiento es más bajo que el de un bus: la cadera queda más flexionada, el volante más cerca y el cuello se adelanta en el tráfico. Entre servicios hay esperas. La movilidad se puede hacer en el asiento, con el vehículo inmovilizado; la activación y los estiramientos de pie, en la base o en un lugar seguro.",
		risks: [
			"Sedestación prolongada y lumbar acortada",
			"Tensión cervical por tráfico y GPS",
			"Hombros y muñecas por el volante",
			"Tobillos y rodillas por pedales",
			"Glúteos inhibidos (asiento bajo de camioneta)"
		],
		frequency: "Activación de 5 minutos al iniciar el turno. Movilidad en cada espera segura. Estiramientos al finalizar la jornada.",
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
			"con-est-5"
		],
		groups: [
			{
				id: "movilidad",
				title: "Movilidad articular",
				purpose: "Disminuir la fatiga muscular asociada a la conducción urbana prolongada en camioneta eléctrica.",
				exercises: [
					{
						id: "con-mob-1",
						name: "Movilidad cervical (flexión-extensión)",
						execution: "Con el vehículo inmovilizado y el respaldo recto, incline la cabeza adelante y atrás de manera lenta. No lleve el mentón hacia adelante.",
						dose: "10 repeticiones",
						pose: "neckFlex",
						where: "Asiento de la camioneta",
						benefit: "Libera la nuca después de mirar el tráfico y el GPS."
					},
					{
						id: "con-mob-2",
						name: "Giros cervicales laterales",
						execution: "Lleve lentamente la cabeza hacia cada lado, como decir «no». Hombros relajados sobre el asiento.",
						dose: "5 por cada lado",
						pose: "neckTurn",
						where: "Asiento de la camioneta",
						benefit: "Compensa la rotación repetida al revisar espejos."
					},
					{
						id: "con-mob-3",
						name: "Movilidad de hombros (circunducción)",
						execution: "Rote los hombros hacia adelante y atrás con círculos amplios, sin despegar la espalda del respaldo.",
						dose: "10 adelante · 10 atrás",
						pose: "shoulderCircles",
						where: "Asiento o fuera del vehículo",
						benefit: "Baja trapecios tensos por el volante."
					},
					{
						id: "con-mob-4",
						name: "Movilidad dorsal (abrazo y apertura)",
						execution: "Abrace el tronco y luego abra los brazos expandiendo el pecho, como si abriera las puertas de la camioneta.",
						dose: "10 repeticiones",
						pose: "hugOpen",
						where: "Asiento o de pie en la base",
						benefit: "Abre el pecho cerrado por la postura de conducción."
					},
					{
						id: "con-mob-5",
						name: "Movilidad de tobillos",
						execution: "Con el pie libre del pedal, eleve talón y punta de forma alternada. Luego circule el tobillo.",
						dose: "10 repeticiones por pie",
						pose: "ankleSit",
						where: "Asiento (espera segura)",
						benefit: "Activa circulación en miembros inferiores."
					},
					{
						id: "con-mob-6",
						name: "Muñecas del volante",
						execution: "Suelte el volante. Con los brazos a la altura del pecho, flexione, extienda y circule ambas muñecas.",
						dose: "10 repeticiones",
						pose: "wristCircles",
						where: "Asiento",
						benefit: "Previene tendinitis por agarre sostenido."
					},
					{
						id: "con-mob-7",
						name: "Rotación de tronco sentado",
						execution: "Manos en el volante sin fuerza. Gire el tronco a un lado y al otro, pelvis apoyada. Movimiento pequeño y controlado.",
						dose: "5 por cada lado",
						pose: "trunkTwist",
						where: "Asiento",
						benefit: "Devuelve rotación torácica sin torcer lumbar con carga."
					}
				]
			},
			{
				id: "activacion",
				title: "Activación muscular",
				purpose: "Activar la musculatura estabilizadora lumbopélvica, dorsal y de cintura escapular para mejorar la tolerancia postural de la conducción en camioneta.",
				exercises: [
					{
						id: "con-act-1",
						name: "Marcha en el puesto",
						execution: "De pie en la base, levante rodillas hasta nivel de cadera, ritmo moderado, tronco estable.",
						dose: "10 repeticiones por pierna",
						pose: "march",
						where: "Base Let's Móvil",
						benefit: "Despierta glúteos e iliopsoas antes del turno."
					},
					{
						id: "con-act-2",
						name: "Extensión lumbar funcional",
						execution: "Manos en la cadera. Extienda suavemente el tronco y vuelva al neutro. Mantenga el abdomen activo. No hiperextienda.",
						dose: "10 repeticiones",
						pose: "lumbarExt",
						where: "Base o parada segura",
						benefit: "Compensa las horas de cadera flexionada en asiento bajo."
					},
					{
						id: "con-act-3",
						name: "Activación de glúteos sentado",
						execution: "En el asiento, pies apoyados. Apriete ambos glúteos 5 segundos y suelte, sin contener la respiración.",
						dose: "10 repeticiones",
						pose: "sitGlute",
						where: "Asiento de la camioneta",
						benefit: "Recluta glúteo mayor, inhibido por el asiento bajo."
					},
					{
						id: "con-act-4",
						name: "Caminata con brazos en círculo",
						execution: "Camine en el patio de la base realizando círculos grandes con los brazos hacia adelante y atrás.",
						dose: "10 repeticiones por sentido",
						pose: "walkArms",
						where: "Base",
						benefit: "Integra marcha y cintura escapular."
					},
					{
						id: "con-act-5",
						name: "Reto del espejo",
						execution: "En pareja, en la base: uno lidera pasos laterales, brazos arriba y mini saltos sin impacto; el otro imita en espejo.",
						dose: "10 repeticiones por gesto",
						pose: "march",
						where: "Base · en pareja",
						benefit: "Activa control motor y rompe la inactividad del turno."
					}
				]
			},
			{
				id: "estiramientos",
				title: "Estiramientos",
				purpose: "Disminuir la tensión muscular, mejorar la elasticidad y prevenir la sobrecarga musculoesquelética del conductor.",
				exercises: [
					{
						id: "con-est-1",
						name: "Estiramiento cervical lateral",
						execution: "Lleve la oreja al hombro, ayudando suavemente con la mano. El hombro contrario permanece abajo.",
						dose: "15 segundos por lado",
						pose: "neckSide",
						where: "Asiento o de pie",
						benefit: "Libera trapecio después del tráfico."
					},
					{
						id: "con-est-2",
						name: "Estiramiento lateral de tronco",
						execution: "Eleve un brazo y flexione el tronco hacia el lado contrario. Cadera al frente.",
						dose: "15 segundos por lado",
						pose: "sideBend",
						where: "De pie, fuera del vehículo",
						benefit: "Estira cadena lateral acortada al volante."
					},
					{
						id: "con-est-3",
						name: "Estiramiento de muñeca",
						execution: "Brazo adelante, palma hacia abajo. Tome los dedos y llévelos suavemente hacia el cuerpo.",
						dose: "15 segundos por lado",
						pose: "wristStretch",
						where: "Asiento",
						benefit: "Compensa el agarre del volante."
					},
					{
						id: "con-est-4",
						name: "Estiramiento de cuádriceps",
						execution: "De pie, tome el empeine y lleve el talón hacia el glúteo sin arquear la espalda. Apóyese en la camioneta.",
						dose: "15 segundos por lado",
						pose: "quadStretch",
						where: "De pie, apoyado en el vehículo",
						benefit: "Abre la cadera flexionada todo el turno."
					},
					{
						id: "con-est-5",
						name: "Glúteo en figura 4",
						execution: "Sentado, cruce un tobillo sobre la rodilla contraria. Incline el tronco hacia adelante con espalda larga.",
						dose: "15 segundos por lado",
						pose: "gluteFig4",
						where: "Asiento de la camioneta",
						benefit: "Libera piriforme y glúteo, típicos del asiento bajo."
					},
					{
						id: "con-est-6",
						name: "Apertura de pectoral",
						execution: "En el marco de la puerta de la camioneta, apoye el antebrazo y gire el tronco suavemente hacia el lado contrario.",
						dose: "15 segundos por lado",
						pose: "pecStretch",
						where: "Puerta del vehículo",
						benefit: "Abre el pecho cerrado sobre el volante."
					}
				]
			}
		]
	},
	{
		id: "mantenimiento",
		title: "Mantenimiento",
		kicker: "Flota eléctrica · taller y patio",
		context: "El personal de mantenimiento de Let's Móvil trabaja sobre camionetas eléctricas: revisión de tren delantero, llantas, frenos, conectores de carga y diagnóstico. El vehículo es más bajo que un bus, así que predominan la rodilla en el piso, la cuclilla y los brazos elevados en el puerto de carga — no el gateo debajo de un chasis alto.",
		risks: [
			"Rodillas y lumbar al agacharse junto a la camioneta",
			"Hombros y cuello con brazos elevados (conector de carga)",
			"Muñecas y antebrazos por herramientas",
			"Sobreesfuerzo al cambiar llantas o mover piezas",
			"Bipedestación prolongada en patio y taller"
		],
		frequency: "Calentamiento de 5 a 8 minutos antes de iniciar labores. Pausas de 5 minutos cada 2 horas. Estiramiento al cierre de jornada.",
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
			"man-est-8"
		],
		groups: [
			{
				id: "superior",
				title: "Movilidad — miembro superior y cuello",
				purpose: "Preparar cuello, hombros y manos antes de usar herramientas y conectar cargadores.",
				exercises: [
					{
						id: "man-sup-1",
						name: "Flexión y extensión de cuello",
						execution: "De pie, lleve la cabeza adelante y atrás, lento, sin empujar con las manos.",
						dose: "10 repeticiones",
						pose: "neckFlex",
						where: "Taller · inicio de turno",
						benefit: "Prepara cervicales para posturas agachadas."
					},
					{
						id: "man-sup-2",
						name: "Inclinación lateral de cuello",
						execution: "Incline la oreja hacia cada hombro. El hombro contrario no sube.",
						dose: "5 por lado",
						pose: "neckSide",
						where: "Taller",
						benefit: "Libera tensión de trabajo bajo el capó."
					},
					{
						id: "man-sup-3",
						name: "Rotación de cuello",
						execution: "Gire la cabeza a derecha e izquierda con la mirada al horizonte.",
						dose: "10 repeticiones",
						pose: "neckTurn",
						where: "Taller",
						benefit: "Recupera rotación después de inspecciones laterales."
					},
					{
						id: "man-sup-4",
						name: "Circunducción de hombros",
						execution: "Círculos amplios con ambos hombros, adelante y atrás.",
						dose: "10 por sentido",
						pose: "shoulderCircles",
						where: "Taller",
						benefit: "Calienta manguito rotador antes de brazos elevados."
					},
					{
						id: "man-sup-5",
						name: "Elevación de hombros",
						execution: "Suba ambos hombros a las orejas, sostenga 2 segundos y suelte con peso.",
						dose: "10 repeticiones",
						pose: "shrug",
						where: "Taller",
						benefit: "Descarga trapecios."
					},
					{
						id: "man-sup-6",
						name: "Flexión y extensión de codos",
						execution: "Doblar y estirar ambos codos, como si usara una llave de forma lenta y completa.",
						dose: "15 repeticiones",
						pose: "elbowFlex",
						where: "Taller",
						benefit: "Prepara bíceps y tríceps para herramientas."
					},
					{
						id: "man-sup-7",
						name: "Rotación de muñecas",
						execution: "Gire muñecas en ambos sentidos con los puños suaves.",
						dose: "10 repeticiones",
						pose: "wristCircles",
						where: "Taller",
						benefit: "Previene tendinitis de agarre."
					},
					{
						id: "man-sup-8",
						name: "Apertura y cierre de manos",
						execution: "Abra los dedos al máximo y cierre con fuerza moderada.",
						dose: "15 repeticiones",
						pose: "handsOpen",
						where: "Taller",
						benefit: "Activa circulación de palma y dedos."
					}
				]
			},
			{
				id: "tronco",
				title: "Movilidad — tronco",
				purpose: "Preparar la columna para agacharse junto a la camioneta y para el trabajo en el puerto de carga.",
				exercises: [
					{
						id: "man-tr-1",
						name: "Rotación de tronco",
						execution: "De pie, pies al ancho de cadera, gire el tronco a ambos lados con brazos sueltos. Pelvis al frente.",
						dose: "10 repeticiones",
						pose: "trunkTwist",
						where: "Taller",
						benefit: "Calienta rotadores antes de manipular piezas."
					},
					{
						id: "man-tr-2",
						name: "Flexión lateral de tronco",
						execution: "Deslice una mano por el muslo hacia la rodilla. El otro brazo cuelga. Cambie de lado.",
						dose: "8 por lado",
						pose: "sideBend",
						where: "Taller",
						benefit: "Prepara cadenas laterales para posturas asimétricas."
					},
					{
						id: "man-tr-3",
						name: "Flexión de tronco",
						execution: "Incline el tronco hacia adelante con rodillas blandas y espalda larga. Suba vértebra a vértebra.",
						dose: "10 repeticiones",
						pose: "trunkFlex",
						where: "Taller",
						benefit: "Moviliza lumbar antes de agacharse a las llantas."
					}
				]
			},
			{
				id: "inferior",
				title: "Movilidad — miembro inferior",
				purpose: "Activar cadera, rodilla y tobillo para cuclillas, trabajo de rodillas y bipedestación en el patio.",
				exercises: [
					{
						id: "man-inf-1",
						name: "Elevación de rodillas",
						execution: "Levante una rodilla hacia la cadera y alterne, como marcha en el puesto.",
						dose: "15 repeticiones",
						pose: "kneeLift",
						where: "Patio",
						benefit: "Activa flexores de cadera y equilibrio."
					},
					{
						id: "man-inf-2",
						name: "Rotación de cadera",
						execution: "De pie, realice círculos con la rodilla elevada, sosteniéndose si necesita.",
						dose: "10 por lado",
						pose: "hipCircle",
						where: "Patio",
						benefit: "Lubrica cadera antes de cuclillas."
					},
					{
						id: "man-inf-3",
						name: "Flexión de rodillas",
						execution: "Mini sentadillas controladas, rodillas alineadas con los pies, talones al piso.",
						dose: "10 repeticiones",
						pose: "trunkFlex",
						where: "Patio",
						benefit: "Calienta cuádriceps para levantamiento de piezas."
					},
					{
						id: "man-inf-4",
						name: "Rotación de tobillos",
						execution: "Apoye la punta del pie y circule el tobillo en ambos sentidos.",
						dose: "10 por pie",
						pose: "ankle",
						where: "Taller",
						benefit: "Previene fatiga de pie en jornada de pie."
					}
				]
			},
			{
				id: "estiramientos-man",
				title: "Estiramientos de cierre",
				purpose: "Bajar tono muscular al final de la jornada o en la pausa de media mañana.",
				exercises: [
					{
						id: "man-est-1",
						name: "Cervical",
						execution: "Incline la cabeza ayudando con la mano. 15 segundos por lado.",
						dose: "15 segundos por lado",
						pose: "neckSide",
						where: "Taller",
						benefit: "Reduce tensión cervical."
					},
					{
						id: "man-est-2",
						name: "Hombro (brazo al pecho)",
						execution: "Cruce el brazo al pecho y sostenga el codo.",
						dose: "15 segundos por lado",
						pose: "armCross",
						where: "Taller",
						benefit: "Estira deltoides posterior."
					},
					{
						id: "man-est-3",
						name: "Tríceps",
						execution: "Lleve una mano a la nuca y con la otra empuje suavemente el codo hacia atrás.",
						dose: "15 segundos por lado",
						pose: "armsUp",
						where: "Taller",
						benefit: "Compensa el trabajo de brazos elevados en el cargador."
					},
					{
						id: "man-est-4",
						name: "Dorsal / pecho",
						execution: "Empuje ambos brazos al frente, redondee la espalda alta y luego abra el pecho.",
						dose: "20 segundos",
						pose: "hugOpen",
						where: "Taller",
						benefit: "Equilibra empuje y apertura."
					},
					{
						id: "man-est-5",
						name: "Lumbar",
						execution: "Manos en la cadera, extensión suave, o flexión con rodillas blandas.",
						dose: "15 segundos",
						pose: "lumbarExt",
						where: "Taller",
						benefit: "Descarga lumbar después de agacharse."
					},
					{
						id: "man-est-6",
						name: "Muñecas",
						execution: "Lleve dedos arriba y abajo ayudando con la otra mano.",
						dose: "15 segundos",
						pose: "wristStretch",
						where: "Taller",
						benefit: "Previene tendinitis."
					},
					{
						id: "man-est-7",
						name: "Cuádriceps",
						execution: "Talón al glúteo, pelvis al frente. Apóyese en la camioneta.",
						dose: "20 segundos por lado",
						pose: "quadStretch",
						where: "Patio",
						benefit: "Abre cadera tras cuclillas."
					},
					{
						id: "man-est-8",
						name: "Isquiotibiales",
						execution: "Un pie adelante, punta arriba. Incline el tronco con espalda larga.",
						dose: "20 segundos por lado",
						pose: "hamstring",
						where: "Patio",
						benefit: "Estira cadena posterior."
					},
					{
						id: "man-est-9",
						name: "Pantorrilla",
						execution: "Apoye las manos en la camioneta, una pierna atrás con talón al piso.",
						dose: "20 segundos por lado",
						pose: "calf",
						where: "Patio, apoyado en el vehículo",
						benefit: "Alivia gemelos de la bipedestación."
					}
				]
			}
		]
	}
];
function findExercise(id) {
	for (const area of AREAS) for (const group of area.groups) {
		const exercise = group.exercises.find((item) => item.id === id);
		if (exercise) return {
			area,
			exercise
		};
	}
	return null;
}
function sessionExercises(area) {
	return area.session.map((id) => findExercise(id)?.exercise).filter((item) => Boolean(item));
}
var INK = "#16343c";
var CYAN = "#5dc4e3";
function Frame({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 160 200",
		className: "h-full w-full",
		"aria-hidden": "true",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			x: "8",
			y: "8",
			width: "144",
			height: "184",
			rx: "28",
			fill: "#e7f6fb"
		}), children]
	});
}
function Head({ cx = 80, cy = 42 }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
		cx,
		cy,
		r: "14",
		fill: INK
	});
}
function PoseFigure({ pose }) {
	switch (pose) {
		case "neckFlex": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Frame, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Head, { cy: 48 }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M80 62 v44",
				stroke: INK,
				strokeWidth: "10",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M68 44 h-18",
				stroke: CYAN,
				strokeWidth: "6",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M52 78 h56",
				stroke: INK,
				strokeWidth: "10",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M56 78 v52",
				stroke: INK,
				strokeWidth: "8",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M104 78 v52",
				stroke: INK,
				strokeWidth: "8",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M56 130 v36",
				stroke: INK,
				strokeWidth: "8",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M104 130 v36",
				stroke: INK,
				strokeWidth: "8",
				strokeLinecap: "round"
			})
		] });
		case "neckSide": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Frame, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Head, {
				cx: 96,
				cy: 44
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M86 56 q-6 16 -4 30",
				stroke: INK,
				strokeWidth: "10",
				strokeLinecap: "round",
				fill: "none"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M54 86 h62",
				stroke: INK,
				strokeWidth: "10",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M58 86 v78",
				stroke: INK,
				strokeWidth: "8",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M112 86 v40",
				stroke: INK,
				strokeWidth: "8",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "118",
				cy: "54",
				r: "5",
				fill: CYAN
			})
		] });
		case "neckTurn": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Frame, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "94",
				cy: "44",
				r: "14",
				fill: INK
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M80 58 v40",
				stroke: INK,
				strokeWidth: "10",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M50 84 h60",
				stroke: INK,
				strokeWidth: "10",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M54 84 v80",
				stroke: INK,
				strokeWidth: "8",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M106 84 v80",
				stroke: INK,
				strokeWidth: "8",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M94 36 l16 -6",
				stroke: CYAN,
				strokeWidth: "5",
				strokeLinecap: "round"
			})
		] });
		case "shoulderCircles": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Frame, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Head, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M80 56 v40",
				stroke: INK,
				strokeWidth: "10",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M46 78 q16 -28 34 -22",
				stroke: INK,
				strokeWidth: "8",
				fill: "none",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M114 78 q-16 -28 -34 -22",
				stroke: INK,
				strokeWidth: "8",
				fill: "none",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "44",
				cy: "64",
				r: "7",
				fill: CYAN
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "116",
				cy: "64",
				r: "7",
				fill: CYAN
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M54 96 v68",
				stroke: INK,
				strokeWidth: "8",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M106 96 v68",
				stroke: INK,
				strokeWidth: "8",
				strokeLinecap: "round"
			})
		] });
		case "armCross": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Frame, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Head, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M80 56 v44",
				stroke: INK,
				strokeWidth: "10",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M48 86 h64",
				stroke: INK,
				strokeWidth: "10",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M112 86 q-28 18 -58 8",
				stroke: CYAN,
				strokeWidth: "8",
				fill: "none",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M54 96 v68",
				stroke: INK,
				strokeWidth: "8",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M106 96 v68",
				stroke: INK,
				strokeWidth: "8",
				strokeLinecap: "round"
			})
		] });
		case "armsUp": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Frame, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Head, { cy: 50 }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M80 64 v40",
				stroke: INK,
				strokeWidth: "10",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M80 78 l-28 -40",
				stroke: INK,
				strokeWidth: "8",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M80 78 l28 -40",
				stroke: INK,
				strokeWidth: "8",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "50",
				cy: "34",
				r: "6",
				fill: CYAN
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "110",
				cy: "34",
				r: "6",
				fill: CYAN
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M56 104 v60",
				stroke: INK,
				strokeWidth: "8",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M104 104 v60",
				stroke: INK,
				strokeWidth: "8",
				strokeLinecap: "round"
			})
		] });
		case "wristFlex": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Frame, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Head, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M80 56 v36",
				stroke: INK,
				strokeWidth: "10",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M80 92 l-36 8",
				stroke: INK,
				strokeWidth: "8",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M80 92 l36 8",
				stroke: INK,
				strokeWidth: "8",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M44 100 l-10 14",
				stroke: CYAN,
				strokeWidth: "6",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M116 100 l10 14",
				stroke: CYAN,
				strokeWidth: "6",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M58 108 v56",
				stroke: INK,
				strokeWidth: "8",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M102 108 v56",
				stroke: INK,
				strokeWidth: "8",
				strokeLinecap: "round"
			})
		] });
		case "handsOpen": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Frame, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Head, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M80 56 v40",
				stroke: INK,
				strokeWidth: "10",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M80 90 l-34 22",
				stroke: INK,
				strokeWidth: "8",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M80 90 l34 22",
				stroke: INK,
				strokeWidth: "8",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M42 116 l-8 10 M42 116 l8 10 M42 116 v12",
				stroke: CYAN,
				strokeWidth: "4",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M118 116 l-8 10 M118 116 l8 10 M118 116 v12",
				stroke: CYAN,
				strokeWidth: "4",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M58 108 v56",
				stroke: INK,
				strokeWidth: "8",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M102 108 v56",
				stroke: INK,
				strokeWidth: "8",
				strokeLinecap: "round"
			})
		] });
		case "wristCircles": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Frame, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Head, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M80 56 v36",
				stroke: INK,
				strokeWidth: "10",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M80 90 l-32 4",
				stroke: INK,
				strokeWidth: "8",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M80 90 l32 4",
				stroke: INK,
				strokeWidth: "8",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "42",
				cy: "96",
				r: "10",
				fill: "none",
				stroke: CYAN,
				strokeWidth: "4",
				strokeDasharray: "4 4"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "118",
				cy: "96",
				r: "10",
				fill: "none",
				stroke: CYAN,
				strokeWidth: "4",
				strokeDasharray: "4 4"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M58 108 v56",
				stroke: INK,
				strokeWidth: "8",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M102 108 v56",
				stroke: INK,
				strokeWidth: "8",
				strokeLinecap: "round"
			})
		] });
		case "backFold": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Frame, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M86 86 a14 14 0 1 1 0.1 0",
				fill: INK
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M80 98 q-28 22 -8 48",
				stroke: INK,
				strokeWidth: "10",
				fill: "none",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M56 128 h40",
				stroke: INK,
				strokeWidth: "8",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M58 128 v36",
				stroke: INK,
				strokeWidth: "8",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M96 128 v36",
				stroke: INK,
				strokeWidth: "8",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M48 118 l-16 10",
				stroke: CYAN,
				strokeWidth: "6",
				strokeLinecap: "round"
			})
		] });
		case "trunkTwist": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Frame, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Head, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M80 56 v44",
				stroke: INK,
				strokeWidth: "10",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M44 78 l72 20",
				stroke: INK,
				strokeWidth: "10",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "40",
				cy: "76",
				r: "6",
				fill: CYAN
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "120",
				cy: "100",
				r: "6",
				fill: CYAN
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M58 104 v60",
				stroke: INK,
				strokeWidth: "8",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M102 104 v60",
				stroke: INK,
				strokeWidth: "8",
				strokeLinecap: "round"
			})
		] });
		case "eyes": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Frame, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "80",
				cy: "88",
				r: "44",
				fill: "#fff",
				stroke: INK,
				strokeWidth: "4"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
				cx: "62",
				cy: "86",
				rx: "14",
				ry: "10",
				fill: "none",
				stroke: INK,
				strokeWidth: "3"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
				cx: "98",
				cy: "86",
				rx: "14",
				ry: "10",
				fill: "none",
				stroke: INK,
				strokeWidth: "3"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "66",
				cy: "86",
				r: "4",
				fill: CYAN
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "102",
				cy: "86",
				r: "4",
				fill: CYAN
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M54 112 q26 16 52 0",
				stroke: INK,
				strokeWidth: "3",
				fill: "none",
				strokeLinecap: "round"
			})
		] });
		case "hugOpen": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Frame, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Head, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M80 56 v44",
				stroke: INK,
				strokeWidth: "10",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M80 84 q-40 10 -46 36",
				stroke: INK,
				strokeWidth: "8",
				fill: "none",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M80 84 q40 10 46 36",
				stroke: INK,
				strokeWidth: "8",
				fill: "none",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "32",
				cy: "124",
				r: "6",
				fill: CYAN
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "128",
				cy: "124",
				r: "6",
				fill: CYAN
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M58 104 v60",
				stroke: INK,
				strokeWidth: "8",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M102 104 v60",
				stroke: INK,
				strokeWidth: "8",
				strokeLinecap: "round"
			})
		] });
		case "ankle": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Frame, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Head, { cy: 36 }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M80 50 v50",
				stroke: INK,
				strokeWidth: "10",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M54 78 h52",
				stroke: INK,
				strokeWidth: "8",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M62 100 v40",
				stroke: INK,
				strokeWidth: "8",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M98 100 v28",
				stroke: INK,
				strokeWidth: "8",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M98 128 l16 8",
				stroke: CYAN,
				strokeWidth: "8",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M62 140 l-14 8",
				stroke: INK,
				strokeWidth: "8",
				strokeLinecap: "round"
			})
		] });
		case "ankleSit": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Frame, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Head, { cy: 40 }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M80 54 v36",
				stroke: INK,
				strokeWidth: "10",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M52 88 h56",
				stroke: INK,
				strokeWidth: "8",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M58 88 v36",
				stroke: INK,
				strokeWidth: "8",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M108 88 v36",
				stroke: INK,
				strokeWidth: "8",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "40",
				y: "124",
				width: "80",
				height: "14",
				rx: "4",
				fill: CYAN
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M64 138 v22",
				stroke: INK,
				strokeWidth: "8",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M100 138 v12",
				stroke: INK,
				strokeWidth: "8",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M100 150 l12 8",
				stroke: INK,
				strokeWidth: "7",
				strokeLinecap: "round"
			})
		] });
		case "march": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Frame, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Head, { cy: 36 }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M80 50 v44",
				stroke: INK,
				strokeWidth: "10",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M80 72 l-30 8",
				stroke: INK,
				strokeWidth: "8",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M80 72 l28 -16",
				stroke: INK,
				strokeWidth: "8",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M62 96 l-4 40",
				stroke: INK,
				strokeWidth: "8",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M96 96 l8 -28",
				stroke: CYAN,
				strokeWidth: "8",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M104 68 l18 6",
				stroke: CYAN,
				strokeWidth: "8",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M58 136 l-12 8",
				stroke: INK,
				strokeWidth: "8",
				strokeLinecap: "round"
			})
		] });
		case "lumbarExt": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Frame, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Head, {
				cx: 86,
				cy: 40
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M80 54 q8 24 0 48",
				stroke: INK,
				strokeWidth: "10",
				fill: "none",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M54 96 h52",
				stroke: CYAN,
				strokeWidth: "8",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M60 104 v60",
				stroke: INK,
				strokeWidth: "8",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M100 104 v60",
				stroke: INK,
				strokeWidth: "8",
				strokeLinecap: "round"
			})
		] });
		case "walkArms": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Frame, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Head, { cy: 36 }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M80 50 v48",
				stroke: INK,
				strokeWidth: "10",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M80 70 l-34 -18",
				stroke: INK,
				strokeWidth: "8",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M80 70 l34 18",
				stroke: INK,
				strokeWidth: "8",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "44",
				cy: "50",
				r: "6",
				fill: CYAN
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "116",
				cy: "90",
				r: "6",
				fill: CYAN
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M68 98 l-8 50",
				stroke: INK,
				strokeWidth: "8",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M92 98 l14 46",
				stroke: INK,
				strokeWidth: "8",
				strokeLinecap: "round"
			})
		] });
		case "quadStretch": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Frame, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Head, { cy: 34 }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M80 48 v52",
				stroke: INK,
				strokeWidth: "10",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M80 70 l-26 14",
				stroke: INK,
				strokeWidth: "8",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M80 70 l30 -8",
				stroke: INK,
				strokeWidth: "8",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M62 100 v48",
				stroke: INK,
				strokeWidth: "8",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M96 100 v20",
				stroke: INK,
				strokeWidth: "8",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M96 120 q-8 28 -28 24",
				stroke: CYAN,
				strokeWidth: "8",
				fill: "none",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M62 148 l-12 8",
				stroke: INK,
				strokeWidth: "8",
				strokeLinecap: "round"
			})
		] });
		case "sideBend": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Frame, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Head, {
				cx: 92,
				cy: 40
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M80 54 q16 20 8 48",
				stroke: INK,
				strokeWidth: "10",
				fill: "none",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M88 70 l22 -28",
				stroke: CYAN,
				strokeWidth: "8",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M76 92 l-22 18",
				stroke: INK,
				strokeWidth: "8",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M64 106 v54",
				stroke: INK,
				strokeWidth: "8",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M92 106 v54",
				stroke: INK,
				strokeWidth: "8",
				strokeLinecap: "round"
			})
		] });
		case "wristStretch": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Frame, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Head, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M80 56 v40",
				stroke: INK,
				strokeWidth: "10",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M80 90 l-40 6",
				stroke: INK,
				strokeWidth: "8",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M40 96 l-14 -10",
				stroke: CYAN,
				strokeWidth: "6",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M80 90 l28 28",
				stroke: INK,
				strokeWidth: "8",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M58 108 v56",
				stroke: INK,
				strokeWidth: "8",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M102 108 v56",
				stroke: INK,
				strokeWidth: "8",
				strokeLinecap: "round"
			})
		] });
		case "kneeLift": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Frame, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Head, { cy: 36 }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M80 50 v48",
				stroke: INK,
				strokeWidth: "10",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M58 78 h44",
				stroke: INK,
				strokeWidth: "8",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M64 98 v50",
				stroke: INK,
				strokeWidth: "8",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M96 98 l6 -32",
				stroke: CYAN,
				strokeWidth: "8",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M102 66 l16 8",
				stroke: CYAN,
				strokeWidth: "8",
				strokeLinecap: "round"
			})
		] });
		case "hipCircle": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Frame, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Head, { cy: 36 }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M80 50 v48",
				stroke: INK,
				strokeWidth: "10",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "108",
				cy: "92",
				r: "22",
				fill: "none",
				stroke: CYAN,
				strokeWidth: "3",
				strokeDasharray: "5 5"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M96 98 l18 -8",
				stroke: INK,
				strokeWidth: "8",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M64 98 v50",
				stroke: INK,
				strokeWidth: "8",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M54 78 h36",
				stroke: INK,
				strokeWidth: "8",
				strokeLinecap: "round"
			})
		] });
		case "calf": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Frame, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Head, { cy: 36 }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M86 50 v56",
				stroke: INK,
				strokeWidth: "10",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M70 78 h40",
				stroke: INK,
				strokeWidth: "8",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M74 106 v42",
				stroke: INK,
				strokeWidth: "8",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M98 106 l12 46",
				stroke: CYAN,
				strokeWidth: "8",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M110 152 h14",
				stroke: CYAN,
				strokeWidth: "8",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M74 148 h-12",
				stroke: INK,
				strokeWidth: "8",
				strokeLinecap: "round"
			})
		] });
		case "hamstring": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Frame, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Head, {
				cx: 70,
				cy: 44
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M74 58 q-8 24 10 40",
				stroke: INK,
				strokeWidth: "10",
				fill: "none",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M52 78 h36",
				stroke: INK,
				strokeWidth: "8",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M84 98 l36 8",
				stroke: CYAN,
				strokeWidth: "8",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M120 106 l8 -4",
				stroke: CYAN,
				strokeWidth: "7",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M70 100 v48",
				stroke: INK,
				strokeWidth: "8",
				strokeLinecap: "round"
			})
		] });
		case "gluteFig4": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Frame, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Head, { cy: 40 }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M80 54 v36",
				stroke: INK,
				strokeWidth: "10",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M50 88 h60",
				stroke: INK,
				strokeWidth: "8",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "38",
				y: "118",
				width: "84",
				height: "14",
				rx: "4",
				fill: CYAN
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M60 88 v30",
				stroke: INK,
				strokeWidth: "8",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M108 88 v16",
				stroke: INK,
				strokeWidth: "8",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M108 104 l-36 8",
				stroke: INK,
				strokeWidth: "8",
				strokeLinecap: "round"
			})
		] });
		case "pecStretch": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Frame, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "118",
				y: "28",
				width: "12",
				height: "140",
				rx: "3",
				fill: CYAN
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Head, { cx: 74 }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M74 56 v44",
				stroke: INK,
				strokeWidth: "10",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M74 78 l44 -8",
				stroke: INK,
				strokeWidth: "8",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M74 86 l-28 16",
				stroke: INK,
				strokeWidth: "8",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M54 104 v60",
				stroke: INK,
				strokeWidth: "8",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M90 104 v60",
				stroke: INK,
				strokeWidth: "8",
				strokeLinecap: "round"
			})
		] });
		case "shrug": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Frame, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Head, { cy: 38 }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M80 52 v44",
				stroke: INK,
				strokeWidth: "10",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M48 64 h64",
				stroke: CYAN,
				strokeWidth: "10",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M50 64 v40",
				stroke: INK,
				strokeWidth: "8",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M110 64 v40",
				stroke: INK,
				strokeWidth: "8",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M58 108 v56",
				stroke: INK,
				strokeWidth: "8",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M102 108 v56",
				stroke: INK,
				strokeWidth: "8",
				strokeLinecap: "round"
			})
		] });
		case "trunkFlex": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Frame, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Head, {
				cx: 62,
				cy: 70
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M70 84 q20 10 40 8",
				stroke: INK,
				strokeWidth: "10",
				fill: "none",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M108 92 v52",
				stroke: INK,
				strokeWidth: "8",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M88 100 v56",
				stroke: INK,
				strokeWidth: "8",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M54 86 l-16 12",
				stroke: CYAN,
				strokeWidth: "8",
				strokeLinecap: "round"
			})
		] });
		case "elbowFlex": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Frame, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Head, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M80 56 v40",
				stroke: INK,
				strokeWidth: "10",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M80 88 l-28 4",
				stroke: INK,
				strokeWidth: "8",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M52 92 l-4 -28",
				stroke: CYAN,
				strokeWidth: "8",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M80 88 l28 4",
				stroke: INK,
				strokeWidth: "8",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M108 92 l4 -28",
				stroke: CYAN,
				strokeWidth: "8",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M58 108 v56",
				stroke: INK,
				strokeWidth: "8",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M102 108 v56",
				stroke: INK,
				strokeWidth: "8",
				strokeLinecap: "round"
			})
		] });
		case "sitGlute": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Frame, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Head, { cy: 40 }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M80 54 v34",
				stroke: INK,
				strokeWidth: "10",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M50 86 h60",
				stroke: INK,
				strokeWidth: "8",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "40",
				y: "116",
				width: "80",
				height: "16",
				rx: "4",
				fill: CYAN
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M60 86 v30",
				stroke: INK,
				strokeWidth: "8",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M100 86 v30",
				stroke: INK,
				strokeWidth: "8",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M60 146 v18",
				stroke: INK,
				strokeWidth: "8",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M100 146 v18",
				stroke: INK,
				strokeWidth: "8",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "80",
				cy: "124",
				r: "5",
				fill: INK
			})
		] });
		case "chestOpen": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Frame, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Head, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M80 56 v44",
				stroke: INK,
				strokeWidth: "10",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M80 82 l-48 6",
				stroke: CYAN,
				strokeWidth: "8",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M80 82 l48 6",
				stroke: CYAN,
				strokeWidth: "8",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M58 104 v60",
				stroke: INK,
				strokeWidth: "8",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M102 104 v60",
				stroke: INK,
				strokeWidth: "8",
				strokeLinecap: "round"
			})
		] });
		default: return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Frame, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Head, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M80 56 v48",
				stroke: INK,
				strokeWidth: "10",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M50 84 h60",
				stroke: INK,
				strokeWidth: "8",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M58 108 v56",
				stroke: INK,
				strokeWidth: "8",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M102 108 v56",
				stroke: INK,
				strokeWidth: "8",
				strokeLinecap: "round"
			})
		] });
	}
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function CartillaApp() {
	const [view, setView] = (0, import_react.useState)("cover");
	const [sessionArea, setSessionArea] = (0, import_react.useState)(null);
	const area = AREAS.find((item) => item.id === view) ?? null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-paper text-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#contenido",
				className: "sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-brand-ink focus:px-3 focus:py-2 focus:text-paper-pure",
				children: "Saltar al contenido"
			}),
			view !== "cover" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TopNav, {
				view,
				onChange: setView,
				onPrint: () => window.print()
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				id: "contenido",
				children: view === "cover" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cover, { onOpen: (id) => setView(id) }) : area ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AreaPage, {
					area,
					onStartSession: () => setSessionArea(area)
				}) : null
			}),
			sessionArea ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PauseSession, {
				area: sessionArea,
				onClose: () => setSessionArea(null)
			}) : null
		]
	});
}
function TopNav({ view, onChange, onPrint }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
		className: "no-print sticky top-0 z-30 border-b border-line/80 bg-paper-pure/95 backdrop-blur",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-5xl items-center gap-2 overflow-x-auto px-3 py-2.5 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => onChange("cover"),
					className: "inline-flex h-11 shrink-0 items-center gap-1.5 rounded-full px-3 text-sm font-semibold text-brand-ink hover:bg-mist",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-4" }), "Portada"]
				}),
				AREAS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => onChange(item.id),
					className: cn("h-11 shrink-0 rounded-full px-3.5 text-sm font-semibold transition-colors", view === item.id ? "bg-brand text-brand-ink" : "text-ink-soft hover:bg-mist hover:text-ink"),
					children: item.title
				}, item.id)),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: onPrint,
					className: "ml-auto inline-flex h-11 shrink-0 items-center gap-1.5 rounded-full px-3 text-sm font-semibold text-brand-ink hover:bg-mist",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Printer, { className: "size-4" }), "Imprimir"]
				})
			]
		})
	});
}
function Cover({ onOpen }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto grid min-h-dvh max-w-5xl lg:grid-cols-[72px_1fr]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Spiral, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex min-h-dvh flex-col",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-16 bg-brand sm:h-[22vh] sm:min-h-28" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col items-center justify-center bg-paper-pure px-6 py-5 text-center sm:flex-1 sm:py-10",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-xs font-semibold tracking-[0.28em] text-brand-deep uppercase",
							children: "Seguridad y salud en el trabajo"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "mt-2 font-display text-3xl font-extrabold leading-none tracking-tight text-brand-ink sm:mt-4 sm:text-6xl",
							children: ["CARTILLA", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block",
								children: "BIOMECÁNICA"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wordmark, { className: "mt-4 sm:mt-8" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mx-auto mt-3 max-w-md text-sm leading-snug text-ink-soft sm:mt-6 sm:text-base sm:leading-relaxed",
							children: "Ejercicios de gimnasia laboral para el transporte especial premium con flota eléctrica en Bogotá."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-brand px-5 py-4 sm:px-10 sm:py-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-2.5 text-center text-xs font-semibold tracking-wide text-brand-ink uppercase sm:mb-4 sm:text-sm",
						children: "Elija su área"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mx-auto grid max-w-3xl gap-2 sm:grid-cols-3 sm:gap-3",
						children: AREAS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => onOpen(item.id),
							className: "rounded-2xl bg-paper-pure px-4 py-2.5 text-left shadow-sm transition-transform hover:-translate-y-0.5 sm:rounded-[22px] sm:py-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-base font-bold text-brand-ink sm:text-lg",
								children: item.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs leading-snug text-ink-soft sm:mt-1 sm:text-sm",
								children: item.kicker
							})]
						}, item.id))
					})]
				})
			]
		})]
	});
}
function Wordmark({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
		className: cn("font-display text-3xl font-extrabold tracking-tight text-brand-ink sm:text-4xl", className),
		children: [
			"lets",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-brand-deep",
				children: "móvil"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "ml-1 inline-block size-2.5 rounded-full bg-brand align-super" })
		]
	});
}
function Spiral() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "no-print relative hidden bg-paper lg:block",
		"aria-hidden": "true",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-y-0 right-0 w-px bg-line" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex h-full flex-col items-center justify-between py-10",
			children: Array.from({ length: 14 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-7 rounded-full border-[5px] border-brand-ink/25 bg-paper-pure shadow-sm" }, i))
		})]
	});
}
function AreaPage({ area, onStartSession }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-5xl lg:grid lg:grid-cols-[72px_1fr]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Spiral, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: "bg-paper-pure pb-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "bg-brand px-5 py-8 sm:px-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-xs font-semibold tracking-[0.22em] text-brand-ink uppercase",
						children: "Cartilla biomecánica · letsmóvil"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-2 font-display text-3xl font-extrabold text-brand-ink sm:text-5xl",
						children: area.title.toUpperCase()
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm font-semibold text-brand-ink/80",
						children: area.kicker
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "px-5 sm:px-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: area.image,
						alt: area.imageAlt,
						className: "mt-6 max-h-52 w-full rounded-[22px] object-cover object-center sm:max-h-72 sm:aspect-video"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "mt-8 grid gap-6 lg:grid-cols-[1.4fr_1fr]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Band, { children: "Contexto Let's Móvil" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-[1.05rem] leading-relaxed text-ink",
							children: area.context
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
							className: "rounded-[22px] bg-mist p-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-sm font-bold tracking-wide text-brand-ink uppercase",
								children: "Qué se carga en este cargo"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-3 space-y-2 text-sm leading-snug text-ink",
								children: area.risks.map((risk) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-1.5 size-1.5 shrink-0 rounded-full bg-brand-deep" }), risk]
								}, risk))
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 flex flex-col gap-3 rounded-[22px] border border-line bg-paper px-5 py-4 sm:flex-row sm:items-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock3, { className: "size-5 shrink-0 text-brand-deep" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "flex-1 text-sm leading-relaxed text-ink",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-semibold",
									children: "Frecuencia: "
								}), area.frequency]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: onStartSession,
								className: "no-print inline-flex h-12 items-center justify-center gap-2 rounded-full bg-brand-ink px-5 text-sm font-semibold text-paper-pure",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "size-4" }), "Iniciar pausa guiada"]
							})
						]
					}),
					area.groups.map((group) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "mt-10",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Band, { children: group.title }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 max-w-3xl text-base leading-relaxed text-ink-soft",
								children: group.purpose
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-5 overflow-hidden rounded-[22px] border border-line",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "hidden grid-cols-[minmax(0,1.1fr)_minmax(0,1.6fr)_140px] bg-brand text-sm font-bold tracking-wide text-brand-ink uppercase sm:grid",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "px-4 py-3",
											children: "Ejercicio"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "px-4 py-3",
											children: "Ejecución"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "px-4 py-3",
											children: "Dosis"
										})
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "divide-y divide-line",
									children: group.exercises.map((exercise) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExerciseRow, { exercise }, exercise.id))
								})]
							})
						]
					}, group.id)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
						className: "mt-12 rounded-[22px] bg-mist px-5 py-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "mt-0.5 size-5 shrink-0 text-brand-deep" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display font-bold text-brand-ink",
								children: "Antes de empezar"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm leading-relaxed text-ink",
								children: "Muévase sin dolor, sin rebotes y con respiración continua. Detenga el ejercicio si aparece mareo, hormigueo o dolor agudo. Esta cartilla no reemplaza la valoración fisioterapéutica ni el programa de vigilancia osteomuscular de Let's Móvil."
							})] })]
						})
					})
				]
			})]
		})]
	});
}
function Band({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
		className: "inline-flex rounded-full bg-brand px-4 py-1.5 font-display text-sm font-bold tracking-[0.12em] text-brand-ink uppercase",
		children
	});
}
function ExerciseRow({ exercise }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-3 bg-paper-pure p-4 sm:grid-cols-[minmax(0,1.1fr)_minmax(0,1.6fr)_140px] sm:items-start",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "size-[4.6rem] shrink-0 overflow-hidden rounded-[18px] sm:size-[5.4rem]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PoseFigure, { pose: exercise.pose })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-base font-bold text-brand-ink",
						children: exercise.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1 flex items-center gap-1 text-xs font-semibold text-brand-deep",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-3.5" }), exercise.where]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-ink-soft sm:hidden",
						children: exercise.execution
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-xs font-semibold tracking-wide text-brand-ink uppercase sm:hidden",
						children: exercise.dose
					})
				] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "hidden text-sm leading-relaxed text-ink sm:block",
				children: exercise.execution
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "hidden text-sm font-semibold text-brand-ink sm:block",
				children: exercise.dose
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "col-span-full text-sm text-ink-soft sm:pl-[5.9rem]",
				children: exercise.benefit
			})
		]
	});
}
function PauseSession({ area, onClose }) {
	const exercises = (0, import_react.useMemo)(() => sessionExercises(area), [area]);
	const [index, setIndex] = (0, import_react.useState)(0);
	const [seconds, setSeconds] = (0, import_react.useState)(20);
	const [running, setRunning] = (0, import_react.useState)(true);
	const [done, setDone] = (0, import_react.useState)(false);
	const current = exercises[index];
	const total = exercises.length;
	(0, import_react.useEffect)(() => {
		if (!running || done) return;
		const id = window.setInterval(() => {
			setSeconds((prev) => {
				if (prev <= 1) {
					window.clearInterval(id);
					return 0;
				}
				return prev - 1;
			});
		}, 1e3);
		return () => window.clearInterval(id);
	}, [
		running,
		done,
		index
	]);
	(0, import_react.useEffect)(() => {
		if (seconds !== 0 || done) return;
		if (index >= total - 1) {
			setDone(true);
			setRunning(false);
			return;
		}
		setIndex((i) => i + 1);
		setSeconds(20);
	}, [
		seconds,
		done,
		index,
		total
	]);
	function skip() {
		if (index >= total - 1) {
			setDone(true);
			setRunning(false);
			return;
		}
		setIndex((i) => i + 1);
		setSeconds(20);
		setRunning(true);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "no-print fixed inset-0 z-50 flex items-end justify-center bg-ink/50 p-3 sm:items-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			role: "dialog",
			"aria-modal": "true",
			"aria-labelledby": "pausa-title",
			className: "flex max-h-[92dvh] w-full max-w-lg flex-col overflow-hidden rounded-[28px] bg-paper-pure shadow-2xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between bg-brand px-5 py-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-xs font-semibold tracking-wide text-brand-ink uppercase",
					children: ["Pausa guiada · ", area.title]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					id: "pausa-title",
					className: "font-display text-lg font-bold text-brand-ink",
					children: done ? "Pausa completada" : `Ejercicio ${index + 1} de ${total}`
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: onClose,
					className: "inline-flex size-11 items-center justify-center rounded-full bg-paper-pure text-brand-ink",
					"aria-label": "Cerrar pausa guiada",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" })
				})]
			}), done || !current ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "px-6 py-10 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-2xl font-bold text-brand-ink",
						children: "Listo"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 text-sm leading-relaxed text-ink-soft",
						children: [
							"Completó la pausa activa de ",
							area.title,
							". Hidrátese y retome la tarea con la columna alineada."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: onClose,
						className: "mt-6 inline-flex h-12 items-center justify-center rounded-full bg-brand-ink px-6 text-sm font-semibold text-paper-pure",
						children: "Cerrar"
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "overflow-y-auto px-5 py-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mx-auto h-44 w-36",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PoseFigure, { pose: current.pose })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-2 text-center font-display text-xl font-bold text-brand-ink",
						children: current.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-center text-sm leading-relaxed text-ink",
						children: current.execution
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 text-center text-xs font-semibold text-brand-deep",
						children: [
							current.dose,
							" · ",
							current.where
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-6 text-center font-display text-5xl font-extrabold tabular-nums text-brand-ink",
						children: [seconds, "s"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 flex gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setRunning((v) => !v),
							className: "inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-full bg-mist text-sm font-semibold text-brand-ink",
							children: [running ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pause, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "size-4" }), running ? "Pausar" : "Continuar"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: skip,
							className: "inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-full bg-brand-ink text-sm font-semibold text-paper-pure",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SkipForward, { className: "size-4" }), "Siguiente"]
						})]
					})
				]
			})]
		})
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartillaApp, {});
}
//#endregion
export { Home as component };
