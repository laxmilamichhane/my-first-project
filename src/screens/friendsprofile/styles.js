import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'black',
  },
  uppercontainer: {
    backgroundColor: 'white',
    paddingVertical: 70,
    marginLeft: 90,
    borderBottomLeftRadius: 40,
  },
  name: {
    fontSize: 26,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 30,
    marginLeft: 44,
  },
  text: {
    fontSize: 40,
    color: 'white',
    alignSelf: 'center',
    marginLeft: 30,
    fontWeight: 'bold',
  },
  img: {
    width: 150,
    height: 150,
    position: 'absolute',
    marginTop: 20,
    borderRadius: 75,
    marginLeft: 20,
  },
});
export default styles;
