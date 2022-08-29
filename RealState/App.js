import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {Card} from './src/components/Card'

export default function App() {
  return (
    <View style={styles.container}>
      <Card />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e5e5e5",
    alignItems: 'center',
    paddingTop: 40
  },
});
