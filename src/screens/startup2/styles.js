import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#ddd',
  },
  topbox: {
    borderBottomLeftRadius: 20,
    height: 46,
    paddingHorizontal: 6,
    marginHorizontal: 50,
    flex: 1,
  },
  todos: {
    fontSize: 24,
    textAlign: 'center',
    marginTop: 6,
  },
  back: {
    width: 26,
    height: 26,
    marginHorizontal: 10,
    marginTop: 8,
    padding: 10,
  },
  button: {
    backgroundColor: '#F5035A',
    padding: 10,
    borderRadius: 12,
    width: 100,
    alignSelf: 'center',
    marginTop: 20,
  },
  save: {
    fontSize: 20,
    letterSpacing: 1,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
  container: {
    paddingVertical: 40,
    marginTop: 70,
    backgroundColor: 'white',
    height: 460,
    alignSelf: 'center',
    width: '90%',
    borderTopLeftRadius: 50,
    borderBottomRightRadius: 50,
    alignContent: 'center',
  },
  image: {
    height: 160,
    width: 200,
    marginTop: 8,
  },
  secondcontainer: {
    flex: 1,
    backgroundColor: '#ddd',
    borderTopLeftRadius: 100,
    height: 600,
  },
  white: {
    flex: 1,
    backgroundColor: 'white',
  },
});
export default styles;
