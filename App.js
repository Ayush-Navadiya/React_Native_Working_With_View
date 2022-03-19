import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Upper View */}
      <View style={styles.container}>
        <Text>Stuff in view 1!</Text>
      </View>
      {/* Lower View */}
      <View style={styles.container1}>
        <Text style={{color: '#fff'}}>Stuff in view 2!</Text>
      </View>
    </View>
  );
}

// container Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container1: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'center',
  },
});
