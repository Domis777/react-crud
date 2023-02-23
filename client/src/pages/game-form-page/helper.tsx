import createId from 'uniqid';

const isStringArray = (
  arr: Array<unknown | string>,
): arr is string[] => arr.some((str) => typeof str === 'string');

const Id = createId();

const getGamesFromData = (form: HTMLFormElement | undefined): Omit<GamesModel, 'id'> => {
  const formData = new FormData(form);

  const id = formData.get(Id);

  const title = formData.get('title');
  if (typeof title !== 'string') throw new Error('Missing Title');
  if (title.length < 2) throw new Error('Title must be at least 2 symbol');

  const platforms = formData.getAll('platforms');
  if (!isStringArray(platforms)) throw new Error('One or more Platforms must be a Selected');

  const publisher = formData.get('publisher');
  if (typeof publisher !== 'string') throw new Error('Missing Publisher');
  if (publisher.length < 2) throw new Error('Publisher must be at least 2 symbol');

  const genres = formData.getAll('genres');
  if (!isStringArray(genres)) throw new Error('One or more Genres must be a Selected');

  const price = Number(formData.get('price'));
  if (Number.isNaN(Number(price))) throw new Error('Price can be only numbers');
  if (price < 0.01) throw new Error('Min price can be only min 0.01');

  const image = formData.getAll('image');
  if (!isStringArray(image)) throw new Error('All Image must be a string');

  const metacritic = Number(formData.get('rating'));
  if (Number.isNaN(metacritic)) throw new Error('Rating can be only numbers');
  if (metacritic < 1) throw new Error('Min rating can be only 1');
  if (metacritic > 100) throw new Error('Max rating can be only 100');

  const values = {
    id,
    title,
    information: {
      platforms,
      publisher,
      genres,
    },
    price: `${price}$`,
    image: image.filter((img) => img !== ''),
    metacritic: Number(metacritic),
  };

  return values;
};

export default getGamesFromData;
