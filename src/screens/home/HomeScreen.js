import React, { useEffect, useState } from 'react';
import { View, Text, Button, TextInput, FlatList, TouchableOpacity } from 'react-native';
import Style from './Styles';
/**
 * ? Local Imports
 */
import { fetchUsers } from 'api';

const HomeScreen = ({ navigation }) => {
  const [page, setPage] = useState(0);
  const [totalPage, setTotalPage] = useState(1);
  const [user, setUser] = useState('');
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers(user, page).then((result) => {
      page === 1 ? setUsers(result.results) : setUsers([...users, ...result.results]);
      setTotalPage(result.total_pages);
    });
  }, [page]);

  const renderUsers = (item) => {
    return (
      <TouchableOpacity
        style={Style.itemList}
        onPress={() => navigation.navigate('detail', { item })}
      >
        <Text style={Style.item}>{item.first_name}</Text>
      </TouchableOpacity>
    );
  };

  const renderEmpty = () => {
    return (
      <View>
        <Text>No users found.</Text>
      </View>
    );
  };

  return (
    <View style={Style.container}>
      <View style={Style.searchForm}>
        <TextInput
          style={Style.searchField}
          value={user}
          onChangeText={(value) => setUser(value)}
        />
        <Button
          title='Search'
          onPress={() => {
            setPage(1);
            setTotalPage(1);
          }}
        />
      </View>
      <FlatList
        data={users}
        renderItem={({ item }) => renderUsers(item)}
        keyExtractor={(item, index) => `u_item${index}`}
        ListEmptyComponent={renderEmpty}
        extraData={users}
        onEndReached={() => {
          if (page < totalPage) {
            setPage(page + 1);
          }
        }}
      />
    </View>
  );
};

HomeScreen.navigationOptions = {
  title: 'Home',
};

export default HomeScreen;
