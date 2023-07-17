import { Text, TextInput, TouchableOpacity } from 'react-native';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { db } from '../../../../utils/firebaseConfig';
import { useEffect, useState } from 'react';

export default function OnSnapShot() {
  const [first, setFirst] = useState<string>('');
  const [users, setUsers] = useState();

  // useEffect(() => {
  //   async function getUsers() {
  //     const querySnapshot = await getDocs(collection(db, 'users'));
  //     // setUsers(querySnapshot);
  //     querySnapshot.forEach((doc) => {
  //       console.log(`${doc.id} => ${doc.data()}`);
  //     });
  //   }

  //   getUsers;
  // });

  async function onGetUsersPressed() {
    const querySnapshot = await getDocs(collection(db, 'users'));
    // setUsers(querySnapshot);
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
      console.log('%o', doc.data());
    });
  }

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
      <TouchableOpacity onPress={onGetUsersPressed}>
        <Text>onGetUsersPressed</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onPress}>
        <Text>onPress</Text>
      </TouchableOpacity>
    </>
  );
}
