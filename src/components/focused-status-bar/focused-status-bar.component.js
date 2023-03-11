import { useIsFocused } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

const FocusedStatusBarComponent = (props) => {
  const isFocused = useIsFocused();
  return isFocused ? <StatusBar animated={true} {...props} /> : null;
};

export default FocusedStatusBarComponent;
