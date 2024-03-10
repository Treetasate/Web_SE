import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import FormEdit from './FormEdit';
import BottomNav from "./BottomNav";

export default function EditMembersEntry() {

  return (
    <React.Fragment>
      <CssBaseline />
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNav />
      </Paper>

      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center">
            แก้ไขข้อมูล
          </Typography>
          {/* หน้าต่างลอยได้ */}
            <React.Fragment>
              <FormEdit />
            </React.Fragment>
        </Paper>
      </Container>
    </React.Fragment>
  );
}