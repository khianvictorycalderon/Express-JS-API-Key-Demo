/**
 * DISCLAIMER:
 * All user data in this file is entirely fictional and created for educational or testing purposes only.
 * Any resemblance to real persons, living or dead, is purely coincidental.
 */

const sampleUsers = [
    {
        id: 1,
        name: "John Doe",
        age: 17,
        gender: "Male",
        email: "john.doe@example.com",
        phone: "09171234567",
        address: "123 Elm Street, Lucena City, PH",
        occupation: "Electrician",
        company: "BZA Company",
        info: "A young electrician with 2 years of experience in residential wiring and maintenance."
    },
    {
        id: 2,
        name: "Maria Santos",
        age: 25,
        gender: "Female",
        email: "maria.santos@example.com",
        phone: "09221234567",
        address: "45 Mabini St., Lucena City, PH",
        occupation: "Teacher",
        company: "Lucena National High School",
        info: "Senior high school science teacher specializing in physics and environmental sciences."
    },
    {
        id: 3,
        name: "Luis Ramirez",
        age: 32,
        gender: "Male",
        email: "luis.ramirez@example.com",
        phone: "09181234567",
        address: "Blk 12 Lot 5, Quezon Ave., PH",
        occupation: "Web Developer",
        company: "KodeLogic",
        info: "Full-stack developer with 7 years of experience in React, Node.js, and Firebase."
    },
    {
        id: 4,
        name: "Angela Tan",
        age: 28,
        gender: "Female",
        email: "angela.tan@example.com",
        phone: "09181239876",
        address: "88 Orchard St., Makati City, PH",
        occupation: "Marketing Manager",
        company: "BrightWave Inc.",
        info: "Manages cross-platform digital marketing campaigns for Southeast Asia region."
    },
    {
        id: 5,
        name: "Carlos Gomez",
        age: 40,
        gender: "Male",
        email: "carlos.gomez@example.com",
        phone: "09173219876",
        address: "Zone 6, Lopez, Quezon, PH",
        occupation: "Sales Executive",
        company: "Mega Motors",
        info: "Top-performing auto sales executive for 3 consecutive years."
    },
    {
        id: 6,
        name: "Samantha Reyes",
        age: 22,
        gender: "Female",
        email: "sam.reyes@example.com",
        phone: "09209513476",
        address: "Purok 4, Tayabas, Quezon, PH",
        occupation: "Freelancer",
        company: "Self-employed",
        info: "Offers graphic design and social media management services to small businesses."
    },
    {
        id: 7,
        name: "Eric Mendoza",
        age: 36,
        gender: "Male",
        email: "eric.mendoza@example.com",
        phone: "09351233456",
        address: "Villa Del Sol, Sta Rosa, Laguna, PH",
        occupation: "Software Engineer",
        company: "InnovaTech",
        info: "Back-end engineer specializing in cloud infrastructure and Python APIs."
    },
    {
        id: 8,
        name: "Jennylyn Cruz",
        age: 29,
        gender: "Female",
        email: "jennylyn.cruz@example.com",
        phone: "09481230987",
        address: "Malate, Manila, PH",
        occupation: "Nurse",
        company: "St. Luke’s Medical Center",
        info: "Registered nurse in emergency care and trauma units with 5+ years of experience."
    },
    {
        id: 9,
        name: "Nathan Lee",
        age: 19,
        gender: "Male",
        email: "nathan.lee@example.com",
        phone: "09071234566",
        address: "Caloocan City, PH",
        occupation: "Student",
        company: "PUP Manila",
        info: "Information technology student with a passion for game development."
    },
    {
        id: 10,
        name: "Patricia Villanueva",
        age: 34,
        gender: "Female",
        email: "patricia.v@example.com",
        phone: "09314563478",
        address: "Commonwealth, QC, PH",
        occupation: "Architect",
        company: "GreenSpace Design",
        info: "Architect specializing in sustainable urban housing and green architecture."
    },
    {
        id: 11,
        name: "Jomar Dela Cruz",
        age: 38,
        gender: "Male",
        email: "jomar.dc@example.com",
        phone: "09214325567",
        address: "Batangas City, PH",
        occupation: "Truck Driver",
        company: "LogistiCo",
        info: "Long-haul truck driver delivering goods across Luzon."
    },
    {
        id: 12,
        name: "Liza Ortega",
        age: 30,
        gender: "Female",
        email: "liza.ortega@example.com",
        phone: "09114567234",
        address: "Puerto Princesa, Palawan, PH",
        occupation: "Tour Guide",
        company: "IslandLife Tours",
        info: "Local guide specializing in eco-tours and marine conservation education."
    },
    {
        id: 13,
        name: "Christian Alvarez",
        age: 26,
        gender: "Male",
        email: "chris.alvarez@example.com",
        phone: "09454563231",
        address: "Legazpi City, Albay, PH",
        occupation: "Content Creator",
        company: "YouTube",
        info: "Tech and gadget reviewer with over 100K subscribers."
    },
    {
        id: 14,
        name: "Karen Fajardo",
        age: 42,
        gender: "Female",
        email: "karen.fajardo@example.com",
        phone: "09381234123",
        address: "Cebu City, PH",
        occupation: "Restaurant Manager",
        company: "Casa Del Mar",
        info: "Oversees operations of a beachfront restaurant with 30+ staff members."
    },
    {
        id: 15,
        name: "Victor Navarro",
        age: 24,
        gender: "Male",
        email: "victor.n@example.com",
        phone: "09571234987",
        address: "Naga City, PH",
        occupation: "Mobile App Developer",
        company: "AppForge",
        info: "React Native developer working on cross-platform business apps."
    },
    {
        id: 16,
        name: "Faith Dizon",
        age: 27,
        gender: "Female",
        email: "faith.dizon@example.com",
        phone: "09174257812",
        address: "San Pablo, Laguna, PH",
        occupation: "HR Specialist",
        company: "HRLink",
        info: "Handles recruitment and employee relations for a BPO firm."
    },
    {
        id: 17,
        name: "Bryan Yu",
        age: 31,
        gender: "Male",
        email: "bryan.yu@example.com",
        phone: "09473218475",
        address: "Davao City, PH",
        occupation: "UX Designer",
        company: "PixelPerfect",
        info: "Focuses on accessibility and user experience for mobile-first platforms."
    },
    {
        id: 18,
        name: "Nicole Santiago",
        age: 33,
        gender: "Female",
        email: "nicole.s@example.com",
        phone: "09081234521",
        address: "Antipolo, Rizal, PH",
        occupation: "Dentist",
        company: "Santiago Dental Clinic",
        info: "Runs a private dental practice specializing in orthodontics and cosmetic dentistry."
    },
    {
        id: 19,
        name: "Julius Manalo",
        age: 45,
        gender: "Male",
        email: "julius.manalo@example.com",
        phone: "09175234567",
        address: "Iloilo City, PH",
        occupation: "Farmer",
        company: "Self-employed",
        info: "Operates a rice and vegetable farm with modern irrigation systems."
    },
    {
        id: 20,
        name: "Alyssa Perez",
        age: 21,
        gender: "Female",
        email: "alyssa.perez@example.com",
        phone: "09281234765",
        address: "Lucban, Quezon, PH",
        occupation: "Student / Intern",
        company: "Dalubhasaan ng Lungsod ng Lucena",
        info: "BSIT student focusing on web development using React and Firebase."
    }
];

module.exports = sampleUsers;