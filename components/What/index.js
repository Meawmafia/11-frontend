import React, { Component } from 'react'
import styled from 'styled-components'

import Headline, { Subtitle, Paragraph, Small, Font } from '../Core/Texts'
import { PDBox, IconBox } from '../Core/ResponBox'
import Model from '../Core/Model'

const Icon = styled(IconBox)`
  width:7em;
`

const IconInfo = [
  { icon: '/static/img/icon-what/java (2).png', text: 'Java Programming', t: 'Java Programming' },
  { icon: '/static/img/icon-what/IT fun (1).png', text: 'IT Fundamentals', t: 'IT Fundamentals' },
  { icon: '/static/img/icon-what/network (2).png', text: 'Network', t: 'Network' },
  { icon: '/static/img/icon-what/web (2).png', text: 'HTML5&CSS3', t: 'HTML5&CSS3' }
]

const BoxStyle = styled(PDBox)`
    background: rgba(196, 196, 196, 0.4);
`

const WhatText = [
  'ค่ายเส้นทางสู่ฝันนักไอที (WIP Camp) คือ ค่ายสำหรับน้อง ๆ ผู้มีความสนใจด้านไอที หรือผู้ต้องการค้นหาตนเอง โดยน้อง ๆ จะได้มีโอกาสสัมผัสชีวิตของการเป็นนักไอทีอย่างแท้จริง ณ มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี เป็นระยะเวลา 5 วัน 4 คืน',
  'WIP Camp ประกอบด้วยการเรียน และลงมือปฏิบัติจริงด้านวิชาการ ความสนุกสนานจากกิจกรรม รวมถึงมิตรภาพจากพี่ ๆ เพื่อน ๆ ในค่ายทุกคน',
  'กว่าทศวรรษที่ WIP Camp ขอเป็นก้าวเล็ก ๆ ในการช่วยเหลือน้อง ๆ ให้ค้นพบกล่องดวงใจที่ทุกคนตามหา และเดินตามเส้นทางความฝันที่น้อง ๆ หวังไว้ !!'
]

export default class index extends Component {
  render () {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-12 col-md-12 col-lg-10">
            <div className="row">
              <div className="text-center col-12">
                <Headline>What</Headline>
              </div>
              <BoxStyle>
                <div className="col-12">
                  <div className="row justify-content-center">
                    <Subtitle className="mb-4"><b>ค่ายนี้คืออะไร ?</b></Subtitle>
                  </div>
                  <Paragraph>
                    { WhatText.map((info, i) => (
                      <Font>
                        &nbsp;&nbsp;&nbsp;&nbsp;{info}
                      </Font>
                    ))
                    }
                  </Paragraph>
                </div>
                <div className="row text-center mt-2">
                  {
                    IconInfo.map((info, i) => (
                      <div key={i} className="col-3 col-md-3 p-1">
                        <Icon src={info.icon} alt={info.t} />
                        <Small><Font>{info.text}</Font></Small>
                      </div>
                    ))
                  }
                </div>
              </BoxStyle>
            </div>
            <Model className="center" wippo='static/img/wippo/PurplePotato.png' alt="wippo" />
          </div>
        </div>
      </div>
    )
  }
}
