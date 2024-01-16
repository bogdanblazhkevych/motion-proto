'use client'
import { useState } from 'react'
import { ColabNodeInterface, ProjectInterface } from '../data'
import styles from './styles.module.css'
import Progress from '../../progressbar/progressbar'
import Progressbar from '../../progressbar/progressbar'

interface ColabNodePropsInterface {
    data: ColabNodeInterface
}

export default function ColabNode(props: ColabNodePropsInterface) {
    const { data } = props

    const [expanded, setExpanded] = useState<boolean>(true)

    const handleColabNodeClick = () => {
        setExpanded(prev => !prev)
    }

    if (expanded) {
        return (
            <div onClick={handleColabNodeClick} className={styles.colabnodewrapperexpanded}>
                <div className={styles.colabnodeexpandedrow}>
                    <div className={styles.colabnodebasic}>
                        <div className={styles.expandedtitle}>
                            <p>
                                {data.entity.name}
                            </p>
                        </div>
                        <div className={styles.expandedsubtitle}>
                            <p>
                                {data.entity.startDate.getFullYear()} - {data.entity.sector}
                            </p>
                        </div>
                        <div className={styles.expandeddescription}>
                            {data.entity.description}
                        </div>
                    </div>

                    <div className={styles.colabnodedata}>
                        <DataModule metric={data.entity.marketCap} name="Market Cap" type='currency'/>
                        <DataModule metric={data.entity.annualRevenue} name="Annual Revenue" type='currency'/>
                        <DataModule metric={data.entity.connectionsMade} name="Connections Made"/>
                        <DataModule metric={data.entity.ongoingProjects} name="Ongoing Projects"/>
                    </div>
                </div>
                <div className={styles.colabnodeexpandedrow}>
                    <div className={styles.projectwrapper}>
                        {data.entity.projects.map((project, key) => {
                            return(
                                <ProjectModule project={project} />
                            )
                        })}
                    </div>
                    {/* <div className={styles.colabnodeprojects}>
                    </div> */}
                </div>
            </div>
        )
    } else {
        return (
            <div onClick={handleColabNodeClick} className={styles.colabnodewrapper}>
                <p>
                    {data.entity.name}
                </p>

                <p className={styles.sector}>
                    {data.entity.sector}
                </p>

                <div className={styles.matchconfidence}>
                    <p>
                        {data.matchConfidence * 100}%
                    </p>
                    <div className={styles.matchconfidencecolor} style={{ backgroundColor: `hsl(${data.matchConfidence * 120}, 100%, 32%)` }}>
                    </div>
                </div>
            </div>
        )
    }
}

interface DataModulePropsInterface {
    metric: number,
    name: string,
    type?: string
}

function DataModule(props: DataModulePropsInterface) {
    const { metric, name, type } = props

    const inCurrency = Intl.NumberFormat('en-US', {
        notation: "compact",
        maximumFractionDigits: 1
    }).format(metric);

    return (
        <div className={styles.datamodualwrapper}>
            <div className={styles.datamodualcontainer}>
                <div className={styles.datamodualmetric}>
                    {type === "currency" ? inCurrency : metric}
                </div>
                <div className={styles.datamodualname}>
                    {name.split(' ')[0]}<br />{name.split(' ')[1]}
                </div>
            </div>
        </div>
    )
}

interface ProjectModulePropsInterface {
    project: ProjectInterface
}


function ProjectModule(props: ProjectModulePropsInterface) {
    const { project } = props
    return(
        <div className={styles.projectmodulewrapper}>
            <p>{project.projectName}</p>
            <p>{project.projectDescription}</p>
            <p>{project.progress}</p>
            <Progressbar progress={project.progress}/>
        </div>
    )
}