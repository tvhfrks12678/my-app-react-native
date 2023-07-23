import { Text } from 'react-native';

export default function Compound({ isNew }) {
  return (
    <>
      <Text>Compound</Text>
      <New isNew={isNew}>
        <Text>new</Text>
      </New>
    </>
  );
}

function New({ isNew, children }) {
  return isNew ? children : null;
}
