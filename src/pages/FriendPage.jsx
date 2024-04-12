import React, { useEffect, useState } from "react";
import FriendTemplat from "../components/Templat/FriendTemplat";
import {
    getFriend,
    getRequestFriend,
    getRequestedFriend,
} from "../services/FriendApi";
import { searchUser } from "../services/UserApi";

const FriendPage = ({ isOpen, closeModal }) => {
    const [refresh, setRefresh] = useState(true);
    const [nickname, setNickname] = useState();
    const [searched, setSearched] = useState([]);
    const [type, setType] = useState(0);
    const [friend, setFriend] = useState([]);
    const [request, setRequest] = useState([]);
    const [requested, setRequested] = useState([]);
    const userId = localStorage.getItem("userId");

    // 모달이 열릴 경우 스크롤 방지
    useEffect(() => {
        const currentScrollY = window.scrollY;
        if (isOpen) {
            document.body.style.position = "fixed";
            document.body.style.width = "100%";
            document.body.style.top = `-${currentScrollY}px`;
            document.body.style.overflowY = "scroll";
        } else {
            document.body.style.position = "";
            document.body.style.width = "";
            document.body.style.top = "";
            document.body.style.overflowY = "";
            window.scrollTo(0, currentScrollY);
        }

        return () => {
            window.scrollTo(0, currentScrollY);
        };
    }, [isOpen]);

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
        setType(0);
    };

    if (!isOpen) return null;

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
