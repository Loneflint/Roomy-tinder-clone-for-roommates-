import React from "react";
import {
  height,
  Animated,
  View,
  Text,
  StyleSheet,
  ScrollView,
  Button,
  Alert,
  Image,
  TouchableOpacity,
} from "react-native";

const Feed = () => {
  const [bottomActions, setBottomActions] = React.useState(null);
  const scrolly = React.useRef(new Animated.Value(0)).current;

  const topEdge = bottomActions?.y - height + bottomActions?.height;
  return (
    <View>
      <Animated.ScrollView
        style={styles.Feed}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrolly } } }],
          { useNativeDriver: true }
        )}
      >
        <View>
{/* flatlist */}

        </View>

        <View
          style={{
            width: 400,
            height: 80,
          }}
          onLayout={(ev) => {
            setBottomActions(ev.nativeEvent.layout);
          }}
        ></View>
      </Animated.ScrollView>
      {bottomActions && (
        <Animated.View
          style={[
            styles.bottomActions,
            {
              flex: 1,
              justifyContent: "center",
              flexDirection: "row",
              position: "absolute",
              bottom: 0,
              right: 0,
              left: 0,
            },
          ]}
        >
          <TouchableOpacity
            style={{
              width: 80,
              height: 80,
            }}
            onPress={() => {}}
          >
            <Image
              source={require("../assets/Dislike.png")}
              style={{
                width: 80,
                height: 80,
                borderRadius: 40 / 2,
                marginLeft: 0,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 80,
              height: 80,
              marginLeft: 150,
            }}
            onPress={() => {}}
          >
            <Image
              source={require("../assets/Like.png")}
              style={{
                width: 80,
                height: 80,
                borderRadius: 40 / 2,
                
              }}
            />
          </TouchableOpacity>
        </Animated.View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  Feed: {
    marginTop: 25,
    marginLeft: 20,
    marginRight: 20,
    height: 500,
    backgroundColor: "white",
    borderRadius: 10,
  },
  Buttons: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: "red",
  },
});

export default Feed;
