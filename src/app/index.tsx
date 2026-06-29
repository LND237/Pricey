import { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import styles from '../components/styles';

const API_BASE = 'http://localhost:8080'; // point this at your Go backend

export default function Index() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<unknown>(null);
  const [loading, setLoading] = useState(false);

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

  return (
    <View style={styles.content}>
      <Text style={styles.subtitle}>Track prices, never miss a drop.</Text>
      <TextInput
        placeholder="Search for a product..."
        style={styles.input}
        value={query}
        onChangeText={setQuery}
        onSubmitEditing={handleSearch}
      />
      <button onClick={handleSearch} disabled={loading} style={styles.navButton}>
        {loading ? 'Searching…' : 'Search'}
      </button>
      {results != null && (
        <Text style={styles.subtitle}>{JSON.stringify(results)}</Text>
      )}
    </View>
  );
}
