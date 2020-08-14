import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: 158,
    width: 350,
    borderRadius: 20,
    marginTop: 10,
    padding: 16,
    backgroundColor: 'white',
    borderColor: '#d6d6d6',
  },
  title: {
    fontSize: 20,
    color: 'black',
  },
  daybox: {
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 30,
  },
  day: {
    fontSize: 16,
    color: 'white',
  },
  typebox: {
    borderRadius: 20,
    padding: 6,
    paddingHorizontal: 10,
  },
  type: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  name: {
    fontSize: 16,
    color: 'gray',
    marginTop: 8,
  },
  photo: {
    height: 30,
    width: 30,
    borderRadius: 15,
    marginLeft: 6,
    marginTop: 4,
  },
});
export default styles;
