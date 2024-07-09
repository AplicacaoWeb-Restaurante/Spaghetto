// import React from 'react'
// import './AppDownload.css'
// import { assets } from '../../assets/assets'

// const AppDownload = () => {
//     return (
//         <div className='app-download' id='app-download'>
//             <p>For Better Experience Download <br />Tomato App</p>
//             <div className="app-download-platforms">
//                 <img src={assets.play_store} alt="" />
//                 <img src={assets.app_store} alt="" />
//             </div>
//         </div>
//     )
// }

// export default AppDownload

import React from 'react'
import './AppDownload.css'

function AppDownload() {
  return (
    <div className='app-download' id='app-download'>
      <p>Para melhor experiência instale o app <br /> Restaurante App</p>
      <div className='app-download-platforms'>
        <img src='https://img.shields.io/badge/Android-45C01A?style=for-the-badge&logo=android&logoColor=white' alt='Android' />
        <img src='https://img.shields.io/badge/iOS-000000?style=for-the-badge&logo=apple&logoColor=white' alt='iOS' />
        <img src='https://img.shields.io/badge/Windows-0083C7?style=for-the-badge&logo=windows&logoColor=white' alt='Windows' />
      </div>

    </div>
  )
}

export default AppDownload