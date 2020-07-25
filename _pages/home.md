---
layout: project
urltitle:  "OpenEyes 2020: Eye Gaze in AR, VR, and in the Wild"
title: "OpenEyes 2020: Eye Gaze in AR, VR, and in the Wild"
categories: iccv, workshop, computer vision, robotics, machine learning, natural language processing, gaze estimation
permalink: /
favicon: /static/img/icon.jpg
bibtex: true
paper: true
acknowledgements: ""
---

<br>
<div class="row" id="intro">
  <div class="col-xs-12">
    <center><h1>OpenEyes: Eye Gaze in AR, VR, and in the Wild</h1></center>
    <center><h2><a href="https://eccv2020.eu/workshops/">ECCV 2020 Workshop</a>, Glasgow, Scotland</h2></center>
    <!--<center>Sunday October 27 2019, 8:30am - 12:50pm</center>-->
    <!--<center>Location: <b>Room 318 A</b></center>-->
  </div>
</div>

<!--
<hr>
<div class="row">
  <div class="col-md-12">
    <div class="alert alert-success">
      Please <b><a href="https://groups.google.com/forum/#!forum/gaze-in-the-wild" target="_blank">subscribe</a></b> to our
	  <b><a href="https://groups.google.com/forum/#!forum/gaze-in-the-wild" target="_blank">new mailing list</a></b>
	  to gain access to our speakers' slides and future updates!
    </div>
  </div>
</div>
-->

<br>
<div class="row" id="news">
  <div class="col-xs-12">
    <h2>News and Updates</h2>
    <table class="table news">
      <tbody>
        <tr>
          <td>20th July</td>
          <td>We are happy to announce <a href="https://www.cc.gatech.edu/~thad/" target="_blank">Prof. Thad Starner</a> as a keynote speaker to our workshop!</td>
        </tr>
        <tr>
          <td>28th June</td>
          <td>Due to time limitations and logistical restrictions, we have decided not to host extend abstracts at this year's OpenEyes.</td>
        </tr>
        <tr>
          <td>4th June</td>
          <td>
            We are happy to announce
            <ul>
              <li><a href="http://faculty.sites.uci.edu/khargonekar/" target="_blank">Prof. Pramod Khargonekar</a> of University of California, Irvine</li>
              <li><a href="http://ilab.usc.edu/itti/" target="_blank">Prof. Laurent Itti</a> of University of Southern California</li>
            </ul>as keynote speakers to our workshop!
          </td>
        </tr>
        <tr>
          <td>30th May</td>
          <td>We have decided to extend the workshop paper submission deadline to Monday 15th June.</td>
        </tr>
        <tr>
          <td>29th May</td>
          <td>
            We are happy to announce
            <ul>
              <li><a href="https://www.ecse.rpi.edu/~qji/" target="_blank">Prof. Qiang Ji</a> of Rensselaer Polytechnic Institute</li>
              <li><a href="https://www.hci.uni-tuebingen.de/chair/team/enkelejda-kasneci" target="_blank">Prof. Enkelejda Kasneci</a> of the University of Tübingen</li>
              <li><a href="http://mkhamis.com/" target="_blank">Prof. Mohamed Khamis</a> of the University of Glasgow</li>
            </ul>as keynote speakers to our workshop!
          </td>
        </tr>
        <tr>
          <td>19th May</td>
          <td><a href="https://eccv2020.eu/update-on-coronavirus/" target="_blank">ECCV is going virtual</a>, and thus so is OpenEyes 2020. We will announce further details as they become available to us. In general, we will be run in the same fashion as the main conference and other ECCV workshops.</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

<br>
<div class="row" id="cfp">
  <div class="col-xs-12">
    <h2>Introduction</h2>
  </div>
