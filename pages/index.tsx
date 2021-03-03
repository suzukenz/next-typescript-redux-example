import Head from 'next/head'
import { useDispatch } from 'react-redux'

import Clock from '../components/clock'
import Counter from '../components/counter'
import { tick } from '../lib/slices/clockSlice'
import useInterval from '../lib/useInterval'
import styles from '../styles/Home.module.css'

const Home: React.FC = () => {
  const dispatch = useDispatch()
  // Tick the time every second
  useInterval(() => {
    dispatch(tick({ light: true, lastUpdate: Date.now() }))
  }, 1000)

  return (
    <div className={styles.container}>
      <Head>
        <title>Hello World</title>
      </Head>
      <Clock />
      <Counter />
    </div>
  )
}

export default Home
