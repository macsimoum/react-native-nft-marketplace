import React from "react";
import { FlatList, Text, View } from "react-native";
import FocusedStatusBarComponent from "../../components/focused-status-bar/focused-status-bar.component";
import { COLORS, NFTData } from "../../constants";
import HomeHeaderComponent from "../../components/home-header/home-header.component";
import { SafeArea } from "../../components/safe-area/safe-area.component";
import NftCartComponent from "../../components/nft-cart/nft-cart.component";

const HomeScreen = () => {
  const [nftData, setNftData] = React.useState(NFTData);

  const handleSearch = (value) => {
    if (!value.length) return setNftData(NFTData);

    const filteredData = NFTData.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );

    if (filteredData.length) {
      setNftData(filteredData);
    } else {
      setNftData(NFTData);
    }
  };

  return (
    <SafeArea style={{ flex: 1 }}>
      <FocusedStatusBarComponent backgroundColor={COLORS.primary} />
      <View style={{ flex: 1 }}>
        <View style={{ zIndex: 0 }}>
          <FlatList
            data={nftData}
            renderItem={({ item }) => <NftCartComponent data={item} />}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={
              <HomeHeaderComponent onSearch={handleSearch} />
            }
            // stickyHeaderIndices={[0]}
          />
        </View>
        <View
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: -1,
          }}
        >
          <View style={{ height: 300, backgroundColor: COLORS.primary }} />
          <View style={{ flex: 1, backgroundColor: COLORS.white }} />
        </View>
      </View>
    </SafeArea>
  );
};

export default HomeScreen;
