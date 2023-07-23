import { atom, useRecoilState } from 'recoil';
import { RecoilKeys } from '../../../utils/recoilKeys';

const categoryState = atom<number | null>({
  key: RecoilKeys.CATEGORY_STATE,
  default: null,
});

export const useCategory = () => {
  const [category, setCategory] = useRecoilState(categoryState);
  return { category, setCategory };
};
