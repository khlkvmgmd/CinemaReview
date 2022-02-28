import {Typography} from 'antd'
import Search from 'antd/lib/input/Search';

import React from 'react'

const { Title } = Typography;

export const Header = () => {

  const onSearch = () => {

    return 1
  }

  return (
    <div>
        <Title>12grttrgt3</Title>
        <Search placeholder="input search text" onSearch={onSearch} enterButton />
    </div>
  )
}
