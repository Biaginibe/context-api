import { images } from "../../assets/images/index.ts";
import { CartItem } from "./types.ts";

export const mockCartItems: CartItem[] = [
  {
    id: 1,
    name: "Detector EMF",
    description:
      "Detecta campos eletromagnéticos, essencial para a caça de fantasmas.",
    price: 49.99,
    image: images.emf,
    category: "Equipamento",
    amount: 1,
  },
  {
    id: 3,
    name: "Termômetro Infravermelho",
    description:
      "Mede quedas de temperatura, indicando possível presença de fantasmas.",
    price: 59.99,
    image: images.termometro,
    category: "Equipamento",
    amount: 1,
  },
  {
    id: 4,
    name: "Armadilha para Fantasmas",
    description:
      "Dispositivo portátil para capturar fantasmas após a detecção.",
    price: 129.99,
    image: images.ghostTrap,
    category: "Ferramentas",
    amount: 2,
  },
  {
    id: 6,
    name: "Câmera de Visão Noturna",
    description:
      "Câmera projetada para gravação em ambientes com pouca luz durante investigações.",
    price: 249.99,
    image: images.camera,
    category: "Equipamento",
    amount: 3,
  },
  {
    id: 7,
    name: "Sal",
    description:
      "Sal usado para afastar fantasmas ou criar barreiras de proteção.",
    price: 5.99,
    image: images.salt,
    category: "Proteção",
    amount: 4,
  },
];
