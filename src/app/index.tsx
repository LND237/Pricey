import { useEffect, useState } from 'react';
import { Pressable, View, Text, TextInput } from 'react-native';
import styles from '../components/styles';

const API_BASE = 'http://localhost:8001'; // point this at your Go backend

export default function Index() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<unknown>(null);
  const [loading, setLoading] = useState(false);
  const [dotCount, setDotCount] = useState(1);

  useEffect(() => {
    if (!loading) {
      setDotCount(1);
      return;
    }

    const interval = setInterval(() => {
      setDotCount((prev) => (prev % 3) + 1);
    }, 300);

    return () => clearInterval(interval);
  }, [loading]);

  async function handleSearch() {
    if (!query.trim()) return;
    setLoading(true);
    try {
      const res = await fetch(
        `${API_BASE}/search?q=${encodeURIComponent(query)}`
      );
      if (!res.ok) throw new Error(`Request failed: ${res.status}`);
      const data = await res.json();
      setResults(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }
  function validateQuery(query: string) {
    if (query.startsWith('http') || query.startsWith('https')) return true;
    return false;
  }

  return (
    <View style={styles.content}>
      <Text style={styles.subtitle}>Track prices, never miss a drop.</Text>
      <View style={styles.searchBar}>
        <TextInput
          placeholder="Search for a product..."
          style={styles.input}
          value={query}
          onChangeText={setQuery}
          onSubmitEditing={handleSearch}
          returnKeyType="search"
          autoCapitalize="none"
          autoCorrect={false}
        />
        <Pressable
          onPress={handleSearch}
          disabled={loading}
          style={styles.searchButton}
        >
          <Text style={styles.searchButtonText}>
            {loading ? `Searching${'.'.repeat(dotCount)}` : 'Search'}
          </Text>
        </Pressable>
      </View>
      {results != null && (
        <Text style={styles.subtitle}>{JSON.stringify(results)}</Text>
      )}
      <Text style={styles.subtitle}>
          {validateQuery(query) ? '' : 'Please enter a valid query that begins with "http" or "https".'}
        </Text>
    </View>

  );
}
