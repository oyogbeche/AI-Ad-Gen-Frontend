import React, { Suspense } from 'react'
import AdType from '../components/ad-type'

const page = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <AdType />
      </Suspense>
    </div>
  )
}

export default page