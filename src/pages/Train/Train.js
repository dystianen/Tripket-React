import React from 'react';
import { Card } from 'antd';
import SearchTrain from '../../component/Form/SearchTrain';
import Ticket from './Ticket';
import ParticlesBg from 'particles-bg';

import './Train.css';

export const Train = () => {
  return (
    <>
      <div className='train-container'>
        <ParticlesBg type='cobweb' num={100} color='black' bg={true} />
        <Card>
          <SearchTrain title='Train' form1='select departure station' form2='select arrival station'/>
        </Card>
        <Ticket />
      </div>
    </>
  );
};
