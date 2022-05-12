import { Beer, kindBeer } from "../model/beer-interface";



const small: kindBeer = "small"
const medium: kindBeer = "medium"

export const Birre: Beer[] = [
  {
    id: 1,
    type: small ,
    name: 'Corona',
    price: 2,
  },
  {
    id: 2,
    type: medium ,
    name: 'Ichnusa',
    price: 2,
  },
  {
    id: 3,
    type: small ,
    name: 'Menabrea',
    price: 2,
  },
  {
    id: 4,
    type: medium ,
    name: 'Nastro Azzurro',
    price: 5,
  },
  {
    id: 5,
    type: small ,
    name: 'Heineken',
    price: 2,
  },
  {
    id: 6,
    type: medium ,
    name: 'Becks',
    price: 2,
  },
  {
    id: 7,
    type: small ,
    name: 'Moretti',
    price: 8,
  },
  {
    id: 9,
    type: medium ,
    name: 'Peroni',
    price: 2,
  },
  {
    id: 10,
    type: medium ,
    name: 'Peroni',
    price: 2,
  }
];
