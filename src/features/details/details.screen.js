import React from "react";
import { FlatList, SafeAreaView, Text, View } from "react-native";
import FocusedStatusBarComponent from "../../components/focused-status-bar/focused-status-bar.component";
import { COLORS, FONTS, SHADOWS, SIZES } from "../../constants";
import RectangularButtonComponent from "../../components/rectangular-button/rectangular-button.component";
import { DetailsBidComponent } from "../../components/details-bid/details-bid.component";
import { DetailsHeaderComponent } from "../../components/details-header/details-header.component";
import { SubInfoComponent } from "../../components/sub-info/sub-info.component";
import { DetailsDescriptionComponent } from "../../components/details-description/details-description.component";

const DetailsScreen = ({ route, navigation }) => {
  const { data } = route.params;
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBarComponent
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
      />
      <View
        style={{
          width: "100%",
          position: "absolute",
          bottom: 0,
          paddingVertical: SIZES.font,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(255, 255,255,0.5)",
          zIndex: 1,
        }}
      >
        <RectangularButtonComponent
          minWidth={170}
          fontSize={SIZES.large}
          {...SHADOWS.dark}
        />
      </View>
      <FlatList
        data={data.bids}
        renderItem={({ item }) => <DetailsBidComponent bid={item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: SIZES.extraLarge * 3 }}
        ListHeaderComponent={() => (
          <React.Fragment>
            <DetailsHeaderComponent data={data} navigation={navigation} />
            <SubInfoComponent />
            <View style={{ padding: SIZES.font }}>
              <DetailsDescriptionComponent data={data} />
              {data.bids.length > 0 && (
                <Text
                  style={{
                    fontFamily: FONTS.semiBold,
                    fontSize: SIZES.font,
                    color: COLORS.primary,
                  }}
                >
                  Current Bids
                </Text>
              )}
            </View>
          </React.Fragment>
        )}
      />
    </SafeAreaView>
  );
};

export default DetailsScreen;
