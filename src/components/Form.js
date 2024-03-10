import * as React from 'react';
import { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { FormControl, InputLabel, Select, MenuItem, Button, Box } from "@mui/material";
import { useMembersContext } from "../contexts/MembersContext";

export default function CreateMembersEntry() {
  const [Email, setEmail] = useState("");
  const [LineID, setLineID] = useState("");
  const [Facebook, setFacebook] = useState("");
  const [Address, setAddress] = useState("");
  const [Disease, setDisease] = useState("");
  const [Corporation, setCorporation] = useState("");
  const [WorkHistory, setWorkHistory] = useState("");
  const [ExplainRole, setExplainRole] = useState("");
  const [Achievements, setAchievements] = useState("");
  const [AcceptTakePic, setAcceptTakePic] = useState(false);
  const [Province, setProvince] = useState("");
  const [SubDistrict, setSubDistrict] = useState(""); //SET
  const [District, setDistrict] = useState(""); //SET
  const [PostNo, setPostNo] = useState("");
  const [dob, setdob] = useState("");
  const [ID_card, setID_card] = useState("");
  const [NameFirst, setNameFirst] = useState("");
  const [NameSur, setNameSur] = useState("");
  const [Tel, setTel] = useState("");
  const [Age, setAge] = useState("");
  const [NickName, setNickName] = useState("");
  const [TrainerId, setTrainerId] = useState("");
  const [Talent, setTalent] = useState("");
  const [FoodAllergy, setFoodAllergy] = useState("");
  const [AcceptCheckData, setAcceptCheckData] = useState(false);
  const [NameTitle, setNameTitle] = useState("");
  const [Marital, setMarital] = useState("");
  const [Job, setJob] = useState("");
  const [ExperienceWithCor, setExperienceWithCor] = useState("");
  const [Q1, setQ1] = useState("");
  const [Q2, setQ2] = useState("");
  const [Q3, setQ3] = useState("");
  const [Q4, setQ4] = useState("");
  const [Q5, setQ5] = useState("");
  const [Interested, setInterested] = useState("");
  const [Accept, setAccept] = useState(false);
  const [Train_bf_5days, setTrain_bf_5days] = useState("");
  const [TimeStamp, setTimeStamp] = useState("");
  const [ImgUser, setImgUser] = useState("");
  const [Recommendation, setRecommendation] = useState("");

  const AcceptTakePicbox = (event) => {
    setAcceptTakePic(event.target.checked);
  };

  const AcceptCheckDatabox = (event) => {
    setAcceptCheckData(event.target.checked);
  };

  const Acceptbox = (event) => {
    setAccept(event.target.checked);
  };

  const { createNewMembers } = useMembersContext();

  const [step, setStep] = useState(1);

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handleBackStep = () => {
    setStep(step - 1);
  };

  useEffect(() => {
    // เมื่อคอมโพเนนต์โหลดครั้งแรก กำหนดค่าเวลาปัจจุบัน
    const currentDate = new Date();
    const currentTime = currentDate.toLocaleTimeString(); // ดึงเวลาปัจจุบันโดยไม่รวมวันที่
    setTimeStamp(currentTime);
  }, []);

  const handlecreateNewMembers = () => {
    const data = JSON.stringify({
      data: {
      dob: dob,
      ID_card: ID_card,
      Email: Email,
      NameFirst: NameFirst,
      NameSur: NameSur,
      LineID: LineID,
      Facebook: Facebook,
      Address: Address,
      Tel: Tel,
      Age: Age,
      NickName: NickName,
      TrainerId: TrainerId,
      Disease: Disease,
      Talent: Talent,
      Corporation: Corporation,
      FoodAllergy: FoodAllergy,
      WorkHistory: WorkHistory,
      ExplainRole: ExplainRole,
      Achievements: Achievements,
      ExperienceWithCor: ExperienceWithCor,
      Q1: Q1,
      Q2: Q2,
      Q3: Q3,
      Q4: Q4,
      Q5: Q5,
      Interested: Interested,
      Accept: Accept,
      AcceptCheckData: AcceptCheckData,
      AcceptTakePic: AcceptTakePic,
      Province: Province,
      SubDistrict: SubDistrict,
      District: District,
      PostNo: PostNo,
      NameTitle: NameTitle,
      Marital: Marital,
      Job: Job,
      Train_bf_5days: Train_bf_5days,
      TimeStamp: TimeStamp,
      ImgUser: ImgUser,
      Recommendation: Recommendation,
      },
    });
    createNewMembers(data);
  };

  const [provinces, setProvinces] = useState([]);
  const [amphures, setAmphures] = useState([]);
  const [tambons, setTambons] = useState([]);
  const [selected, setSelected] = useState({
    province_id: undefined,
    amphure_id: undefined,
    tambon_id: undefined,
  });


  useEffect(() => {
    (() => {
      fetch(
        "https://raw.githubusercontent.com/kongvut/thai-province-data/master/api_province_with_amphure_tambon.json"
      )
        .then((response) => response.json())
        .then((result) => {
          setProvinces(result);
        });
    })();
  }, []);

  const DropdownList = ({
    label,
    id,
    list,
    child,
    childsId = [],
    setChilds = [],
  }) => {
    const onChangeHandle = (event) => {
      setChilds.forEach((setChild) => setChild([]));
      const entries = childsId.map((child) => [child, undefined]);
      const unSelectChilds = Object.fromEntries(entries);
    
      const input = event.target.value;
      const dependId = input ? Number(input) : undefined;
      setSelected((prev) => ({ ...prev, ...unSelectChilds, [id]: dependId }));
    
      if (!input) return;
    
      let parent;
      if (child) {
        parent = list.find((item) => item.id === dependId);
        const { [child]: childs } = parent;
        const [setChild] = setChilds;
        setChild(childs);
      }
    
      // ส่งค่า name_th ไปยัง setProvince, setDistrict, และ setSubDistrict ตามเงื่อนไข
      if (id === 'province_id') {
        setProvince(parent ? parent.name_th : '');
      } 
      if (id === 'amphure_id') {
        setDistrict(parent ? parent.name_th : '');
      }  
      if (id === 'tambon_id') {
        parent = list.find((item) => item.id === dependId);
        setSubDistrict(parent ? parent.name_th : '');
        setPostNo(parent ? parent.zip_code : '');
      } 
    };
    

    return (
      <FormControl variant="standard" fullWidth>
        <InputLabel id={`${id}-label`}>{label}</InputLabel>
        <Select
          labelId={`${id}-label`}
          id={id}
          value={selected[id]}
          onChange={onChangeHandle}
        >
          <MenuItem value="">
            <em>Select ...</em>
          </MenuItem>
          {list &&
            list.map((item) => (
              <MenuItem key={item.id} value={item.id}>
                {`${item.name_th}`}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    );
  };

  return (
    <React.Fragment>
  {step === 1 && (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={3}>
        <TextField
                required
                id="filled-name-title"
                label="คำนำหน้าชื่อ"
                fullWidth
                variant="standard"
                onChange={(e) => setNameTitle(e.target.value)}
              />
        </Grid>
        <Grid item xs={12} sm={3}>
        <TextField
                required
                id="filled-name-first"
                label="ชื่อ"
                fullWidth
                variant="standard"
                onChange={(e) => setNameFirst(e.target.value)}
              />
        </Grid>
        <Grid item xs={12} sm={3}>
        <TextField
                required
                id="filled-name-sur"
                label="นามสกุล"
                fullWidth
                variant="standard"
                onChange={(e) => setNameSur(e.target.value)}
              />
        </Grid>

        <Grid item xs={12} sm={3}>
        <TextField
                required
                id="filled-nick-name"
                label="ชื่อเล่น"
                fullWidth
                variant="standard"
                onChange={(e) => setNickName(e.target.value)}
              />
        </Grid>
        <Grid item xs={12} sm={6}>
        <TextField
                required
                id="filled-tel"
                label="โทรศัพท์"
                type="number"
                fullWidth
                variant="standard"
                onChange={(e) => setTel(e.target.value)}
              />
        </Grid>
        <Grid item xs={12} sm={6}>
        <TextField
                required
                id="filled-age"
                label="อายุ"
                type="number"
                fullWidth
                variant="standard"
                onChange={(e) => setAge(e.target.value)}
              />
        </Grid>

        <Grid item xs={12}>
          <TextField
                required
                id="filled-dob"
                label="วันเกิด"
                type="date"
                fullWidth
                variant="standard"
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={{
                  style: { fontSize: 16 },
                }}
                onChange={(e) => setdob(e.target.value)}
              />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
                required
                id="filled-job"
                label="งาน"
                fullWidth
                variant="standard"
                onChange={(e) => setJob(e.target.value)}
              />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
                required
                id="filled-talent"
                label="ความสามารถ"
                fullWidth
                variant="standard"
                onChange={(e) => setTalent(e.target.value)}
              />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
                required
                id="filled-food-allergy"
                label="อาหารที่แพ้"
                fullWidth
                variant="standard"
                onChange={(e) => setFoodAllergy(e.target.value)}
              />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
                required
                id="filled-marital"
                label="สถานภาพการสมรส"
                fullWidth
                variant="standard"
                onChange={(e) => setMarital(e.target.value)}
              />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
                required
                id="filled-id-card"
                label="เลขบัตรประชาชน"
                fullWidth
                variant="standard"
                type="number"
                onChange={(e) => setID_card(e.target.value)}
              />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
                  required
                  id="filled-trainer-id"
                  label="รหัสผู้ฝึก"
                  fullWidth
                  variant="standard"
                  onChange={(e) => setTrainerId(e.target.value)}
                />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
                control={
                  <Checkbox
                    required
                    checked={AcceptCheckData}
                    onChange={AcceptCheckDatabox}
                    id="filled-accept-check-data"
                  />
                }
                label="ยืนยันการบันทึกลงทะเบียนข้อมูลส่วนบุคคล (ตามกฎหมาย PDPA)"
              />
        </Grid>
    </Grid>
  )}
  {step === 2 && (
    <Grid container spacing={3}>
     <Grid item xs={12} sm={6}>
        <TextField
                required
                id="filled-line-id"
                label="Line ID"
                fullWidth
                variant="standard"
                onChange={(e) => setLineID(e.target.value)}
              />
        </Grid>
        <Grid item xs={12} sm={6}>
        <TextField
                required
                id="filled-facebook"
                label="Facebook"
                fullWidth
                variant="standard"
                onChange={(e) => setFacebook(e.target.value)}
              />
        </Grid>
        <Grid item xs={12} sm={12}>
        <TextField
                required
                id="filled-email"
                label="อีเมล"
                fullWidth
                variant="standard"
                onChange={(e) => setEmail(e.target.value)}
              />
        </Grid>

        <Grid item xs={12} sm={4}>
        <DropdownList
                label="จังหวัด"
                id="province_id"
                list={provinces}
                child="amphure"
                childsId={["amphure_id", "tambon_id"]}
                setChilds={[setAmphures, setTambons]}
                fullWidth
                variant="standard"
              />
        </Grid>
        <Grid item xs={12} sm={4}>
        <DropdownList
                label="อำเภอ"
                id="amphure_id"
                list={amphures}
                child="tambon"
                childsId={["tambon_id"]}
                setChilds={[setTambons]}
                fullWidth
                variant="standard"
              />
        </Grid>
        <Grid item xs={12} sm={4}>
        <DropdownList
                label="ตำบล"
                id="tambon_id"
                list={tambons}
                fullWidth
                variant="standard"
              />
        </Grid>

        <Grid item xs={12}>
          <TextField
                required
                id="filled-address"
                label="ที่อยู่"
                fullWidth
                variant="standard"
                onChange={(e) => setAddress(e.target.value)}
              />
        </Grid>
        <Grid item xs={12} sm={6}>
        <TextField
                required
                id="zip_code"
                label="รหัสไปรษณีย์"
                fullWidth
                variant="standard"
                value = {PostNo}
              />
        </Grid>
        <Grid item xs={12} sm={6}>
        <TextField
                required
                id="filled-Corporation"
                label="บริษัท"
                fullWidth
                variant="standard"
                onChange={(e) => setCorporation(e.target.value)}
              />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
                required
                id="filled-explain-role"
                label="บทบาท"
                fullWidth
                variant="standard"
                onChange={(e) => setExplainRole(e.target.value)}
              />
        </Grid>
        <Grid item xs={12} sm={6}>
        <TextField
                required
                id="filled-achievements"
                label="ผลงาน"
                fullWidth
                variant="standard"
                onChange={(e) => setAchievements(e.target.value)}
              />
        </Grid>
        <Grid item xs={12} sm={6}>
        <TextField
                required
                id="filled-Disease"
                label="โรค"
                fullWidth
                variant="standard"
                onChange={(e) => setDisease(e.target.value)}
              />
        </Grid>
        <Grid item xs={12} sm={6}>
        <TextField
                required
                id="filled-work-history"
                label="ประวัติการทำงาน"
                fullWidth
                variant="standard"
                onChange={(e) => setWorkHistory(e.target.value)}
              />
        </Grid>
        <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                  required
                    checked={AcceptTakePic}
                    onChange={AcceptTakePicbox}
                    id="filled-accept-take-pic"
                  />
                }
                label="ยืนยันการบันทึกภาพนิ่ง เเละ ภาพเคลื่อนไหว (ตามกฎหมาย PDPA)"
              />
        </Grid>
    </Grid>
  )}
  {step === 3 && (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={12}>
        <TextField
                required
                id="filled-experience-with-cor"
                label="ประสบการณ์กับบริษัท"
                fullWidth
                variant="standard"
                onChange={(e) => setExperienceWithCor(e.target.value)}
              />
        </Grid>
        <Grid item xs={12} sm={6}>
        <TextField
                required
                id="filled-train-bf5-days"
                label="การฝึกก่อน 5 วัน"
                fullWidth
                variant="standard"
                onChange={(e) => setTrain_bf_5days(e.target.value)}
              />
        </Grid>
        <Grid item xs={12} sm={6}>
        <TextField
                required
                id="filled-interested"
                label="สนใจ"
                fullWidth
                variant="standard"
                onChange={(e) => setInterested(e.target.value)}
              />
        </Grid>

        <Grid item xs={12} sm={4}>
        <TextField
                required
                id="filled-q1"
                label="คำถาม 1"
                fullWidth
                variant="standard"
                onChange={(e) => setQ1(e.target.value)}
              />
        </Grid>
        <Grid item xs={12} sm={4}>
        <TextField
                required
                id="filled-q2"
                label="คำถาม 2"
                fullWidth
                variant="standard"
                onChange={(e) => setQ2(e.target.value)}
              />
        </Grid>
        <Grid item xs={12} sm={4}>
        <TextField
                required
                id="filled-q3"
                label="คำถาม 3"
                fullWidth
                variant="standard"
                onChange={(e) => setQ3(e.target.value)}
              />
        </Grid>

        <Grid item xs={6}>
        <TextField
                required
                id="filled-q4"
                label="คำถาม 4"
                fullWidth
                variant="standard"
                onChange={(e) => setQ4(e.target.value)}
              />
        </Grid>
        <Grid item xs={12} sm={6}>
        <TextField
                required
                id="filled-q5"
                label="คำถาม 5"
                fullWidth
                variant="standard"
                onChange={(e) => setQ5(e.target.value)}
              />
        </Grid>
        <Grid item xs={12} sm={12}>
        <TextField
                required
                id="filled-ImgUser"
                label="รูปภาพผู้ใช้"
                fullWidth
                variant="standard"
                onChange={(e) => setImgUser(e.target.value)}
              />
        </Grid>
        <Grid item xs={12} sm={12}>
        <TextField
                required
                id="filled-Recommendation"
                label="คำแนะนำ"
                fullWidth
                variant="standard"
                onChange={(e) => setRecommendation(e.target.value)}
              />
        </Grid>
        <TextField
              required
              id="filled-TimeStamp"
              label="Time"
              fullWidth
              variant="standard"
              value={TimeStamp}
              onChange={(e) => setTimeStamp(e.target.value)}
              style={{ display: "none" }} // ซ่อนช่องนี้
            />
        <Grid item xs={12}>
        <FormControlLabel
                control={
                  <Checkbox
                    required
                    checked={Accept}
                    onChange={Acceptbox}
                    id="filled-accept"
                  />
                }
                label="ข้าพเจ้าขอยืนยันสมัครเข้าร่วมอบรม การพัฒนาศักยภาพผู้นำ คกช.
                รุ่นที่ 1 หลักสูตร การขับเคลื่อนสังคม ด้วยศาสตร์พระราชา (Social
                Movement : SM 101- 103)
                โดยจะเข้าร่วมกิจกรรมหลักทุกครั้งตามที่กำหนดไว้อย่างต่อเนื่อง
                และยินดีที่จะแบ่งปันประสบการณ์แลกเปลี่ยนความรู้แก่เพื่อนร่วมรุ่นอย่างเต็มศักยภาพ
                ด้วยมิตรภาพบนเส้นทางอุดมการณ์"
              />
        </Grid>
      </Grid>
  )}
  <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
  {step !== 1 && (
    <Button
      variant="contained"
      onClick={handleBackStep}
      sx={{ mt: 3, ml: 1 }}
    >
      ย้อนกลับ
    </Button>
  )}
  {step < 3 && (
    <Button
      variant="contained"
      onClick={handleNextStep}
      sx={{ mt: 3, ml: 1 }}
    >
      ต่อไป
    </Button>
  )}
  {step === 3 && (
    <Button
      variant="contained"
      onClick={handlecreateNewMembers}
      sx={{ mt: 3, ml: 1 }}
    >
      บันทึก
    </Button>
  )}
</Box>

</React.Fragment>
  );
}
