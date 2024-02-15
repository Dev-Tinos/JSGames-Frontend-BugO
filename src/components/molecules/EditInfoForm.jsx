import React, { useState } from "react";
import styled from "styled-components";
import MajorSelect from "../atoms/MajorSelect";
import { putUser } from "../../services/UserApi";

const FormStyle = styled.div`
    width: 800px;
    background-color: #cecece;
    margin: auto;
    input {
        background-color: #fff;
        border: none;
        width: 90%;
        height: 50px;
        margin: 10px;
        box-shadow: 0 0 0 2px #000;
    }
    button {
        font-size: 20px;
        width: 70px;
    }
`;
const MAJOR = [
    { value: "소프트웨어학과" },
    { value: "컴퓨터공학과" },
    { value: "인공지능학과" },
    { value: "게임공학과" },
    { value: "산업경영학과" },
    { value: "IT경영학과" },
    { value: "데이터사이언스경영학과" },
    { value: "글로벌융합공학과" },
    { value: "기계공학과" },
    { value: "기계설계공학과" },
    { value: "나노반도체공학과" },
    { value: "메카트로닉스학과" },
    { value: "AI로봇학과" },
    { value: "산업디자인공학과" },
    { value: "미디어디자인학과" },
    { value: "생명화학공학과" },
    { value: "신소재공학과" },
    { value: "에너지전기공학과" },
    { value: "지식융합학과" },
    { value: "전자공학과" },
    { value: "임베디드시스템학과" },
];

const EditInfoForm = ({ onClicked }) => {
    const [nickname, setNickname] = useState("");
    const [img, setImg] = useState("");
    const [major, setMajor] = useState(null);

    return (
        <FormStyle>
            <input
                value={nickname}
                onChange={(e) => {
                    setNickname(e.target.value);
                }}
                placeholder={"닉네임"}
            ></input>
            <input
                value={img}
                onChange={(e) => {
                    setImg(e.target.value);
                }}
                placeholder={"이미지 URL"}
            ></input>
            <MajorSelect item={MAJOR} setMajor={setMajor} />
            <div>
                <button
                    onClick={() => {
                        console.log({
                            userId: localStorage.getItem("userId"),
                            nickname: nickname,
                            img: img,
                            major: major,
                        });
                        const data = putUser({
                            userId: localStorage.getItem("userId"),
                            nickname: nickname,
                            img: img,
                            major: major,
                        });
                        alert(data);
                    }}
                >
                    수정
                </button>
                <button onClick={onClicked}>취소</button>
            </div>
        </FormStyle>
    );
};

export default EditInfoForm;
