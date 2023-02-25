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

const getModeData = (mode: 'create' | 'update') => ({
  title: title[mode],
  btnText: btnText[mode],
  color: color[mode],
  colorMain: colorMain[mode],
});

export default getModeData;
