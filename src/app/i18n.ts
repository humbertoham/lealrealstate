// i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources: {
      en: {
        translation: {
          hello: 'Hello, World!',
          about: 'About us',
          props: 'Real Estate',
          con: 'Contact us',
          num: 'Number',
          the: 'The',
          best:'best',
          prop:'properties',
          market:'on the market.',
          real: 'These exclusive properties in Los Cabos represent the perfect combination of luxury, relaxed lifestyle, and an unparalleled natural environment. With privileged locations and world-class amenities, these properties redefine the meaning of coastal elegance.',
          search: 'Search',
          sanjose: 'Located at the southern tip of the Baja California Peninsula, it is your ticket to experience the luxury, serenity, and natural beauty that this gem of the Pacific offers.',
          sanlucas: 'It`s your chance to immerse yourself in a paradise where luxury meets the ocean, and excitement intertwines with serenity. Live the experience of a unique lifestyle in a destination that blends sophistication with the laid-back essence of the beach.',
          lapaz:'These properties offer you a unique opportunity to immerse yourself in the vibrant energy of La Paz, a city that balances tradition with modernity in an unparalleled way.',
          social:'Social Media',
          right:'All Rights Reserved.',
          us: 'About us',
          who:'We are an agency of dedicated professionals passionate about the real estate world. We specialize in facilitating the processes of buying, selling, and renting properties, providing a comprehensive service that goes beyond conventional transactions. Our commitment is to offer our clients an unparalleled experience in the real estate market, supported by a team of highly trained experts.',
          homes:'Homes',
          land: 'Lots & Land'
          
          
        },
      },
      es: {
        translation: {
          hello: '¡Hola, Mundo!',
          about: 'Acerca de',
          props: 'Propiedades',
          con: 'Contáctanos',
          num: 'Número',
          the: 'Las',
          best:'mejores',
          prop:'propiedades',
          market:'en el mercado.',
          real: 'Estas exclusivas propiedades en Los Cabos representa la perfecta combinación entre lujo, estilo de vida relajado y un entorno natural incomparable. Con ubicaciones privilegiadas y comodidades de clase mundial, estas propiedades redefine el significado de la elegancia costera.',
          search: 'Buscar',
          sanjose: 'Ubicada en el extremo sur de la península de Baja California, es tu boleto para experimentar el lujo, la serenidad y la belleza natural que ofrece esta joya del Pacífico.',
          sanlucas: 'Es tu oportunidad de sumergirte en un paraíso donde el lujo se encuentra con el océano y la emoción se entrelaza con la serenidad. Vive la experiencia de un estilo de vida único en un destino que combina sofisticación con la esencia relajada de la playa.',
          lapaz:'Estas propiedades te ofrecen una oportunidad única para sumergirse en la vibrante energía de La Paz, una ciudad que equilibra la tradición con la modernidad de una manera incomparable.',
          social:'Redes Sociales',
          right:'Derechos Reservados.',
          us: '¿Quiénes somos?',
          who:'Somos una agencia de profesionales dedicados apasionadamente al mundo inmobiliario. Nos especializamos en facilitar procesos de compra, venta y alquiler de propiedades, brindando un servicio integral que va más allá de las transacciones convencionales. Nuestro compromiso es proporcionar a nuestros clientes una experiencia inigualable en el mercado inmobiliario, respaldada por un equipo de expertos altamente capacitados.',
          homes:'Casas',
          land: 'Lotes & Terrenos'
        },
      },
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;