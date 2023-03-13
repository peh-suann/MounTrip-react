import React from 'react'
import styles from './../styles/Achievement.module.css'

export default function LaiAchievementQuote(props) {
  const { level } = props
  const quotes = (lv) => {
    switch (lv) {
      default:
      case 1:
        return '「 慢慢來，山會等你，MounTrip也會 」'
      case 2:
        return '「 不必為我懸念，我在山裡⋯⋯ 」'
      case 3:
        return '「 山雖無言，然非無聲 」'
    }
  }
  return (
    <>
      <div className={styles.quotes}>
        <h1>{quotes(level)}</h1>
      </div>
    </>
  )
}