</div>
<div class="row">
  <div class="col-xs-12">
  <p>
  With the advent of consumer products, AR and VR as a form of immersive technology is gaining
  mainstream attention. However, immersive technology is still in its infancy, as both users and
  developers figure out the right recipe for the technology to garner mass appeal.
  </p>
  <p>
  Eye tracking, a technology that measures where an individual is looking and can enable
  inference of user attention, could be a key driver of mass appeal for the next generation of
  immersive technologies, provided user awareness and privacy related to eye-tracking features
  are taken into account. As such, there is a growing interest in improving the state-of-the-art
  for eye tracking technology. In the past three years, investigations into gaze estimation and
  prediction methods produced significant improvements in robustness and accuracy by adopting
  increasingly unique deep neural network architectures. These improvements allow innovative
  applications for this technology, such as zero-shot image classification and generalized human
  attention and intent estimation.
  </p>
  <p>
  Open forums of discussion provide opportunities to further improve eye tracking technology,
  especially in areas like scale and generalization challenges in the next generation of AR and
  VR systems. For that reason,
  <a target="_blank" href="https://research.fb.com/">Facebook</a> organized the first challenge
  <a target="_blank" href="https://research.fb.com/programs/the-2019-openeds-workshop-eye-tracking-for-vr-and-ar/">“Eye Tracking for VR and AR (OpenEDS)”</a>
  at the ICCV 2019 and the independent GAZE committee organized a workshop titled
  <a target="_blank" href="https://gazeworkshop.github.io/">“Gaze Estimation and Prediction in the Wild (GAZE)”</a>.
  </p>
  <p>
  For 2020, the Facebook and GAZE committees are partnering to host a joint workshop titled
  “Eye Gaze in VR, AR, and in the Wild” at the biennial <a href="https://eccv2020.eu/">ECCV conference</a>.
  The workshop will host
  two tracks: the first focuses on gaze estimation and prediction methods, with a focus on
  accuracy and robustness in natural settings (in-the-wild); the second track focuses on the
  scale and generalization problem for eye tracking systems operating on AR and VR platforms.
  The second track also includes the 2020 eye tracking challenge.
  More information on the OpenEDS 2020 challenge can be found at
  <a href="https://research.fb.com/programs/openeds-2020-challenge/">https://research.fb.com/programs/openeds-2020-challenge/</a>
  </p>

  <p>
  The following topics are of particular interest to the joint workshop:
  </p>
  <ul>
  <li>
  Proposal of novel eye detection, gaze estimation pipelines using deep neural networks that incorporate one or all of the following:
  <ul>
  <li>Geometric/anatomical constraints into the network in a differentiable manner.</li>
  <li>Demonstration of robustness to conditions where current methods fail (illumination, appearance, low-resolution etc.).</li>
  <li>Robust estimation from different data modalities such as RGB, depth, and near IR.</li>
  <li>Use of additional cues, such as task context, temporal data, eye movement classification.</li>
  </ul>
  </li>
  <li>Designing new, accurate metrics to account for rapid eye movements in the real world.</li>
  <li>Semi-/un-/self-supervised learning, meta-learning, domain adaptation, attention mechanisms and other related machine learning methods for gaze estimation.</li>
  <li>Methods for temporal gaze estimation and prediction including Bayesian methods.</li>
  <li>Unsupervised semantic segmentation of eye regions.</li>
  <li>Active learning frameworks for semantic segmentation of eye images.</li>
  <li>Generative models for eye image synthesis and gaze estimation.</li>
  <li>Transfer learning for eye tracking from simulation data to real data.</li>
  <li>Domain transfer applications for eye tracking.</li>
  </ul>

  <p>
  This workshop will accept submissions of both published and unpublished works. We will also
  solicit high-quality eye tracking-related papers rejected at ECCV 2020, accompanied by the
  reviews and a letter of changes which clearly states the changes made to address comments by
  the previous reviewers. Accepted papers may be featured as spotlight talks and posters.
  </p>
</div>
</div>
<br>

