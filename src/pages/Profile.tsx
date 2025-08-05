import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  Button,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Tabs,
  Tab,
  Paper,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
  Chip,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import {
  Person as PersonIcon,
  Edit as EditIcon,
  Save as SaveIcon,
  Cancel as CancelIcon,
  MedicalServices as MedicalIcon,
  History as HistoryIcon,
  Settings as SettingsIcon,
  Email as EmailIcon,
  Phone as PhoneIcon,
  LocationOn as LocationIcon,
  CalendarToday as CalendarIcon,
  Bloodtype as BloodIcon,
  Height as HeightIcon,
  MonitorWeight as WeightIcon,
} from '@mui/icons-material';

const Profile = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [tabValue, setTabValue] = useState(0);
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@email.com',
    phone: '+1 (555) 123-4567',
    dateOfBirth: '1990-05-15',
    gender: 'Male',
    bloodType: 'O+',
    height: '175',
    weight: '70',
    address: '123 Main Street, New York, NY 10001',
    emergencyContact: {
      name: 'Jane Doe',
      relationship: 'Spouse',
      phone: '+1 (555) 987-6543',
    },
  });

  const [tempData, setTempData] = useState(profileData);

  const medicalHistory = [
    {
      date: '2024-01-10',
      type: 'Annual Checkup',
      doctor: 'Dr. Emily Rodriguez',
      diagnosis: 'Healthy',
      medications: ['None'],
    },
    {
      date: '2023-12-15',
      type: 'Flu Shot',
      doctor: 'Dr. Sarah Johnson',
      diagnosis: 'Preventive',
      medications: ['Flu Vaccine'],
    },
    {
      date: '2023-11-20',
      type: 'Dental Cleaning',
      doctor: 'Dr. Michael Chen',
      diagnosis: 'Good oral health',
      medications: ['None'],
    },
  ];

  const allergies = [
    'Penicillin',
    'Peanuts',
    'Dairy (mild)',
  ];

  const currentMedications = [
    'Vitamin D3 - 1000 IU daily',
    'Omega-3 - 1000mg daily',
  ];

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const handleEdit = () => {
    setTempData(profileData);
    setIsEditing(true);
  };

  const handleSave = () => {
    setProfileData(tempData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setTempData(profileData);
    setIsEditing(false);
  };

  const handleInputChange = (field: string, value: string) => {
    setTempData({ ...tempData, [field]: value });
  };

  const PersonalInfo = () => (
    <Card>
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Typography variant="h5" component="h2" sx={{ fontWeight: 600 }}>
            Personal Information
          </Typography>
          {!isEditing ? (
            <Button
              variant="outlined"
              startIcon={<EditIcon />}
              onClick={handleEdit}
              sx={{ textTransform: 'none' }}
            >
              Edit
            </Button>
          ) : (
            <Box sx={{ display: 'flex', gap: 1 }}>
              <Button
                variant="contained"
                startIcon={<SaveIcon />}
                onClick={handleSave}
                sx={{ textTransform: 'none' }}
              >
                Save
              </Button>
              <Button
                variant="outlined"
                startIcon={<CancelIcon />}
                onClick={handleCancel}
                sx={{ textTransform: 'none' }}
              >
                Cancel
              </Button>
            </Box>
          )}
        </Box>

        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="First Name"
              value={isEditing ? tempData.firstName : profileData.firstName}
              onChange={(e) => handleInputChange('firstName', e.target.value)}
              disabled={!isEditing}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Last Name"
              value={isEditing ? tempData.lastName : profileData.lastName}
              onChange={(e) => handleInputChange('lastName', e.target.value)}
              disabled={!isEditing}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Email"
              type="email"
              value={isEditing ? tempData.email : profileData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              disabled={!isEditing}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Phone"
              value={isEditing ? tempData.phone : profileData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              disabled={!isEditing}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Date of Birth"
              type="date"
              value={isEditing ? tempData.dateOfBirth : profileData.dateOfBirth}
              onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
              disabled={!isEditing}
              InputLabelProps={{ shrink: true }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
              <InputLabel>Gender</InputLabel>
              <Select
                value={isEditing ? tempData.gender : profileData.gender}
                label="Gender"
                onChange={(e) => handleInputChange('gender', e.target.value)}
                disabled={!isEditing}
              >
                <MenuItem value="Male">Male</MenuItem>
                <MenuItem value="Female">Female</MenuItem>
                <MenuItem value="Other">Other</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Address"
              multiline
              rows={2}
              value={isEditing ? tempData.address : profileData.address}
              onChange={(e) => handleInputChange('address', e.target.value)}
              disabled={!isEditing}
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );

  const MedicalInfo = () => (
    <Card>
      <CardContent>
        <Typography variant="h5" component="h2" sx={{ mb: 3, fontWeight: 600 }}>
          Medical Information
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <FormControl fullWidth>
              <InputLabel>Blood Type</InputLabel>
              <Select
                value={isEditing ? tempData.bloodType : profileData.bloodType}
                label="Blood Type"
                onChange={(e) => handleInputChange('bloodType', e.target.value)}
                disabled={!isEditing}
              >
                <MenuItem value="A+">A+</MenuItem>
                <MenuItem value="A-">A-</MenuItem>
                <MenuItem value="B+">B+</MenuItem>
                <MenuItem value="B-">B-</MenuItem>
                <MenuItem value="AB+">AB+</MenuItem>
                <MenuItem value="AB-">AB-</MenuItem>
                <MenuItem value="O+">O+</MenuItem>
                <MenuItem value="O-">O-</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              fullWidth
              label="Height (cm)"
              type="number"
              value={isEditing ? tempData.height : profileData.height}
              onChange={(e) => handleInputChange('height', e.target.value)}
              disabled={!isEditing}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              fullWidth
              label="Weight (kg)"
              type="number"
              value={isEditing ? tempData.weight : profileData.weight}
              onChange={(e) => handleInputChange('weight', e.target.value)}
              disabled={!isEditing}
            />
          </Grid>
        </Grid>

        <Box sx={{ mt: 4 }}>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
            Allergies
          </Typography>
          <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
            {allergies.map((allergy, index) => (
              <Chip
                key={index}
                label={allergy}
                color="warning"
                variant="outlined"
                size="small"
              />
            ))}
          </Box>
        </Box>

        <Box sx={{ mt: 4 }}>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
            Current Medications
          </Typography>
          <List dense>
            {currentMedications.map((medication, index) => (
              <ListItem key={index}>
                <ListItemIcon>
                  <MedicalIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary={medication} />
              </ListItem>
            ))}
          </List>
        </Box>
      </CardContent>
    </Card>
  );

  const MedicalHistory = () => (
    <Card>
      <CardContent>
        <Typography variant="h5" component="h2" sx={{ mb: 3, fontWeight: 600 }}>
          Medical History
        </Typography>
        <List>
          {medicalHistory.map((visit, index) => (
            <React.Fragment key={index}>
              <ListItem alignItems="flex-start">
                <ListItemIcon>
                  <HistoryIcon color="primary" />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Typography variant="h6" component="span">
                        {visit.type}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {new Date(visit.date).toLocaleDateString()}
                      </Typography>
                    </Box>
                  }
                  secondary={
                    <Box sx={{ mt: 1 }}>
                      <Typography variant="body2" color="text.secondary">
                        <strong>Doctor:</strong> {visit.doctor}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        <strong>Diagnosis:</strong> {visit.diagnosis}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        <strong>Medications:</strong> {visit.medications.join(', ')}
                      </Typography>
                    </Box>
                  }
                />
              </ListItem>
              {index < medicalHistory.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </List>
      </CardContent>
    </Card>
  );

  const EmergencyContact = () => (
    <Card>
      <CardContent>
        <Typography variant="h5" component="h2" sx={{ mb: 3, fontWeight: 600 }}>
          Emergency Contact
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Contact Name"
              value={isEditing ? tempData.emergencyContact.name : profileData.emergencyContact.name}
              onChange={(e) => setTempData({
                ...tempData,
                emergencyContact: { ...tempData.emergencyContact, name: e.target.value }
              })}
              disabled={!isEditing}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Relationship"
              value={isEditing ? tempData.emergencyContact.relationship : profileData.emergencyContact.relationship}
              onChange={(e) => setTempData({
                ...tempData,
                emergencyContact: { ...tempData.emergencyContact, relationship: e.target.value }
              })}
              disabled={!isEditing}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Phone Number"
              value={isEditing ? tempData.emergencyContact.phone : profileData.emergencyContact.phone}
              onChange={(e) => setTempData({
                ...tempData,
                emergencyContact: { ...tempData.emergencyContact, phone: e.target.value }
              })}
              disabled={!isEditing}
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Header */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h3" component="h1" sx={{ mb: 2, fontWeight: 600 }}>
          My Profile
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Manage your personal and medical information
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {/* Profile Picture and Basic Info */}
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent sx={{ textAlign: 'center' }}>
              <Avatar
                sx={{
                  width: 120,
                  height: 120,
                  mx: 'auto',
                  mb: 2,
                  fontSize: '3rem',
                }}
              >
                {profileData.firstName[0]}{profileData.lastName[0]}
              </Avatar>
              <Typography variant="h5" component="h2" sx={{ mb: 1, fontWeight: 600 }}>
                {profileData.firstName} {profileData.lastName}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                Patient ID: #12345
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <EmailIcon sx={{ fontSize: 16, color: 'text.secondary', mr: 1 }} />
                  <Typography variant="body2">{profileData.email}</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <PhoneIcon sx={{ fontSize: 16, color: 'text.secondary', mr: 1 }} />
                  <Typography variant="body2">{profileData.phone}</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <LocationIcon sx={{ fontSize: 16, color: 'text.secondary', mr: 1 }} />
                  <Typography variant="body2" sx={{ textAlign: 'center' }}>
                    {profileData.address.split(',')[0]}
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Main Content */}
        <Grid item xs={12} md={8}>
          <Paper elevation={1} sx={{ mb: 3 }}>
            <Tabs value={tabValue} onChange={handleTabChange} centered>
              <Tab label="Personal Info" />
              <Tab label="Medical Info" />
              <Tab label="Medical History" />
              <Tab label="Emergency Contact" />
            </Tabs>
          </Paper>

          <Box>
            {tabValue === 0 && <PersonalInfo />}
            {tabValue === 1 && <MedicalInfo />}
            {tabValue === 2 && <MedicalHistory />}
            {tabValue === 3 && <EmergencyContact />}
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Profile; 