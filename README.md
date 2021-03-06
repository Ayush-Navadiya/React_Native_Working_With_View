# React_Native_Working_With_View
React native working with view example

---
### What is View?

>The most fundamental component for building a UI, View is a container that supports layout with flexbox, style, some touch handling, and accessibility controls. View maps directly to the native view equivalent on whatever platform React Native is running on, whether that is a UIView, div, android.view, etc.

>View is designed to be nested inside other views and can have 0 to many children of any type.


---
### Prerequisite

1. Download Node JS from : https://nodejs.org/
2. Install Node JS
3. Check if installed successfully using commands: \
                                                   1. node --version\
                                                   2. npm --version

---
### How To Run

1. Open Command Line
2. Move to project directory
4. Run command "npm install" to install node modules
5. Run command "npm start" to start expo cli
6. Let it get started. Then select option to run on appropriate device
7. Make sure that an emulator is running\ or else if you are using your mobile make sure that USB debugging is turned on
8. You will see the output on the targeted device


---
# Contribute 

> Give a thanks with coffee [Here](https://www.buymeacoffee.com/ayushnavadiya).\
> https://www.buymeacoffee.com/ayushnavadiya

---
## Output

<img src="https://github.com/Ayush-Navadiya/React_Native_Working_With_View/blob/master/Screenshots/Output.jpg" width=250>



# Getting started from scratch


---
### Prerequisite

1. Download Node JS from : https://nodejs.org/
2. Install Node JS
3. Check if installed successfully using commands: \
                                                   1. node --version\
                                                   2. npm --version

Install Expo-cli to start with react native expo app and if already installed skip this installation:

```bash
npm install --global expo-cli
```

Initialize app with the following command:

```bash
expo init your-project-name
```

Note: When You Run the 'expo init' command it will ask you to choose template go with: \
 - blank : a minimal app as clean as an empty canvas


---
## Running Program 
1. Open Command Line
2. Move to project directory
4. Run command "npm install" to install node modules
5. Run command "npm start" to expo cli
6. Let it get started then select option to run on appropriate device
7. Make sure that an emulator is running\ or else if you are using your mobile make sure that USB debugging is turned on
8. You will see the output on the targeted device
9. To see the output on screen. Change the app.js code with the code given bellow

```javascript
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


```


