import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
  first: {
    backgroundColor: '#f7be5c',
    fontSize: 24,
    paddingHorizontal: 12,
    alignSelf: 'flex-start',
    borderWidth: 1,
    borderRadius: 5,
    borderTopRightRadius: 24,
    borderBottomRightRadius: 24,
  },
  title: {
    fontSize: 24,
    marginVertical: 12,
    fontFamily: 'serif',
  },
  image: {
    width: 250,
    height: 250,
    alignSelf: 'flex-end',
  },
  contain: { flexDirection: 'row-reverse' },
  num: {
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginHorizontal: 10,
  },
  number: {
    fontSize: 40,
    fontWeight: 'bold',
    alignSelf: 'center',
    margin: 10,
  },

  course: {
    fontSize: 26,
    fontWeight: 'bold',
    margin: 8,
  },

  last: {
    backgroundColor: '#9a6bff',
    fontSize: 30,
    paddingHorizontal: 34,
    alignSelf: 'flex-end',
    borderWidth: 1,
    borderRadius: 28,
    marginHorizontal: 36,
  },
  image1: {
    width: 80,
    height: 65,
  },
});
export default styles;
