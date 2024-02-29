import * as React from 'react';
import { styled } from '@mui/material/styles';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme, open }) => ({
  borderLeft: open ? '3px solid #E1683B' : '2px solid #3E4F3C',
  // color: open ? '#3E4F3C' : 'rgba(0, 0, 0, .2)',

  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&::before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props, open) => (
  < MuiAccordionSummary
    {...props}
  />

))(({ theme, open }) => ({
  color: open ? '#3E4F3C' : 'rgba(0, 0, 0, .2)',
  backgroundColor: '#F3ECDA',
  fontWeight: 500,
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(0),
  backgroundColor: '#F3ECDA'
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
    console.log(newExpanded, "newwwwwww", panel);
  };

  return (
    <div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} open={expanded === 'panel1'}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography sx={{ fontSize: "32px", fontWeight: 500 }}>1. Narrative Fusion</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{
            color: "#494949",
            fontSize: "16px",
            padding: "5px 0 20px 45px",
            maxWidth: "370px"
          }}>
            Turn your cherished memories into beautifully written chapters with a single click – no writing experience
            needed, especially perfect for seniors.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} open={expanded === 'panel2'}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography sx={{ fontSize: "32px", fontWeight: 500 }}>2. Assisted Editing</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{
            color: "#494949",
            fontSize: "16px",
            padding: "5px 0 20px 35px",
            maxWidth: "370px"
          }}>
            Turn your cherished memories into beautifully written chapters with a single click – no writing experience
            needed, especially perfect for seniors.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} open={expanded === 'panel3'}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography sx={{ fontSize: "32px", fontWeight: 500 }}>3. Voice-to-Text</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{
            color: "#494949",
            fontSize: "16px",
            padding: "5px 0 20px 35px",
            maxWidth: "370px"
          }}>
            Turn your cherished memories into beautifully written chapters with a single click – no writing experience
            needed, especially perfect for seniors.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')} open={expanded === 'panel4'}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography sx={{ fontSize: "32px", fontWeight: 500 }}>4. Family Tree</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{
            color: "#494949",
            fontSize: "16px",
            padding: "5px 0 20px 35px",
            maxWidth: "370px"
          }}>
            Turn your cherished memories into beautifully written chapters with a single click – no writing experience
            needed, especially perfect for seniors.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')} open={expanded === 'panel5'}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography sx={{ fontSize: "32px", fontWeight: 500 }}>5. Formatting Feature</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{
            color: "#494949",
            fontSize: "16px",
            padding: "5px 0 20px 35px",
            maxWidth: "370px"
          }}>
            Turn your cherished memories into beautifully written chapters with a single click – no writing experience
            needed, especially perfect for seniors.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')} open={expanded === 'panel6'}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography sx={{ fontSize: "32px", fontWeight: 500 }}>6. Auto Photo Improvement</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{
            color: "#494949",
            fontSize: "16px",
            padding: "5px 0 20px 35px",
            maxWidth: "370px"
          }}>
            Turn your cherished memories into beautifully written chapters with a single click – no writing experience
            needed, especially perfect for seniors.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}