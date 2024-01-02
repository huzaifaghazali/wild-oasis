import { useEffect } from 'react';
import Heading from '../ui/Heading';
import Row from '../ui/Row';
import { getCabins } from '../services/apiCabings';

function Cabins() {
  useEffect(() => {
    getCabins().then((data) => console.log(data));
  }, []);
  
  return (
    <Row type='horizontal'>
      <Heading as='h1'>All cabins</Heading>
      <p>TEST</p>
      <img
        src='https://yhfgttihpyarnozxyvsp.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg?t=2024-01-02T16%3A37%3A43.721Z'
        alt=''
      />
    </Row>
  );
}

export default Cabins;
