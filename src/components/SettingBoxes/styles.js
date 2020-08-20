import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    margin: 4,
    flexDirection: 'row',
    padding: 8,
    borderBottomColor: '#dbdce4',
  },
  title: {
    fontSize: 20,
    flex: 1,
  },
  place: { fontSize: 18, color: 'gray' },
  image: {
    width: 40,
    height: 40,
    alignSelf: 'flex-start',
    marginRight: 10,
  },
  icon: {
    width: 18,
    height: 18,
    marginTop: 18,
  },
});
export default styles;
