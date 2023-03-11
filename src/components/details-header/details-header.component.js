import React from "react";
import { Image, StatusBar, Text, View } from "react-native";
import CircleButtonComponent from "../circle-button/circle-button.component";
import { assets } from "../../constants";

export const DetailsHeaderComponent = ({ data, navigation }) => {
  return (
    <View style={{ width: "100%", height: 373 }}>
      <Image
        source={data.image}
        resizeMode="cover"
        style={{ width: "100%", height: "100%" }}
      />
      <CircleButtonComponent
        imageUrl={assets.left}
        handlePress={() => navigation.goBack()}
        left={15}
        top={StatusBar.currentHeight + 10}
      />
      <CircleButtonComponent
        imageUrl={assets.heart}
        right={15}
        top={StatusBar.currentHeight + 10}
      />
    </View>
  );
};
