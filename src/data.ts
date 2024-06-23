import images from './assets/images/images';
import califStars from './assets/icons/califStars.svg';
import flanStars from './assets/icons/flannStars.svg';
import clinStars from './assets/icons/clinStars.svg';
import uncleStars from './assets/icons/uncleStars.svg';

interface INavItem {
  id: number;
  name: string;
  link: string;
}

export const navItems: INavItem[] = [
  { id: 1, name: 'Página de inicio', link: '/' },
  { id: 2, name: 'Quiénes somos', link: '/about' },
  { id: 3, name: 'Bares deportivos', link: '/bars' },
  { id: 4, name: 'Contactos', link: '/contacts' },
];

export interface IBarReview {
  userName: string;
  userAvatar: string;
  userFeedback: string;
}
interface IBar {
  id: number;
  name: string;
  description: string;
  rate: string;
  image: string;
  address: string;
  characteristics: string[];
  isOpenReviews: boolean;
  reviews: IBarReview[];
}

export const barItems: IBar[] = [
  {
    id: 1,
    name: 'California Cantina',
    description:
      'California Cantina es uno de los bares deportivos más populares de Santiago. El bar atrae a los visitantes por su ambiente costero californiano y su excelente servicio. Aquí se pueden encontrar numerosas pantallas gigantes que retransmiten acontecimientos deportivos de todo el mundo. El menú ofrece una variedad de platos americanos, así como una amplia gama de cervezas artesanales y cócteles.',
    rate: califStars,
    image: images.california,
    address: 'Las Urbinas 56, 7510105 Providencia, Región Metropolitana, Chile',
    characteristics: [
      'Grandes pantallas para ver eventos deportivos',
      'Variada carta de cocina americana',
      'Amplia selección de cervezas artesanas y ',
      'Música en directo y fiestas temáticas',
    ],
    isOpenReviews: false,
    reviews: [
      {
        userName: 'María',
        userAvatar: images.maria,
        userFeedback:
          '"¡California Cantina es un lugar simplemente maravilloso para ver eventos deportivos! Estuve aquí el fin de semana con amigos y lo pasamos genial. La atmósfera en el bar recuerda a California, con un ambiente relajado y amigable. La comida era deliciosa, especialmente las hamburguesas, y la selección de cervezas artesanales fue una grata sorpresa. ¡Definitivamente volveré!"',
      },
      {
        userName: 'Alejandro:',
        userAvatar: images.alejandro,
        userFeedback:
          '"¡Este es el mejor sportbar en Santiago! California Cantina ofrece una excelente combinación de comida deliciosa, una gran selección de bebidas y muchas pantallas para ver los partidos. El personal es muy atento y siempre está dispuesto a ayudar. Me gustaron especialmente las fiestas temáticas y la música en vivo, que crean una atmósfera inigualable. ¡Recomiendo este lugar a todos los amantes del deporte!"',
      },
      {
        userName: 'Sebastián',
        userAvatar: images.sebastian,
        userFeedback:
          '"¡Me encantó California Cantina! El bar está decorado al estilo de California, lo que le da un encanto especial a este lugar. Aquí puedes encontrar pantallas para ver cualquier evento deportivo, y el menú ofrece una amplia variedad de platos y bebidas. Pasé una excelente noche disfrutando del juego y compartiendo con amigos. Definitivamente volveré aquí para ver los próximos partidos."',
      },
    ],
  },
  {
    id: 2,
    name: "Flannery's Beer House",
    description:
      "Flannery's Beer House es un pub irlandés con un ambiente acogedor, ideal para ver eventos deportivos. El bar ofrece un extenso menú con platos tradicionales irlandeses y una gran variedad de cervezas. Siempre es divertido y animado, especialmente durante los eventos deportivos importantes.",
    rate: flanStars,
    image: images.flannery,
    address: 'Encomenderos 83, Las Condes, Santiago, Chile',
    characteristics: [
      'Cocina tradicional irlandesa',
      'Gran variedad de cervezas, incluyendo importadas y locales',
      'Ambiente acogedor de pub irlandés',
      'Numerosas pantallas para ver partidos',
    ],
    isOpenReviews: false,
    reviews: [
      {
        userName: 'Camila',
        userAvatar: images.camila,
        userFeedback:
          "Flannery's Beer House es el lugar perfecto para disfrutar de una buena comida y ver eventos deportivos. Me encantó la atmósfera acogedora del pub irlandés, y la selección de cervezas es impresionante. Los platos tradicionales irlandeses fueron una delicia, especialmente el fish and chips. Sin duda, un lugar al que volveré con mis amigos.",
      },
      {
        userName: 'Javier',
        userAvatar: images.javier,
        userFeedback:
          "¡Flannery's Beer House es increíble! La decoración te transporta directamente a un auténtico pub irlandés, y el ambiente es siempre animado y acogedor. El personal es muy amable y atento. Me encanta venir aquí a ver los partidos con mis amigos. La variedad de cervezas y la calidad de la comida hacen que cada visita sea especial.",
      },
      {
        userName: 'Rodrigo',
        userAvatar: images.rodrigo,
        userFeedback:
          "Flannery's Beer House es mi lugar favorito para relajarme y disfrutar de buenos momentos con amigos. La gran cantidad de pantallas garantiza que siempre puedas ver el partido que quieras. La cocina es excelente, con platos auténticos y bien preparados. Además, la selección de cervezas es inigualable. ¡Un lugar altamente recomendable para los amantes del deporte y la buena cerveza!",
      },
    ],
  },
  {
    id: 3,
    name: 'The Clinic Bar',
    description:
      'The Clinic Bar es un bar único en el centro de Santiago que combina la atmósfera de un sportbar con la de un centro cultural. El bar es conocido por su decoración inusual y sus fiestas temáticas. Aquí puedes ver transmisiones deportivas y disfrutar de diversos eventos, incluidos espectáculos de comedia y presentaciones musicales.',
    rate: clinStars,
    image: images.clinic,
    address: 'Monjitas 578, Santiago, Chile',
    characteristics: [
      'Decoración y ambiente originales',
      'Fiestas y eventos temáticos',
      'Amplia selección de bebidas y aperitivos',
      'Pantallas grandes para ver eventos deportivos',
    ],
    isOpenReviews: false,
    reviews: [
      {
        userName: 'Felipe',
        userAvatar: images.felipe,
        userFeedback:
          '"The Clinic Bar combina lo mejor de un bar deportivo con un centro cultural. La decoración es creativa y única, y siempre hay algo interesante sucediendo, desde noches de comedia hasta conciertos en vivo. La variedad de bebidas y la calidad de la comida son excelentes. Es un lugar ideal para disfrutar de una noche divertida y entretenida. ¡Definitivamente volveré!"',
      },
      {
        userName: 'Diego',
        userAvatar: images.diego,
        userFeedback:
          '"Me encantó The Clinic Bar desde el momento en que entré. La atmósfera es vibrante y llena de energía. Las pantallas grandes hacen que sea fácil seguir los eventos deportivos mientras disfrutas de una buena bebida. Además, el personal es muy amable y atento. Los eventos de comedia y música en vivo realmente hacen de este lugar algo especial. ¡Muy recomendado!"',
      },
      {
        userName: 'Valentina',
        userAvatar: images.valentina,
        userFeedback:
          '"The Clinic Bar es un lugar increíblemente único y divertido. La decoración es original y llena de carácter, lo que crea un ambiente muy especial. Los eventos temáticos y las actuaciones en vivo son siempre emocionantes. Disfruté muchísimo de la comida y los cócteles. ¡Un lugar perfecto para pasar una noche diferente con amigos!"',
      },
    ],
  },
  {
    id: 4,
    name: 'Uncle Fletch',
    description:
      'Uncle Fletch es un bar conocido por sus deliciosas hamburguesas y su excelente ambiente para ver eventos deportivos. El bar ofrece numerosas pantallas que transmiten diversos partidos y una amplia selección de cervezas artesanales. Aquí reina un ambiente amistoso y relajado, ideal para pasar la noche con amigos.',
    rate: uncleStars,
    image: images.uncle,
    address: 'Dardignac 0192, Recoleta, Santiago, Chile',
    characteristics: [
      'Famosas hamburguesas y menú variado',
      'Amplia selección de cervezas artesanales',
      'Numerosas pantallas para ver eventos deportivos',
      'Ambiente amistoso y relajado',
    ],
    isOpenReviews: false,
    reviews: [
      {
        userName: 'Gonzalo',
        userAvatar: images.gonzalo,
        userFeedback:
          '"Me encanta Uncle Fletch por su ambiente vibrante y la calidad de su comida. Las hamburguesas son increíbles, siempre jugosas y con ingredientes frescos. Además, tienen una amplia selección de cervezas artesanales que complementan perfectamente la comida. Es un lugar perfecto para relajarse, ver deportes y pasar un buen rato con amigos. ¡Definitivamente uno de los mejores bares de Santiago!"',
      },
      {
        userName: 'Carolina',
        userAvatar: images.carolina,
        userFeedback:
          '"Uncle Fletch es mi lugar favorito para disfrutar de una buena hamburguesa y ver deportes. La atmósfera es acogedora y el servicio siempre es excelente. Las hamburguesas son deliciosas y hay una gran variedad de cervezas artesanales para elegir. Además, las pantallas grandes hacen que sea un lugar ideal para ver partidos con amigos. ¡Altamente recomendado!"',
      },
      {
        userName: 'Tomás',
        userAvatar: images.tomas,
        userFeedback:
          '"Uncle Fletch ofrece una experiencia inigualable. Las hamburguesas son de otro nivel, realmente las mejores que he probado en Santiago. El ambiente es relajado y perfecto para disfrutar de un buen rato con amigos. La selección de cervezas artesanales es impresionante y siempre hay algo nuevo para probar. Me encanta venir aquí a ver partidos y disfrutar de la buena comida."',
      },
    ],
  },
];

