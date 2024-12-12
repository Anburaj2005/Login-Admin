import {Typography} from 'antd'
import React from 'react'

function AppFooter() {
  return (
    <div className='AppFooter'>
      <Typography.Link href="tel:+978566532">978566532</Typography.Link>
      <Typography.Link href="">Privacy Ploicy</Typography.Link>
      <Typography.Link href="">Contact</Typography.Link>

    </div>
  )
}

export default AppFooter