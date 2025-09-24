import { useEffect, useState } from "react";

const RentalsPage = () => {
    const [user, setUser] = useState<{ id: number; name: string; email: string } | null>(null);

    useEffect(() => {
        fetch("http://10.0.0.7:3000/users") // 👈 use 10.0.2.2 on Android Emulator
            .then((res) => res.json())
            .then(setUser)
            .catch(console.error);
    }, []);
};


export default RentalsPage;
