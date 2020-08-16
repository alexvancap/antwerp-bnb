import Head from 'next/head';
import { useEffect } from 'react';
import Calendar from '../components/book/calendar/Calendar'
import BookingForm from '../components/book/BookingForm'
import './../styles/pages/book.scss';

const book = () => {
  return (
    <div id='bookContainer'>
      <Calendar />
      <BookingForm />
    </div>
  )
}

export default book;
