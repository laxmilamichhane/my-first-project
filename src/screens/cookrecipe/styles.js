import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  image: {
    width: 400,
    height: 200,
    position: 'absolute',
  },
  person: {
    height: 120,
    width: 120,
    borderRadius: 60,
    marginTop: 150,
    marginLeft: 20,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 24,
  },
  follow: {
    height: 70,
    width: 100,
    alignSelf: 'flex-end',
    marginTop: 230,
    marginLeft: 10,
  },
  recommended: {
    fontWeight: 'bold',
    fontSize: 22,
    margin: 14,
  },
  viewone: {
    backgroundColor: '#d4d4d4',
    marginHorizontal: 20,
    height: 6,
    borderRadius: 3,
  },
  viewtwo: {
    backgroundColor: '#f26a9a',
    height: 6,
    borderRadius: 3,
    marginRight: 274,
  },
  see: {
    color: '#f26d9b',
    marginTop: 22,
    fontSize: 18,
    marginLeft: 120,
  },
  new: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
    marginTop: 8,
  },
});
export default styles;
