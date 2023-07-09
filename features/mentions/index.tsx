import { FC, useState } from 'react';
import {
  Text,
  StyleSheet,
  View,
  Pressable,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import {
  MentionInput,
  MentionSuggestionsProps,
} from 'react-native-controlled-mentions';

export default function ControlledMentions() {
  const [value, setValue] = useState('test');

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
      <View>
        {suggestions
          .filter((one) =>
            one.name.toLocaleLowerCase().includes(keyword.toLocaleLowerCase())
          )
          .map((one) => (
            <Pressable
              key={one.id}
              onPress={() => onSuggestionPress(one)}
              style={{ padding: 12 }}>
              <Text>{one.name}</Text>
            </Pressable>
          ))}
      </View>
    );
  };
  const DismissKeyboard = ({ children }) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={{ flex: 1 }}>{children}</View>
    </TouchableWithoutFeedback>
  );
  return (
    <DismissKeyboard>
      <Text>Mentions a a a</Text>
      <MentionInput
        value={value}
        onChange={setValue}
        partTypes={[
          {
            trigger: '@', // Should be a single character like '@' or '#'
            renderSuggestions,
            textStyle: { fontWeight: 'bold', color: 'blue' }, // The mention style in the input
          },
        ]}
      />
    </DismissKeyboard>
  );
}