<div class="row" id="calls">
  <div class="col-xs-12 panel-group">
    <h2>Call for Contributions</h2>
    <br>
    <div class="panel panel-default">
      <div class="panel-heading" data-toggle="collapse" data-parent="#call" href="#call-papers" style="cursor:pointer;">
        <h3 style="margin:0;">Full Workshop Papers</h3>
      </div>
      <div id="call-papers" class="panel-collapse collapse" data-parent="#call">
        <div class="panel-body">
          <p>
	    <span style="font-weight:500;">Submission:</span> We invite authors to submit unpublished papers (14-page <a href="https://eccv2020.eu/author-instructions/" target="_blank">ECCV format</a>) to our workshop, to be presented at a poster session upon acceptance. All submissions will go through a double-blind review process. All contributions must be submitted (along with supplementary materials, if any) at
	    <a href="https://openreview.net/group?id=thecvf.com/ECCV/2020/Workshop/OpenEyes" target="_blank" title="OpenReview Submission System for OpenEyes 2020">this OpenReview link</a>.
	  </p>
	  <p>
	    Accepted papers will be published in the official ECCV Workshops proceedings and the Computer Vision Foundation (CVF) Open Access archive.
	  </p>
	  <p>
	    <span style="font-weight:500;">Note:</span> Authors of previously rejected main conference submissions are also welcome to submit their work to our workshop. When doing so, you must submit the previous reviewers' comments (named as <code>previous_reviews.pdf</code>) and a letter of changes (named as <code>letter_of_changes.pdf</code>) as part of your supplementary materials to clearly demonstrate the changes made to address the comments made by previous reviewers. Due to potential clashes with the main conference reviewing schedule, we will accept simultaneous submissions to the ECCV main conference and OpenEyes Workshop. Simultaneous submissions are otherwise disallowed.
          </p>
        </div>
      </div>
    </div>
    <br>
    <!--
    <div class="panel panel-default">
      <div class="panel-heading" data-toggle="collapse" data-parent="#call" href="#call-ea" style="cursor:pointer;">
        <h3 style="margin:0;">Extended Abstracts</h3>
      </div>
      <div id="call-ea" class="panel-collapse collapse in" data-parent="#call">
        <div class="panel-body">
          <p>
            In addition to regular papers, we also invite extended abstracts of ongoing or published work (<i>e.g.</i> related papers on ECCV main track). The extended abstracts will not be published or made available to the public (we will only list titles on our website) but will rather be presented during our poster session. We see this as an opportunity for authors to promote their work to an interested audience to gather valuable feedback.
          </p>
	  <p>
	    Further details on how this poster session will occur online, is to be decided. In general, we will be following the main ECCV conference guidelines and organization in organizing the presentation of all posters.
          </p>
          <p>Extended abstracts are limited to six pages and must be created using the <a href="https://eccv2020.eu/author-instructions/" target="_blank">official ECCV format</a>. The submission must be sent to <a href="mailto:openeyes.workshop@gmail.com">openeyes.workshop@gmail.com</a> by the deadline (July 17th).
          </p>
          <p>
            We will evaluate and notify authors of acceptance as soon as possible (evaluation on a rolling basis until the deadline) after receiving their extended abstract submission.
          </p>
        </div>
      </div>
    </div>
    <br>
    -->
    <div class="panel panel-default">
      <div class="panel-heading" data-toggle="collapse" data-parent="#call" href="#call-poster" style="cursor:pointer;">
        <h3 style="margin:0;">OpenEDS 2020 Challenges</h3>
      </div>
      <div id="call-poster" class="panel-collapse collapse in" data-parent="#call">
        <div class="panel-body">
	  <p>
	    The OpenEDS 2020 Challenges are hosted by the second track of the OpenEyes Workshop, and consist of two challenges:
	  </p>
	  <ul>
	    <li>Track 1: Gaze Prediction Challenge</li>
	    <li>Track 2: Sparse Temporal Semantic Segmentation Challenge</li>
	  </ul>
	  <p>
            More information on the OpenEDS 2020 challenge can be found at: <br>
            <a href="https://research.fb.com/programs/openeds-2020-challenge/">https://research.fb.com/programs/openeds-2020-challenge/</a>
	  </p>
        </div>
      </div>
    </div>
  </div>
</div>
<br>

<div class="row" id="dates">
  <div class="col-xs-12">
    <h2>Important Dates</h2>
    <br>
    <p>
      Please note that all deadlines are at 11:59 PM (UTC -0), in line with the main conference.
    </p>
    <br>
    <table class="table table-striped">
      <tbody>
        <tr>
          <td>Full Paper Submission Deadline</td>
          <td>
		  <s class="cancelled">Friday, 5th June 2020</s><br>
		  <s class="cancelled">Monday, 15th June 2020</s><br>
          Tuesday, 16th June 2020
		  </td>
          <td><span class="countdown" reference="16 Jun 2020 23:59:59 UTC"></span></td>
        </tr>
        <tr>
          <td>Notification to Authors (Full Papers)</td>
		  <td>
          <s class="cancelled">Friday, 3rd July 2020</s><br>
          Wednesday, 8th July 2020
		  </td>
	  <td></td>
        </tr>
        <tr>
          <td>Camera-Ready Deadline &amp;<br>Presentation Materials Deadline</td>
	  <td style="vertical-align:middle;">Saturday, 8th August 2020</td>
	  <td><span class="countdown" reference="8 Aug 2020 23:59:59 UTC"></span></td>
        </tr>
        <tr>
          <td><a href="https://research.fb.com/programs/openeds-2020-challenge/">OpenEDS Challenges</a> Participation Deadline</td>
          <td>Friday, 31st July 2020</td>
          <td><span class="countdown" reference="31 Jul 2020 23:59:59 UTC"></span></td>
        </tr>
        <!--<tr id="schedule">
          <td>Extended Abstracts Deadline</td>
          <td>TBD </td>
	  <td></td>
        </tr>-->
        <tr>
          <td>Workshop Date</td>
          <td>Sunday, 23rd August 2020</td>
          <!--<td><span class="countdown" reference="23 Aug 2020 08:30:00 UTC"></span></td>-->
	  <td></td>
        </tr>
      </tbody>
    </table>
  </div>
