import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header/Header'

type Props = {}

export default function HomeTemplate({}: Props) {
  return (
    <>
      <Header/>
      <Outlet/>  
    </>
  )
}