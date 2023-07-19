import { Endpoints } from '../../types';

export const getRecommendedProducts: Endpoints['getRecommendedProducts'] = async (
  context,
  params
) => {
  console.log('getRecommendedProducts has been called');

  return { data: 'Hello from getRecommendedProducts endpoint!' };
};
