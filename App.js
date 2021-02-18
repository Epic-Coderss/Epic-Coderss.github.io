import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Toolbar, ToolbarBackAction, ToolbarContent, ToolbarAction } from 'react-native-paper';

export default class MyComponent extends React.Component {
  render() {
    return (
        <Toolbar>
          <ToolbarBackAction
              onPress={this._goBack}
          />
          <ToolbarContent
              title="Title"
              subtitle="Subtitle"
          />
          <ToolbarAction icon="search" onPress={this._onSearch} />
          <ToolbarAction icon="more-vert" onPress={this._onMore} />
        </Toolbar>
    );
  }
}

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
