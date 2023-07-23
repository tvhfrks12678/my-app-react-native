import { Text, TouchableOpacity } from 'react-native';
import { useTimeLinePost } from '../stores/timeLinePostState';
import RecoilModal from './modal';
import { useCategory } from '../stores/categoryState';

export default function RecoilLearning() {
  const { timeLinePost, setTimeLinePost } = useTimeLinePost();
  const { category, setCategory } = useCategory();

  function onPress() {
    console.log('onPress');
    setTimeLinePost({
      message: { id: 123, text: 'test' },
      pageInfo: { id: 111, fireStoreId: 'abc' },
    });
    setCategory(100);
  }

  return (
    <>
      <Text>Recoil Learning</Text>
      <TouchableOpacity onPress={onPress}>
        <Text>Touch</Text>
      </TouchableOpacity>
      <Text>{timeLinePost?.message?.id}</Text>
      <Text>Category</Text>
      <Text>{category}</Text>
      <RecoilModal />
    </>
  );
}
