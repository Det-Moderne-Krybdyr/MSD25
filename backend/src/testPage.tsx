import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";

const RentalsPage = () => {
    const [user, setUser] = useState<{ id: number; name: string; email: string } | null>(null);

    useEffect(() => {
        fetch("http://10.0.0.7:3000/users") // 👈 use 10.0.2.2 on Android Emulator
            .then((res) => res.json())
            .then(setUser)
            .catch(console.error);
    }, []);

    return (
        <View style={styles.container}>
            <Text>Rentals</Text>
            {user ? (
                <Text>{user.name} ({user.email})</Text>
            ) : (
                <Text>Loading user...</Text>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: "center", alignItems: "center" },
});

export default RentalsPage;
