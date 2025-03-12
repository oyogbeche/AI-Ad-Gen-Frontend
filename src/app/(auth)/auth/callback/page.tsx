import React, { Suspense } from 'react'
import AuthCallback from './auth-callback'

const page = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AuthCallback />
    </Suspense>
  )
}

export default page