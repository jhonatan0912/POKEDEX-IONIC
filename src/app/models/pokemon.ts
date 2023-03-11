export interface Pokemon {
  pokeIndex: string;
  image: string;
  name: string;
  url: string;
  types: [
    {
      slot: number;
      type: {
        name: string;
        url: string;
      }
    }
  ];
  background: string;
}