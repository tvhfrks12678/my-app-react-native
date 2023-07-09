import { StatusBar } from 'expo-status-bar';
import {
  Pressable,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import ControlledMentions from './features/mentions';

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <ControlledMentions />
        <View style={{ flex: 1 }}>
          <Text>saaa Open up App.tsx to start working on your app!</Text>
          <StatusBar style="auto" />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
