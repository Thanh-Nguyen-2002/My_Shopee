import React, { useEffect } from "react";
import styles from '../../assets/styles/Slice.module.css'
import { 
    RightOutlined,
    LeftOutlined
} from '@ant-design/icons';

const Slice = () => {

    const [isSlice, setIsSlice] = React.useState("0");
    const startSlice = parseInt(isSlice);
    const endSlice = parseInt(isSlice) + 1;

    const handleLeft = () => {
        if (startSlice === 0) {
            setIsSlice(data_Slice.length - 1);
        } else {
            setIsSlice(startSlice - 1);
        }
    }

    const handleRight = () => {
        if (startSlice === data_Slice.length - 1) {
            setIsSlice(0);
        } else {
            setIsSlice(startSlice + 1);
        }
    }

    useEffect (() => {
        const timer = setTimeout(() => {
            if(startSlice === data_Slice.length -1) {
                setIsSlice(0);
            }else {
                setIsSlice(startSlice + 1);
            }
            console.log(1);
            
        } , 30000)

        return () => clearTimeout(timer);
    }, [startSlice]);
    

    const data_Slice = [
        {
            id: 1,
            title: "Slice 1",
            image: "/slice1.png"
        },
        {
            id: 2,
            title: "Slice 2",
            image: "/slice2.jpg"
        }
    ]

    return (
        <div className={styles.container}>
            <div className={styles.left} onClick={() => handleLeft()}>
                <LeftOutlined />
            </div>
            <div className={styles.image}>
                {
                    data_Slice.slice(startSlice, endSlice).map((slice) => (
                        <img key={slice.id} src={slice.image} alt={slice.title} />
                    ))
                }
            </div>
            <div className={styles.right} onClick={() => handleRight()}>
                <RightOutlined />
            </div>
            <div className={styles.slice}>
                {
                    data_Slice.map((slice) => (
                        <div 
                            key={slice.id} 
                            onClick={() => setIsSlice(slice.id - 1)}
                            className= {`${styles.slice_item} ${startSlice === slice.id - 1 ? styles.active : ''}`}
                        >
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
export default Slice;