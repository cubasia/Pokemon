export interface JOKE {
  error: boolean;
  category: string;
  type: string;
  setup?: string;
  delivery?: string;
  joke?: string
  flags: { [key: string]: boolean };
  id: number;
  safe: boolean;
  lang: string;
}