</div><br>


<div class="row" id="speakers">
  <div class="col-xs-12">
    <h2>Invited Keynote Speakers</h2>
  </div>
</div>
<div class="row speaker">
  <div class="col-xs-12">
    <b>Morning Session</b>
  </div>
</div>
<div class="row speaker">
  <div class="col-sm-3 speaker-pic">
    <a href="https://www.hci.uni-tuebingen.de/chair/team/enkelejda-kasneci">
      <img class="people-pic" src="{{ "/static/img/people/ek.jpg" | prepend:site.baseurl }}">
    </a>
    <div class="people-name">
      <a href="https://www.hci.uni-tuebingen.de/chair/team/enkelejda-kasneci">Enkelejda Kasneci</a>
      <h6>University of Tübingen</h6>
    </div>
  </div>
  <div class="col-md-9">
    <!--<h3>TITLE</h3><br>-->
    <!--<b>Abstract</b><p class="speaker-abstract"></p>-->
    <div class="panel panel-default">
      <div class="panel-heading" data-toggle="collapse" href="#ek-bio" style="cursor:pointer;text-align:center">
        <b>Biography <span style="font-weight:normal">(click to expand/collapse)</span></b>
      </div>
      <div id="ek-bio" class="panel-collapse collapse"><div class="panel-body">
        <p class="speaker-bio">
    Enkelejda Kasneci is a Professor of Computer Science at the University of Tübingen, Germany, where she leads the Human-Computer Interaction Lab. As a BOSCH scholar, she received her M.Sc. degree in Computer Science from the University of Stuttgart in 2007. In 2013, she received her PhD in Computer Science from the University of Tübingen. For her PhD research, she was awarded the research prize of the Federation Südwestmetall in 2014. From 2013 to 2015, she was a postdoctoral researcher and a Margarete-von-Wrangell Fellow at the University of Tübingen. Her research evolves around the application of machine learning for intelligent and perceptual human-computer interaction. She served as academic editor for PlosOne and as a TPC member and reviewer for several major conferences and journals.
        </p>
      </div></div>
    </div>
  </div>
</div>
<div class="row speaker">
  <div class="col-sm-3 speaker-pic">
    <a href="http://mkhamis.com/">
      <img class="people-pic" src="{{ "/static/img/people/mk.jpg" | prepend:site.baseurl }}">
    </a>
    <div class="people-name">
      <a href="http://mkhamis.com/">Mohamed Khamis</a>
      <h6>University of Glasgow</h6>
    </div>
  </div>
  <div class="col-md-9">
    <h3>The interplay between Privacy, Security and Eye Tracking in the Wild: Opportunities and Challenges</h3><br>
    <b>Abstract</b><p class="speaker-abstract">
    Many of today’s smartphones, laptops and head-mounted displays are well equipped for accurate gaze estimation in the wild. These are important developments for security applications. For example, we will soon be able to run gaze-based security methods in the wild, such as authentication in daily scenarios, and analyze gaze behavior during security critical tasks, like when reading a phishing email. On the downside, ubiquitous eye tracking comes with privacy implications. Imagine if a neighbouring train passenger’s smartphone can track your eyes; this could potentially reveal a myriad of private information including visual interests, personality traits, mental disorders, emotional valence and more. In this talk, I will discuss how the role of eye gaze in security and privacy applications evolved in the past two decades, and how the current developments in ubiquitous eye tracking present a turning point that give rise to many opportunities and also new challenges.
    </p>
    <div class="panel panel-default">
      <div class="panel-heading" data-toggle="collapse" href="#mk-bio" style="cursor:pointer;text-align:center">
        <b>Biography <span style="font-weight:normal">(click to expand/collapse)</span></b>
      </div>
      <div id="mk-bio" class="panel-collapse collapse"><div class="panel-body">
        <p class="speaker-bio">
          Mohamed Khamis is a Lecturer (Assistant Professor) at the University of Glasgow in the UK. His research is at the intersection of Ubiquitous Computing and User Privacy. He is interested in understanding the privacy implications of ubiquitous technologies, as well as developing novel systems for protecting privacy and security. He has major contributions at the intersection of security and gaze. Mohamed organized workshops at UbiComp 2016, CHI 2018, and CHI 2019. He is a program committee member for CHI 2020, and was general chair for PerDis 2019.
        </p>
      </div></div>
    </div>
  </div>
