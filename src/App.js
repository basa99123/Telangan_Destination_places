import DestinationSearch from './components/DestinationSearch'

import './App.css'

const destinationsList = [
  {
    id: 1,
    name: 'Siddipet:-komuravelli mallanna Temple',
    imgUrl:
      'https://res.cloudinary.com/docnkzgj2/image/upload/v1711986955/komuravelli-mallanna_emxmby.jpg',
  },
  {
    id: 2,
    name: 'Adilabad:- Kuntala Waterfall',
    imgUrl:
      'https://res.cloudinary.com/docnkzgj2/image/upload/v1711986955/Places-To-Visit-In-Telangana.jpg_tn5sn6.webp',
  },
  {
    id: 3,
    name: 'Jogulamba Gadwal :- Jogulamba temple ',
    imgUrl:
      'https://res.cloudinary.com/docnkzgj2/image/upload/v1711986955/Jogulamba-Shaktipeeth_e1ehdv.jpg',
  },
  {
    id: 4,
    name: 'Jagitial:- Anjaneya Swamy Temple',
    imgUrl:
      'https://res.cloudinary.com/docnkzgj2/image/upload/v1711986955/kondagattu_j044ub.jpg',
  },
  {
    id: 5,
    name: 'Rajanna Siricilla:-Sri Raja Rajeshwara Temple',
    imgUrl:
      'https://res.cloudinary.com/docnkzgj2/image/upload/v1711986954/vemulavada_blcoim.jpg',
  },
  {
    id: 6,
    name: 'Hyderabad:- Buddha Statue  ',
    imgUrl:
      'https://res.cloudinary.com/docnkzgj2/image/upload/v1711986954/Telangana-bhooda_16th-Dec_myosbd.webp',
  },
  {
    id: 7,
    name: 'Hyderabad:- charminar',
    imgUrl:
      'https://res.cloudinary.com/docnkzgj2/image/upload/v1711986954/charminar_du8mob.jpg',
  },
  {
    id: 8,
    name: 'Warangal:- Thousand Pillar Temple  ',
    imgUrl:
      'https://res.cloudinary.com/docnkzgj2/image/upload/v1711987510/warangal_olanql.jpg',
  },
  {
    id: 9,
    name: 'Nirmal:- Pochera Falls',
    imgUrl:
      'https://res.cloudinary.com/docnkzgj2/image/upload/v1711987500/kuntala_water_fall_m0cqwn.jpg',
  },
  {
    id: 10,
    name: 'Warangal:- Kakatiya Kala Thoranam',
    imgUrl:
      'https://res.cloudinary.com/docnkzgj2/image/upload/v1711992940/karimnagar_l7uejh.jpg',
  },
  {
    id: 11,
    name: 'Medak:- Charchi ',
    imgUrl:
      'https://res.cloudinary.com/docnkzgj2/image/upload/v1711987487/charchi_ggnqmv.jpg',
  },
  {
    id: 12,
    name: 'Medak:- Fort',
    imgUrl:
      'https://res.cloudinary.com/docnkzgj2/image/upload/v1711987498/kota_jz2jgq.jpg',
  },
]

const App = () => <DestinationSearch destinationsList={destinationsList} />

export default App
