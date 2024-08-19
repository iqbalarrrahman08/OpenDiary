import Wrapper from '@/components/global/Wrapper'
import React from 'react'

const loading = () => {
  return <Wrapper tittle="LOADING .....">
    <div className='flex justify-center items-center'>
    <span className="loading loading-dots loading-lg"></span>
    </div>
  </Wrapper>
}

export default loading