import Player from '../../components/Player';
import s from './PlayerPage.module.css';

export default function PlayerPage() {
 
    return(
        <div className={s.player}>
            <Player/>
        </div>
    )
}