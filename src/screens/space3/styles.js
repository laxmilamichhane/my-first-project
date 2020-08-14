import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#e0e0e5',
  },
  icon: {
    width: 20,
    height: 20,
    marginTop: 18,
  },
  dots: {
    fontSize: 40,
  },
  lowercontainer: {
    backgroundColor: 'white',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    flex: 1,
    padding: 16,
  },
  text: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 18,
    marginTop: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  des: {
    fontSize: 18,
    color: 'gray',
    letterSpacing: 0.19,
  },
  box: {
    margin: 4,
    flexDirection: 'row',
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 8,
    borderRadius: 10,
    justifyContent: 'space-between',
    marginTop: 20,
    borderColor: '#ededed',
  },
  smallbox: {
    backgroundColor: '#d5ede1',
    borderRadius: 20,
    paddingHorizontal: 10,
    marginRight: 6,
  },
  lastimage: {
    width: 120,
    height: 120,
    marginRight: 6,
  },
  ui: {
    color: '#00d3b3',
    fontSize: 16,
    marginTop: 6,
  },
});
export default styles;
