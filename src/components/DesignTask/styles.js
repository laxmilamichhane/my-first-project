import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  img: {
    marginTop: 10,
    width: 46,
    height: 46,
    marginRight: 10,
    borderRadius: 20,
    borderWidth: 1,
  },
  stitle: {
    fontSize: 14,
  },
  top: {
    fontSize: 20,
  },
  both: {
    marginHorizontal: 4,
    padding: 6,
    borderBottomLeftRadius: 30,
    borderTopRightRadius: 30,
    borderColor: 'red',
    borderRadius: 5,
    marginBottom: 8,
    flexDirection: 'row',
    backgroundColor: '#dbd9de',
    width: '100%',
    flex: 1,
  },
  bottoms: {
    paddingTop: 10,
    paddingBottom: 10,
  },
});

export default styles;
