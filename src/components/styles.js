import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 17,
    paddingHorizontal: 12,
  },
  item: {
    fontSize: 14,
    color: '#04062D',
    width: 260,
  },
  itemContainer: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderWidth: 1,
    borderRadius: 12,
    borderColor: '#D3D3D3',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    marginVertical: 4,
    elevation: 2,
  },
  icon: {
    height: 50,
    width: 50,
    padding: 10,
    marginRight: 15,
    flexShrink: 0,
    borderRadius: 25,
    backgroundColor: 'grey',
  },
  searchContainer: {
    flexDirection: 'row',
    borderColor: '#BCC4D1',
    borderWidth: 1,
    marginTop: 6,
    borderRadius: 6,
    alignItems: 'center',
    paddingLeft: 10,
    marginBottom: 20,
    backgroundColor: 'white',
  },
  contentContainer: {paddingBottom: 220},
  header: {
    width: '100%',
    height: '20%',
    backgroundColor: '#484848',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
  },
  profilePic: {
    height: 80,
    width: 80,
    padding: 10,
    marginRight: 15,
    flexShrink: 0,
    borderRadius: 40,
    backgroundColor: 'grey',
  },
  heading: {
    color: 'white',
    fontSize: 18,
    fontWeight: '500',
  },
  title: {
    borderBottomWidth: 0.5,
    borderColor: '#888888',
    paddingVertical: 5,
    marginBottom: 25,
  },
  text: {fontSize: 14, fontWeight: 'bold'},
  search: {
    flex: 1,
    height: 40,
    backgroundColor: 'white',
    borderRadius: 7,
  },
});

export default styles;
