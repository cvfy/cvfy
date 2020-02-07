import React from 'react';
import '../../styles/Desktop.css';
import wallpaper from '../../assets/wallpaper.png';
import ScrollAnimation from 'react-animate-on-scroll';


const Desktop = () => {
    return ( 
        <div className="Desktop_Main_Container">
            <div className="Desktop_ColoredPart">
            <ScrollAnimation animateIn="fadeIn delay-0s"><div className="TitleText">
                <h1>Here will be a very very cool Title!</h1>
                <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
                </p></div></ScrollAnimation>
                <ScrollAnimation animateIn="fadeInDown delay-0s"><div className="MonitorLeftSide">
                <div className="Monitor">
                    <div className="MonitorFrame">
                        <img src={wallpaper} alt="wallpaper"/>
                    </div>
                    <div className="MonitorFoot"></div>
                    <div className="MonitorStand"></div>
                </div>
                </div></ScrollAnimation>
            </div>
            <div className="Desktop_WhitePart">
                <div className="Table_Items">
                <ScrollAnimation className='Desktop_Button' animateIn="bounceInLeft delay-0s"><div>SIGN UP</div></ScrollAnimation>
                    <div className="TextNote"><h4>To do:</h4><p>Build a <br />Cool CV</p></div>
                    <div className="MobilePhone">
                        <div className="MobileScreen">

                        </div>
                        <div className="MobileButton"></div>
                    </div>
                    <div className="keyboard_mouse">
                    <div className="keyboardMonitor">
                    <div class="keyboard">
  <div class="keyboard__row keyboard__row--h1">
    <div data-key="27" class="key--word">
      <span>esc</span>
    </div>
    <div data-key="112" class="key--fn">
      <span>F1</span>
    </div>
    <div data-key="113" class="key--fn">
      <span>F2</span>
    </div>
    <div data-key="114" class="key--fn">
      <span>F3</span>
    </div>
    <div data-key="115" class="key--fn">
      <span>F4</span>
    </div>
    <div data-key="116" class="key--fn">
      <span>F5</span>
    </div>
    <div data-key="117" class="key--fn">
      <span>F6</span>
    </div>
    <div data-key="118" class="key--fn">
      <span>F7</span>
    </div>
    <div data-key="119" class="key--fn">
      <span>F8</span>
    </div>
    <div data-key="120" class="key--fn">
      <span>F9</span>
    </div>
    <div data-key="121" class="key--fn">
      <span>F10</span>
    </div>
    <div data-key="122" class="key--fn">
      <span>F11</span>
    </div>
    <div data-key="123" class="key--fn">
      <span>F12</span>
    </div>
    <div data-key="n/a" class="key--word">
      <span>pwr</span>
    </div>
  </div>
  <div class="keyboard__row">
    <div class="key--double" data-key="192">
      <div>~</div>
      <div>`</div>
    </div>
    <div class="key--double" data-key="49">
      <div>!</div>
      <div>1</div>
    </div>
    <div class="key--double" data-key="50">
      <div>@</div>
      <div>2</div>
    </div>
    <div class="key--double" data-key="51">
      <div>#</div>
      <div>3</div>
    </div>
    <div class="key--double" data-key="52">
      <div>$</div>
      <div>4</div>
    </div>
    <div class="key--double" data-key="53">
      <div>%</div>
      <div>5</div>
    </div>
    <div class="key--double" data-key="54">
      <div>^</div>
      <div>6</div>
    </div>
    <div class="key--double" data-key="55">
      <div>&</div>
      <div>7</div>
    </div>
    <div class="key--double" data-key="56">
      <div>*</div>
      <div>8</div>
    </div>
    <div class="key--double" data-key="57">
      <div>(</div>
      <div>9</div>
    </div>
    <div class="key--double" data-key="48">
      <div>)</div>
      <div>0</div>
    </div>
    <div class="key--double" data-key="189">
      <div>_</div>
      <div>-</div>
    </div>
    <div class="key--double" data-key="187">
      <div>+</div>
      <div>=</div>
    </div>
    <div class="key--bottom-right key--word key--w4" data-key="8">
      <span>delete</span>
    </div>
  </div>
  <div class="keyboard__row">
    <div class="key--bottom-left key--word key--w4" data-key="9">
      <span>tab</span>
    </div>
    <div class="key--letter" data-char="Q">Q</div>
    <div class="key--letter" data-char="W">W</div>
    <div class="key--letter" data-char="E">E</div>
    <div class="key--letter" data-char="R">R</div>
    <div class="key--letter" data-char="T">T</div>
    <div class="key--letter" data-char="Y">Y</div>
    <div class="key--letter" data-char="U">U</div>
    <div class="key--letter" data-char="I">I</div>
    <div class="key--letter" data-char="O">O</div>
    <div class="key--letter" data-char="P">P</div>
    <div class="key--double" data-key="219" data-char="{[">
      <div></div>
      <div></div>
    </div>
    <div class="key--double" data-key="221" data-char="}]">
      <div></div>
      <div></div>
    </div>
    <div class="key--double" data-key="220" data-char="|\">
      <div>|</div>
      <div>\</div>
    </div>
  </div>
  <div class="keyboard__row">
    <div class="key--bottom-left key--word key--w5" data-key="20">
      <span>caps lock</span>
    </div>
    <div class="key--letter" data-char="A">A</div>
    <div class="key--letter" data-char="S">S</div>
    <div class="key--letter" data-char="D">D</div>
    <div class="key--letter" data-char="F">F</div>
    <div class="key--letter" data-char="G">G</div>
    <div class="key--letter" data-char="H">H</div>
    <div class="key--letter" data-char="J">J</div>
    <div class="key--letter" data-char="K">K</div>
    <div class="key--letter" data-char="L">L</div>
    <div class="key--double" data-key="186">
      <div>:</div>
      <div>;</div>
    </div>
    <div class="key--double" data-key="222">
      <div>"</div>
      <div>'</div>
    </div>
    <div class="key--bottom-right key--word key--w5" data-key="13">
      <span>return</span>
    </div>
  </div>
  <div class="keyboard__row">
    <div class="key--bottom-left key--word key--w6" data-key="16">
      <span>shift</span>
    </div>
    <div class="key--letter" data-char="Z">Z</div>
    <div class="key--letter" data-char="X">X</div>
    <div class="key--letter" data-char="C">C</div>
    <div class="key--letter" data-char="V">V</div>
    <div class="key--letter" data-char="B">B</div>
    <div class="key--letter" data-char="N">N</div>
    <div class="key--letter" data-char="M">M</div>
    <div class="key--double" data-key="188">
      <div>&lt;</div>
      <div>,</div>
    </div>
    <div class="key--double" data-key="190">
      <div>&gt;</div>
      <div>.</div>
    </div>
    <div class="key--double" data-key="191">
      <div>?</div>
      <div>/</div>
    </div>
    <div class="key--bottom-right key--word key--w6" data-key="16-R">
      <span>shift</span>
    </div>
  </div>
  <div class="keyboard__row keyboard__row--h3">
    <div class="key--bottom-left key--word">
      <span>fn</span>
    </div>
    <div class="key--bottom-left key--word key--w1" data-key="17">
      <span>control</span>
    </div>
    <div class="key--bottom-left key--word key--w1" data-key="18">
      <span>option</span>
    </div>
    <div class="key--bottom-right key--word key--w3" data-key="91">
      <span>command</span>
    </div>
    <div class="key--double key--right key--space" data-key="32" data-char=" ">
      &nbsp;
    </div>
    <div class="key--bottom-left key--word key--w3" data-key="93-R">
      <span>command</span>
    </div>
    <div class="key--bottom-left key--word key--w1" data-key="18-R">
      <span>option</span>
    </div>
    <div data-key="37" class="key--arrow">
      <span>&#9664;</span>
    </div>
    <div class="key--double key--arrow--tall" data-key="38">
      <div>&#9650;</div>
      <div>&#9660;</div>
    </div>
    <div data-key="39" class="key--arrow">
      <span>&#9654;</span>
    </div>
  </div>
</div>   
</div>
<div className="compMouse">
    <div className="mouseLeftButton"></div>
    <div className="mouseRightButton"></div>
</div>
                    </div>
                    <div className="coffeeCup">
                    <div class="loader">
  <div class="cup">
      <h4>CV|FY</h4>
    <div class="smoke"></div>
    <div class="handle"></div>
  </div>
  <div class="plate">
     <div class="plate-sup"></div>
    <div class="plate-inf"></div>
    <div class="shadow"></div>
  </div>
</div>

                    </div>
                </div>
            </div>
            <div className="FooterUpperBorder"></div>

        </div>
     );
}
 
export default Desktop;