import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { View, Text } from 'react-native';
import Navbar from '../components/nav';
import styles from '../components/styles';

export default function RootLayout() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <Text style={styles.title}>Pricey</Text>
        <Navbar />
      </View>
      <Stack screenOptions={{ headerShown: false }} />
    </View>
  );
}
