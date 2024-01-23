'use client'

import Logo from '@/app/components/logo/logo'
import styles from './styles.module.css'
import { MdSpaceDashboard } from "react-icons/md";
import { ImLab } from "react-icons/im";
import { MdAnalytics } from "react-icons/md";
import { FaShoppingBag } from "react-icons/fa";
import { MdConnectWithoutContact } from "react-icons/md";
import { usePathname } from 'next/navigation';

export default function Menu() {

    const pathname = usePathname();

    return (
        <div className={styles.menuwrapper}>
            <div className={styles.logowrapper}>
                <div className={styles.logocontainer}>
                    <Logo />
                </div>
            </div>
            <div className={styles.links}>
                <div className={`${styles.linkwrapper} ${pathname === '/dashboard' && styles.linkwrapperactive}`}>
                    <div className={styles.linkIcon}>
                        <MdSpaceDashboard />
                    </div>
                    <div className={styles.linkName}>
                        Dashboard
                    </div>
                </div>
                <div className={styles.linkwrapper}>
                    <div className={styles.linkIcon}>
                        <MdAnalytics />
                    </div>
                    <div className={styles.linkName}>
                        Analytics
                    </div>
                </div>
                <div className={styles.linkwrapper}>
                    <div className={styles.linkIcon}>
                        <ImLab />
                    </div>
                    <div className={styles.linkName}>
                        Idea Lab
                    </div>
                </div>
                <div className={styles.linkwrapper}>
                    <div className={styles.linkIcon}>
                        <MdConnectWithoutContact />
                    </div>
                    <div className={styles.linkName}>
                        Ecosystems
                    </div>
                </div>
                <div className={styles.linkwrapper}>
                    <div className={styles.linkIcon}>
                        <FaShoppingBag />
                    </div>
                    <div className={styles.linkName}>
                        Marketplace
                    </div>
                </div>
            </div>
        </div>
    )
}