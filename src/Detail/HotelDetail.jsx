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




export const HotelDetail =[
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
        button: 'Register Now'
        
      },
      {
        id: 2,
        image: image2,
        title: 'Code Fury',
        desc: (
          <p>
            Event type: Tech. <br />
            Date: Sat 5/05/2024 <br />
            Time: 24 hours  <br />
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
            Event type: Fun  <br />
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
             <br />
            Mode: Online
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
            Event type: Art and Craft  <br />
            Date: 10/02/2024 <br />
            Time: 06p.m. - 08 p.m. <br />
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
            Event type: Informational talks <br />
            Date: Sat 10/02/2024 <br />
            Time: 06p.m. - 08 p.m. <br />
            Mode: Online
          </p>
        ),
        button: 'Register Now'
      },
]


export const HotelRoomDetail = [
  {
      id: 7,
      name: "Profiles and Achievements",
      slug: "Profiles and Achievements",
      type: "View your Participations",
      price: 50,
      capacity: 5,
      pets: false,
      breakfast: true,
      featured: true,
      images: image7,
      description:
        "Event attendance, Contributions, and Overall involvement. Know your True Potential!",
      extras: [
        "Romantic king-size bed with premium bedding",
        "Spacious en-suite bathroom with a luxurious bathtub",
        "Intimate seating area for cozy moments",
        "Private balcony with breathtaking ocean views",
        "Complimentary champagne and chocolates",
        "In-room dining service",
        "Access to exclusive spa facilities",
      ],
  },
  {
      id: 8,
      name: "Centralized Calendar",
      slug: "Centralized Calendar",
      type: "See your schedules",
      price: 40,
      capacity: 4,
      pets: false,
      breakfast: true,
      featured: true,
      images: image8,
      description:
        "A vital organizational tool, offering a user-friendly interface to access, manage, and plan your academic and extracurricular commitments seamlessly.",
      extras: [
        "Luxurious bedrooms with en-suite bathrooms",
        "Spacious living and dining area for entertaining",
        "Fully equipped kitchen with high-end appliances",
        "Private rooftop terrace with panoramic city views",
        "Personalized butler service",
        "Complimentary breakfast served in-suite",
        "Access to exclusive executive lounge",
      ],
  },
  {
      id: 9,
      name: "Family Suite",
      slug: "family-suite",
      type: "Family",
      price: 3000,
      capacity: 4,
      pets: true,
      breakfast: true,
      featured: true,
      images: image9,
      description:
        "Our spacious Family Suite is the perfect choice for families looking for comfort and convenience. With separate bedrooms, a cozy living area, and child-friendly amenities, it offers a home away from home experience. Create lasting memories with your loved ones in this welcoming suite.",
      extras: [
        "Master bedroom with a king-size bed",
        "Additional bedroom with twin beds for the kids",
        "Separate living area with a sofa and TV",
        "Kitchenette with a microwave and refrigerator",
        "Family-friendly amenities and toys",
        "Complimentary breakfast for the whole family",
        "Pet-friendly accommodations",
      ],
  },
  {
      id: 10,
      name: "Business Suite",
      slug: "business-suite",
      type: "Double",
      price: 4000,
      capacity: 2,
      pets: false,
      breakfast: true,
      featured: false,
      images: image10,
      description:
        "Designed for business travelers, our sophisticated Business Suite offers a seamless blend of comfort and productivity. With a dedicated workspace, high-speed internet, and modern amenities, it provides the perfect environment for work and relaxation. Experience a seamless stay while attending to your professional needs.",
      extras: [
        "Spacious bedroom with a comfortable workspace",
        "Executive-style desk and ergonomic chair",
        "High-speed internet and Wi-Fi access",
        "Business center services and support",
        "Access to meeting rooms and conference facilities",
        "Complimentary breakfast and in-room dining options",
        "Convenient location near business districts",
      ],
  }
]