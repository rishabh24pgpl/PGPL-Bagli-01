import React from 'react'

import AboutMessageCard from '@/components/AboutMessageCard/AboutMessageCard'

import AboutMessageCarosoul from '@/components/AboutMessageCarosoul/AboutMessageCarosoul';
import AboutFacultyCard from '@/components/AboutFacultyCard/AboutFacultyCard';

export default function page() {

    return (
        <>
            <main className="w-full min-h-full flex flex-col p-5  justify-center items-center dark:bg-dpurple bg-[url('/MessageSvg.svg')]">
                <div className="w-full flex flex-col justify-center items-center mt-9">
                    <h1 className='text-3xl p-3 text-center  font-bold'>FACULTY AT THE SCHOOL</h1>
                    <h2 className=' text-center text-4xl mt-5 font-extrabold text-tred'>Pratibha Global School, Bagli</h2>
                    <h3 className=' text-center text-2xl mt-2 font-semibold text-tred'>SESSION 2024-25</h3>
                    <div className='w-11/12 grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-2 grid-cols-2 gap-5 lg:gap-5 md:gap-4  lg:p-5 mt-2'>
                        <AboutFacultyCard img="/staff/arvind.jpg" name="Arwind Makwana" post="" />
                        <AboutFacultyCard img="/staff/chandrakant.jpg" name="Chandrakant Gaur" post="" />
                        <AboutFacultyCard img="/staff/durgavati.jpg" name="Durgavati Chauhan" post="" />
                        <AboutFacultyCard img="/staff/hemant.jpg" name="Hemant Mansare" post="" />
                        <AboutFacultyCard img="/staff/monica.jpg" name="Monica Patidar" post="" />
                        <AboutFacultyCard img="/staff/neeraj.jpg" name="Neeraj Dewada" post="" />
                        <AboutFacultyCard img="/staff/reakha.jpg" name="Rekha Sharma" post="" />
                        <AboutFacultyCard img="/staff/sanjay.jpg" name="Sanjay Verma" post="" />
                        <AboutFacultyCard img="/staff/Shakti raj.jpg" name="Shakti Raj Singh Chouhan" post="" />
                        <AboutFacultyCard img="/staff/sweety.jpg" name="Sweety Soni" post="" />
                        <AboutFacultyCard img="/staff/umesh.jpg" name="Umesh Rathore" post="" />
                        <AboutFacultyCard img="/staff/Vijendra.jpg" name="Vijendra Das Bairagi" post="" />
                        <AboutFacultyCard img="/staff/vijendraaa.jpg" name="Vijendra Mishra" post="" />
                        

                    </div>

                </div>
            </main>
        </>
    )
}