import React, {useState, useEffect} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import PaginationWorks from '../PaginationWorks';
import SearchWork from '../SearchWork';
import WorkFilter from '../WorkFilter';
import { ReactComponent as Play } from '../../pictures/svg/btn-play-slider-two.svg';
import s from './AllWorksComponent.module.css';

const AllWorksComponent = ({images}) => {
    const [currentPage, setCurrentPage] = useState(1);

    const navigate = useNavigate();
    const location = useLocation();
    const playerPageUrl = `${location.pathname}/player`;

    const itemsPerPage = 3;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentImages = images.slice(startIndex, endIndex);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const goPlayer = (image) => navigate(`${playerPageUrl}`, { state: image.image });

    useEffect(() => {
        return () => {
        };
      }, [navigate, playerPageUrl]);

    return (
        <div className={s.worksBlocks}>
            <ul className={s.worksList}>
                {currentImages.map((image) => (
                <li className={s.worksEl} key={image.id}>
                    <div className={s.workBefore} style={{backgroundImage: `url(${process.env.PUBLIC_URL}/${image.image})`}}>
                        <button  className={s.link} onClick={() => goPlayer({image})}>
                            <Play className={s.play}/>
                        </button>
                        <p className={s.workTitle}>{image.alt}</p>
                        <p className={s.number}>{`0${image.id}`}</p>
                    </div>

                    <div className={s.workHidden}>
                        <p className={s.title}>{image.alt}</p>
                        <p className={s.workDuration}>{image.time}</p>
                        <p className={s.numberHidden}>{`0${image.id}`}</p>
                    </div>
                </li>
                ))}
            </ul>
            <div className={s.paginationBlock}>
                <WorkFilter/>
                <PaginationWorks
                    totalPages={Math.ceil(images.length / itemsPerPage)}
                    currentPage={currentPage}
                    onPageChange={handlePageChange}
                />
                <SearchWork/>
            </div>
            
        </div>   
    );
};
  
export default AllWorksComponent