interface IDisclaimerItems {
  id: number;
  title: string;
  content: string[];
}

export const disclaimerItems: IDisclaimerItems[] = [
  {
    id: 1,
    title: 'Política de Privacidad de Maket 2',
    content: [
      'A nivel del Meliá Barcelona Sky, accesible desde juegos-premio.com, una de nuestras principales prioridades es la privacidad de nuestros visitantes. Este documento de Política de privacidad contiene tipos de información que The Level at Melia Barcelona Sky recopila y registra y cómo la usamos.',
      'Si tiene preguntas adicionales o necesita más información sobre nuestra Política de Privacidad, no dude en ponerse en contacto con nosotros.',
    ],
  },
  {
    id: 2,
    title: 'Archivos de Registro',
    content: [
      'El nivel en Melia Barcelona Sky sigue un procedimiento estándar de uso de archivos de registro. Estos archivos registran a los visitantes cuando visitan sitios web. Todas las empresas de alojamiento hacen esto y forman parte del análisis de los servicios de alojamiento. La información recopilada por los archivos de registro incluye direcciones de protocolo de Internet (IP), tipo de navegador, Proveedor de servicios de Internet( ISP), sello de fecha y hora, páginas de referencia/salida y posiblemente el número de clics. Estos no están vinculados a ninguna información que sea personalmente identificable. El propósito de la información es analizar tendencias, administrar el sitio, rastrear el movimiento de los usuarios en el sitio web y recopilar información demográfica. Nuestra Política de Privacidad se creó con la ayuda del Generador de Políticas de Privacidad.',
    ],
  },
  {
    id: 3,
    title: 'Cookies y Balizas Web',
    content: [
      'Como cualquier otro sitio web, The Level at Melia Barcelona Sky utiliza "cookies". Estas cookies se utilizan para almacenar información, incluidas las preferencias de los visitantes y las páginas del sitio web a las que accedió o visitó el visitante. La información se utiliza para optimizar la experiencia de los usuarios al personalizar el contenido de nuestra página web en función del tipo de navegador de los visitantes y / u otra información.',
      'Para obtener más información general sobre las cookies, lea el artículo "Cookies" del Generador de Políticas de privacidad.',
      '> > > > > > > matriz de e1b9ab7 (enlace de créditos actualizados de [marcas])',
    ],
  },
  {
    id: 4,
    title: 'Cookie de DART de Google DoubleClick',
    content: [
      'Google es uno de los proveedores externos de nuestro sitio. También utiliza cookies, conocidas como cookies de DART, para publicar anuncios a los visitantes de nuestro sitio en función de su visita a www.website.com y otros sitios en Internet. Sin embargo, los visitantes pueden optar por rechazar el uso de cookies de DART visitando la Política de Privacidad de la red de contenido y anuncios de Google en la siguiente URL – https://policies.google.com/technologies/ads',
    ],
  },
  {
    id: 5,
    title: 'Políticas de Privacidad',
    content: [
      'Puede consultar esta lista para encontrar la Política de privacidad de cada uno de los socios publicitarios de The Level at Melia Barcelona Sky .',
      'Los servidores de anuncios o redes publicitarias de terceros utilizan tecnologías como cookies, JavaScript o balizas web que se utilizan en sus respectivos anuncios y enlaces que aparecen en el Nivel en Melia Barcelona Sky , que se envían directamente al navegador de los usuarios. Reciben automáticamente su dirección IP cuando esto ocurre. Estas tecnologías se utilizan para medir la efectividad de sus campañas publicitarias y/o para personalizar el contenido publicitario que ve en los sitios web que visita.',
      'Tenga en cuenta que The Level at Melia Barcelona Sky no tiene acceso ni control sobre estas cookies que utilizan los anunciantes externos.',
    ],
  },
  {
    id: 6,
    title: 'Políticas de Privacidad de Terceros',
    content: [
      'La Política de Privacidad de Level at Melia Barcelona Sky no se aplica a otros anunciantes o sitios web. Por lo tanto, le recomendamos que consulte las respectivas Políticas de privacidad de estos servidores de anuncios de terceros para obtener información más detallada. Puede incluir sus prácticas e instrucciones sobre cómo excluirse de ciertas opciones.',
      'Puede optar por deshabilitar las cookies a través de las opciones individuales de su navegador. Para conocer información más detallada sobre la gestión de cookies con navegadores web específicos, se puede encontrar en los sitios web respectivos de los navegadores. ¿Qué Son Las Cookies?',
    ],
  },
  {
    id: 7,
    title: 'Información para Niños',
    content: [
      'Otra parte de nuestra prioridad es agregar protección para los niños mientras usan Internet. Alentamos a los padres y tutores a observar, participar y / o monitorear y guiar su actividad en línea.',
      'The Level en Melia Barcelona Sky no recopila a sabiendas ninguna Información de identificación personal de niños menores de 13 años. Si cree que su hijo proporcionó este tipo de información en nuestro sitio web, le recomendamos encarecidamente que se comunique con nosotros de inmediato y haremos todo lo posible para eliminar dicha información de nuestros registros de inmediato.',
    ],
  },
  {
    id: 8,
    title: 'Política de Privacidad en Línea Solamente',
    content: [
      'Esta Política de Privacidad se aplica únicamente a nuestras actividades en línea y es válida para los visitantes de nuestro sitio web con respecto a la información que compartieron y/o recopilaron en The Level at Melia Barcelona Sky . Esta política no se aplica a ninguna información recopilada fuera de línea o a través de canales distintos a este sitio web.',
    ],
  },
  {
    id: 9,
    title: 'Consentimiento',
    content: [
      'Al utilizar nuestro sitio web, usted acepta nuestra Política de Privacidad y acepta sus Términos y Condiciones.',
    ],
  },
];
