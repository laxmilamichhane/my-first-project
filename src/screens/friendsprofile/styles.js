import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'black',
  },
  uppercontainer: {
    backgroundColor: 'white',
    paddingVertical: 50,
    marginLeft: 90,
    borderBottomLeftRadius: 40,
  },
  name: {
    fontSize: 26,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 20,
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
    width: 110,
    height: 110,
    position: 'absolute',
    marginTop: 10,
    borderRadius: 75,
    marginLeft: 20,
  },
  emailbox: {
    backgroundColor: 'lightgray',
    paddingHorizontal: 40,
    borderRadius: 10,
    marginHorizontal: 10,
    paddingVertical: 6,
    flex: 1,
    alignItems: 'center',
  },
  email: {
    fontSize: 20,
  },
});
export default styles;
