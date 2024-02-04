import styles from './styles.module.css'

export default function Notifications() {
    return(
        <div className={styles.notificationswrapper}>
            <div className={styles.title}>
                Notifications
            </div>
            <div className={styles.notificationscontainer}>
                <NotificationNode 
                    icon="https://randomuser.me/api/portraits/men/43.jpg" 
                    name="Maria"
                    message="Should I send Daniel the proposed downsizing plan?"/>
                <NotificationNode 
                    icon="https://randomuser.me/api/portraits/men/43.jpg" 
                    name="Roy"
                    message="Agreed, but we should really consider the posibility of downsizing"/>
                <NotificationNode 
                    icon="https://randomuser.me/api/portraits/men/11.jpg" 
                    name="Daniel C"
                    message="Have you spoken to Ken about the acquisition of"/>
                <NotificationNode 
                    icon="https://randomuser.me/api/portraits/men/71.jpg" 
                    name="Ken"
                    message="the proposed acquisition was terminated"/>
            </div>
        </div>
    )
}

interface NotificationsNodeInterface {
    icon: string;
    name: string;
    message: string
}

function NotificationNode(props: NotificationsNodeInterface) {
    const { icon, name, message } = props;
    return(
        <div className={styles.nodewrapper}>
            <div className={styles.imagewrapper}>
                {name === "Maria" ? <div className={styles.mariaicon}></div> : <img src={icon}></img>}
            </div>
            <div className={styles.textwrapper}>
                <div className={styles.textname}>
                    {name}
                </div>
                <div className={styles.textmessage}>
                    {message}
                </div>
            </div>
        </div>
    )
}   