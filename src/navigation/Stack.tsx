import React from "react";
import {
  TransitionPresets,
  createStackNavigator,
} from "@react-navigation/stack";

import SearchUsername from "../screens/SearchUsername";
import ListRepo from "../screens/ListRepo";

const { Navigator, Screen } = createStackNavigator();

const Stack = () => (
  <Navigator screenOptions={{ ...TransitionPresets.SlideFromRightIOS }}>
    <Screen
      name="SearchUsername"
      component={SearchUsername}
      options={{ header: () => null }}
    />
    <Screen
      name="ListRepo"
      component={ListRepo}
      options={{ title: "Repositories" }}
    />
  </Navigator>
);

export default Stack;
