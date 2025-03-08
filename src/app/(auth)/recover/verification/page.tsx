import React, { Suspense } from 'react'
import Verification from './Verification'

const Page = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>

<Verification />
    </Suspense>
  )
}

export default Page