import {IMAGES} from '../values/images';

export const formatImage = name => {
  const image = name.slice(0, -4);
  if (IMAGES[image]) {
    return IMAGES[image];
  }
  return IMAGES.missingPoster;
};
