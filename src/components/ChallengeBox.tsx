import styles from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox(): JSX.Element {
 

  return (
    <div className={styles.challengeBoxContainer}>
      {true ? (
        <div className={styles.challengeActive}>
          <header>
            Ganhe
            {' '}
            123
            {' '}
            xp
          </header>

          <main>
            <img src={`icons/completed.svg`} alt="Body" />

            <strong>Exercite-se</strong>

            <p>
              Teste

            </p>
          </main>

          <footer>
            <button
              type="button"
              className={styles.challengeFailedButton}
              onClick={() => null}
            >
              Falhei
            </button>
            <button
              type="button"
              className={styles.challengeSucceededButton}
            >
              Completei
            </button>
          </footer>
        </div>
      ) : (
        <div className={styles.challengeNotActive}>
          <p>
            Inicie um ciclo
            <br />
            {' '}
            para receber desafios
          </p>

          <img src="icons/level-up.svg" alt="Level up" />

          <span>
            Avance de level completando
            <br />
            {' '}
            os desafios.
          </span>
        </div>
      )}
    </div>
  );
}