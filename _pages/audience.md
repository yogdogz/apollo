---
layout: page
title: Audience
permalink: /audience
comments: false
---

<div class="row justify-content-between">
<div class="col-md-8 pr-5">

<p>Hey guys what the fuck.</p>

<h4>How many people follow Kokbisa?</h4>
<h6>Total user: 2,100,000 indonesian people</h6>
<p><i class='fab fa-youtube'></i></span> YouTube: <b>1,780,000</b> subscribers</p>
<p><i class='fab fa-instagram'></i></span> Instagram: <b>250,000</b> followers</p>
<p><i class='fas fa-desktop'></i> Website: <b>15,000</b> unique visitor</p>

</br>

<h4>Who is our audience?</h4>
<link href='https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400' rel='stylesheet' type='text/css'>

<div class="graph-cont">
  <h1>Responsive CSS Only Animated Bar Graph</h1>
  <div class="bar bar1">60%</div>
  <div class="bar bar2">72%</div>
  <div class="bar bar3">47%</div>
  <div class="bar bar4">20%</div>
</div>
<div class="how-cont">
  <h2>How do I do it?</h2>
  <h3>HTML</h3>
  <p>1. Container Element</p>
  <code><pre>
&lt;div class=&quot;graph-cont&quot;&gt;&lt;/div&gt;
  </pre></code>
  <p>2. Add as many bars as you need inside the container element. Number the second class.</p>
  <code><pre>
&lt;div class=&quot;bar bar1&quot;&gt;60%&lt;/div&gt;
  </pre></code>
  <h3>CSS</h3>
  <p>1. The CSS for styling the bars collectively.</p>
  <code><pre>
.bar{
  height: 30px;
  max-width: 800px;
  margin: 0 auto 10px auto;
  line-height: 30px;
  font-size: 16px;
  color: white;
  padding: 0 0 0 10px;
  position: relative;
}
.bar::before{
  content: '';
  width: 100%;
  position: absolute;
  left: 0;
  height: 30px;
  top: 0;
  z-index: -2;
  background: #ecf0f1;
}
.bar::after{
  content: '';
  background: #2ecc71;
  height: 30px;
  transition: 0.7s;
  display: block;
  width: 100%;
  -webkit-animation: bar-before 1 1.8s;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
}
  </pre></code>
  <p>2. The Animation.</p>
  <code><pre>
@-webkit-keyframes bar-before{
  0%{
    width: 0px;
  }
  100%{
    width: 100%;
  }
}
  </pre></code>
  <p>3. Size the bars.</p>
  <code><pre>
.bar1::after{
  max-width: 60%;
}
  </pre></code>
</div>




<h4>YouTube</h4>
<iframe src="https://youcount.github.io/e/#!/UCu0yQD7NFMyLu_-TmKa4Hqg" height="100" width="250" frameborder="0"></iframe>


</div>



<div class="col-md-4">

<div class="sticky-top sticky-top-80">
<h5>Total Kokbisa Audience</h5>

<p>Here is the list of Kokbisa's current platform:

<a target="_blank" href="https://www.youtube.com/kokbisa" class="btn btn-danger">YouTube</a>
<a target="_blank" href="https://www.instagram.com/kokbisa" class="btn btn-warning">Instagram</a>
<a target="_blank" href="https://www.kokbisa.id" class="btn btn-primary">Website</a>
