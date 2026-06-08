import { View, Text } from 'react-native';
import styles from '../components/styles';

export default function Index() {
  return (
    <View style={styles.content}>
      <Text style={styles.subtitle}>Unavailable Page! Please try another Tab.</Text>
    </View>
  );
}