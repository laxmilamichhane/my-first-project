import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  screen: {
    backgroundColor: 'white',
    height: 220,
    width: 150,
    borderRadius: 20,
    margin: 10,
    justifyContent: 'space-around',
    borderWidth: 1,
    borderColor: 'lightgray',
    marginVertical: 30,
  },
  numbers: {
    fontSize: 22,
    marginTop: 20,
    color: 'gray',
  },
  month: {
    fontSize: 20,
    letterSpacing: 0.4,
    color: 'gray',
  },
  dollars: {
    fontSize: 22,
    color: 'gray',
  },
  paisa: {
    fontSize: 18,
    marginTop: 6,
    marginBottom: 20,
    color: 'gray',
  },
  boxtop: {
    alignItems: 'center',
    backgroundColor: '#ffe8ed',
    flex: 1,
    borderTopRightRadius: 18,
    borderTopLeftRadius: 18,
    marginBottom: '20%',
  },
});
export default styles;
