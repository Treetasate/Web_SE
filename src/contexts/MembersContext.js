import React, { createContext, useContext, useEffect, useState } from 'react';
import http from '../http';

const MembersContext = createContext();

export const useMembersContext = () => {
    return useContext(MembersContext);
};

export const MembersProvider = ({children}) => {
    const [Members, setMembers] = useState("");
    const [nav_value, set_nav_value] = useState("MembersList");
    const [MembersId, setMembersId] = useState("");
    
    // add new 
    const createNewMembers = async (data) => {
        try {
            await http.post("/api/members", data);
            console.log("สร้างสมาชิกใหม่สำเร็จ");
        } catch (error) {
            // จัดการข้อผิดพลาดที่เกิดขึ้น
            if (error.response) {
                // เซิร์ฟเวอร์ตอบกลับด้วยสถานะร้อยกว่า 2xx
                console.error("ข้อผิดพลาดจากเซิร์ฟเวอร์:", error.response.data);
            } else if (error.request) {
                // ไม่มีการรับข้อมูลตอบกลับจากเซิร์ฟเวอร์
                console.error("ไม่ได้รับการตอบกลับจากเซิร์ฟเวอร์:", error.request);
            } else {
                // มีข้อผิดพลาดในการตั้งค่าร้องขอหรือในโค้ด
                console.error("มีข้อผิดพลาด:", error.message);
            }
        }
    };
    
    // update a entry
    const updateMembers = async (MembersId, data) => {
        await http.put(`/api/members/${MembersId}`, data);
    };

    // delete a entry
    const deleteMembers = async (MembersId) => {
        await http.delete(`/api/members/${MembersId}`);
    };

    // change navigation value
    const changeNavValue = (value) => {
        set_nav_value(value);
    };

    // get value
    const getMembersId = (id) => {
        setMembersId(id);
    };

    useEffect(()=>{
        const readAllMembers = async () => {
            const response = await http.get("/api/members");
            const responseArr = Object.values(response.data.data);
            setMembers(responseArr);
        };

        return readAllMembers;
    }, []);

    const value = {
        createNewMembers,
        Members,
        updateMembers,
        deleteMembers,
        changeNavValue,
        nav_value,
        getMembersId,
        MembersId
    };

    // context
    return(
        <MembersContext.Provider value={value}>
            {children}
        </MembersContext.Provider>
    )
}; 