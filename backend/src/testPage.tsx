import { useEffect, useState } from "react";

const RentalsPage = () => {
    const [user, setUser] = useState<{ id: number; name: string; email: string } | null>(null);

    useEffect(() => {
        fetch("http://10.0.0.7:3000/users")
            .then((res) => res.json())
            .then(setUser)
            .catch(console.error);
    }, []);
};


export default RentalsPage;
