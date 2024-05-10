import React, { useEffect, useState } from "react";
import FriendTemplat from "../components/Templat/FriendTemplat";
import {
    getFriend,
    getRequestFriend,
    getRequestedFriend,
} from "../services/FriendApi";
import { searchUser } from "../services/UserApi";

const FriendPage = ({ closeModal }) => {
    const [refresh, setRefresh] = useState(true);
    const [nickname, setNickname] = useState();
    const [searched, setSearched] = useState([]);
    const [type, setType] = useState(0);
    const [friend, setFriend] = useState([]);
    const [request, setRequest] = useState([]);
    const [requested, setRequested] = useState([]);
    const userId = localStorage.getItem("userId");

    // 데이터 받기 테스트
    useEffect(() => {
        const fetchData = async () => {
            if (type === 0) {
                const newList1 = await getFriend(userId, {
                    page: 0,
                    size: 10,
                });
                setFriend(newList1);
            } else if (type === 1) {
                const newList2 = await getRequestedFriend(userId, {
                    page: 0,
                    size: 10,
                });
                setRequested(newList2);
            } else if (type === 2) {
                const newList3 = await getRequestFriend(userId, {
                    page: 0,
                    size: 10,
                });
                setRequest(newList3);
            }
        };
        fetchData();
    }, [userId, type, refresh]);

    const Search = async () => {
        const data = await searchUser({
            nickname: nickname,
            page: 0,
            size: 10,
        });
        setSearched(data);
        if (data.length === 0) {
            alert("검색 결과가 없습니다.");
        }
        setType(0);
    };

    return (
        <FriendTemplat
            type={type}
            setType={setType}
            closeModal={closeModal}
            friend={friend}
            requested={requested}
            request={request}
            searched={searched}
            Search={Search}
            setNickname={setNickname}
            nickname={nickname}
            refresh={refresh}
            setRefresh={setRefresh}
        />
    );
};

export default FriendPage;
