import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#262A6D',
    flex: 1,

  },
  image: {
    width: 50,
    height: 50,
    alignSelf: 'flex-end',
    marginRight: 20,
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 6,
  },
  date: {
    backgroundColor: '#ff6c11',
    borderWidth: 1,
    borderColor: '#ff6c11',
    borderRadius: 20,
    marginLeft: 30,
    paddingVertical: 30,
    marginTop: 1,
  },
  text: {
    color: 'white',
    fontSize: 36,
    paddingLeft: 12,
  },
  texttwo: {
    fontSize: 20,
    paddingLeft: 16,
  },
  text1: {
    fontSize: 34,

    color: '#ff6c11',
  },
  text2: {
    fontSize: 20,
    color: 'white',
  },
  flex: {
    flexDirection: 'row',
    marginBottom: 40,

  },
  lowercontainer: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 30,
    marginBottom: 30,

  },
  det: {
    backgroundColor: 'orange',
    paddingRight: 8,
    borderRadius: 12,
    borderColor: '#f77d36',
    backgroundColor: '#f2752e',
    marginBottom: 20,
  },
  message: {
    fontSize: 14,
    color: 'gray',
    paddingLeft: 8,
  },
  msg: {
    height: 46,
    width: 50,
    marginLeft:6,

  },
  prsn: {
    height: 40,
    width: 40,
    marginStart: 26,
    marginTop: 10,
  },
  lastimage: {
    width: 34,
    height: 34,
    borderWidth: 1,
    borderRadius: 8,
    marginLeft: 10,
    resizeMode: 'contain',
  },
});
export default styles;
