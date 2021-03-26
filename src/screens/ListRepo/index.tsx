import React, { useCallback, useEffect } from "react";
import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  Text,
  View,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";

import { getRepos } from "../../redux/actions";
import { Reducers } from "../../redux/types";
import { COLORS } from "../../configs";

import styles from "./styles";

const Component = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const route = useRoute();
  const { username } = route.params as any;

  const reposState = useSelector((state: Reducers) => state.repos);

  const _getData = useCallback(() => {
    dispatch(getRepos(username, () => navigation.goBack()));
  }, [dispatch, navigation, username]);

  useEffect(() => {
    _getData();
  }, [_getData]);

  return (
    <View style={styles.container}>
      {reposState.isLoading ? (
        <View style={styles.wrapLoading}>
          <ActivityIndicator color={COLORS.main} size="large" />
        </View>
      ) : (
        <FlatList
          data={reposState.list}
          keyExtractor={(item, index) => String(index)}
          refreshControl={
            <RefreshControl
              onRefresh={_getData}
              refreshing={reposState.isLoading}
            />
          }
          renderItem={({ item }) => (
            <View style={styles.wrapContent}>
              <View style={styles.content}>
                <Text style={styles.title}>{item.name}</Text>
                <Text>{item.description}</Text>
              </View>
            </View>
          )}
        />
      )}
    </View>
  );
};

export default Component;
