import { FC, useState } from 'react';
import {
  Keyboard,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {
  MentionInput,
  MentionSuggestionsProps,
} from 'react-native-controlled-mentions';
import styles from './styles';
export default function MentionApp() {
  const [value, setValue] = useState('Please input');
  const suggestions = [
    { id: '1', name: 'David Tabaka' },
    { id: '2', name: 'Mary' },
    { id: '3', name: 'Tony' },
    { id: '4', name: 'Mike' },
    { id: '5', name: 'Grey' },
  ];

  const renderSuggestions: FC<MentionSuggestionsProps> = ({
    keyword,
    onSuggestionPress,
  }) => {
    if (keyword == null) {
      return null;
    }

    return (
      <View style={styles.pressMentionList}>
        {suggestions
          .filter((one) =>
            one.name.toLocaleLowerCase().includes(keyword.toLocaleLowerCase())
          )
          .map((one) => (
            <Pressable
              key={one.id}
              onPress={() => onSuggestionPress(one)}
              style={styles.pressMention}>
              <Text>{one.name}</Text>
            </Pressable>
          ))}
      </View>
    );
  };

  const dismissOnPress = () => {
    Keyboard.dismiss();
    console.log('================');
  };

  const DismissKeyboard = ({ children }) => (
    <TouchableWithoutFeedback onPress={dismissOnPress}>
      {children}
    </TouchableWithoutFeedback>
    // <ScrollView>{children}</ScrollView>
  );

  return (
    <DismissKeyboard>
      <View style={styles.container}>
        <Text>aaa</Text>
        <Text>bbbbs</Text>

        <MentionInput
          value={value}
          onChange={setValue}
          partTypes={[
            {
              trigger: '@', // Should be a single character like '@' or '#'
              renderSuggestions,
              textStyle: { fontWeight: 'bold', color: 'blue' }, // The mention style in the input
              isBottomMentionSuggestionsRender: true,
            },
          ]}
        />

        <TextInput style={styles.input} placeholder="email" />
        <TextInput style={styles.input} placeholder="password" />
      </View>
    </DismissKeyboard>
  );
}
