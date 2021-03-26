import React, { useCallback, useState } from "react";
import {
  Alert,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import { IMAGES } from "../../configs";

import styles from "./styles";

const Component = () => {
  const navigation = useNavigation();

  const [username, setUsername] = useState("");

  const _handleSearch = useCallback(() => {
    if (username) {
      navigation.navigate("ListRepo", { username });
    } else {
      Alert.alert("Please Input Username!");
    }
  }, [navigation, username]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>Github</Text>
        <Text>Arief Yusron</Text>
      </View>
      <View style={styles.content}>
        <Image source={IMAGES.logo} style={styles.image} />
        <View style={styles.form}>
          <View style={styles.wrapInput}>
            <TextInput
              placeholder="Username"
              style={styles.input}
              value={username}
              onChangeText={(e) => setUsername(e)}
            />
          </View>
          <TouchableOpacity style={styles.button} onPress={_handleSearch}>
            <Text style={styles.textButton}>Search</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Component;
