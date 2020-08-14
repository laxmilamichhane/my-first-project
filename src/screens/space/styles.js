import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
    padding: 18,
  },
  logo: {
    width: 28,
    height: 28,
  },
  logoname: {
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 8,
    marginRight: 214,
  },
  menu: {
    height: 40,
    width: 40,
  },
  title: {
    fontSize: 38,
    textAlign: 'center',
  },
  des: {
    fontSize: 18,
    color: 'gray',
    textAlign: 'center',
    marginTop: 20,
  },
  image: {
    width: 260,
    height: 300,
    alignSelf: 'center',
  },
  image2: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginRight: 60,
  },
  button: {
    backgroundColor: 'black',
    borderRadius: 60,
    paddingVertical: 30,
    marginTop: 120,
  },
  textt: {
    color: 'white',
    paddingHorizontal: 28,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
export default styles;