</div>
<div class="row speaker">
  <div class="col-xs-12">
    <b>Afternoon Session</b>
  </div>
</div>
<div class="row speaker">
  <div class="col-sm-3 speaker-pic">
    <a href="http://faculty.sites.uci.edu/khargonekar/">
      <img class="people-pic" src="{{ "/static/img/people/pk.jpg" | prepend:site.baseurl }}">
    </a>
    <div class="people-name">
      <a href="http://faculty.sites.uci.edu/khargonekar/">Pramod Khargonekar</a>
      <h6>University of Califonia, Irvine</h6>
    </div>
  </div>
  <div class="col-md-9">
    <!--<h3>TITLE</h3><br>-->
    <!--<b>Abstract</b><p class="speaker-abstract"></p>-->
    <div class="panel panel-default">
      <div class="panel-heading" data-toggle="collapse" href="#pk-bio" style="cursor:pointer;text-align:center">
        <b>Biography <span style="font-weight:normal">(click to expand/collapse)</span></b>
      </div>
      <div id="pk-bio" class="panel-collapse collapse"><div class="panel-body">
        <p class="speaker-bio">
    Pramod Khargonekar received B. Tech. Degree in electrical engineering in 1977 from the Indian Institute of Technology, Bombay, India, and M.S. degree in mathematics in 1980 and Ph.D. degree in electrical engineering in 1981 from the University of Florida, respectively.  He has been on faculty at the University of Florida, University of Minnesota, The University of Michigan, and the University of California, Irvine. In June 2016, he assumed his current position as Vice Chancellor for Research and Distinguished Professor of Electrical Engineering and Computer Science at the University of California, Irvine.
Khargonekar's current research and teaching interests include systems and control theory, machine learning, and applications to smart electric grid and neural engineering. He has authored more than 160 refereed journal publications and 200 conference publications, and has supervised 38 doctoral students. He has received numerous awards and have served in academia and industry in many roles, the details of which can be found on <a href="http://faculty.sites.uci.edu/khargonekar/biographical-sketch" target="_blank">his webpage</a>.
        </p>
      </div></div>
    </div>
  </div>
</div>
<div class="row speaker">
  <div class="col-sm-3 speaker-pic">
    <a href="http://ilab.usc.edu/itti/">
      <img class="people-pic" src="{{ "/static/img/people/li.jpg" | prepend:site.baseurl }}">
    </a>
    <div class="people-name">
      <a href="http://ilab.usc.edu/itti/">Laurent Itti</a>
      <h6>University of Southern California</h6>
    </div>
  </div>
  <div class="col-md-9">
    <!--<h3>TITLE</h3><br>-->
    <!--<b>Abstract</b><p class="speaker-abstract"></p>-->
    <div class="panel panel-default">
      <div class="panel-heading" data-toggle="collapse" href="#li-bio" style="cursor:pointer;text-align:center">
        <b>Biography <span style="font-weight:normal">(click to expand/collapse)</span></b>
      </div>
      <div id="li-bio" class="panel-collapse collapse"><div class="panel-body">
        <p class="speaker-bio">
    Laurent Itti received his M.S. degree in Image Processing from the Ecole Nationale Superieure des Telecommunications (Paris, France) in 1994, and his Ph.D. in Computation and Neural Systems from Caltech (Pasadena, CA) in 2000. He has since then been an Assistant, Associate, and now Full Professor of Computer Science, Psychology, and Neuroscience at USC. Dr. Itti’s research interests are in biologically-inspired computational vision, in particular in the domains of visual attention, scene understanding, control of eye movements, and surprise. This basic research has technological applications to, among others, video compression, target detection, and robotics. Dr. Itti has co-authored over 150 publications in peer-reviewed journals, books and conferences, three patents, and several open-source neuromorphic vision software toolkits.
        </p>
      </div></div>
    </div>
  </div>
