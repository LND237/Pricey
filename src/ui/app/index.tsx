import { View, Text } from 'react-native';
import styles from './components/styles';

export default function Index() {
  return (
    <View style={styles.content}>
      <Text style={styles.subtitle}>Track prices, never miss a drop.</Text>
    </View>
  );
}
