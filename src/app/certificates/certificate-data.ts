interface Certificate {
    name: string;
    category: string;
    photo: string;
    date: string;
    description: string;
    googleDriveLink: string;
  }

export const certificatesData: Certificate[] = [
  {
    name: 'MTA - Introduction to Programming using Python',
    category: 'competitive-exams',
    photo: '../assets/images/mta.png',
    date: '18-Aug-2021',
    description: 'Microsoft Training Associate certificate, demonstrating the ability to code using Python.',
    googleDriveLink: 'https://drive.google.com/file/d/1DZu5cZ1WEwX3ruxEKgBOIbTvHvnAHped/view?usp=sharing'
  },
  {
    name: 'MTA - Introduction to Programming using JavaScript',
    category: 'competitive-exams',
    photo: '../assets/images/mta.png',
    date: '06-01-2022',
    description: 'Microsoft Training Associate certificate, demonstrating the ability to code using JavaScript.',
    googleDriveLink: 'https://drive.google.com/file/d/1Ju50Rxhkm8p8BLmafz0--4KyKQBXDZ01/view?usp=sharing'
  },
  {
    name: 'NTPEL - Essential of Mathematics for Machine Learning',
    category: 'competitive-exams',
    photo: '../assets/images/nptel.jpg',
    date: '01-10-21',
    description: 'NPTEL certificate for mathematics and statistics basics to advanced concepts required for ML/DL.',
    googleDriveLink: 'https://drive.google.com/file/d/1ySP84xinLRjA_m1uAV4YLRQf6Zl2ljef/view?usp=sharing'
  },
  {
    name: 'NPTEL - Design and Analysis of Algorithms',
    category: 'competitive-exams',
    photo: '../assets/images/nptel.jpg',
    date: '01-05-2022',
    description: 'NPTEL Certificate demonstrating the ability to design, develop and analyze algorithms and their complexities.',
    googleDriveLink: 'https://drive.google.com/file/d/13WT1vttzJ3ZNKv82IXaF019gdNna1DJJ/view?usp=sharing'
  },
  {
    name: 'Yeshwantrao Chavan College of Engineering Fest',
    category: 'cultural-activities',
    photo: '../assets/images/ycce.png',
    date: '02-09-2022',
    description: 'National Level Fest Organized by YCCE',
    googleDriveLink: 'https://drive.google.com/file/d/1Q3q66zh5PIH-wA31do3eyvDG1WSZX1VN/view?usp=sharing'
  },
  {
    name: 'Event Co-ordinator',
    category: 'organizing-skills',
    photo: '../assets/images/ycce.png',
    date: '02-09-2022',
    description: 'National Level Fest Organized by YCCE',
    googleDriveLink: 'https://drive.google.com/file/d/1ZE6qOCC3vRnC7dd5dPw6ecCjwL8kZKyQ/view?usp=sharing'
  },
  {
    name: 'IJTES - Human Heart Rate and Blood Pressure Control using Fuzzy Logic',
    category: 'paper-presentation',
    photo: '../assets/images/ijtes.jpg',
    date: '01-07-2022',
    description: 'Presented a paper using fuzzy logics on the medical domain to improve patient recovery.',
    googleDriveLink: 'https://drive.google.com/file/d/1cFnSob6EJzygcg5iFjsT2aI-Q3SBlNut/view?usp=sharing'
  },
  {
    name: 'Spandan - Data Preparation for Machine Learning',
    category: 'paper-presentation',
    photo: '../assets/images/ycce.png',
    date: '08-04-2022',
    description: 'Presented a paper on in-depth analysis of all the data preparation methods for machine learning',
    googleDriveLink: 'https://drive.google.com/file/d/1AN4T0JqMGUawjrrxANrrgns25bGQwgu-/view?usp=sharing'
  },
  {
    name: 'ICIRCA- Placement Prediction using Machine Learning',
    category: 'paper-presentation',
    photo: '../assets/images/icirca.png',
    date: '23-08-2022',
    description: 'Presented a paper on placement prediction using machine learning in an IEEE conference.',
    googleDriveLink: 'https://drive.google.com/file/d/1OrPVCYDRDkTS2dVMhcyHqhph5rSfkoRP/view?usp=sharing'
  },
  {
    name: 'Placement Prediction using Machine Learning',
    category: 'project-competition',
    photo: '../assets/images/ksi.png',
    date: '05-10-2020',
    description: 'Submitted a project on placement prediction using machine learning in a project competition.',
    googleDriveLink: 'https://drive.google.com/file/d/1MzXdTFoFvCG1Q0NNcAoCnIVuyOkNOz_2/view?usp=sharing'
  },
  {
    name: 'Childo - Fundraising',
    category: 'social-activities',
    photo: '../assets/images/childo.png',
    date: '08-03-2022',
    description: 'Contributed to fundraising drive for Childo Foundation.',
    googleDriveLink: 'https://drive.google.com/file/d/1F2qyloPYns1JS72PdlyPgCNneOlGUKa4/view?usp=sharing'
  },
  {
    name: 'Chess Competition',
    category: 'sports',
    photo: '../assets/images/ycce.png',
    date: '01-09-2022',
    description: 'Participated in Chess competition in a national fest organized by YCCE.',
    googleDriveLink: 'https://drive.google.com/file/d/1HqgQuKf74FEVGniRNS9FNTC2RxTSvmiq/view?usp=sharing'
  },
  {
    name: 'Barclays Personality Development',
    category: 'workshop',
    photo: '../assets/images/barclays.png',
    date: '24-10-2021',
    description: 'Attended a 15-day Workshop by Barclays on personality development.',
    googleDriveLink: 'https://drive.google.com/file/d/1gr_CZDWXaaPCDeoW8WjXWKjI6cIrPLB0/view?usp=sharing'
  },
  {
    name: 'Business Intelligence Workshop',
    category: 'workshop',
    photo: '../assets/images/ycce.png',
    date: '13-04-2022',
    description: 'Attended a BI workshop on various advanced techniques for analysis and visualization organized by YCCE.',
    googleDriveLink: 'https://drive.google.com/file/d/1rFlWjfrTuU8VWqwMlREixTqUWVPy0SNm/view?usp=sharing'
  },
  {
    name: 'IEEE Workshop (Placement Training) ',
    category: 'workshop',
    photo: '../assets/images/ieee.png',
    date: '28-06-2020',
    description: 'Attended a workshop organized by IEEE on placement training.',
    googleDriveLink: 'https://drive.google.com/file/d/1FFrXsqzUis0cxPF5XyGVKzhSRO8sAOK4/view?usp=sharing'
  },
  {
    name: 'Salesforce Workshop',
    category: 'workshop',
    photo: '../assets/images/salesforce.png',
    date: '01-09-2022',
    description: 'Participated in Salesforce Workshop organized by YCCE.',
    googleDriveLink: 'https://drive.google.com/file/d/1yJHBfQwzy_koUX0Xkfbd1JuiUY_WRpsZ/view?usp=sharing'
  },
  {
    name: 'CSI Coding Competition',
    category: 'misc',
    photo: '../assets/images/csi.png',
    date: '10-10-2020',
    description: 'Participated in coding and technical competition under CSI.',
    googleDriveLink: 'https://drive.google.com/file/d/1qEoUiV_MgNxp14ZiAoBmHlxgKy9oH_hI/view?usp=sharing'
  },
  {
    name: 'Persistent Technical Training',
    category: 'misc',
    photo: '../assets/images/persistent.png',
    date: '01-08-2022',
    description: 'Completed an industrial technical training program at Persistent Systems.',
    googleDriveLink: 'https://drive.google.com/file/d/1y2O4hqxwNLfAiuEnjX_wyabXvkM633he/view?usp=sharing'
  },
  {
    name: 'KSI Technical Training',
    category: 'misc',
    photo: '../assets/images/ksi.png',
    date: '15-11-2020',
    description: 'Completed a training program at Knowledge Solutions India along with a contribution to a project competition.',
    googleDriveLink: 'https://drive.google.com/file/d/1srsVVCQw6jZhA6qM7PxZ52AQbaKUH9hi/view?usp=sharing'
  },
  // Add more certificates for different categories here
];
