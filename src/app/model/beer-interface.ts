export type kindBeer = 'small' | 'medium';
export interface Beer {
  id: number;
  type: kindBeer;
  name: string;
  price: number;
}
