import * as React from 'react';

// mui components
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import Paper from '@mui/material/Paper';

// custom components
import BottomNav from './BottomNav';
import MembersListItem from './MembersListItem';

// data
import { useMembersContext } from '../contexts/MembersContext';


export default function MembersList() {
    const { Members } = useMembersContext();

    return (
      <Box sx={{ pb: 7 }}>
        <CssBaseline />
        <List>
          {Members &&
            Members.map(
              (
                {
                  id,
                  attributes: {
                    dob,
                    ID_card,
                    Email,
                    NameFirst,
                    NameSur,
                    LineID,
                    Facebook,
                    Address,
                    Tel,
                    Age,
                    NickName,
                    TrainerId,
                    Disease,
                    Talent,
                    Corporation,
                    FoodAllergy,
                    WorkHistory,
                    ExplainRole,
                    Achievements,
                    ExperienceWithCor,
                    Q1,
                    Q2,
                    Q3,
                    Q4,
                    Q5,
                    Interested,
                    Accept,
                    AcceptCheckData,
                    AcceptTakePic,
                    Province,
                    SubDistrict,
                    District,
                    PostNo,
                    NameTitle,
                    Marital,
                    Job,
                    Train_bf_5days,
                    TimeStamp,
                    ImgUser,
                    Recommendation,
                  },
                },
                i
              ) => (
                <MembersListItem
                  key={i}
                  id={id}
                  name={`${NameFirst} ${NameSur}`}
                  MembersFieldData={[
                    { attrib: `วันเกิด: ${dob}` },
                    { attrib: `เลขบัตรประชาชน: ${ID_card}` },
                    { attrib: `อีเมล: ${Email}` },
                    { attrib: `ชื่อ: ${NameFirst}` },
                    { attrib: `นามสกุล: ${NameSur}` },
                    { attrib: `LineID: ${LineID}` },
                    { attrib: `Facebook: ${Facebook}` },
                    { attrib: `ที่อยู่: ${Address}` },
                    { attrib: `โทรศัพท์: ${Tel}` },
                    { attrib: `อายุ: ${Age}` },
                    { attrib: `ชื่อเล่น: ${NickName}` },
                    { attrib: `รหัสผู้ฝึก: ${TrainerId}` },
                    { attrib: `โรค: ${Disease}` },
                    { attrib: `ความสามารถ: ${Talent}` },
                    { attrib: `บริษัท: ${Corporation}` },
                    { attrib: `อาหารที่แพ้: ${FoodAllergy}` },
                    { attrib: `ประวัติการทำงาน: ${WorkHistory}` },
                    { attrib: `บทบาท: ${ExplainRole}` },
                    { attrib: `ผลงาน: ${Achievements}` },
                    { attrib: `ประสบการณ์กับบริษัท: ${ExperienceWithCor}` },
                    { attrib: `คำถาม 1: ${Q1}` },
                    { attrib: `คำถาม 2: ${Q2}` },
                    { attrib: `คำถาม 3: ${Q3}` },
                    { attrib: `คำถาม 4: ${Q4}` },
                    { attrib: `คำถาม 5: ${Q5}` },
                    { attrib: `สนใจ: ${Interested}` },
                    { attrib: `ยอมรับข้อกฎหมาย PDPA: ${Accept}` },
                    { attrib: `ยอมรับPDPA ข้อมูล: ${AcceptCheckData}` },
                    { attrib: `ยอมรับPDPA รูป: ${AcceptTakePic}` },
                    { attrib: `จังหวัด: ${Province}` },
                    { attrib: `อำเภอ: ${District}` },
                    { attrib: `ตำบล: ${SubDistrict}` },
                    { attrib: `รหัสไปรษณีย์: ${PostNo}` },
                    { attrib: `คำนำหน้าชื่อ: ${NameTitle}` },
                    { attrib: `สถานภาพการสมรส: ${Marital}` },
                    { attrib: `งาน: ${Job}` },
                    { attrib: `การฝึกก่อน 5 วัน: ${Train_bf_5days}` },
                    { attrib: `เวลา: ${TimeStamp}` },
                    { attrib: `รูปภาพผู้ใช้: ${ImgUser}` },
                    { attrib: `คำแนะนำ: ${Recommendation}` },
                  ]}
                />
              )
            )}
        </List>
        <Paper
          sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
          elevation={3}
        >
          <BottomNav />
        </Paper>
      </Box>
    );
};