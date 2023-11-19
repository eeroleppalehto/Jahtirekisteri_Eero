import { View } from "react-native";
import { Text, TouchableRipple, useTheme } from "react-native-paper";
import { StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { PartyViewQuery } from "../../types";

type Props = {
    party: PartyViewQuery;
};

// ListItem for displaying a single party in a list
function PartyListItem({ party }: Props) {
    const theme = useTheme();

    // Left trailing icon for the party
    const iconElement = (
        <MaterialCommunityIcons
            name="account-group"
            size={24}
            style={{ ...styles.icon, color: theme.colors.primary }}
        />
    );

    return (
        <TouchableRipple onPress={() => console.log("pressed")}>
            <View style={styles.container}>
                {iconElement}
                <View style={styles.textContainer}>
                    <Text variant="bodyLarge" style={styles.upperText}>
                        {party.seurueen_nimi}
                    </Text>
                    <View style={styles.bottomText}>
                        <Text
                            variant="bodyMedium"
                            style={{
                                ...styles.bottomText,
                                color: theme.colors.outline,
                            }}
                        >
                            Seurueen Johtaja:
                        </Text>
                        <Text
                            variant="bodyMedium"
                            style={{
                                ...styles.bottomText,
                                color: theme.colors.outline,
                            }}
                        >
                            {party.seurueen_johatajan_nimi}
                        </Text>
                    </View>
                </View>
            </View>
        </TouchableRipple>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 20,
        gap: 15,
    },
    avatar: {
        paddingTop: 5,
        paddingLeft: 10,
    },
    textContainer: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        paddingRight: 15,
    },
    upperText: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    bottomText: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    icon: {
        paddingTop: 5,
        paddingLeft: 14,
        paddingRight: 15,
    },
    divider: {
        marginHorizontal: 50,
    },
});

export default PartyListItem;
