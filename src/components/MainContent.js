import React from 'react';

function MainContent() {
  return (
    <div className='main-container'>
        <div className='content'>
         <h2 style={{marginLeft:"5px"}}>ES6 constructors</h2>
         <p lang='eng'>
         JavaScript Class constructor
</p><br />
<div className='rectangle' id="rectangle">
<p>
<h3>Definition and Usage</h3><br/><br/>
The constructor() method is a special method for creating and initializing objects created within a class.

The constructor() method is called automatically when a class is initiated, and it has to have the exact name "constructor", in fact, if you do not have a constructor method, JavaScript will add an invisible and empty constructor method.

Note: A class cannot have more than one constructor() method. This will throw a SyntaxError.

You can use the super() method to call the constructor of a parent class (see "More Examples" below).
<br/></p><p className='example'>&lt;!DOCTYPE html&gt;<br/>
&lt;html&gt;<br/>
&lt;body&gt;<br/>

&lt;h1&gt;JavaScript Statements&lt;/h1&gt;<br/>
&lt;h2&gt;The class Statement&lt;/h2&gt;<br/>

&lt;p id="demo"&gt;&lt;/p&gt;<br/>

&lt;script&gt;<br/>
class Car &#123;<br/>
  constructor(brand) &#123;<br/>
    this.carName = brand &semi;<br/>
    &#125; &#125;<br/>

myCar = new Car("Ford");<br/>
document.getElementById("demo").innerHTML = "My car is a " + myCar.carName;<br/>
&lt;/script&gt;<br/>

&lt;/body&gt;<br/>
&lt;/html&gt;</p>
<h2 id="circle">Syntax</h2><br/><p className='example'>
constructor(parameters)</p>
<p>More Examples<br/><br/>
To create a class inheritance, use the extends keyword.

A class created with a class inheritance inherits all the methods from another class:</p>
<p id="ellipse" className='example'>class Car &#123;<br/>
  constructor(brand) &#123;<br/>
    this.carname = brand;<br/>
    &#125;<br/>
  present() &#123;<br/>
    return 'I have a ' + this.carname;<br/>
    &#125;<br/>
    &#125;<br/>

class Model extends Car &#123;<br/>
  constructor(brand, mod) &#123;<br/>
    super(brand);<br/>
    this.model = mod;<br/>
    &#125;<br/>
  show() &#123;<br/>
    return this.present() + ', it is a ' + this.model;<br/>
    &#125;<br/>
    &#125;<br/>

mycar = new Model("Ford", "Mustang");<br/>
document.getElementById("demo").innerHTML = mycar.show();<br/></p>
<p>The super() method refers to the parent class.<br/><br/>

By calling the super() method in the constructor method, we call the parent's constructor method and get access to the parent's properties and methods.</p>
</div>

        </div>
        <div className='blog-card'>
          <div className='content-blog'>
             <div>In this article </div>
             <div className='options'>
             <div><a href='#rectangle'>ES6 Constructors</a></div><br/>
             <div><a href='#circle'>Syntax</a></div><br/>
             <div> <a href="#ellipse">Examples</a></div>
             </div>
             
            
          </div>
          <div className='scrolltop'><a href="#"><button>Scroll to Top</button></a></div>
        </div>

    </div>
  )
}

export default MainContent;