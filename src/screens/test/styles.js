import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  screen: { padding: 12, backgroundColor: 'black', flex: 1 },

  inputs: {
    marginTop: 70,
  },
  input: {
    padding: 8,
    marginHorizontal: 18,
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    fontSize: 18,
    color: 'white',
    margin: 10,
  },
  image: {
    width: 86,
    height: 86,
    marginTop: 50,
    alignSelf: 'center',
  },
  title: {
    fontSize: 50,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  title2: {
    fontSize: 40,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
  des: {
    fontSize: 18,
    color: 'gray',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#344ceb',
    padding: 4,
    borderRadius: 14,
    marginTop: 80,
    marginLeft: 310,
    marginRight: 10,
  },
  next: {
    width: 30,
    height: 30,
    alignSelf: 'center',
  },
  signin: {
    fontSize: 26,
    color: 'white',
    fontWeight: 'bold',
    marginLeft: 20,
  },
  signup: {
    fontSize: 20,
    color: 'white',
    alignSelf: 'flex-end',
  },
  password: {
    fontSize: 18,
    color: 'gray',
    alignSelf: 'flex-end',
    marginTop: 34,
  },
});
export default styles;
