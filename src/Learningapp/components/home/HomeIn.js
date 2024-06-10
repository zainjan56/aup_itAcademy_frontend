import React from 'react'
import { Button } from 'react-bootstrap';
import Heading from '../heading/Heading';
import "./HomeIn.css";

const HomeIn = () => {
  return (
    <section className='hero'>
    <div className='container'>
          <div className='row'>
            <Heading subtitle='WELCOME TO ACADEMIA' title='Best Online Education Expertise' />
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            <div className='button'>
              <Button className='primary-btn'>
                GET STARTED NOW <i className='fa fa-long-arrow-alt-right'></i>
              </Button>
            </div>
          </div>
        </div>
    </section>
  )
}

export default HomeIn