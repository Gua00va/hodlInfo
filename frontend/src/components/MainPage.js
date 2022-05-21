import React, { useState, useEffect } from 'react';
import "./styles.css";
import {Header} from "./Header";
import {Footer} from "./Footer";
import {RowItem} from './RowItem';
import 'react-circular-progressbar/dist/styles.css';
import axios from 'axios';


export const MainPage = () => {
    var index = 0;
    const [isLightTheme, setIsLightTheme ] = useState(false);
    // const [crypto, setcrypto] = useState([]);
     const [coins, setcoins] = useState([]);

    const fetchData = async ()=>{
        const {data} = await axios.get('http://localhost:8000/api/getData');
        console.log(data);
        //coins = data.map((x) => x);
        setcoins(data)
        console.log(coins) 
    }

    const updateData = async () =>{
        const res = await axios.post('http://localhost:8000/api/updateData');
        console.log(res);
    }

     useEffect(() => {
        updateData();
        fetchData()
     },[])
     
      

const onThemeButtonClick = () => {
    setIsLightTheme(!isLightTheme)

};
    return (
        <React.Fragment>
            <div className={("theme-") + (isLightTheme ? "light" : "dark")}>
            <Header isLightTheme={isLightTheme} onThemeButtonClick={onThemeButtonClick }/>
            <div className="fiat-crypto-table table-responsive" style={{ margin: "0px auto", }}>
                <table className="table table-borderless text-center">
                    <thead>
                        <tr><th>
                                <h4><span className="pointer">#</span></h4>
                            </th>
                            <th>
                                <h4><span className="pointer">Name</span></h4>
                            </th>
                            <th>
                                <h4><span className="pointer">Last</span></h4>
                            </th>
                            <th><h4><span className="pointer">Buy/Sell Price</span></h4>
                            </th>
                            <th><h4><span className="pointer">Volume</span></h4>
                            </th>
                            <th>
                                <h4><span className="pointer">base_unit</span></h4>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {coins.map((coin)=>{
                            index = index + 1;
                            return <RowItem name={coin.name} last={coin.last} buy={coin.buy} sell={coin.sell} volume={coin.volume} base_unit={coin.base_unit} index={index}/>
                        })}
                    </tbody>
                </table>
                <div style={{height: "350px" ,backgroundColor:"0c0f48"}}></div>
            </div>
            <Footer style={{position: "absolute"}}/>
        </div>

        </React.Fragment>
    )
};