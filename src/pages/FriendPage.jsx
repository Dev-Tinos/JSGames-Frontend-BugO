import React, { useEffect, useRef, useState } from "react";
import FriendTemplat from "../components/Templat/FriendTemplat";
import {
    getFriend,
    getRequestFriend,
    getRequestedFriend,
} from "../services/FriendApi";

const FriendPage = ({ isOpen, closeModal }) => {
    const [type, setType] = useState(0);
    const [loading, setLoading] = useState(false);
    const [friend, setFriend] = useState([]);
    const [friendPage, setFrienPage] = useState(0);
    const [request, setRequest] = useState([]);
    const [requestPage, setRequestPage] = useState(0);
    const [requested, setRequested] = useState([]);
    const [requestedPage, setrequestedPage] = useState(0);
    const userId = localStorage.getItem("userId");
    const loaderRef = useRef(null);

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

    useEffect(() => {
        const fetchData = async () => {
            if (type === 0) {
                const newList = await getFriend(userId, {
                    page: friendPage,
                    size: 10,
                });
                setFriend(newList);
            } else if (type === 1) {
                const newList = await getRequestFriend(userId, {
                    page: requestPage,
                    size: 10,
                });
                setRequest(newList);
            } else if (type === 2) {
                const newList = await getRequestedFriend(userId, {
                    page: requestedPage,
                    size: 10,
                });
                setRequested(newList);
            }
        };
        fetchData();
    }, [userId, friendPage, requestPage, requestedPage, type]);

    // useEffect(() => {
    //     const fetchMoreData = async () => {
    //         if (loading) return;

    //         setLoading(true);

    //         try {
    //             setTimeout(async () => {
    //                 if (type === 0) {
    //                     const newList = await getFriend(userId, {
    //                         page: friendPage,
    //                         size: 10,
    //                     });
    //                     //받은 데이터 길이가 0일경우 무한스크롤 중지
    //                     if (newList.length === 0) {
    //                         return;
    //                     }
    //                     setFriend((prevList) => [...prevList, ...newList]);
    //                     setRequestPage((prevPage) => prevPage + 1);
    //                     setLoading(false);
    //                 } else if (type === 1) {
    //                     const newList = await getRequestFriend(userId, {
    //                         page: requestPage,
    //                         size: 10,
    //                     });
    //                     if (newList.length === 0) {
    //                         return;
    //                     }
    //                     setRequest((prevList) => [...prevList, ...newList]);
    //                     setFrienPage((prevPage) => prevPage + 1);
    //                     setLoading(false);
    //                 } else if (type === 2) {
    //                     const newList = await getRequestedFriend(userId, {
    //                         page: requestedPage,
    //                         size: 10,
    //                     });
    //                     if (newList.length === 0) {
    //                         return;
    //                     }
    //                     setRequested((prevList) => [...prevList, ...newList]);
    //                     setrequestedPage((prevPage) => prevPage + 1);
    //                     setLoading(false);
    //                 }
    //             }, 100);
    //         } catch (error) {
    //             console.error();
    //         }
    //     };
    //     const observer = new IntersectionObserver(
    //         (entries) => {
    //             const firstEntry = entries[0];
    //             if (firstEntry.isIntersecting) {
    //                 fetchMoreData();
    //             }
    //         },
    //         { threshold: 1.0 }
    //     );
    //     if (loaderRef.current) {
    //         observer.observe(loaderRef.current);
    //     }
    //     return () => observer.disconnect();
    // }, [userId, loading, type, friendPage, requestPage, requestedPage]);

    if (!isOpen) return null;

    return (
        <FriendTemplat type={type} setType={setType} closeModal={closeModal} />
    );
};

export default FriendPage;
