---
layout: page
title: Editorial Score - A guide to create powerful story
permalink: /editorialscore
comments: false
---

<script src="{{ site.baseurl }}/assets/js/editorialscore.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/core.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.js"></script>




<div class="progress">
       <div class="progress-bar" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
        <p>Value: <span id="progress"></span></p>
   </div>
   </div>

<br>

<h5>Downside</h5>
<div class="checkbox">
  <label><input name="p10" class="progress" type="checkbox" id="first" onselect="add(p10.value)"> Does the title contain somewhat positive messages? (10)</label><br>
  <label><input name="p20" class="progress" type="checkbox" id="second" onselect="add(p20.value)"> Does the title contain assumptions about people? (10)</label><br>
  <label><input name="p30" class="progress" type="checkbox" id="third" onselect="add(p30.value)"> Does the title sound like government campaign? (10)</label><br>
  <label><input name="p40" class="progress" type="checkbox" id="fourth" onselect="add(p40.value)"> Is the answer easily googled by everyone? (-10)</label>
</div>

<script>
       
    </script>

<br>

<h5>Upside</h5>
<div class="checkbox">
  <label><input name="progress" class="progress" type="checkbox" value="10"> Is there any big 'ternyata' inside the story?</label>
  <br>
  <label><input name="progress" class="progress" type="checkbox" value="20"> Is it trying to uncover world's grandest mystery? (10)</label><br>
  <label><input type="checkbox" value="30"> Is the story full of contradictions, fighting and invited people to argue? (10)</label><br>
  <label><input type="checkbox" value="40"> Is it a question that's always <i>there</i>, but no one has answer to? (10)</label><br>
  <label><input type="checkbox" value="10"> Can you tell five more 'ternyata' inside the story? (+10)</label><br>
  <label><input type="checkbox" value="10"> Can it relate directly to human experience? (+10)</label><br>
  <label><input type="checkbox" value="10"> Does the story bring new perspective to people's lives — against society's common opinion? (+10)</label><br>
</div>
<br>

<p>*Try to score at least 50</p>
