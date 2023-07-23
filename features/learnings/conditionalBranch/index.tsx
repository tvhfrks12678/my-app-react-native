import { Text } from 'react-native';

// booleanを極力使わないReactの書き方  | HireRoo Tech Blogs https://hireroo.io/journal/tech/how-to-write-react-using-as-few-booleans-as-possible

export type Props = {
  status: 'Mention' | 'Image' | 'Reply';
};

export default function IfStringLiteral({ status }: Props) {
  return (
    <>
      <Text>IfStringLiteral</Text>
      {status === 'Image' && <Text>Image</Text>}
      {status === 'Reply' && <Text>reply</Text>}
    </>
  );
}
