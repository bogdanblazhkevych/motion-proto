import LoginModule from './components/loginmodule/loginmodule'
import styles from './page.module.css'

export default function Home() {

  return (
    <main className={styles.main}>
      {/* <LoginModule /> */}
      <svg className={styles.backgroundsvg} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 192 108">
        <rect width="192" height="108" fill="#111" stroke-width="0" />
        <path className={styles.blobone} d="m124.86,23.22s30.01-29.8,43.02,12.46c3.07,9.98,18.64-8.31,22.62,12.95s-14.63,69.77-43.94,52.58c-29.32-17.19-14.1-37.03-14.1-37.03,0,0-39.59-26.36-7.6-40.96Z" fill="#047aa6" stroke-width="0" />
        <path className={styles.blobtwo} d="m127.01,26.11c-53.71-10.76-19.1,22.88-48.28,27.91s-17.04,57,7.72,37.34,10.52,15.81,26.34,9.48,109.09-55.73,14.23-74.73Z" fill="#17404f" stroke-width="0" />
        <path className={styles.blobthree} d="m10.68,31.19s-20.54,40.68,0,61.21c20.54,20.52,22.7-8.51,47.56-2.06s-12.99-26.88,4.86-44.09C80.94,29.04,26.9-5.38,10.68,31.19Z" fill="#047aa6" stroke-width="0" />
        <path className={styles.blobfour} d="m81.87,40.82s17.56,1.63,8.46,19.63c-9.1,18,4.84,27.38,4.84,27.38,0,0,19.8,19.34-9.27,19.81-29.07.47-56.21-63.68-4.02-66.82Z" fill="#092f69" stroke-width="0" />
        <path className={styles.blobfive} d="m121.97,13.76s-21.11,36.45,10.91,48.91c32.02,12.45,16.16-20.4,30.44-8.97,14.28,11.43,40.79-35.19,12.25-40.74-28.54-5.55-10.13-25.56-53.61.8Z" fill="#092f69" stroke-width="0" />
        <path className={styles.blobsix} d="m30.53,6.65s29.89-12.77,35.94,18.43c6.05,31.2-35.75,51.34-40.38,23.12s-16.52-2.85-22.61-19.46C-2.62,12.13,18.55-2.86,30.53,6.65Z" fill="#004166" stroke-width="0" />
        <path className={styles.blobseven} d="m108.95,10.02s-38.95-20.02-38.95,4.98c0,8-12,6-12,6,0,0-19.54-5.56-10.27,13.72s31.27,27.28,34.27,10.28,15,6,22-6,27.91-21.97,4.95-28.98Z" fill="#047aa6" stroke-width="0" />
      </svg>
      <LoginModule />
    </main>
  )
}