import React from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";

import { IMAGES } from "../../configs";

import styles from "./styles";

const Component = () => {
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
            <TextInput placeholder="Username" style={styles.input} />
          </View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.textButton}>Search</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Component;
