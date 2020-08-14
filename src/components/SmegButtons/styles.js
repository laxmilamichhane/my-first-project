import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  container: {
    margin: 4,
    flexDirection: 'row',
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 8,
    borderRadius: 10,
    borderColor: '#ededed',
  },
  text: {
    fontSize: 20,
    margin: 4,
  },
  image: {
    width: 36,
    height: 36,
    borderRadius: 18,
    marginLeft: 4,
  },
  des: {
    fontSize: 16,
    color: 'white',
    margin: 2,
  },
  name: {
    fontSize: 16,
    color: 'gray',
    marginTop: 8,
    marginLeft: 104,
  },
});
export default styles;
