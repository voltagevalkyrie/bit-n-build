import image1 from '../assets/showcase1.jpg'
import image2 from '../assets/showcase2.jpg'
import image3 from '../assets/showcase3.jpg'
import image4 from '../assets/showcase4.png'
import image5 from '../assets/showcase5.jpg'
import image6 from '../assets/showcase6.jpg'
import image7 from '../assets/showcase7.jpg'
import image8 from '../assets/showcase8.jpg'
import image9 from '../assets/showcase9.jpg'
import image10 from '../assets/showcase10.jpg'
import image11 from '../assets/showcase122.jpg'


  

export const PortalDetail =[
    {
        id: 1,
        image: image1,
        title: 'Ncode',desc: (
          <p>
            Event type: Tech. <br />
            Date: Sat 10/02/2024 <br />
            Time: 06p.m. - 08 p.m. <br />
            Mode: Online
          </p>
        ),
        duration:'2 hours',
        button: 'Register Now',
        
        
        
      },
      {
        id: 2,
        image: image2,
        title: 'Code Fury',
        desc: (
          <p>
            Event type: Tech. <br />
            Date: Sat 05/05/2024 <br />
            Time: 24 hours from 08:30a.m. <br />
            Mode: Online
          </p>
        ),
        button: 'Register Now'
      },
      {
        id: 3,
        image: image3,
        title: 'Fiesta ',
        desc: (
          <p>
            Event type: Cultural  <br />
            Date:  10/05/2024 <br />
            Time: 8AM to 8PM<br />
            Mode: offline 
          </p>
        ),
        button: 'Register Now'
      },
      {
        id: 4,
        image: image4,
        title: 'Impetus - The Annual Tech Fest',
        desc: (
          <p>
            Event type: Tech. <br />
            Date: Sat 10/02/2024 <br />
            Time: 09a.m. to 03p.m.<br />
            Mode: Hybrid
          </p>
        ),
        button: 'Register Now'
      },
      {
        id: 5,
        image: image5,
        title: 'Kagada',
        desc: (
          <p>
            Event type: Tech  <br />
            Date: 18/08/2024 <br />
            Time: 10a.m. - 02p.m. <br />
            Mode: offline 
          </p>
        ),
        button: 'Register Now'
      },
      {
        id: 6,
        image: image6,
        title: 'The Greater Good@Tedx',
        desc: (
          <p>
            Event type: Alumni Talks <br />
            Date: Sat 25/07/2024 <br />
            Time: 10a.m. - 01 p.m. <br />
            Mode: Offline
          </p>
        ),
        button: 'Register Now'
      },
]


export const PortalEventsDetail = [
  {
      id: 6,
      name: "Profiles and Achievements",
      slug: "Profiles and Achievements",
      type: "View your Participations",
      price: 50,
      capacity: 5,
      featured: true,
      images: image7,
      description:
        "Event attendance, Contributions, and Overall involvement. Know your True Potential!",
      extras: [

      ],
  },
  {
      id: 7,
      name: "Centralized Calendar",
      slug: "Centralized Calendar",
      type: "View your schedules",
      price: 40,
      capacity: 4,
      featured: true,
      images: image8,
      description:
        "A vital organizational tool, offering a user-friendly interface to access, manage, and plan your academic and extracurricular commitments seamlessly.",
      extras: [
      ],
  },
  {
      id: 8,
      name: "Leaderboard and Recognition",
      slug: "Leaderboard and Recognition",
      type: "View Your Ranks",
      price: 50,
      capacity: 5,
      featured: true,
      images: image9,
      description:
        "Showcasing active participants, event attendance, and contributions highlighting students for their engagement and participation in various events.",
      extras: [
      ],
  },
  {
      id: 9,
      name: "Publish Events",
      slug: "Publish Events",
      type: "Only for Club Members",
      price: 100,
      capacity: 10,
      featured: false,
      images: image10,
      description:
        "Clubs and organizations can create events",
      extras: [
      ],
  },
  {
    id: 10,
    name: "Event Suggestions",
    slug: "Event Suggestions",
    type: "View what suits you best",
    price: 50,
    capacity: 5,
    featured: true,
    images: image11,
    description:
      "An intelligent recommendation system that suggests events to users based on their interests, past participation, and club affiliations",
    extras: [
    ],
},
]

