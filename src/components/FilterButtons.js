import { useEffect } from "react";
import { motion } from "framer-motion"

function FilterButtons({setActiveGenere, activeGenere, setFiltered, trending}){

    useEffect(() => {
        if(activeGenere === 0){
            setFiltered(trending)
            return;
        }
        const filtered = trending.filter((movie) => movie.genre_ids.includes(activeGenere));
        setFiltered(filtered);
    }, [activeGenere])

    return(
        <div className="filter-btns-container">
            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className={activeGenere === 0 ? "active" : ""} onClick={() => setActiveGenere(0)}>All</motion.button>
            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className={activeGenere === 35 ? "active" : ""} onClick={() => setActiveGenere(35)}>Comedy</motion.button>
            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className={activeGenere === 28 ? "active" : ""} onClick={() => setActiveGenere(28)}>Action</motion.button>
        </div>
    )
}

export default FilterButtons