import React, { useState } from "react";
import styled from "styled-components";
import MajorSelect from "../atoms/MajorSelect";
import { putUser } from "../../services/UserApi";

const FormStyle = styled.div`
    box-sizing: border-box;
    border: 1px solid #ddddff;
    border-radius: 10px;
    width: 800px;
    background-color: #ffffff;
    margin: 50px auto;
    text-align: center;
    padding: 50px 40px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    input {
        box-sizing: border-box;
        display: block;
        background-color: #fff;
        border: none;
        width: 100%;
        height: 70px;
        margin: 0 auto;
        border: 1px solid #ddddff;
        border-radius: 5px;
        padding: 10px 16px;
        font-size: 18px;
        font-family: "SUIT-Regular", sans-serif;
    }
    .buttonbox {
        display: flex;
        gap: 30px;
        justify-content: center;
        button {
            box-sizing: border-box;
            border: 0;
            border-radius: 10px;
            background-color: #5383e3;
            color: #ffffff;
            margin: 0;
            font-size: 20px;
            padding: 20px 70px;
            font-family: "SUIT-Regular", sans-serif;
        }
    }
    select {
        width: 100%;
        border: 1px solid #ddddff;
        margin: 0;
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
    const [major, setMajor] = useState("소프트웨어학과");

    return (
        <FormStyle>
            <input
                value={nickname}
                onChange={(e) => {
                    setNickname(e.target.value);
                }}
                placeholder={"닉네임"}
            />
            <input
                value={img}
                onChange={(e) => {
                    setImg(e.target.value);
                }}
                placeholder={"이미지 URL"}
            />
            <MajorSelect item={MAJOR} setMajor={setMajor} />
            <div className="buttonbox">
                <button
                    onClick={async () => {
                        const data = await putUser({
                            userId: localStorage.getItem("userId"),
                            nickname: nickname,
                            profileImageURL: img,
                            major: major,
                        });
                        if (data.status === 200) {
                            alert("회원 정보가 변경되었습니다.");
                            window.location.reload();
                        } else {
                            alert("오류가 발생하였습니다.");
                        }
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
