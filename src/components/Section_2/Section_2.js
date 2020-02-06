import React from 'react';
import './Section_2.css'
import Image from '../../images/undraw_resume.png'
import ScrollAnimation from 'react-animate-on-scroll';

const Section_2 = () => {
    return (
<div className="Section_2_Main_Container">
    <div className="S2_TextContainer">
        <h2>Long long long Title....</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining </p>
    </div>
    <div className="S2_Img_Container"><img src={Image} alt="image" /></div>
</div>
    )
    }
    export default Section_2