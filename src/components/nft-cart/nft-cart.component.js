import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Image, Text, View } from "react-native";
import { assets, COLORS, SHADOWS, SIZES } from "../../constants";
import CircleButtonComponent from "../circle-button/circle-button.component";
import {
  EthPriceComponent,
  NftTitleComponent,
  SubInfoComponent,
} from "../sub-info/sub-info.component";
import RectangularButtonComponent from "../rectangular-button/rectangular-button.component";

const NftCartComponent = ({ data }) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        backgroundColor: COLORS.white,
        borderRadius: SIZES.font,
        marginBottom: SIZES.extraLarge,
        margin: SIZES.base,
        ...SHADOWS.dark,
      }}
    >
      <View style={{ width: "100%", height: 250 }}>
        <Image
          source={data.image}
          resizeMode="cover"
          style={{
            width: "100%",
            height: "100%",
            borderTopLeftRadius: SIZES.font,
            borderTopRightRadius: SIZES.font,
          }}
        />
        <CircleButtonComponent imageUrl={assets.heart} right={10} top={10} />
      </View>
      <SubInfoComponent />
      <View style={{ width: "100%", padding: SIZES.font }}>
        <NftTitleComponent
          title={data.name}
          titleSize={SIZES.large}
          subTitle={data.creator}
          subTitleSize={SIZES.small}
        />
        <View
          style={{
            marginTop: SIZES.font,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <EthPriceComponent price={data.price} />
          <RectangularButtonComponent
            minWidth={120}
            fontSize={SIZES.font}
            handlePress={() => navigation.navigate("DetailsScreen", { data })}
          />
        </View>
      </View>
    </View>
  );
};

export default NftCartComponent;
