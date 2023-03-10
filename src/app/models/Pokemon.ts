export interface Pokemon {
  id: number;
  name: string;
  image: string;
  types?: [
    {
      slot: number,
      type: {
        name: string,
        url: string
      }
    }
  ];
  cssClass: string;
}