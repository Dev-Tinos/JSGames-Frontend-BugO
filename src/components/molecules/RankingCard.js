import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getUser } from "../../services/userApi";
import RankingCardSkeleton from "../atoms/RankingCardSkeleton";

const CardStyled = styled.div`
    margin: auto;
    background-color: #fff;
    border-radius: 15px;
    width: 280px;
    height: 448px;
    text-align: center;
    .ranking {
        font-size: 30px;
        font-weight: bold;
    }
    img {
        width: 150px;
        height: 150px;
        border-radius: 50%;
        border: 1px solid #000;
    }
    .name {
        font-size: 20px;
        margin-top: 40px;
    }
    .score {
        font-size: 20px;
    }
`;

const RankingCard = ({ item, ranking }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const getData = async () => {
            try {
                const apiData = await getUser(item.userId);
                setUser(apiData);
            } catch (error) {
                console.error();
            }
        };
        getData();
    }, [item]);

    return (
        <>
            {user === null ? (
                <RankingCardSkeleton />
            ) : (
                <CardStyled>
                    <>
                        <p className="ranking">{ranking}</p>
                        <img
                            src={require("../../assets/img/tino.png")}
                            alt={`${item.userId}`}
                        />
                        <p className="name">{user.nickname}</p>
                        <p className="score">{item.gameScore}</p>
                    </>
                </CardStyled>
            )}
        </>
    );
};

export default RankingCard;
