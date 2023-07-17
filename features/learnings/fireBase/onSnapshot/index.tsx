import { Text, TextInput, TouchableOpacity } from 'react-native';

import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../../../utils/firebaseConfig';
import { useState } from 'react';

export default function OnSnapShot() {
  const [first, setFirst] = useState<string>('');
  async function onPress() {
    console.log('onPresss');
    try {
      const docRef = await addDoc(collection(db, 'users'), {
        first: first,
        last: 'Lovelace',
        born: 1815,
      });
      console.log('Document written with ID: ', docRef.id);
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  }

  return (
    <>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text>First</Text>
      <TextInput value={first} onChangeText={setFirst} />
      <Text></Text>
      <TouchableOpacity onPress={onPress}>
        <Text>onPress</Text>
      </TouchableOpacity>
    </>
  );
}