</div>
<div class="row speaker">
  <div class="col-sm-3 speaker-pic">
    <a href="https://www.ecse.rpi.edu/~qji/">
      <img class="people-pic" src="{{ "/static/img/people/qj.jpg" | prepend:site.baseurl }}">
    </a>
    <div class="people-name">
      <a href="https://www.ecse.rpi.edu/~qji/">Qiang Ji</a>
      <h6>Rensselaer Polytechnic Institute</h6>
    </div>
  </div>
  <div class="col-md-9">
    <h3>A Bayesian Framework for Robust and Generalizable Eye Tracking</h3><br>
    <b>Abstract</b><p class="speaker-abstract">As a classical eye tracking approach, model-based eye tracking uses a geometric eye model to perform eye tracking; it generalizes well and requires no training data.  Model-based eye tracking, however, requires accurate eye feature detection, which is hard to achieve in real world environments.   Deep learning based methods have been employed recently to improve eye feature detection accuracy.  These methods, however, do not generalize well to novel data.   To achieve robust and generalizable eye tracking under different conditions, we propose a Bayesian framework to perform model-based eye tracking without explicit eye feature detection.
    <br><br>
    Specifically, the proposed method consists of a Bayesian Convolutional Neural Network (BCNN) to capture the probabilistic relationships between eye appearance and its landmarks, and a geometric model to estimate eye gaze from the eye landmarks.  Under a Bayesian framework to integrate the two modules, given an eye image, the BCNN module outputs the probability distribution of the eye landmarks and their uncertainties, based on which the geometric model performs a Bayesian inference of the eye gaze by marginalizing out the eye landmarks, enabling eye gaze estimation without explicit eye landmark detection.  Compared to the point-based eye landmark estimation methods, our model not only can generalize better, but is also more robust under challenging real world conditions.  In addition, we extend the single-stage model to multi-stage, yielding the cascade BCNN.   The cascade architecture allows feeding the uncertainty information from current stage to the next stage to progressively improve the gaze estimation accuracy.  Experiments show the proposed method, while achieving comparable within-dataset performance, outperforms SoA methods in both it’s generalization capability across datasets, and in its robustness for low quality and challenging datasets.
    </p>
    <div class="panel panel-default">
      <div class="panel-heading" data-toggle="collapse" href="#qj-bio" style="cursor:pointer;text-align:center">
        <b>Biography <span style="font-weight:normal">(click to expand/collapse)</span></b>
      </div>
      <div id="qj-bio" class="panel-collapse collapse"><div class="panel-body">
        <p class="speaker-bio">
          Qiang Ji received his Ph.D degree in electrical engineering from the University of Washington. He is currently a Professor with the Department of Electrical, Computer, and Systems engineering at RPI. From January, 2009 to August, 2010, he served as a program director at the National Science Foundation, managing NSF's machine learning and computer vision programs. Prior to joining RPI in 2001, he was an assistant professor with Dept. of Computer Science, University of Nevada at Reno. He also held research and visiting positions with the Beckman Institute at University of Illinois at Urbana-Champaign, the Robotics Institute at Carnegie Mellon University, and the US Air Force Research Laboratory. Dr. Ji currently serves as the director of the <a href="http://www.ecse.rpi.edu/~cvrl" target="_blank">Intelligent Systems Laboratory (ISL)</a>. Prof. Ji is a fellow of the IEEE and the IAPR.
        </p>
      </div></div>
    </div>
  </div>
