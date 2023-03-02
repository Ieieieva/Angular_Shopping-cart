export interface Product {
  id: number;
  name: string;
  price: number;
  isSelected: boolean
}

export const items: Product[] = [
  {
    id: 1,
    name: 'Table',
    price: 650,
    isSelected: true
  },
  {
    id: 2,
    name: 'Bookshelf',
    price: 1230,
    isSelected: true
  },
  {
    id: 3,
    name: 'Bed',
    price: 940,
    isSelected: true
  },
  {
    id: 4,
    name: 'Chair',
    price: 387,
    isSelected: true
  },
  {
    id: 5,
    name: 'Lamp',
    price: 299,
    isSelected: true
  },
  {
    id: 6,
    name: 'Sofa',
    price: 1867,
    isSelected: true
  },
  {
    id: 7,
    name: 'Carpet',
    price: 520,
    isSelected: true
  },
]