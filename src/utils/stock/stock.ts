import { images } from "../../assets/images/index.ts";
import { FormattedItemsToShowItem, Product, StockItem } from "./types.ts";

export const findStockItemById = (id: number) => {
  return stock.find((item) => item.id === id);
};

export const stock: StockItem[] = [
  {
    id: 1,
    amountAvailable: 15,
  },
  {
    id: 2,

    amountAvailable: 10,
  },
  {
    id: 3,

    amountAvailable: 8,
  },
  {
    id: 4,

    amountAvailable: 5,
  },
  {
    id: 5,

    amountAvailable: 50,
  },
  {
    id: 6,

    amountAvailable: 3,
  },
  {
    id: 7,

    amountAvailable: 100,
  },
  {
    id: 8,

    amountAvailable: 12,
  },
  {
    id: 9,

    amountAvailable: 7,
  },
];

const products: Product[] = [
  {
    id: 1,
    name: "Detector EMF",
    description:
      "Detecta campos eletromagnéticos, essencial para a caça de fantasmas.",
    price: 49.99,
    image: images.emf,
    category: "Equipamento",
  },
  {
    id: 2,
    name: "Spirit Box",
    description:
      "Dispositivo que varre frequências de rádio para permitir comunicação com espíritos.",
    price: 79.99,
    image: images.spiritBox,
    category: "Equipamento",
  },
  {
    id: 3,
    name: "Termômetro Infravermelho",
    description:
      "Mede quedas de temperatura, indicando possível presença de fantasmas.",
    price: 59.99,
    image: images.termometro,
    category: "Equipamento",
  },
  {
    id: 4,
    name: "Armadilha para Fantasmas",
    description:
      "Dispositivo portátil para capturar fantasmas após a detecção.",
    price: 129.99,
    image: images.ghostTrap,
    category: "Ferramentas",
  },
  {
    id: 5,
    name: "Diário de Fantasmas",
    description:
      "Usado para registrar avistamentos de fantasmas e evidências durante investigações.",
    price: 12.99,
    image: images.ghostDiary,
    category: "Acessórios",
  },
  {
    id: 6,
    name: "Câmera de Visão Noturna",
    description:
      "Câmera projetada para gravação em ambientes com pouca luz durante investigações.",
    price: 249.99,
    image: images.camera,
    category: "Equipamento",
  },
  {
    id: 7,
    name: "Sal",
    description:
      "Sal usado para afastar fantasmas ou criar barreiras de proteção.",
    price: 5.99,
    image: images.salt,
    category: "Proteção",
  },
  {
    id: 8,
    name: "Lanterna UV",
    description:
      "Revela impressões digitais fantasmagóricas e outras marcas espectrais.",
    price: 34.99,
    image: images.flashlight,
    category: "Ferramentas",
  },
  {
    id: 9,
    name: "Amuleto de Proteção",
    description: "Usado para proteger contra ataques de fantasmas.",
    price: 89.99,
    image: images.protectionAmule,
    category: "Proteção",
  },
];

export const formattedItemsToShow: () => FormattedItemsToShowItem[] = () => {
  const formattedItemsToShow: FormattedItemsToShowItem[] = products.map(
    (product) => {
      const stockItem = findStockItemById(product.id);
      return { ...product, amountAvailable: stockItem?.amountAvailable ?? 0 };
    }
  );

  return formattedItemsToShow;
};
