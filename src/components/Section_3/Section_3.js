import React from 'react';
import './Section_3.css'
import Image from '../../images/undraw_select.png'
import ScrollAnimation from 'react-animate-on-scroll';

const Section_3 = () => {
    return (
<div className="Section_3_Main_Container">
<ScrollAnimation className="S3_Img_Container" animateIn="fadeInLeft delay-0s">><img src={Image} alt="image" /></ScrollAnimation>
    <ScrollAnimation className="S3_TextContainer" animateIn="fadeInUp delay-0s">
        <h2>Long long long Title....</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining </p>
    </ScrollAnimation>
</div>
    )
    }
    export default Section_3