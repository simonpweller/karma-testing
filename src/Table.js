const legs = 4;
const tops = 1;

const all = {
  legs,
  tops,
}

export const getLegs = () => legs;
export const getTops = () => tops;
export const getAll = () => all;

const allAndThenSome = {
  ...all,
  thenSome: 'some',
}