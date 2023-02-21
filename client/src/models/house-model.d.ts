type HouseModel = {
  id: number,
  title: string,
  information: {
    platforms : string[],
    publisher : string,
    genres: string[]
  },
  price: string,
  image: string[],
  metacritic: number
};
