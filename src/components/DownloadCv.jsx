import React from 'react'

const DownloadCv = () => {
  return (
    <>
        <ul>
            <li className='headLine curriculum'>
            <a href={cv} download="Martin Posniak CV"><button>Download CV</button></a>
            </li>
        </ul>
    </>
  )
}

export default DownloadCv
