import { RecoilKeys } from './../../../utils/recoilKeys';
// import { atomFamily, useRecoilState } from 'recoil';

import { SetterOrUpdater, atomFamily, useRecoilState } from 'recoil';

// 参考: Reactでモーダル実装のベストプラクティスを考えてみた - Qiita https://qiita.com/t-sugimoto/items/9c01477c8998a1072225

export type ModalType = 'timeLinePostEditMenu' | 'timeLinePostDeleteConfirm';
const ModalVisibilityState = atomFamily({
  key: RecoilKeys.MODAL_VISIBILITY_STATE,
  default: false,
});

type Response = {
  isModalVisible: boolean;
  setIsModalVisible: SetterOrUpdater<boolean>;
};

export function useModalVisibility(modalType: ModalType): Response {
  const [isModalVisible, setIsModalVisible] = useRecoilState(
    ModalVisibilityState(modalType)
  );

  return { isModalVisible, setIsModalVisible };
}

// export type ModalType = 'contact' | 'faq' | 'confirm';
// export const ModalVisibilityState = atomFamily({
//   key: 'ModalVisibilityState',
//   default: false,
// });

// import { useRecoilState, SetterOrUpdater } from 'recoil'
// import { ModalVisibilityState, ModalType } from 'states/modal'

// type Response = [
//   boolean,
//   SetterOrUpdater<boolean>
// ]

// const useModal = (modalType: ModalType): Response => {
//   const [isVisible, setIsVisible] = useRecoilState(
//     ModalVisibilityState(modalType)
//   )

//   return [isVisible, setIsVisible]
// }

// export default useModal