</div>
<div class="row speaker">
  <div class="col-sm-3 speaker-pic">
    <a href="https://www.cc.gatech.edu/home/thad/">
      <img class="people-pic" src="{{ "/static/img/people/ts.jpg" | prepend:site.baseurl }}">
    </a>
    <div class="people-name">
      <a href="https://www.cc.gatech.edu/home/thad/">Thad Starner</a>
      <h6>Georgia Tech</h6>
    </div>
  </div>
  <div class="col-md-9">
	<h3>Eye Interfaces for Augmented Reality Eyeglasses</h3><br>
	<b>Abstract</b><p class="speaker-abstract">
	Eye interfaces should be reliable, scalable, consistent, discoverable, provide the user with feedback on performace, and be designed to indicate how they should be used. Combining these human computer interaction (HCI) fundamentals with machine learning and perception can point to useful and usable interfaces, in sometimes unexpected ways.  This talk explores interfaces that have proved the most promising for augmented reality eyeglasses, focusing on eye gestures where tracking the relative motion of the eye is more important than absolute position. Such interfaces are surprisingly robust and have even been sensed using electrooculography (EOG) with three electrodes in the nose bridge of a Jins Meme.
	</p>
    <div class="panel panel-default">
      <div class="panel-heading" data-toggle="collapse" href="#ts-bio" style="cursor:pointer;text-align:center">
        <b>Biography <span style="font-weight:normal">(click to expand/collapse)</span></b>
      </div>
      <div id="ts-bio" class="panel-collapse collapse"><div class="panel-body">
        <p class="speaker-bio">Thad Starner is a Professor of Computing at Georgia Tech. He is also a Staff Research Scientist at Google, where he was one of the architects of Google Glass. In 1990, Starner coined the term "augmented reality" to describe the types of interfaces he envisioned for the future, and he has been using a head worn display as part of his daily life since 1993. He is a founder of the annual ACM International Symposium on Wearable Computers, now in its 24th year. Dr. Starner has produced over 500 papers and presentations on his research on interfaces and machine learning and has 95 issued United States utility patents. He was elected to the CHI Academy in 2017 and is always looking for a good game of table tennis.</p>
      </div></div>
    </div>
  </div>
</div>
<br>


<div class="row" id="organizers">
  <div class="col-xs-12">
    <h2>Organizers</h2>
  </div>
</div>
<br>

<div class="row">
  <div class="col-xs-12">
    <b>Gaze Estimation and Prediction in the Wild</b>
  </div>
</div>
<br>

<div class="row">
  <div class="col-xs-2">
    <a href="https://hyungjinchang.wordpress.com/">
      <img class="people-pic" src="{{ "/static/img/people/hj.jpg" | prepend:site.baseurl }}">
    </a>
    <div class="people-name">
      <a href="https://hyungjinchang.wordpress.com/">Hyung Jin Chang</a>
      <h6>University of Birmingham</h6>
    </div>
  </div>
  <div class="col-xs-2">
    <a href="https://ait.ethz.ch/people/spark/">
      <img class="people-pic" src="{{ "/static/img/people/sp.jpg" | prepend:site.baseurl }}">
    </a>
    <div class="people-name">
      <a href="https://ait.ethz.ch/people/spark/">Seonwook Park</a>
      <h6>ETH Zürich</h6>
    </div>
  </div>
  <div class="col-xs-2">
    <a href="https://ait.ethz.ch/people/zhang/">
      <img class="people-pic" src="{{ "/static/img/people/xz.jpg" | prepend:site.baseurl }}">
    </a>
    <div class="people-name">
      <a href="https://ait.ethz.ch/people/zhang/">Xucong Zhang</a>
      <h6>ETH Zürich</h6>
    </div>
  </div>
  <div class="col-xs-2">
    <a href="https://ait.ethz.ch/people/hilliges/">
      <img class="people-pic" src="{{ "/static/img/people/oh.jpg" | prepend:site.baseurl }}">
    </a>
    <div class="people-name">
      <a href="https://ait.ethz.ch/people/hilliges/">Otmar Hilliges</a>
      <h6>ETH Zürich</h6>
    </div>
  </div>
  <div class="col-xs-2">
    <a href="https://www.cs.bham.ac.uk/~leonarda/">
      <img class="people-pic" src="{{ "/static/img/people/al.jpg" | prepend:site.baseurl }}">
    </a>
    <div class="people-name">
      <a href="https://www.cs.bham.ac.uk/~leonarda/">Aleš Leonardis</a>
      <h6>University of Birmingham</h6>
    </div>
  </div>
</div>
<br>

<div class="row">
  <div class="col-xs-12">
    <b>Eye Tracking for VR and AR</b>
  </div>
