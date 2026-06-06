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
          style={({ hovered }) => [styles.navButton, hovered && styles.navButtonHovered]}
        >
          <Text style={styles.navItem}>{item}</Text>
        </Pressable>
      ))}
    </View>
  );
}
