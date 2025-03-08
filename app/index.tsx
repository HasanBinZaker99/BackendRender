import { View, Text, Button } from "react-native";
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Welcome to the App!</Text>
      <Button
        title="Go to Input Screen"
        onPress={() => router.push("/TextInputScreen")}
      />
    </View>
  );
}
