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
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '70%',
    maxWidth: 560,
    marginTop: 16,
    padding: 6,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: '#d1d5db',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 2,
  },
  input: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 50000,
    fontSize: 20,
    color: '#000000',
    outlineColor: '#fff',
  },
  searchButton: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 999,
    backgroundColor: '#111827',
  },
  searchButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
});
