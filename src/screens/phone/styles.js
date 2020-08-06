import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  title: {
    fontSize: 28,
    alignSelf: 'center',
    fontWeight: 'bold',
    letterSpacing: 1,
    margin: 8,
    marginTop: 20,
  },
  text: {
    fontSize: 16,
    alignSelf: 'center',
    marginTop: 4,
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 150,
    alignSelf: 'center',
    margin: 20,
    marginTop: 50,
    marginBottom: 30,
  },
  inputbox: {
    marginHorizontal: 40,
    borderBottomWidth: 1,
    padding: 10,
    borderBottomColor: '#b7b7b7',
    textAlign: 'center',
    marginTop: 10,
  },
});
export default styles;
