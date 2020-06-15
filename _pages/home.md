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
          <td>4th June</td>
          <td>
            We are happy to announce
            <ul>
              <li><a href="http://faculty.sites.uci.edu/khargonekar/" target="_blank">Prof. Pramod Khargonekar</a> of University of California, Irvine</li>
              <li><a href="http://ilab.usc.edu/itti/" target="_blank">Prof. Laurent Itti</a> of University of Southern California</li>
            </ul>as keynote speakers to Part 2 of our workshop!
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
            </ul>as keynote speakers to Part 1 of our workshop!
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
      <div id="call-papers" class="panel-collapse collapse in" data-parent="#call">
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
    <!--
    <br>
    <div class="panel panel-default">
      <div class="panel-heading" data-toggle="collapse" data-parent="#call" href="#call-poster" style="cursor:pointer;">
        <h3 style="margin:0;">Accepted ECCV/CVPR Papers</h3>
      </div>
      <div id="call-poster" class="panel-collapse collapse" data-parent="#call">
        <div class="panel-body">
          Relevant papers that were accepted at the main conference (ICCV 2019) or at CVPR 2019 are welcome to be presented during our poster session to increase the exposure of your work and foster discussion in the community. Please send a PDF document of your camera-ready paper to <a href="mailto:openeyes.workshop@gmail.com">openeyes.workshop@gmail.com</a> at any time to register your presence.
        </div>
      </div>
    </div>
    -->
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
          Tuesday, 16th June 2020</td>
          <td><span class="countdown" reference="16 Jun 2020 23:59:59 UTC"></span></td>
        </tr>
        <tr>
          <td>Notification to Authors (Full Papers)</td>
          <td>Friday, 3rd July 2020</td>
	  <td></td>
        </tr>
        <tr>
          <td>Extended Abstract Submission Deadline</td>
          <td>Friday, 17th July 2020</td>
          <td><span class="countdown" reference="17 Jul 2020 23:59:59 UTC"></span></td>
        </tr>
        <tr>
          <td>Camera-Ready Deadline</td>
          <td>Friday, 17th July 2020</td>
          <td><span class="countdown" reference="17 Jul 2020 23:59:59 UTC"></span></td>
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


<div class="row">
  <div class="col-xs-12">
    <h2>Invited Keynote Speakers</h2>
    <p>TBD</p>
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
    <b>Part 1 (AM): Gaze Estimation and Prediction in the Wild</b>
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
    <b>Part 2 (PM): Eye Tracking for VR and AR</b>
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
    <b>Part 1 (AM): Gaze Estimation and Prediction in the Wild</b>
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
    <b>Part 2 (PM): Eye Tracking for VR and AR</b>
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
