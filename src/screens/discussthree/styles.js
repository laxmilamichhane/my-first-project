import { StyleSheet } from 'react-native';
import { lightblue } from 'color-name';
import { hidden } from 'ansi-colors';

const styles = StyleSheet.create({
  container: {

    flex: 1,
  },
  dots: {
    fontSize: 46,
    marginTop: 6,
    marginRight: 260,
    marginLeft: 4,
  },
  image: {
    height: 50,
    width: 50,
    alignSelf: 'flex-end',
    marginRight: 12,
    borderRadius: 10,
  },
  meet: {
    fontSize: 26,
    marginStart: 18,
    marginBottom: 8,
  },
  pie: {
    paddingVertical: 100,
  },
  circle: {
    backgroundColor: '#553e9b',
    padding: 32,
    borderRadius: 80,
    position: 'absolute',
    marginLeft: 10,
    opacity: 0.90,
    marginTop: 30,
    zIndex: 9999
  },
  circle2: {
    backgroundColor: '#f76f20',
    padding: 50,
    borderRadius: 100,
    position: 'absolute',
    marginLeft: 86,

  },
  circle3: {
    backgroundColor: '#6bd5e5',
    height: 60,
    width: 60,
    borderRadius: 36,
    position: 'absolute',
    top: 104,
    left: 70,
    opacity: 0.80,
  },
  number: {
    fontSize: 26,
    color: 'white',

  },
  number3: {
    paddingTop: 12,
    fontSize: 22,
    paddingLeft: 6,
    color: 'white'
  },
  datee: {
    fontSize: 20,
    color: 'gray',
    margin: 4,
  }
});

export default styles;