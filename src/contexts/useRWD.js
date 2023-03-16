import { useState, useEffect } from 'react'

const useRWD = () => {
  const [device, setDevice] = useState('PC')
  
  const handleRWD = () => {
    if (window.innerWidth > 500) setDevice('PC')
    else setDevice('mobile')
  }


  useEffect(() => {
    window.addEventListener('resize', handleRWD)
    handleRWD(); //加入此行判斷初始裝置狀態

    return () => {
      window.removeEventListener('resize', handleRWD)
    }
  }, [])

  return device
}

export default useRWD
