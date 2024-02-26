import type {PropsWithChildren} from 'react';
import * as React from 'react';
import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  useColorScheme,
  TouchableOpacity,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const image = {
  uri: 'https://t4.ftcdn.net/jpg/02/25/62/33/360_F_225623331_iICi8zkkePrkyIZgW6wtjfLNOOXO2kya.jpg',
};

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

export default function HomeScreen({navigation}: any) {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.black : Colors.white,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View style={styles.container}>
          <ImageBackground
            source={image}
            resizeMode="cover"
            style={styles.image}>
            <Text style={styles.text}>Welcome</Text>
          </ImageBackground>
        </View>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Expect more from your morning cup">
            Start your day with a focus, energy and feel-good boost from
            mushrooms.
          </Section>

          <View style={styles.container1}>
            <View>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Products');
                }}
                style={styles.setInitialCountButton}>
                <Text style={styles.header}>See Products</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    paddingTop: 16,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },
  container: {
    height: 350,
  },
  container1: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginStart: 24,
    marginTop: 16,
    marginBottom: 16,
  },
  header: {
    fontSize: 18,
    marginVertical: 10,
    color: '#333',
    textTransform: 'uppercase',
  },
  heading: {
    color: 'green',
    fontSize: 35,
  },
  counterValue: {
    fontSize: 36,
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#40E0D0',
    paddingStart: 24,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {
    fontSize: 16,
    padding: 13,
    margin: 4,
    borderRadius: 8,
    backgroundColor: 'green',
    elevation: 20,
    marginBottom: 16,
  },
  setInitialCountButton: {
    fontSize: 16,
    borderRadius: 8,
    backgroundColor: '#6F4E37',
    elevation: 20,
    marginTop: 16,
    padding: 4,
  },
  textInput: {
    padding: 10,
    fontSize: 16,
    borderRadius: 8,
    borderColor: 'black',
    borderWidth: 1,
    marginTop: 32,
  },
});
