import Header from '../../components/Header';
import ProjectSlider from '../../components/ProjectSlider';
import s from './WorksPage.module.css'

export default function WorksPage() {

    return(
        <div className={s.works}>
            <Header/>
            <ProjectSlider />
        </div>
    )
}