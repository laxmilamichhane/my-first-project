import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'lightgray',
  },
  topbox: {
    backgroundColor: 'white',
    borderBottomLeftRadius: 20,
    marginHorizontal: 4,
    marginTop: 10,
    paddingHorizontal: 38,
    height: 46,
  },
  todos: {
    fontSize: 24,
    textAlign: 'center',
    marginTop: 6,
  },
  menu: {
    width: 24,
    height: 24,
    marginHorizontal: 10,
    marginTop: 20,
  },
  lowercontainer: {
    flex: 1,
    backgroundColor: 'white',
    margin: 22,
    borderRadius: 10,
    borderRightWidth: 20,
    borderRightColor: '#FDCA40',
    padding: 10,
  },
  yourtask: {
    marginLeft: 4,
    fontSize: 20,
  },
  button: {
    bottom: 2,
    backgroundColor: '#FDCA40',
    borderRadius: 40,
    width: 50,
    height: 50,
    alignSelf: 'flex-end',
    zIndex: 55,
    position: 'absolute',
  },
  head: {
    fontSize: 20,
    color: 'gray',
    fontWeight: 'bold',
  },
});
export default styles;
