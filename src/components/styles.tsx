import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    paddingLeft: 25,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 56,
    paddingBottom: 20,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    justifyContent: 'center',
    fontSize: 32,
    fontWeight: '700',
  },
  subtitle: {
    marginTop: 8,
    fontSize: 16,
    opacity: 0.7,
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'center',
    flex: 1,
    gap: 8,
  },
  navItem: {
    fontSize: 16,
    color: '#333',
  },
  navButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 12,
    backgroundColor: 'transparent',
  },
  navButtonHovered: {
    backgroundColor: '#fff',
    boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.2)',
    elevation: 4,
  },
  navButtonPressed: {
    backgroundColor: '#e8e8e8',
    opacity: 0.85,
  },
});
