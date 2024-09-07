import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import Typography from '@mui/material/Typography';
import DateTimePicker from 'react-datetime-picker';
import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';
import FormLabel from '@mui/material/FormLabel';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import BTC from '../assets/bitcoin.png';
import Shiba from '../assets/shiba.png'


const devPlans = ['Original Meme', 'Marketing', 'Dex Screener Marketing', 'Dex Screener Ads', 'Multiple Exchanges', 'Supply Burn', 'Developer will not sale'];


const CryptoForm = () => {
  const token = localStorage.getItem('walletAddress');
  const [formData, setFormData] = useState({
    coinName: '',
    solanaType: '',
    ticker: '',
    description: '',
    developerPlans: [],
    coinImage: null,
    acceptTerms: false,
    launchDate: new Date(),
    twitterLink: '',
    telegramLink: '',
    websiteLink: '',
    like_count: 0,
    token: token,
  });
  const [message, setMessage] = useState(''); // State for success message
  const navigate = useNavigate(); // useNavigate hook for navigation

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!formData.coinName) newErrors.coinName = 'Coin Name is required';
    if (!formData.solanaType) newErrors.solanaType = 'Solana Type is required';
    if (!formData.ticker) newErrors.ticker = 'Ticker is required';
    if (!formData.description) newErrors.description = 'Description is required';
    if (formData.developerPlans.length === 0) newErrors.developerPlans = 'Please select at least one Developer Plan';
    if (!formData.coinImage) newErrors.coinImage = 'Coin Image is required';
    if (!formData.launchDate) newErrors.launchDate = 'Launch Date is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();



    if (validate()) {

      const formDataToSubmit = {
        ...formData,
        coinImage: formData.coinImage ? await convertImageToBase64(formData.coinImage) : null,
        launchDate: formData.launchDate.toISOString(),
      };


      try {
        console.log(formDataToSubmit);
        const response = await axios.post('https://prelaunchcoins.com/backend/wp-json/coin-api/v1/submit', formDataToSubmit);

        setMessage('Form submitted successfully! Redirecting to home page...');


        setTimeout(() => {
          navigate('/');
        }, 2000);
      } catch (error) {
        console.error('Error submitting form:', error);
      }
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === 'checkbox' && name === 'developerPlan') {
      const developerPlans = formData.developerPlans.includes(value)
        ? formData.developerPlans.filter(option => option !== value)
        : [...formData.developerPlans, value];

      setFormData({ ...formData, developerPlans });
    } else {
      setFormData({
        ...formData,
        [name]: type === 'checkbox' ? checked : (type === 'file' ? files[0] : value),
      });
    }




  };
  const handleDateTimeChange = (date) => {
    setFormData({ ...formData, launchDate: date });
  };

  const convertImageToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result.split(',')[1]); // Get the base64 part
      reader.onerror = (error) => reject(error);
    });
  };

  return (
    <Container maxWidth="xs" sx={{ backgroundColor: '#87878720', padding: '20px' }}>
      <Box
        component="form"
        onSubmit={handleSubmit}
        noValidate
        autoComplete="off"
      >
        <Grid className='formOuter'>
          <Grid item xs={12} sx={{ textAlign: 'left' }}>
            <FormControl >
              <FormLabel id="demo-radio-buttons-group-label">Solana</FormLabel>
              <div className="radio-image-selector">

                <label className={`radio-image-label ${formData.solanaType === "pumpfun" ? 'selected' : ''}`}>
                  <input
                    type="radio"
                    name="solanaType"
                    value="pumpfun"
                    checked={formData.solanaType === "pumpfun"}
                    onChange={handleChange}
                  />
                  <img src={BTC} alt="pumpfun" />
                  <div>Pumpfun</div>
                </label>
                <label className={`radio-image-label ${formData.solanaType === "moonshot" ? 'selected' : ''}`}>
                  <input
                    type="radio"
                    name="solanaType"
                    value="moonshot"
                    checked={formData.solanaType === "moonshot"}
                    onChange={handleChange}
                  />
                  <img src={Shiba} alt="moonshot" />
                  <div>Moonshot</div>
                </label>

              </div>
              {errors.solanaType && <span className="error">{errors.solanaType}</span>}
            </FormControl>
          </Grid>
          <Grid item xs={12} >
            <FormControl sx={{ width: '100%', backgroundColor: '#29293a', borderRadius: '2px', marginBottom: '15px' }}>
              <TextField id="outlined-name" label="Name*" onChange={handleChange} name="coinName" variant="outlined" sx={{ color: '#fff' }} />
            </FormControl>
            {errors.coinName && <span className="error">{errors.coinName}</span>}
          </Grid>
          <Grid item xs={12} >
            <FormControl sx={{ width: '100%', backgroundColor: '#29293a', borderRadius: '2px', marginBottom: '15px' }}>
              <TextField id="outlined-ticker" label="Ticker*" onChange={handleChange} name="ticker" variant="outlined" sx={{ color: '#fff' }} />
              {errors.ticker && <span className="error">{errors.ticker}</span>}
            </FormControl>
          </Grid>
          <Grid item xs={12} >
            <FormControl sx={{ width: '100%', backgroundColor: '#29293a', borderRadius: '2px', marginBottom: '15px' }}>
              <TextField id="outlined-description" label="Description*" onChange={handleChange} name="description" variant="outlined" sx={{ color: '#fff' }} multiline rows={4} />
              {errors.description && <span className="error">{errors.description}</span>}
            </FormControl>
          </Grid>
          <Grid item xs={12} >
            <FormControl sx={{ width: '100%', backgroundColor: '#29293a', borderRadius: '2px', marginBottom: '15px' }} className='checkBlock'>
              <FormLabel component="legend" sx={{ textAlign: 'left', color: '#fff', padding: '10px 0px 0px 10px' }}>Developer Plan*</FormLabel>
              <FormGroup aria-label="position" row sx={{ paddingLeft: '10px', color: '#fff' }}>
                {devPlans.map((plan, index) => (
                  <FormControlLabel key={index}
                    value={plan}
                    control={<Checkbox />}
                    name="developerPlan"
                    label={plan}
                    labelPlacement="end"
                    onChange={handleChange}
                    checked={formData.developerPlans.includes(plan)}
                  />
                ))}



                {errors.developerPlans && <span className="error">{errors.developerPlans}</span>}
              </FormGroup>

            </FormControl>
          </Grid>

          <Grid item xs={12} >
            <FormControl sx={{ width: '100%', backgroundColor: '#29293a', borderRadius: '2px', marginBottom: '15px', padding: '10px 0px 0px 0px' }} className='imageForm'>
              <FormLabel id="demo-radio-buttons-group-label" sx={{ textAlign: "left", padding: "0px 10px", }}>Image*</FormLabel>
              <Input type="file" name="coinImage" onChange={handleChange} sx={{ p: '0px 10px 10px 10px' }} />
            </FormControl>
            {errors.coinImage && <span className="error">{errors.coinImage}</span>}
          </Grid>
          <Grid item xs={12} >
            <FormControl sx={{ width: '100%', backgroundColor: '#29293a', borderRadius: '2px', marginBottom: '15px', padding: '10px 0px', }} className='calenderDate'>
              <FormLabel id="demo-radio-buttons-group-label" sx={{ textAlign: "left", padding: "0px 10px", }}>Launch Time*</FormLabel>
              <DateTimePicker name="launchDate" onChange={handleDateTimeChange} value={formData.launchDate} />
            </FormControl>
            {errors.launchDate && <span className="error">{errors.launchDate}</span>}
          </Grid>

          <Accordion id='accordionOuter'>
            <AccordionSummary
              expandIcon={<ArrowDownwardIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography>Hide more options</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Grid item xs={12} >
                <FormControl sx={{ width: '100%', backgroundColor: '#29293a', borderRadius: '2px', marginBottom: '15px' }}>
                  <TextField id="outlined-twitter" type="url" label="Twitter Link" onChange={handleChange} name="twitterLink" variant="outlined" sx={{ color: '#fff' }} />
                </FormControl>
              </Grid>
              <Grid item xs={12} >
                <FormControl sx={{ width: '100%', backgroundColor: '#29293a', borderRadius: '2px', marginBottom: '15px' }}>
                  <TextField id="outlined-telegram" type="url" label="Telegram Link" onChange={handleChange} name="telegramLink" variant="outlined" sx={{ color: '#fff' }} />
                </FormControl>
              </Grid>
              <Grid item xs={12} >
                <FormControl sx={{ width: '100%', backgroundColor: '#29293a', borderRadius: '2px', marginBottom: '15px' }}>
                  <TextField id="outlined-website" type="url" label="Website" onChange={handleChange} name="websiteLink" variant="outlined" sx={{ color: '#fff' }} />
                </FormControl>
              </Grid>
            </AccordionDetails>
          </Accordion>


          <Grid item xs={12} >
            <Typography variant="body1" gutterBottom sx={{ textAlign: 'left', color: '#fff', fontSize: '14px' }}>
              Tip: Coin data cannote be change after creation
            </Typography>
          </Grid>
          <Grid item xs={12} >
            <Button variant="contained" type="submit" sx={{ width: '100%', marginTop: '20px' }}>Create Coin</Button>
          </Grid>



        </Grid>

      </Box>


    </Container>
  )
}

export default CryptoForm