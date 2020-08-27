import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  screen: {
    backgroundColor: 'white',
    paddingVertical: 10,
    marginVertical: 190,
    borderRadius: 40,
    paddingHorizontal: 10,

  },
  image: {
    height: 140,
    width: 140,
    alignSelf: 'center',
  },
  title: {
    fontSize: 26,
    marginTop: 30,
    textAlign: 'center',
  },
  des: {
    color: 'gray',
    fontSize: 18,
    marginTop: 8,
    textAlign: 'center',
  },
  login: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    marginVertical: -14,
  },
  buttonbox: {
    backgroundColor: 'red',
    borderRadius: 30,
    padding: 20,
    marginHorizontal: 50,
    marginTop: 60,
    textAlign: 'center',
  },
  icon: {
    height: 20,
    width: 20,
    alignSelf: 'flex-end',
    padding: 10,
    marginRight: 10,
  },
});
export default styles;
