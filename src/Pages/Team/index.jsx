import React from 'react';
import styles from "./Team.module.css"
import Card from './Card'
import Banner from '../../Components/Banner/Banner'

import Members_Lead from './Members-Lead.json'
import Members_UAS from './Members_UAS.json'

export default function index() {
  return (
    <>
      <div className={styles.team__heading}><h1 >MEET THE TEAM</h1></div>
      {/* <Banner
        title="OUR TEAM"
      /> */}
      <div className={styles.content}>
          <div className={styles.team__head}><h1 >TEAM LEADS</h1></div>
          <div className={styles.grid}>
            {Members_Lead.map(member => {
              return(
                
                <Card
                  key={member.id}
                  href={member.href}
                  img={member.img}
                  box_title={member.por}
                  box_text={member.name}
                  box_deco={member.box_deco}
                  box_tagline={member.box_tagline}

                />
              )
            })}
            </div>
      </div>

      <div className={styles.content}>
          <div className={styles.team__head}><h1 >TEAM LEADS</h1></div>
            <div className={styles.grid}>
            {Members_UAS.map(member => {
              return(
                <Card
                  key={member.id}
                  href={member.href}
                  img={member.img}
                  box_title={member.por}
                  box_text={member.name}
                  box_deco={member.box_deco}
                  box_tagline={member.box_tagline}

                />
              )
            })}   
            </div>
      </div>
    </>
  )
}
