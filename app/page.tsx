'use client'

import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import Link from 'next/link';
import {useRouter} from 'next/navigation';
import { Router } from 'next/router';

export default function Home() {
  return (
    <div>
      <Navbar />
      <HomePage />
      <Footer />
      <Link href="/Shop"></Link>
      
      
    </div>
  );
}
