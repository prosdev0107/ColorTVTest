import { StyleSheet } from 'react-native';
import colors from 'colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray.veryLight,
    paddingHorizontal: 10,
    marginTop: 10,
  },
  search: {
    backgroundColor: colors.gray.veryLight,
    borderBottomWidth: 0,
    borderRadius: 8,
    marginLeft: 0,
    paddingLeft: 20,
  },
  searchForm: {
    flexDirection: 'row',
  },
  searchField: {
    flex: 1,
    borderWidth: 1,
    padding: 5,
  },
  itemList: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  item: {
    fontSize: 32,
  },
});
