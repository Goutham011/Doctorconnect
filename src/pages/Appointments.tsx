import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Avatar,
  Chip,
  Tabs,
  Tab,
  Paper,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import {
  Schedule as ScheduleIcon,
  VideoCall as VideoCallIcon,
  LocationOn as LocationIcon,
  Person as PersonIcon,
  Add as AddIcon,
  Cancel as CancelIcon,
  CheckCircle as CheckCircleIcon,
} from '@mui/icons-material';

const Appointments = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [tabValue, setTabValue] = useState(0);
  const [openBooking, setOpenBooking] = useState(false);
  const [bookingForm, setBookingForm] = useState({
    doctor: '',
    date: '',
    time: '',
    type: 'in-person',
    reason: '',
  });

  const upcomingAppointments = [
    {
      id: 1,
      doctor: {
        name: 'Dr. Sarah Johnson',
        specialty: 'Cardiology',
        image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face',
      },
      date: '2024-01-15',
      time: '10:00 AM',
      type: 'video',
      status: 'confirmed',
      location: 'Video Call',
      reason: 'Follow-up consultation',
    },
    {
      id: 2,
      doctor: {
        name: 'Dr. Michael Chen',
        specialty: 'Dermatology',
        image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150&h=150&fit=crop&crop=face',
      },
      date: '2024-01-18',
      time: '2:30 PM',
      type: 'in-person',
      status: 'confirmed',
      location: 'Medical Center, 123 Main St',
      reason: 'Skin examination',
    },
  ];

  const pastAppointments = [
    {
      id: 3,
      doctor: {
        name: 'Dr. Emily Rodriguez',
        specialty: 'Pediatrics',
        image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=150&h=150&fit=crop&crop=face',
      },
      date: '2024-01-10',
      time: '11:00 AM',
      type: 'video',
      status: 'completed',
      location: 'Video Call',
      reason: 'Annual checkup',
    },
    {
      id: 4,
      doctor: {
        name: 'Dr. David Thompson',
        specialty: 'Neurology',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      },
      date: '2024-01-05',
      time: '3:00 PM',
      type: 'in-person',
      status: 'completed',
      location: 'Neurology Clinic, 456 Oak Ave',
      reason: 'Headache consultation',
    },
  ];

  const doctors = [
    'Dr. Sarah Johnson - Cardiology',
    'Dr. Michael Chen - Dermatology',
    'Dr. Emily Rodriguez - Pediatrics',
    'Dr. David Thompson - Neurology',
    'Dr. Lisa Wang - Orthopedics',
    'Dr. James Wilson - Psychiatry',
  ];

  const timeSlots = [
    '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM',
  ];

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const handleBookingOpen = () => {
    setOpenBooking(true);
  };

  const handleBookingClose = () => {
    setOpenBooking(false);
    setBookingForm({
      doctor: '',
      date: '',
      time: '',
      type: 'in-person',
      reason: '',
    });
  };

  const handleBookingSubmit = () => {
    // Handle booking submission
    console.log('Booking submitted:', bookingForm);
    handleBookingClose();
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed':
        return 'success';
      case 'pending':
        return 'warning';
      case 'cancelled':
        return 'error';
      case 'completed':
        return 'default';
      default:
        return 'default';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'confirmed':
        return <CheckCircleIcon />;
      case 'completed':
        return <CheckCircleIcon />;
      default:
        return <ScheduleIcon />;
    }
  };

  const AppointmentCard = ({ appointment }: { appointment: any }) => (
    <Card sx={{ mb: 2, '&:hover': { boxShadow: 4 } }}>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Avatar
            src={appointment.doctor.image}
            sx={{ width: 50, height: 50, mr: 2 }}
          />
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="h6" component="h3" sx={{ fontWeight: 600 }}>
              {appointment.doctor.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {appointment.doctor.specialty}
            </Typography>
          </Box>
          <Chip
            icon={getStatusIcon(appointment.status)}
            label={appointment.status}
            color={getStatusColor(appointment.status) as any}
            size="small"
          />
        </Box>

        <Grid container spacing={2} sx={{ mb: 2 }}>
          <Grid item xs={6}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <ScheduleIcon sx={{ fontSize: 16, color: 'text.secondary', mr: 0.5 }} />
              <Typography variant="body2">
                {new Date(appointment.date).toLocaleDateString()}
              </Typography>
            </Box>
            <Typography variant="body2" color="text.secondary">
              {appointment.time}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              {appointment.type === 'video' ? (
                <VideoCallIcon sx={{ fontSize: 16, color: 'text.secondary', mr: 0.5 }} />
              ) : (
                <LocationIcon sx={{ fontSize: 16, color: 'text.secondary', mr: 0.5 }} />
              )}
              <Typography variant="body2">
                {appointment.type === 'video' ? 'Video Call' : 'In-Person'}
              </Typography>
            </Box>
            <Typography variant="body2" color="text.secondary">
              {appointment.location}
            </Typography>
          </Grid>
        </Grid>

        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          <strong>Reason:</strong> {appointment.reason}
        </Typography>

        <Box sx={{ display: 'flex', gap: 1 }}>
          {appointment.status === 'confirmed' && (
            <>
              <Button
                variant="contained"
                size="small"
                startIcon={<VideoCallIcon />}
                sx={{ textTransform: 'none' }}
              >
                Join Call
              </Button>
              <Button
                variant="outlined"
                size="small"
                startIcon={<CancelIcon />}
                color="error"
                sx={{ textTransform: 'none' }}
              >
                Cancel
              </Button>
            </>
          )}
          {appointment.status === 'completed' && (
            <Button
              variant="outlined"
              size="small"
              sx={{ textTransform: 'none' }}
            >
              View Summary
            </Button>
          )}
        </Box>
      </CardContent>
    </Card>
  );

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Header */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Box>
          <Typography variant="h3" component="h1" sx={{ mb: 1, fontWeight: 600 }}>
            My Appointments
          </Typography>
          <Typography variant="h6" color="text.secondary">
            Manage your healthcare appointments
          </Typography>
        </Box>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={handleBookingOpen}
          sx={{ textTransform: 'none' }}
        >
          Book New Appointment
        </Button>
      </Box>

      {/* Tabs */}
      <Paper elevation={1} sx={{ mb: 4 }}>
        <Tabs value={tabValue} onChange={handleTabChange} centered>
          <Tab label={`Upcoming (${upcomingAppointments.length})`} />
          <Tab label={`Past (${pastAppointments.length})`} />
        </Tabs>
      </Paper>

      {/* Appointments List */}
      <Box>
        {tabValue === 0 && (
          <Box>
            {upcomingAppointments.length > 0 ? (
              upcomingAppointments.map((appointment) => (
                <AppointmentCard key={appointment.id} appointment={appointment} />
              ))
            ) : (
              <Box sx={{ textAlign: 'center', py: 8 }}>
                <Typography variant="h6" color="text.secondary">
                  No upcoming appointments
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                  Book your first appointment to get started
                </Typography>
                <Button
                  variant="contained"
                  onClick={handleBookingOpen}
                  sx={{ mt: 2, textTransform: 'none' }}
                >
                  Book Appointment
                </Button>
              </Box>
            )}
          </Box>
        )}

        {tabValue === 1 && (
          <Box>
            {pastAppointments.map((appointment) => (
              <AppointmentCard key={appointment.id} appointment={appointment} />
            ))}
          </Box>
        )}
      </Box>

      {/* Booking Dialog */}
      <Dialog open={openBooking} onClose={handleBookingClose} maxWidth="sm" fullWidth>
        <DialogTitle>Book New Appointment</DialogTitle>
        <DialogContent>
          <Grid container spacing={3} sx={{ mt: 1 }}>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel>Select Doctor</InputLabel>
                <Select
                  value={bookingForm.doctor}
                  label="Select Doctor"
                  onChange={(e) => setBookingForm({ ...bookingForm, doctor: e.target.value })}
                >
                  {doctors.map((doctor) => (
                    <MenuItem key={doctor} value={doctor}>
                      {doctor}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                type="date"
                label="Date"
                value={bookingForm.date}
                onChange={(e) => setBookingForm({ ...bookingForm, date: e.target.value })}
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel>Time</InputLabel>
                <Select
                  value={bookingForm.time}
                  label="Time"
                  onChange={(e) => setBookingForm({ ...bookingForm, time: e.target.value })}
                >
                  {timeSlots.map((time) => (
                    <MenuItem key={time} value={time}>
                      {time}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel>Appointment Type</InputLabel>
                <Select
                  value={bookingForm.type}
                  label="Appointment Type"
                  onChange={(e) => setBookingForm({ ...bookingForm, type: e.target.value })}
                >
                  <MenuItem value="in-person">In-Person</MenuItem>
                  <MenuItem value="video">Video Call</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                multiline
                rows={3}
                label="Reason for Visit"
                value={bookingForm.reason}
                onChange={(e) => setBookingForm({ ...bookingForm, reason: e.target.value })}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleBookingClose}>Cancel</Button>
          <Button
            variant="contained"
            onClick={handleBookingSubmit}
            disabled={!bookingForm.doctor || !bookingForm.date || !bookingForm.time}
          >
            Book Appointment
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default Appointments; 