import styles from './styles.module.css'
import Messages from '@/app/components/messages/messages'

export default function Ecosystems() {
    return (
        <div className={styles.ecosystemswrapper}>
            <div className={styles.boxone}>
                <Messages />
            </div>
        </div>
    )
}