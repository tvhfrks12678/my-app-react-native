import { StatusBar } from 'expo-status-bar';
import {
  Pressable,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import ControlledMentions from './features/mentions';
import MentionApp from './features/mentions/MentionApp';
import OnSnapShot from './features/learnings/fireBase/onSnapshot';
import RecoilLearning from './features/learnings/recoil';
import { RecoilRoot } from 'recoil';
import IfStringLiteral from './features/learnings/conditionalBranch';

export default function App() {
  return (
    <>
      <RecoilRoot>
        <OnSnapShot />
        <RecoilLearning />
        <IfStringLiteral status={'Reply'} />
      </RecoilRoot>
    </>

    // <MentionApp />
    // <>
    //   <View style={styles.container}>
    //     <ControlledMentions />
    //     <View style={{ flex: 1 }}>
    //       <Text>saaa Open up App.tsx to start working on your app!</Text>
    //       <StatusBar style="auto" />
    //     </View>
    //   </View>
    // </>
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
