import React from "react";
import styles from '../../assets/styles/Search.module.css'
import { 
    SearchOutlined 
} from '@ant-design/icons'
import { Button } from "antd";

const Search = () => {
    const [inputSearch, setInputSearch] = React.useState("");
    const inputRef = React.useRef("");

    return(
        <div className={styles.container}>
            <div className={styles.search}>
                <input ref={inputRef} type="text" placeholder="Tìm kiếm sản phẩm, danh mục, shop..." />
                <div className={styles.search_btn}>
                    <Button className={styles.btn} 
                        icon={<SearchOutlined />} 
                        size="large"
                        style={{
                            backgroundColor: '#ee4d2d',
                            color: 'white',
                            borderRadius: '5px',
                            fontSize: '18px',
                            fontWeight: '600',
                            border : 'none',
                            height: 36,
                            width: 60,
                        }}
                        onClick={() => setInputSearch(inputRef.current.value)}
                    />
                </div>
            </div>
        </div>
    )
}
export default Search;