import { StyleSheet, TouchableWithoutFeedback, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
    position: 'relative',
  },
  input: {
    // flex: 1,
  },
  pressMention: {
    padding: 12,
  },
  pressMentionList: {
    marginTop: 30,
    backgroundColor: 'blue',
    position: 'absolute',
  },
});

export default styles;
