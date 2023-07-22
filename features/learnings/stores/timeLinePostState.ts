import { RecoilKeys } from './../../../utils/recoilKeys';
import { atom, useRecoilState } from 'recoil';

const initTimeLinePost = {
  message: null,
  pageInfo: null,
};

const timeLinePostState = atom({
  key: RecoilKeys.TIME_LINE_POST_STATE,
  default: initTimeLinePost,
});

export const useTimeLinePost = () => {
  const [timeLinePost, setTimeLinePost] = useRecoilState(timeLinePostState);
  return { timeLinePost, setTimeLinePost };
};

// import { RecoilAtomKeys } from '../../stores/recoilKeys';

// type Profile = {
//   birthday: string;
//   memo: string;
//   hobby: string;
//   likeFood: string;
// };

// const initProfile: Profile = {
//   birthday: '',
//   memo: '',
//   hobby: '',
//   likeFood: '',
// };

// const profileState = atom<Profile>({
//   key: RecoilAtomKeys.PROFILE_STATE,
//   default: initProfile,
// });

// export const useProfile = () => {
//   const [profile, setProfile] = useRecoilState(profileState);
//   return [profile, setProfile];
// };
