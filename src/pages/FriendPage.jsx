import React, { useState } from "react";
import FriendTemplat from "../components/Templat/FriendTemplat";

const FriendPage = () => {
    const [type, setType] = useState(0);

    return <FriendTemplat type={type} setType={setType} />;
};

export default FriendPage;
