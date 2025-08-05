# DoctorConnect - Healthcare Appointment Platform

A modern, responsive web application for connecting patients with healthcare professionals. Built with React, TypeScript, and Material-UI.

## 🏥 Features

### For Patients
- **Doctor Search & Discovery**: Find and filter doctors by specialty, location, and availability
- **Appointment Booking**: Schedule in-person or video consultations
- **Profile Management**: Store personal and medical information securely
- **Appointment History**: View past and upcoming appointments
- **Real-time Availability**: See doctor availability and book instantly

### For Healthcare Providers
- **Professional Profiles**: Detailed doctor profiles with ratings and reviews
- **Availability Management**: Set and manage appointment slots
- **Patient Records**: Access patient medical history and information
- **Video Consultations**: Integrated video calling for remote appointments

## 🚀 Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd doctorconnect
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

## 📱 Pages & Features

### Home Page (`/`)
- Hero section with call-to-action
- Feature highlights
- Statistics and testimonials
- Modern gradient design

### Doctors Page (`/doctors`)
- Search and filter functionality
- Doctor cards with ratings and reviews
- Availability indicators
- Booking buttons

### Appointments Page (`/appointments`)
- Upcoming and past appointments
- Appointment booking modal
- Status tracking
- Video call integration

### Profile Page (`/profile`)
- Personal information management
- Medical history tracking
- Emergency contact details
- Editable forms with validation

### Login Page (`/login`)
- User authentication
- Social login options
- Registration form
- Password recovery

## 🛠️ Technology Stack

- **Frontend Framework**: React 18 with TypeScript
- **UI Library**: Material-UI (MUI) v5
- **Routing**: React Router v6
- **Styling**: Emotion (CSS-in-JS)
- **Icons**: Material-UI Icons
- **Development**: Create React App

## 🎨 Design System

### Color Palette
- **Primary**: Medical Blue (#2196f3)
- **Secondary**: Health Green (#4caf50)
- **Background**: Light Gray (#f5f5f5)
- **Text**: Dark Gray (#333333)

### Typography
- **Font Family**: Roboto
- **Headings**: Bold weights (600-700)
- **Body Text**: Regular weight (400)

### Components
- Responsive design for all screen sizes
- Hover effects and smooth transitions
- Accessibility features
- Modern card-based layouts

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   └── Navbar.tsx      # Navigation component
├── pages/              # Page components
│   ├── Home.tsx        # Landing page
│   ├── Doctors.tsx     # Doctor listing
│   ├── Appointments.tsx # Appointment management
│   ├── Profile.tsx     # User profile
│   └── Login.tsx       # Authentication
├── App.tsx             # Main app component
├── index.tsx           # Entry point
└── index.css           # Global styles
```

## 🔧 Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App

## 🌐 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Netlify
1. Connect your repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `build`

### Deploy to Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`

## 🔒 Security Features

- Form validation and sanitization
- Secure password handling
- Protected routes
- Input validation
- XSS prevention

## 📱 Responsive Design

The application is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🚀 Future Enhancements

- [ ] Real-time chat functionality
- [ ] Payment integration
- [ ] Prescription management
- [ ] Lab results integration
- [ ] Multi-language support
- [ ] Push notifications
- [ ] Telemedicine features
- [ ] AI-powered symptom checker

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support and questions:
- Create an issue in the repository
- Contact the development team
- Check the documentation

## 🙏 Acknowledgments

- Material-UI for the excellent component library
- Unsplash for the placeholder images
- React community for the amazing ecosystem

---

**Built with ❤️ for better healthcare access**
