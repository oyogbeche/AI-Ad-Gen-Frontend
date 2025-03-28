import React, { Suspense } from 'react'
import Verification from './Verification'
import Loader from '@/components/ui/loader'

const Page = () => {
  return (
    <Suspense fallback={<div><Loader/></div>}>

<Verification />
    </Suspense>
  )
}

export default Page