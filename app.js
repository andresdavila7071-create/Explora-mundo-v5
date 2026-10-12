const S=[
{id:'lengua',name:'Lengua y lectura',icon:'📚',color:'#ef806b',tint:'#fff0eb',desc:'Cuentos, palabras y escritura',q:[{p:'En el cuento, ¿cómo ayudó Luna a la luciérnaga?',c:['Iluminó el sendero con su farol','Le construyó una casa','La llevó al bosque'],a:0,h:'Busca en el texto qué usó Luna para alumbrar el camino.'},{p:'Completa: Ayer, Mateo ___ una carta para su abuela.',type:'text',a:['escribió'],h:'Usa el verbo escribir en pasado.'},{p:'¿Cuál oración está escrita correctamente como pregunta?',c:['¿Dónde vive el colibrí?','Dónde vive el colibrí.','¡Dónde vive el colibrí?'],a:0,h:'Las preguntas en español llevan dos signos.'}]},
{id:'matematicas',name:'Matemáticas',icon:'🔢',color:'#596ee9',tint:'#edf0ff',desc:'Números, formas y desafíos',q:[{p:'Hay 18 manzanas y se reparten 7. ¿Cuántas quedan?',c:['11','25','10'],a:0,h:'Resta las manzanas que se repartieron.'},{p:'Hay 4 bolsas con 6 canicas cada una. ¿Cuántas canicas hay?',type:'text',a:['24'],h:'Puedes sumar 6 cuatro veces o multiplicar 4 × 6.'},{p:'Una pizza tiene 4 partes iguales. Si comes 1, ¿qué fracción comiste?',c:['1/4','1/2','4/1'],a:0,h:'El número de abajo muestra las partes iguales.'}]},
{id:'ingles',name:'Inglés',icon:'🔤',color:'#39a989',tint:'#e8f8f1',desc:'Words, sounds and little phrases',q:[{p:'Which animal says “meow”?',c:['A cat','A duck','A horse'],a:0,h:'It is a small pet that likes to purr.',s:'A cat'},{p:'¿Cómo se dice “azul” en inglés?',type:'text',a:['blue'],h:'Empieza con la letra B.',s:'Blue'},{p:'Ordena las palabras para saludar por la mañana:',type:'order',parts:['morning!','Good'],a:['Good','morning!'],h:'Primero va “Good”.'}]},
{id:'ciencias',name:'Ciencias naturales',icon:'🌿',color:'#55aa79',tint:'#eaf7ec',desc:'Vida, espacio y nuestro planeta',q:[{p:'¿Qué parte de la planta absorbe agua del suelo?',c:['La raíz','La flor','El fruto'],a:0,h:'Está debajo de la tierra.'},{p:'¿Cómo se llama la estrella que ilumina la Tierra?',type:'text',a:['el sol','sol'],h:'Es la estrella más cercana a nuestro planeta.'},{p:'Ordena el comienzo del ciclo del agua:',type:'order',parts:['se enfría y forma nubes','el Sol calienta el agua','la lluvia cae'],a:['el Sol calienta el agua','se enfría y forma nubes','la lluvia cae'],h:'El calor del Sol inicia el viaje.'}]},
{id:'sociales',name:'Ciencias sociales',icon:'🌎',color:'#e8a83f',tint:'#fff5df',desc:'Lugares, culturas y convivencia',q:[{p:'¿En qué continente está Colombia?',c:['América del Sur','Europa','Asia'],a:0,h:'Colombia está en la parte norte de Sudamérica.'},{p:'¿Cuál es la capital de Colombia?',type:'text',a:['Bogotá'],h:'Su nombre lleva una tilde en la última vocal.'},{p:'Dos amigos quieren el mismo libro. ¿Qué pueden hacer?',c:['Turnarse y conversar','Esconder el libro','Dejar de hablarse'],a:0,h:'Una solución justa permite que ambos participen.'}]},
{id:'tecnologia',name:'Tecnología',icon:'🤖',color:'#7683cb',tint:'#eff0fb',desc:'Inventos e ideas digitales',q:[{p:'Si alguien que no conoces te escribe por internet, ¿qué haces?',c:['Se lo cuentas a un adulto de confianza','Le das tu dirección','Respondes con tus datos'],a:0,h:'Un adulto de confianza te ayuda a estar seguro.'},{p:'Ordena estos pasos para usar una tableta:',type:'order',parts:['presionar encendido','pedir permiso a un adulto','usar una aplicación adecuada'],a:['pedir permiso a un adulto','presionar encendido','usar una aplicación adecuada'],h:'Primero confirma que tienes permiso.'},{p:'¿Qué aparato usamos para tomar fotografías digitales?',type:'text',a:['cámara','camara'],h:'También puede ser la cámara de un teléfono.'}]},
{id:'arte',name:'Arte y creatividad',icon:'🎨',color:'#d671ad',tint:'#ffedf7',desc:'Colores, formas e imaginación',q:[{p:'¿Qué color aparece al mezclar amarillo y azul?',c:['Verde','Morado','Naranja'],a:0,h:'Piensa en el color de muchas hojas.'},{p:'¿Cuántos lados tiene un triángulo?',type:'text',a:['3','tres'],h:'“Tri” nos da una pista.'},{p:'¿Qué herramienta sirve para modelar arcilla?',c:['Las manos','Un reloj','Un cuaderno'],a:0,h:'La arcilla se puede moldear con los dedos.'}]},
{id:'musica',name:'Música',icon:'🎵',color:'#886cda',tint:'#f1edff',desc:'Ritmo, escucha y expresión',q:[{p:'¿Cuál instrumento tiene teclas blancas y negras?',c:['Piano','Tambor','Maracas'],a:0,h:'Se toca con los dedos.'},{p:'Completa el ritmo: palmada, palmada, pausa, palmada, palmada, ___',type:'text',a:['pausa'],h:'El patrón vuelve a empezar igual.'},{p:'Ordena las primeras notas de la escala:',type:'order',parts:['mi','do','re'],a:['do','re','mi'],h:'Piensa: do, re, mi…'}]},
{id:'movimiento',name:'Educación física',icon:'🏃',color:'#eb8e50',tint:'#fff1e4',desc:'Movimiento alegre y seguro',q:[{p:'Antes de jugar, ¿qué ayuda a preparar el cuerpo?',c:['Moverse suavemente y calentar','Quedarse sin respirar','Empujar a alguien'],a:0,h:'Un comienzo gradual prepara los músculos.'},{p:'Después de jugar y sudar, ¿qué es bueno recordar?',type:'text',a:['tomar agua','beber agua','agua'],h:'Nuestro cuerpo necesita hidratarse.'},{p:'Para practicar equilibrio con seguridad, ¿qué lugar eliges?',c:['Espacio despejado y un adulto cerca','Una silla alta','Un piso mojado'],a:0,h:'Busca espacio libre y una superficie firme.'}]},
{id:'valores',name:'Valores y convivencia',icon:'💛',color:'#e1aa3c',tint:'#fff6df',desc:'Respeto, empatía y amistad',q:[{p:'Una amiga está triste por su dibujo. ¿Qué demuestra empatía?',c:['Escucharla y ofrecer ayuda','Burlarse del dibujo','Decirle que no importa'],a:0,h:'Intentamos comprender cómo se siente otra persona.'},{p:'¿Qué podemos recordar si nos equivocamos al aprender?',type:'text',a:['los errores ayudan a aprender','puedo volver a intentar','equivocarse es parte de aprender'],h:'Aprender toma práctica y paciencia.'},{p:'En un equipo, ¿cómo incluimos a todos?',c:['Escuchamos ideas y repartimos tareas','Una persona hace todo','Ignoramos ideas diferentes'],a:0,h:'Cooperar es construir algo entre todos.'}]},
{id:'logica',name:'Lógica y descubrimientos',icon:'🧩',color:'#4a9daa',tint:'#e7f7f8',desc:'Pistas, patrones y problemas',q:[{p:'¿Qué número sigue? 2, 4, 6, 8, ___',type:'text',a:['10','diez'],h:'Cada vez sumamos dos.'},{p:'Tengo cuatro patas y digo “miau”. ¿Quién soy?',c:['Un gato','Un pez','Una mariposa'],a:0,h:'Es un animal doméstico que suele ronronear.'},{p:'Ordena los números de menor a mayor:',type:'order',parts:['7','2','5'],a:['2','5','7'],h:'Empieza por el número más pequeño.'}]},
{id:'bienestar',name:'Salud y bienestar',icon:'🌈',color:'#48a8ab',tint:'#e6f7f6',desc:'Hábitos amables para sentirnos bien',q:[{p:'¿Cuándo es importante lavarse las manos?',c:['Antes de comer y después del baño','Una vez al mes','Nunca si se ven limpias'],a:0,h:'Lavarlas ayuda a quitar microbios que no vemos.'},{p:'¿Qué ayuda a cuidar los dientes?',type:'text',a:['cepillarlos','cepillarse los dientes','cepillarme los dientes'],h:'Usa un cepillo y sigue las indicaciones de un adulto.'},{p:'Si te sientes preocupado, ¿qué puedes hacer?',c:['Contárselo a un adulto de confianza','Guardarlo siempre en secreto','Dejar de pedir ayuda'],a:0,h:'Hablar con alguien de confianza puede ayudar.'}]}
];
const C=(p,c,a,h)=>({p,c,a,h}),I=(p,c,a,h)=>({p,type:'image',c,a,h}),T=(p,a,h)=>({p,type:'text',a:Array.isArray(a)?a:[a],h}),O=(p,parts,a,h)=>({p,type:'order',parts,a,h});
const EXTRA={
 lengua:[
 O('Ordena las palabras para formar una oración:',['juega','parque.','en','el','Valeria'],['Valeria','juega','en','el','parque.'],'Empieza por el nombre propio.'),
 C('¿Cuál palabra significa casi lo mismo que “alegre”?',['Contento','Lejano','Pequeño'],0,'Busca una palabra que exprese felicidad.'),
 T('Completa con el plural: un lápiz, dos ___.',['lápices'],'Cambia la z por c y añade es.'),
 C('¿Qué palabra está escrita correctamente?',['árbol','arbol','árvol'],0,'Las palabras esdrújulas siempre llevan tilde.'),
 C('Luna alumbró el camino de la luciérnaga. ¿Qué aprendió Luna?',['Una ayuda pequeña puede ser importante','Los faroles viven en los árboles','Las luciérnagas no necesitan luz'],0,'Recuerda la última oración del cuento.'),
 O('Ordena las palabras para escribir una pregunta:',['vive','¿Dónde','colibrí?','el'],['¿Dónde','vive','el','colibrí?'],'La pregunta comienza con el signo de apertura.'),
 I('Relaciona el animal con la palabra “reptar”.',['🐍 Serpiente','🐦 Colibrí','🐇 Conejo'],0,'¿Qué animal se desplaza deslizándose por el suelo?')
 ],
 matematicas:[
 C('¿Cuánto es 56 ÷ 8?',['7','6','8'],0,'Busca el número que multiplicado por 8 da 56.'),
 T('Resuelve: 9 × 7 = ___.',['63'],'Puedes sumar siete grupos de nueve.'),
 C('¿Qué fracción es equivalente a 1/2?',['2/4','1/3','3/4'],0,'Multiplica el numerador y el denominador por el mismo número.'),
 T('Un rectángulo mide 5 cm de largo y 3 cm de ancho. ¿Cuál es su perímetro en cm?',['16'],'Suma los cuatro lados: 5 + 3 + 5 + 3.'),
 C('La clase empieza a las 8:00 y dura 45 minutos. ¿A qué hora termina?',['8:45','8:30','9:15'],0,'Añade 45 minutos a las ocho.'),
 T('Hay 3 cajas con 8 lápices cada una. Se usan 5. ¿Cuántos quedan?',['19'],'Primero multiplica 3 por 8 y luego resta 5.'),
 O('Ordena estos números de menor a mayor:',['0.7','0.25','0.5'],['0.25','0.5','0.7'],'Compara las décimas y después las centésimas.')
 ],
 ingles:[
 I('Which picture shows a butterfly?',['🦋 Butterfly','🐢 Turtle','🐟 Fish'],0,'Look for the insect with colorful wings.'),
 T('Complete the color: The sun is often ___.',['yellow'],'It starts with Y.'),
 C('What number comes after “twelve”?',['Thirteen','Eleven','Twenty'],0,'Count: eleven, twelve…'),
 I('Match “apple” with its picture.',['🍎 Apple','🍞 Bread','🥛 Milk'],0,'It can be red, green, or yellow.'),
 C('Choose the everyday greeting:',['Good morning!','Good night!','Goodbye forever!'],0,'We say this when we meet someone early in the day.'),
 O('Put the words in order:',['is','This','book.','my'],['This','is','my','book.'],'Start with “This”.'),
 T('Complete the sentence: I ___ happy.',['am'],'Use the verb “to be” with “I”.')
 ],
 ciencias:[
 C('¿Qué órgano usamos principalmente para respirar?',['Los pulmones','El estómago','Los riñones'],0,'Se llenan de aire cuando inhalamos.'),
 I('¿Qué animal es un mamífero?',['🐬 Delfín','🐸 Rana','🦋 Mariposa'],0,'Este animal respira aire y alimenta a sus crías con leche.'),
 O('Ordena esta cadena alimentaria:',['águila','hierba','conejo'],['hierba','conejo','águila'],'La planta produce alimento y un animal se alimenta de ella.'),
 C('¿Qué describe mejor un ecosistema?',['Seres vivos y el lugar donde se relacionan','Solo las piedras de una montaña','Un grupo de juguetes'],0,'Incluye seres vivos, agua, suelo y relaciones.'),
 C('¿Cuál planeta es conocido como el planeta rojo?',['Marte','Venus','Neptuno'],0,'Su superficie tiene un color rojizo.'),
 T('La energía del Sol ayuda a las plantas a fabricar su ___.',['alimento'],'Las plantas usan luz, agua y aire para producirlo.'),
 I('¿Qué acción ayuda a cuidar el agua?',['🚰 Cerrar la llave al cepillarse','🛁 Dejarla correr sin usarla','🗑️ Tirar basura al río'],0,'Elige una acción que evite desperdiciarla.')
 ],
 sociales:[
 C('En un mapa, ¿qué punto cardinal suele estar arriba?',['Norte','Sur','Oeste'],0,'Busca la letra N en la rosa de los vientos.'),
 I('¿Cuál es la bandera de Colombia?',['🇨🇴 Amarillo, azul y rojo','🇯🇵 Círculo rojo sobre blanco','🇨🇦 Hoja de arce'],0,'La bandera colombiana tiene tres franjas horizontales.'),
 C('¿Qué es una tradición cultural?',['Una costumbre compartida por una comunidad','Una regla para medir distancias','Un tipo de montaña'],0,'Puede incluir celebraciones, relatos, comidas o música.'),
 T('En un mapa, la explicación de sus símbolos se llama ___.',['leyenda'],'Ayuda a entender qué significa cada dibujo o color.'),
 C('¿Qué herramienta ayuda a conocer cómo vivían las personas en el pasado?',['Una fuente histórica, como una fotografía antigua','Un pronóstico del tiempo de mañana','Una receta inventada hoy'],0,'Las fuentes históricas aportan información sobre otras épocas.'),
 O('Ordena una decisión democrática en el aula:',['escuchar propuestas','votar con respeto','conocer las opciones'],['conocer las opciones','escuchar propuestas','votar con respeto'],'Primero conocemos las opciones y luego decidimos.'),
 C('¿Cuál es una forma respetuosa de conocer otra cultura?',['Escuchar y aprender sin burlarse','Decir que sus costumbres están mal','Impedir que compartan sus historias'],0,'La curiosidad y el respeto ayudan a convivir.')
 ],
 tecnologia:[
 C('¿Cuál de estos es un dispositivo de entrada de una computadora?',['Teclado','Monitor','Parlante'],0,'Lo usamos para escribir letras y números.'),
 O('Ordena los pasos de un algoritmo para preparar una mochila:',['guardar los útiles','revisar el horario','cerrar la mochila'],['revisar el horario','guardar los útiles','cerrar la mochila'],'Primero averigua qué necesitas.'),
 I('¿Qué imagen representa una contraseña segura?',['🔐 Una frase larga que no compartes','📛 Tu nombre y cumpleaños','🔓 La palabra 1234'],0,'Una contraseña debe ser difícil de adivinar y privada.'),
 C('¿Qué es un programa informático?',['Instrucciones que una computadora puede seguir','Una pieza de fruta','Un cable sin conexión'],0,'Un programa indica al dispositivo qué tareas realizar.'),
 T('En el código binario se usan dos símbolos: 0 y ___.',['1'],'Es el siguiente número después de cero.'),
 C('¿Qué haces antes de descargar un juego o archivo?',['Pedir permiso a un adulto de confianza','Compartir tu dirección','Abrir cualquier enlace desconocido'],0,'Un adulto puede ayudarte a revisar si es seguro.'),
 O('Ordena una solución para una lámpara que no enciende:',['pedir ayuda si sigue sin funcionar','comprobar si está conectada','mirar si el interruptor está encendido'],['mirar si el interruptor está encendido','comprobar si está conectada','pedir ayuda si sigue sin funcionar'],'Empieza con una comprobación sencilla y segura.')
 ],
 arte:[
 C('¿Qué dos colores mezclas para obtener naranja?',['Rojo y amarillo','Azul y amarillo','Rojo y azul'],0,'Piensa en el color de una mandarina.'),
 I('¿Qué figura tiene cuatro lados iguales?',['🟦 Cuadrado','🔺 Triángulo','⚪ Círculo'],0,'Tiene cuatro lados y cuatro esquinas.'),
 T('Rojo, amarillo y azul se llaman colores ___.',['primarios'],'Son colores que sirven para crear otros al mezclarlos.'),
 C('¿Qué técnica crea una imagen con pequeños puntos de color?',['Puntillismo','Origami','Modelado'],0,'El nombre de la técnica viene de “punto”.'),
 O('Ordena los pasos para hacer una impresión con una hoja:',['presionar el papel sobre la hoja','poner pintura en la hoja','retirar el papel con cuidado'],['poner pintura en la hoja','presionar el papel sobre la hoja','retirar el papel con cuidado'],'Primero prepara la hoja con pintura.'),
 I('¿Qué herramienta usarías para recortar papel con cuidado?',['✂️ Tijeras escolares','🥄 Cuchara','🧹 Escoba'],0,'Pide a un adulto que te indique cómo usarlas de forma segura.'),
 C('¿Qué ayuda a crear una obra original?',['Probar ideas propias y combinar formas','Copiar siempre sin observar','Evitar todos los colores'],0,'La creatividad crece cuando exploras tus propias ideas.')
 ],
 musica:[
 C('¿Qué instrumento se toca soplando?',['Flauta','Tambor','Guitarra'],0,'El aire pasa por su interior.'),
 T('¿Cuántos tiempos suele durar una negra en un compás sencillo?',['1','uno'],'En el pulso básico, una negra ocupa un tiempo.'),
 O('Ordena estos sonidos de grave a agudo:',['silbido','voz grave','voz media'],['voz grave','voz media','silbido'],'El sonido grave se siente más bajo que el agudo.'),
 I('¿Cuál imagen muestra un instrumento de percusión?',['🥁 Tambor','🎻 Violín','🎺 Trompeta'],0,'Se toca golpeando o sacudiendo.'),
 C('¿Qué indica el ritmo en una canción?',['Cómo se organizan los sonidos y silencios en el tiempo','El color de la portada','El tamaño del escenario'],0,'El ritmo nos ayuda a seguir el pulso de la música.'),
 O('Ordena estas señales de un ritmo:',['palmada','pausa','campana'],['palmada','pausa','campana'],'El ritmo alterna un sonido, un silencio y otro sonido.'),
 C('¿Qué puedes hacer para cantar cuidando la voz?',['Cantar sin forzar y tomar pausas','Gritar durante mucho tiempo','Cantar si te duele la garganta'],0,'La voz necesita cuidado y descanso.')
 ],
 movimiento:[
 C('¿Qué puedes hacer para mejorar la coordinación de forma segura?',['Lanzar y atrapar una pelota suave en un espacio libre','Correr con los ojos cerrados','Saltar desde un lugar alto'],0,'Elige movimientos suaves y un espacio despejado.'),
 O('Ordena una preparación segura para moverte:',['empezar el juego despacio','revisar que haya espacio libre','hacer movimientos suaves de calentamiento'],['revisar que haya espacio libre','hacer movimientos suaves de calentamiento','empezar el juego despacio'],'Primero comprueba que el lugar sea seguro.'),
 T('Antes de una actividad física, hacemos un calentamiento ___.',['suave'],'Empezar poco a poco prepara el cuerpo.'),
 C('Si sientes dolor o mucho cansancio mientras juegas, ¿qué haces?',['Paras y avisas a un adulto','Sigues sin decir nada','Te obligas a correr más'],0,'Escuchar al cuerpo y pedir ayuda es importante.'),
 I('¿Qué imagen muestra un estiramiento suave?',['🙆 Brazos arriba sin rebotes','🤸 Saltar desde una mesa','🏋️ Levantar algo muy pesado'],0,'Los estiramientos se hacen despacio, sin forzar.'),
 C('¿Qué hábito ayuda a cuidar el cuerpo después de la actividad?',['Descansar y beber agua cuando tengas sed','No tomar pausas nunca','Jugar aunque te sientas mal'],0,'El descanso forma parte de una actividad saludable.'),
 T('En un equipo de fútbol hay 5 jugadores y se unen 2 más. Ahora hay ___ jugadores.',['7','siete'],'Suma 5 + 2.')
 ],
 valores:[
 C('Si dos personas quieren hablar al mismo tiempo, ¿qué ayuda?',['Turnarse para hablar y escuchar','Gritar más fuerte','No dejar que nadie opine'],0,'Los turnos dan espacio para que todos participen.'),
 T('Ayudar a otra persona sin esperar algo a cambio es un acto de ___.',['amabilidad','generosidad','bondad'],'Es una acción considerada y amable.'),
 I('¿Qué imagen representa cooperación?',['🧑‍🤝‍🧑 Varias personas construyendo juntas','🚫 Una persona excluyendo al grupo','🙉 Nadie escucha a los demás'],0,'Cooperar es trabajar juntos hacia una meta.'),
 C('Un compañero piensa distinto a ti. ¿Qué haces?',['Escuchas su idea con respeto','Te burlas de él','Le prohíbes hablar'],0,'Podemos tener opiniones distintas y tratarnos con respeto.'),
 O('Ordena cómo resolver un desacuerdo:',['proponer una solución justa','escuchar cómo se siente cada persona','hablar con calma'],['hablar con calma','escuchar cómo se siente cada persona','proponer una solución justa'],'La calma permite escucharnos antes de buscar acuerdos.'),
 C('¿Qué frase ayuda a reparar un error que lastimó a alguien?',['Lo siento, ¿cómo puedo arreglarlo?','No me importa cómo te sientes','Fue tu culpa'],0,'Una disculpa sincera reconoce el daño y busca repararlo.'),
 T('Cuando reconocemos cómo se siente otra persona, practicamos la ___.',['empatía'],'Esta palabra nos ayuda a comprender a los demás.')
 ],
 logica:[
 T('Completa el patrón: 3, 6, 9, 12, ___.',['15','quince'],'Cada número aumenta tres.'),
 C('Si todos los zorros son animales y Nube es un zorro, ¿qué sabemos de Nube?',['Es un animal','Es una planta','Es una estrella'],0,'Usa la información de las dos partes de la frase.'),
 O('Ordena los pasos para resolver un acertijo:',['comprobar si la respuesta encaja','leer las pistas','proponer una respuesta'],['leer las pistas','proponer una respuesta','comprobar si la respuesta encaja'],'Primero reunimos la información.'),
 I('¿Qué figura sigue en el patrón? 🔺 🔵 🔺 🔵 __',['🔺 Triángulo','🟩 Cuadrado','⭐ Estrella'],0,'Las figuras alternan entre triángulo y círculo.'),
 T('Si tienes 12 galletas y las compartes por igual entre 3 amigos, cada uno recibe ___ galletas.',['4','cuatro'],'Divide 12 entre 3.'),
 C('Una caja es más pesada que una pelota. La pelota pesa más que una pluma. ¿Cuál es la más liviana?',['
