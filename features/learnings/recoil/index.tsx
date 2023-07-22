import { Text, TouchableOpacity } from 'react-native';
import { useTimeLinePost } from '../stores/timeLinePostState';

export default function RecoilLearning() {
  const { timeLinePost, setTimeLinePost } = useTimeLinePost();

  function onPress() {
    console.log('onPress');
    setTimeLinePost({
      message: { id: 123, text: 'test' },
      pageInfo: { id: 111, fireStoreId: 'abc' },
    });
  }

  return (
    <>
      <Text>Recoil Learning</Text>
      <TouchableOpacity onPress={onPress}>
        <Text>Touch</Text>
      </TouchableOpacity>
      <Text>{timeLinePost?.message?.id}</Text>
    </>
  );
}