</div>
<br>
<div class="row">
  <div class="col-xs-2">
    <img class="people-pic" src="{{ "/static/img/people/rc.jpg" | prepend:site.baseurl }}">
    <div class="people-name">
      Robert Cavin
      <h6>Facebook Reality Labs</h6>
    </div>
  </div>
  <div class="col-xs-2">
    <img class="people-pic" src="{{ "/static/img/people/cp.jpg" | prepend:site.baseurl }}">
    <div class="people-name">
      Cristina Palmero
      <h6>Universitat de Barcelona (UB)</h6>
    </div>
  </div>
  <div class="col-xs-2">
    <img class="people-pic" src="{{ "/static/img/people/jc.jpg" | prepend:site.baseurl }}">
    <div class="people-name">
      Jixu Chen
      <h6>Facebook</h6>
    </div>
  </div>
  <div class="col-xs-2">
    <img class="people-pic" src="{{ "/static/img/people/af.jpg" | prepend:site.baseurl }}">
    <div class="people-name">
      Alexander Fix
      <h6>Facebook Reality Labs</h6>
    </div>
  </div>
  <div class="col-xs-2">
    <img class="people-pic" src="{{ "/static/img/people/eg.jpg" | prepend:site.baseurl }}">
    <div class="people-name">
      Elias Guestrin
      <h6>Facebook Reality Labs</h6>
    </div>
  </div>
  <div class="col-xs-2">
    <img class="people-pic" src="{{ "/static/img/people/ok.jpg" | prepend:site.baseurl }}">
    <div class="people-name">
      Oleg Komogortsev
      <h6>Texas State University</h6>
    </div>
  </div>
</div>
<br>
<div class="row">
  <div class="col-xs-2">
    <img class="people-pic" src="{{ "/static/img/people/kk.jpg" | prepend:site.baseurl }}">
    <div class="people-name">
      Kapil Krishnakumar
      <h6>Facebook</h6>
    </div>
  </div>
  <div class="col-xs-2">
    <img class="people-pic" src="{{ "/static/img/people/as.jpg" | prepend:site.baseurl }}">
    <div class="people-name">
      Abhishek Sharma
      <h6>Facebook Reality Labs</h6>
    </div>
  </div>
  <div class="col-xs-2">
    <img class="people-pic" src="{{ "/static/img/people/ys.jpg" | prepend:site.baseurl }}">
    <div class="people-name">
      Yiru Shen
      <h6>Facebook Reality Labs</h6>
    </div>
  </div>
  <div class="col-xs-2">
    <img class="people-pic" src="{{ "/static/img/people/th.jpg" | prepend:site.baseurl }}">
    <div class="people-name">
      Tarek Hefny
      <h6>Facebook Reality Labs</h6>
    </div>
  </div>
  <div class="col-xs-2">
    <img class="people-pic" src="{{ "/static/img/people/kb.jpg" | prepend:site.baseurl }}">
    <div class="people-name">
      Karsten Behrendt
      <h6>Facebook</h6>
    </div>
  </div>
  <div class="col-xs-2">
    <img class="people-pic" src="{{ "/static/img/people/st.jpg" | prepend:site.baseurl }}">
    <div class="people-name">
      Sachin S. Talathi
      <h6>Facebook Reality Labs</h6>
    </div>
  </div>
</div>
<br>

<div class="row" id="sponsors">
  <div class="col-xs-12">
    <h2>Workshop sponsored by:</h2>
  </div>
</div>
<br>
<div class="row">
  <div class="col-xs-12">
    <b>Gaze Estimation and Prediction in the Wild</b>
  </div>
</div>
<br>
<div class="row">
  <div class="col-xs-2"></div>
  <!--<div class="col-xs-4 sponsor">
    <a href="https://www.samsung.com/" target="_blank"><img src="{{ "/static/img/samsung.jpg" | prepend:site.baseurl }}" /></a>
  </div>-->
  <!--<div class="col-xs-1"></div>-->
  <div class="col-xs-4 sponsor">
    <a href="https://www.nvidia.com/" target="_blank"><img src="{{ "/static/img/nvidia.jpg" | prepend:site.baseurl }}" /></a>
  </div>
  <!--<div class="col-xs-1"></div>-->
  <div class="col-xs-4 sponsor">
    <a href="https://www.tobii.com/" target="_blank"><img src="{{ "/static/img/tobii.jpg" | prepend:site.baseurl }}" /></a>
  </div>
  <div class="col-xs-2"></div>
</div>
<br>
<div class="row">
  <div class="col-xs-12">
    <b>Eye Tracking for VR and AR</b>
  </div>
</div>
<br>
<div class="row">
  <div class="col-xs-12 sponsor">
    <a href="https://research.fb.com/category/augmented-reality-virtual-reality/" target="_blank"><img src="{{ "/static/img/frl.png" | prepend:site.baseurl }}" style="max-height: 45px;" /></a>
  </div>
</div>


<br>
<hr>
