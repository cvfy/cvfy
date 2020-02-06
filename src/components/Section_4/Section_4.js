import React from 'react';
import './Section_4.css'
import Image from '../../images/undraw_folder.png'

const Section_4 = () => {
    return (
<div className="Section_4_Main_Container">
    <div className="S4_TextContainer">
        <h2>Long long long Title....</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining </p>
    </div>
    <div className="S4_Img_Container"><img src={Image} alt="image" /></div>
</div>
    )
    }
    export default Section_4