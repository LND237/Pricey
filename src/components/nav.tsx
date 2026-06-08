import { View, Text, Pressable } from 'react-native';
import styles from './styles';

const items = ['Account', 'Settings', 'Products'] as const;

export type NavItem = (typeof items)[number];

type NavBarProps = {
  onSelect?: (item: NavItem) => void;
};

export default function NavBar({ onSelect }: NavBarProps) {
  return (
    <View style={styles.navBar}>
      {items.map((item) => (
        <Pressable
          key={item}
          onPress={() => onSelect?.(item)}
          style={({ hovered, pressed }) => [
            styles.navButton,
            hovered && styles.navButtonHovered,
            pressed && styles.navButtonPressed,
          ]}
        >
          <Text style={styles.navItem}>{item}</Text>
        </Pressable>
      ))}
    </View>
  );
}
