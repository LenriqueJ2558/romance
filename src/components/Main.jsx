import { useChangeElements } from '../hooks/changeElements'
import { useState } from 'react'

export function Main () {
    const { handleButtonNo, handleButtonYes, textP, image, showCard } = useChangeElements()

    return (
        <>
            <main className='max-w-3xl m-auto w-full h-screen text-center flex justify-center items-center'>
                <div className='main-container flex flex-col justify-center items-center gap-4'>
                    <h1 className='font-sans font-bold text-gray-700 text-2xl'>
                        ¿Quiere usted pasar el resto de su vida conmigo Mi Amor...?
                    </h1>

                    <img src={image} className='w-72'/>

                    <div className='card-container'>
                        {showCard && (
                            <div className='card open'>
                                <div className='card-content'>
                                    <p className='font-mono text-gray-700 whitespace-pre-line'>
                                        {textP}
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>

                    <section className='flex gap-3'>
                        <button className='bg-purple-500 w-28 text-white font-bold py-2 px-4 rounded transition-all hover:scale-110' onClick={handleButtonYes}> 
                            Sí 
                        </button>

                        <button className='bg-pink-500 w-20 text-white font-bold py-2 px-4 rounded transition-all hover:scale-110' onClick={handleButtonNo}> 
                            No 
                        </button>
                    </section>
                </div>
            </main>
        </>
    )
}