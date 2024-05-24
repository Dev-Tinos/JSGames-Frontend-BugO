import React, { useEffect, useState } from "react";
import ProfileBox from "../molecules/ProfileBox";
import { getGameUser } from "../../services/GameApi";
import UserHistory from "./UserHistory";

const FriendProfile = ({ data, closeModal2 }) => {
    const [historyData, setHistoryData] = useState(null);
    const userId = data.userId || data.friendId;
    useEffect(() => {
        const getData = async () => {
            try {
                const apiData = await getGameUser(userId, {
                    page: 0,
                    size: 8,
                });
                setHistoryData(apiData);
            } catch (error) {
                console.error();
            }
        };
        getData();
    }, [userId]);

    return (
        <div>
            <i
                class="fa-solid fa-xmark"
                style={{
                    color: "#999999",
                    cursor: "pointer",
                    float: "right",
                    fontSize: "20px",
                }}
                onClick={closeModal2}
            />
            <ProfileBox data={data} />
            <UserHistory data={historyData} />
        </div>
    );
};

export default FriendProfile;
