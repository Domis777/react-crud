export const platform = [
  'Windows',
  'PlayStation 4',
  'PlayStation 5',
  'Xbox Series X/S',
  'Xbox One',
  'Nintendo Switch',
];

export const genres = [
  'Action',
  'Action-adventure',
  'Adventure',
  'Platform',
  'Role-playing',
  'Hack and slash',
  'Survival horror',
];

const title = {
  update: 'Update Video Game',
  create: 'Create new Video Game',
};

const btnText = {
  update: 'Update',
  create: 'Create',
};

const color = {
  update: 'warning',
  create: 'primary',
} as const;

const colorMain = {
  update: 'warning.main',
  create: 'primary.main',
} as const;

export const getModeData = (mode: 'create' | 'update') => ({
  title: title[mode],
  btnText: btnText[mode],
  color: color[mode],
  colorMain: colorMain[mode],
});
