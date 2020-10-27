import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <p className="span">
            <a className="navbar-link" href="/">Home</a>
        </p>
        <p className="span">
            <a className="navbar-link" href="/game">Play</a>
        </p>
      </header>
      <main className={styles.main}>
        <h1 className={styles.title}>
          About
        </h1>
        <div className={styles.grid}>
            <p className={styles.description}>
                The Game of Life is a cellular automaton devised by the British mathematician John Horton Conway in 1970. It is a zero-player game, meaning that its evolution is determined by its initial state, requiring no further input. One interacts with the Game of Life by creating an initial configuration and observing how it evolves. It is Turing complete and can simulate a universal constructor or any other Turing machine.
                To learn even more, visit the <a className={styles.link} href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life">Wikipedia Page</a>.
            </p>
        </div>

      </main>
      <footer className={styles.footer}>
        <p>A Project by Oliver Abreu</p>
      </footer>
    </div>
  )
}
