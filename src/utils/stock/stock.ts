import { images } from "../../assets/images/index.ts";
import { StockItem } from "./types.ts";

export const stock: StockItem[] = [
  {
    id: 1,
    name: "Detector EMF",
    description:
      "Detecta campos eletromagnéticos, essencial para a caça de fantasmas.",
    price: 49.99,
    image: images.emf,
    stockQuantity: 15,
    category: "Equipamento",
  },
  {
    id: 2,
    name: "Spirit Box",
    description:
      "Dispositivo que varre frequências de rádio para permitir comunicação com espíritos.",
    price: 79.99,
    stockQuantity: 10,
    image: images.spiritBox,
    category: "Equipamento",
  },
  {
    id: 3,
    name: "Termômetro Infravermelho",
    description:
      "Mede quedas de temperatura, indicando possível presença de fantasmas.",
    price: 59.99,
    stockQuantity: 8,
    image: images.termometro,
    category: "Equipamento",
  },
  {
    id: 4,
    name: "Armadilha para Fantasmas",
    description:
      "Dispositivo portátil para capturar fantasmas após a detecção.",
    price: 129.99,
    stockQuantity: 5,
    image: images.ghostTrap,
    category: "Ferramentas",
  },
  {
    id: 5,
    name: "Diário de Fantasmas",
    description:
      "Usado para registrar avistamentos de fantasmas e evidências durante investigações.",
    price: 12.99,
    stockQuantity: 50,
    image: images.ghostDiary,
    category: "Acessórios",
  },
  {
    id: 6,
    name: "Câmera de Visão Noturna",
    description:
      "Câmera projetada para gravação em ambientes com pouca luz durante investigações.",
    price: 249.99,
    stockQuantity: 3,
    image: images.camera,
    category: "Equipamento",
  },
  {
    id: 7,
    name: "Sal",
    description:
      "Sal usado para afastar fantasmas ou criar barreiras de proteção.",
    price: 5.99,
    stockQuantity: 100,
    image: images.salt,
    category: "Proteção",
  },
  {
    id: 8,
    name: "Lanterna UV",
    description:
      "Revela impressões digitais fantasmagóricas e outras marcas espectrais.",
    price: 34.99,
    stockQuantity: 12,
    image: images.flashlight,
    category: "Ferramentas",
  },
  {
    id: 9,
    name: "Amuleto de Proteção",
    description: "Usado para proteger contra ataques de fantasmas.",
    price: 89.99,
    stockQuantity: 7,
    image: images.protectionAmule,
    category: "Proteção",
  },
];
