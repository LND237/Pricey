import { View, Text, Pressable } from 'react-native';
import { useRouter, type Href } from 'expo-router';
import styles from './styles';

const items = [
  { label: 'Account', href: '/account' },
  { label: 'Settings', href: '/settings' },
  { label: 'Products', href: '/Products' },
] as const satisfies readonly { label: string; href: Href }[];

export default function NavBar() {
  const router = useRouter();
  return (
    <View style={styles.navBar}>
      {items.map(({ label, href }) => (
        <Pressable
          key={label}
          onPress={() => router.navigate(href)}
          style={({ hovered, pressed }) => [
            styles.navButton,
            hovered && styles.navButtonHovered,
            pressed && styles.navButtonPressed,
          ]}
        >
          <Text style={styles.navItem}>{label}</Text>
        </Pressable>
      ))}
    </View>
  );
}
