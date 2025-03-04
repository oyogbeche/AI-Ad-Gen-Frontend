import React from 'react'

export const useLowercase = () => {
  const [value, setValue] = React.useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value.toLowerCase())
  }

  return {
    value,
    handleChange,
  }
}
