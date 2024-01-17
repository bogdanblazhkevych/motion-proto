import { UserInterface } from '../colab/data'
import styles from './styles.module.css'
import Image from 'next/image'

interface ProjectColaboratorsPropsInterface {
    colaborators: UserInterface[]
}

export default function ProjectContributors(props: ProjectColaboratorsPropsInterface) {
    
    const { colaborators } = props

    return(
        <div className={styles.projectcontributorswrapper}>
            <div className={styles.titlecontainer}>
                <p>Contributors</p>
                <div className={styles.contributorcount}>
                    {colaborators.length}
                </div>
            </div>

            <div className={styles.projectcontributorsphotoswrapper}>
                {colaborators.slice(0, 4).map((entry, index) => {
                    return(
                        <>
                            <div className={styles.contributorimagewrapper}>
                                <img src={entry.profilePicture}></img>
                            </div>
                            {index + 1 === colaborators.slice(0, 4).length && colaborators.length > 4 && (
                                <div className={styles.remainingcolaboratorcount}>
                                    +{colaborators.length - 4} Others
                                </div>
                            )}
                        </>
                    )
                })}
            </div>
        </div>
    )
}