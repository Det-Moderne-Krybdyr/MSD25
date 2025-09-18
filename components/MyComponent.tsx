import {View, Text} from "react-native";

const MyComponent = ({name}: {name: string}) => {

    return (
        <View>
            <Text>{name}</Text>
        </View>
    )
}

export default MyComponent;