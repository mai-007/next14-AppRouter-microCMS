import styles from '@/styles/post-categories.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolderOpen } from '@fortawesome/free-regular-svg-icons'
import Link from 'next/link'

export default function PostCategories({ categories }){
  return(
    <div className='styles.flexContainer'>
      <h3 className='styles.heading'>
        <FontAwesomeIcon icon={faFolderOpen}/>
        <span className='sr-only'>Categories</span>
      </h3>
      <ul className={styles.list}>
        {categories.map(({ name, slug }) =>(
          <li key={slug}>
            <Link href={`/blog/categorie/${slug}`}>
              {name}
            </Link>
          </li>
    ))}
      </ul>
    </div>
  )
}