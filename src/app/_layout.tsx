import { Stack,useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { View, Text, Pressable } from 'react-native';
import Navbar from '../components/nav';
import styles from '../components/styles';

export default function RootLayout() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <Pressable onPress={() => {
            router.navigate('/');
          }}>
          <Text style={styles.title}>Pricey</Text>
        </Pressable>
        <Navbar />
      </View>
      <Stack screenOptions={{ headerShown: false }} />
    </View>
  );
}
