"use strict";angular.module("cloakAndDaggerApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch","datamaps"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",activetab:"home"}).when("/about",{templateUrl:"views/about.html",controller:"PageCtrl",activetab:"about"}).when("/what-now",{templateUrl:"views/what-now.html",controller:"PageCtrl",activetab:"what-now"}).when("/contribute",{templateUrl:"views/contribute.html",controller:"PageCtrl",activetab:"contribute"}).when("/art",{templateUrl:"views/art.html",controller:"PageCtrl",activetab:"art"}).otherwise({redirectTo:"/"})}]).controller("NavbarCtrl",["$scope","$route",function(a,b){a.$route=b}]),angular.module("cloakAndDaggerApp").controller("MainCtrl",["$scope","$rootScope","$http","$anchorScroll","$location",function(a,b,c,d,e){function f(b,d){"undefined"!=typeof i[b]?d(i[b]):(i[b]={},a.revelations[b]=[],c.get(h[b]).then(function(c){angular.forEach(d3.csv.parse(c.data),function(c){a.revelations[b].push(c),angular.forEach(c.Countries.split(","),function(a){a=a.replace(/^\s+/g,""),"undefined"==typeof i[b][a]&&(i[b][a]=[]),a.match(/^[A-Z]+$/)&&i[b][a].push(c)})}),d(i[b])}))}function g(b,c){f(b,function(d){var e={};void 0!==a.selectedCountry&&(e[a.selectedCountry.id]={fillKey:"SELECTED"});for(var f in d)a.selectedCountry&&f==a.selectedCountry.id||(e[f]={fillKey:"EXISTS"}),a.mapObject={scope:"world",options:{height:300,legendHeight:60},fills:{EXISTS:"#67C378",SELECTED:"#704279",defaultFill:"#DDDDDD"},data:e};a.selectedCountry?a.selectedRevelations=d[a.selectedCountry.id]:a.selectedRevelations=a.revelations[b],void 0!==c&&c()})}var h={Leaders:"data/Politicians-processed.csv","Corporate collaboration":"data/CollaborationIAC-processed.csv",Intelligence:"data/CollaborationINT-processed.csv",Corporations:"data/Corporations-processed.csv",Mass:"data/PubMASS-processed.csv",Targeted:"data/PubTARGETED-processed.csv"},i={};a.revelations={},a.openPanel=function(b){a.selectedCategory=b,g(b)},a.selectGlobal=function(){a.selectedCountry&&"GLB"==a.selectedCountry.id?delete a.selectedCountry:a.selectedCountry={id:"GLB",name:"Global"},g(a.selectedCategory,function(){d("details")})},a.updateActiveGeography=function(b){a.selectedCountry&&b.id===a.selectedCountry.id?delete a.selectedCountry:a.selectedCountry={name:b.properties.name,id:b.id},g(a.selectedCategory,function(){a.$apply(),d("details")})},a.openPanel("Leaders")}]),angular.module("cloakAndDaggerApp").controller("PageCtrl",["$scope",function(a){}]),angular.module("cloakAndDaggerApp").run(["$templateCache",function(a){a.put("views/about.html",'<p><b>Surveillance without Borders</b> is a resource which illustrates how surveillance is being carried out around the world based on the Snowden revelations. </p> <p> While the Snowden revelations might feel a bit "too 2013" by now, let\'s not forget that they provide a goldmine in terms of understanding the politics behind surveillance and how and why it is being carried out globally. However, the huge amount of documents which have been leaked (and which continue to be leaked) are quite overwhelming, thus potentially limiting the ability to correlate revelations contextually, to raise questions and to take action. Surveillance without Borders was developed in an attempt to address this problem. </p> <p>The project includes a global data map which classifies all of the Snowden revelations for each country around the world under the following categories:</p> <ul> <li>Political leaders under surveillance</li> <li>Corporations under surveillance</li> <li>Collaboration between corporations and intelligence agencies</li> <li>Collaboration between intelligence agencies around the world</li> <li>Mass surveillance of citizens</li> <li>Targeted surveillance of citizens</li> </ul> <p>The aim of Surveillance without Borders is to:</p> <ul> <li>Provide an overview of (some of) the categories and types of information that are included in the Snowden revelations</li> <li>Enable access to information from the Snowden revelations </li> <li>Enable research and investigations on surveillance (on both global and local levels)</li> <li>Illustrate some of the political and economic interests behind surveillance </li> <li>Shed light on private-public partnerships involving the surveillance of citizens</li> </ul> <p>Through its global data map, Surveillance without Borders aims to enable researchers, journalists, activists, advocates and the public at large to quickly and easily gain access to information which is more specific to their local context. Hopefully this will not only contribute to more research and public awareness raising, but also to more global actions towards transparency and accountability. </p> <p>A project by <b><a href="https://boomerang-effect.espivblogs.net/">Maria Xynou</a></b>.</p> <p><b>Contact:</b> maria.x@espiv.net</p> <p><b><a href="https://github.com/surveillance-without-borders">Github</a></b></p>'),a.put("views/art.html",'<p>Understanding <b>human behaviour</b> is largely at the heart of surveillance.</p> <p>The Snowden revelations introduce us to various tactics and strategies carried out by the UK\'s Government Communications Headquarter (GCHQ) in attempts to engage in misinformation campaigns and to subvert online discourse. The GCHQ refers to such strategies as <b>“Art of Deception”</b> and <b>“Art of the Possible”</b>.</p> <img src="/images/art-images/emotional-decisions.c46a2cdf.png"> <h4><b>Art of Deception</b></h4> <p>The <a href="https://edwardsnowden.com/wp-content/uploads/2014/02/the-art-of-deception-training-for-a-new.pdf">"Art of Deception"</a> is a strategy through which the GCHQ attempts to analyze and understand human behaviour and to deceive individuals, groups and societies through misinformation campaigns and by subverting online discourse. This includes the use of psychological manipulation and social engineering techniques in an attempt to entrap and attack targets.</p> <p>According to the <a href="https://edwardsnowden.com/wp-content/uploads/2014/02/the-art-of-deception-training-for-a-new.pdf">leaked documents</a>, the “Art of Deception” is carried out through a multidisciplinary approach to understanding human behaviour, which brings together specialists from the fields of political science, biology, history, economics, psychology, anthropology and sociology. The aim is to create so-called “cyber magicians” who carry out the following <a href="https://edwardsnowden.com/wp-content/uploads/2014/02/the-art-of-deception-training-for-a-new.pdf">"magic techniques"</a>:</p> <ul> <li>Deception of individuals through psychological manipulation, with the aim of <a href="https://firstlook.org/theintercept/2014/02/24/jtrig-manipulation/">discrediting their reputation</a> and disrupting their profession</li> <li>Disruption of groups\' creativity through the use of various techniques</li> <li>Influence global media through the spread of propaganda</li> </ul> <img src="/images/art-images/cyber-magicians.db5af7d1.png"> <p>Who is a target and how? According to the <a href="https://edwardsnowden.com/wp-content/uploads/2014/02/the-art-of-deception-training-for-a-new.pdf">leaked documents</a>, the GCHQ\'s “Art of Deception” targets the following actors through the following platforms:</p> <b><p>Individuals:</p></b> <ul> <li>Emails</li> <li>SMS</li> <li>Phone voice</li> <li>IM/IRC</li> </ul> <b><p>Communities of Interest:</p></b> <ul> <li>Phone voice</li> <li>IM/IRC</li> <li>Twitter</li> <li>Facebook</li> <li>Blogs</li> <li>Emails</li> </ul> <b><p>Global:</p></b> <ul> <li>News media</li> <li>Twitter</li> <li>Linkedln</li> <li>Webpages</li> </ul> <img src="/images/art-images/deception-targets.75965511.png"> <p>The use of deception though as a tactic by intelligence agencies is nothing new. For all we know, the GCHQ\'s <a href="https://edwardsnowden.com/wp-content/uploads/2014/02/the-art-of-deception-training-for-a-new.pdf">"Art of Deception"</a> might even possibly be inspired by China\'s <a href="http://www.chinapage.com/sunzi-e.html">"Art of War"</a>, which is an ancient Chinese military treatise that puts great emphasis on deception tactics in warfare. Misinformation and various other <a href="http://www.dtic.mil/dtic/tr/fulltext/u2/a215721.pdf">deception tactics have widely been employed during both world wars</a> and generally throughout history.</p> <p>But who does the GCHQ even mean by “individuals” and “communities of interest”? If deception tactics are carried out in secret, how can there be accountability in terms of ethics and legitimacy?</p> <p>Given that the GCHQ has <a href="https://edwardsnowden.com/revelations#gchq-tempora-porgramme">direct access to the fibre optic cables that make up the backbone of the internet</a> and has indiscriminate access to most communications, who can ensure that targets are actually “legitimate” and how?</p> <h4><b>Art of the Possible</b></h4> <p>The GCHQ\'s <a href="https://edwardsnowden.com/wp-content/uploads/2014/02/snowden_cyber_offensive1_nbc_document.pdf">"Art of the Possible"</a> attempts to target individuals and groups through “honey traps”, to amend or delete social media presences and to discredit blog posts.</p> <p>Twitter, Facebook, YouTube and Flickr appear to be platforms through which the GCHQ aims to carry out the <a href="https://edwardsnowden.com/wp-content/uploads/2014/02/the-art-of-deception-training-for-a-new.pdf">following tactics</a>:</p> <ul> <li>Propaganda</li> <li>Deception</li> <li>Mass messaging</li> <li>Pushing stories</li> <li>Alias development</li> <li>Psychological manipulation of targets</li> </ul> <img src="/images/art-images/viral-messages-new.8019be70.png"> <p>Through such tactics, the GCHQ aimed towards <a href="https://edwardsnowden.com/wp-content/uploads/2014/02/snowden_cyber_offensive1_nbc_document.pdf">disrupting the work of targets, discrediting their reputation and generally subverting online discourse</a> through misinformation campaigns. And in some cases, the GCHQ\'s <a href="https://edwardsnowden.com/wp-content/uploads/2014/02/snowden_cyber_offensive1_nbc_document.pdf">Computer Network Attack (CNA) carried out denial of service attacks</a> against its targets.</p> <img src="/images/art-images/spoofing-new.d70557d4.png"> <p>The leaked documents indicate that intelligence agencies collect huge volumes of data through most digital services with the aim of not only identifying potential targets, but of also influencing individuals, groups and societies at large. To what degree should this be legitimate?</p> <img src="/images/art-images/principles-influence.2a58fa17.png"> <b><p>Resources:</p></b> <ul> <li><a href="https://edwardsnowden.com/revelations#how-gchq-uses-dirty-tricks">How GCHQ uses “dirty tricks” against its targets</a></li> <li><a href="https://edwardsnowden.com/revelations#gchq-engages-in-misinformation-campaigns-and-subverts-online-discourse">GCHQ engages in misinformation campaigns and subverts online discourse</a></li> <li><a href="https://edwardsnowden.com/revelations#gchq-presents-its-plans-for-using-social-media">GCHQ presents its plans for using social media</a></li> </ul>'),a.put("views/contribute.html",'<p>Surveillance without Borders is based on publicly available documents which have been leaked by NSA whistleblower, Edward Snowden, and aims to provide a comprehensive resource on how surveillance is being carried out around the world. As the current volume of documents is quite huge and more documents will likely continue to get leaked, contributions to the project would deeply be appreciated!</p> <p>At this stage, you can contribute to the project through <b>data collection and classificiation</b>, and/or through the creation of new <b>data visualizations and narratives</b>.</p> <h4><b>Data Collection and Classification</b></h4> <p>Surveillance without Borders has based its resource on the <b><a href="https://www.edwardsnowden.com/revelations">Courage Foundation\'s release of the Snowden revelations</a></b> because each of those revelations contains both the source documents and all relevant media articles which provide more context. All of those revelations were <a href="https://github.com/surveillance-without-borders/surveillance-without-borders/tree/master/app/data">classified</a> into the following six categories:</p> <ul> <li><a href="https://github.com/surveillance-without-borders/surveillance-without-borders/blob/master/app/data/Politicians-processed.csv">Political leaders under surveillance</a></li> <li><a href="https://github.com/surveillance-without-borders/surveillance-without-borders/blob/master/app/data/Corporations-processed.csv">Corporations under surveillance</a></li> <li><a href="https://github.com/surveillance-without-borders/surveillance-without-borders/blob/master/app/data/CollaborationINT-processed.csv">Collaboration between intelligence agencies</a></li> <li><a href="https://github.com/surveillance-without-borders/surveillance-without-borders/blob/master/app/data/CollaborationIAC-processed.csv">Collaboration between intelligence agencies and corporations</a></li> <li><a href="https://github.com/surveillance-without-borders/surveillance-without-borders/blob/master/app/data/PubMASS-processed.csv">Mass surveillance of citizens</a></li> <li><a href="https://github.com/surveillance-without-borders/surveillance-without-borders/blob/master/app/data/PubTARGETED-processed.csv">Targeted surveillance of citizens</a></li> </ul> <p>Once all of the revelations (as released by the Courage Foundation) were classified, <a href="https://github.com/surveillance-without-borders/surveillance-without-borders/tree/master/app/data">CSV documents</a> were created for each of the above categories. Through these CSV documents, the following types of data were collected for each revelation:</p> <ul> <li>Intelligence agencies</li> <li>Countries</li> <li>Authorization for surveillance</li> <li>Codenames of surveillance programmes</li> <li>Types of surveillance</li> <li>Types of data collected</li> <li>Data collection source</li> <li>Targets of surveillance</li> <li>Collaborating intelligence agencies</li> <li>Collaborating companies</li> <li>Codenames of collaborating companies</li> </ul> <p>The above classifications and types of data collection were chosen to address the following questions based on the Snowden revelations:</p> <ul> <li>Who is carrying out surveillance (internationally)?</li> <li>What type of surveillance is being carried out?</li> <li>What types of data are being collected?</li> <li>Where is data being collected from?</li> <li>Who is a target of surveillance and why?</li> <li>How are the specific types of surveillance legally authorised?</li> <li>How is surveillance being carried out internationally, beyond the U.S.A?</li> <li>Who do intelligence agencies collaborate with and why?</li> <li>How does surveillance affect "ordinary", law abiding citizens?</li> <li>How does surveillance expand beyond "national security" justifications?</li> </ul> <p>Through its classification of the Snowden revelations and subsequent data collection, Surveillance without Borders attempts to address these questions.</p> <p>You can contribute to the above directly through the project\'s <b><a href="https://github.com/surveillance-without-borders">github repository</a></b> through one or more of the following:</p> <ul> <li>Review of the <a href="https://github.com/surveillance-without-borders/surveillance-without-borders/tree/master/app/data">CSV documents</a>: If you notice any inaccuracies, suggest edits.</li> <li>When/if new revelations are <a href="https://www.edwardsnowden.com/revelations">released</a>, you can suggest their classification in one of the existing CSV documents or you can suggest a new category to accommodate them.</li> <li>Data collection for new releases based on the existing data fields/columns which are included in each CSV document.</li> <li>Suggestion of new fields for data collection for the existing (or new) CSV documents</li> <li>Suggestion of an entirely new methodology for data collection and classification based on the leaked documents!</li> </ul> <p>If you\'re not a github user but would still like to contribute to the project\'s data collection and classifications, you can do so by contacting <b>maria.x@espiv.net</b>.</p> <p><b>Note:</b> You can automate the collection of certain types of data (if they are explicitly included in documents), such as "NSA" for "intelligence agencies", but you will probably have to collect many types of data by manually going through the leaked documents and related media publications. While this might sound a bit um...time-consuming, the trade-off is that you will likely learn a lot and come across very interesting information. :)</p> <h4><b>Visualizations and Narratives</b></h4> <p>If you\'re a good storyteller and/or enjoy creating data visualizations, this is the place for you!</p> <p>Surveillance without Borders currently includes a <b>global data map</b> because its initial aim was to (a) illustrate that surveillance is being carried out internationally and affects most (if not all) countries around the world, (b) illustrate that a global surveillance ecosystem is being developed through transnational, public-private partnerships and (c) to enable local efforts around the world in understanding the Snowden revelations and in taking action towards transparency and accountability.</p> <p>That said, many different types of visualizations and narratives can be created based on the existing <a href="https://github.com/surveillance-without-borders/surveillance-without-borders/tree/master/app/data">CSV documents</a> and/or new questions/datasets. You can contribute to the project through one or more of the following:</p> <ul> <li>Creation of new visualizations based on data from the project\'s current <a href="https://github.com/surveillance-without-borders/surveillance-without-borders/tree/master/app/data">CSV documents</a></li> <li>Suggestion of new types of data collection for the creation of new data visualizations</li> <li>Suggestion of new types of classifications (of the revelations) and their respective data fields for the creation of new data visualizations</li> <li>Suggestion of new narratives and questions based on the Snowden revelations</li> </ul> All other ideas are more than welcome! Please contact <b>maria.x@espiv.net</b>.'),a.put("views/highlights.html","Highlights"),a.put("views/main.html",'<div class="row info-box" ng-switch="selectedCategory"> <div ng-switch-when="Leaders"> <img src="/images/categories/political-leaders.fd51be0c.png" class="category-image"> <h4>Political leaders under surveillance</h4> <p>The politics of surveillance illustrate that some countries have had unequal political advantage in global affairs and negotiations.</p> <p>Intelligence agencies spied on numerous international political leaders – including allies – to help their governments influence negotiations to their advantage, as illustrated by the Snowden revelations.</p> <p>Such espionage has targeted the communications of international government representatives attending global summits, such as the <b>Copenhagen Climate Summit</b>, the <b>G20 Summits</b> in Toronto and London, as well as negotiations at the <b>United Nations Security Council</b> and the <b>trans-Atlantic free trade agreement.</b></p> </div> <div ng-switch-when="Corporate collaboration"> <img src="/images/categories/collaboration-intelligence-corporations.1f1890b8.png" class="category-image"> <h4>Collaboration between intelligence agencies and companies</h4> <p> Public-private partnerships of surveillance have targeted the communications of citizens and government representatives around the world. </p> <p> Some of the most popular internet companies have worked hand-in-hand with intelligence agencies to develop surveillance backdoors, while other widely used telecoms service providers have helped intelligence agencies intercept undersea cables. </p> </div> <div ng-switch-when="Intelligence"> <img src="/images/categories/collaboration-intelligence.4273278f.png" class="category-image"> <h4>Collaboration between intelligence agencies</h4> <p>The NSA is not alone in the global spying game. It collaborates closely with various other intelligence agencies around the world which provide it direct access to networks, infrastructure and databases. And in some cases, other intelligence agencies spy for the NSA, in exchange for access to data and other benefits.</p> <p>Surveillance carried out by collaborations between intelligence agencies have targeted the communications of government representatives and firms around the world. Together, intelligence agencies have exploited the internet\'s infrastructure, gaining indiscriminate access to citizens communications in certain cases.</p> </div> <div ng-switch-when="Corporations"> <img src="/images/categories/corporations.ef58a1a5.png" class="category-image"> <h4>Corporations under surveillance</h4> <p> Companies around the world have been targeted by intelligence agencies. This includes some of the most commonly used internet companies, such as Google, Microsoft and Facebook, as well as telecom service providers, security companies and even oil firms. </p> <p> Such surveillance has been carried out to provide US firms a competitive advantage, to gain direct access to citizens communications and other personal information, as well as to spy on political leaders who rely on certain network infrastructure provided by companies. </p> </div> <div ng-switch-when="Mass"> <h4>Mass surveillance of citizens</h4> <img src="/images/categories/mass-surveillance.09efadcf.png" class="category-image"> <p>Almost all of our communications worldwide are routinely being collected and analysed, according to the Snowden revelations. “Ordinary” law-abiding citizens around the world are not immune to intelligence agencies\' prying eyes.</p> <p>While governments and intelligence agencies justify surveillance on the grounds of detecting and preventing crime and terror, the documents leaked by Snowden reveal that they follow a <b>“collect it all”</b> strategy which involves the indiscriminate bulk collection of most communications. This includes millions of <b>Yahoo web cam images</b>, the real time monitoring of users\' activity on popular social media platforms – such as <b>Facebook</b>, <b>Twitter</b>, <b>Blogger</b> and <b>YouTube</b> – and the monitoring of “nearly everything a user does on the internet”.</p> </div> <div ng-switch-when="Targeted"> <img src="/images/categories/targeted-surveillance.07089953.png" class="category-image"> <h4>Targeted surveillance of citizens</h4> <p>Tens of thousands of computer networks have been infected with malware by the NSA. Backdoors have been added to computer network devices, such as routers and servers, and attempts to crack crypto and to exploit VPNs and anonymity software have been carried out.</p> <p>Cyber attacks have not only targeted suspect terrorists, but also non-profit organisations - such as France\'s Doctors of the World - system administrators, hacktivists, media organizations and even online gamers.</p> </div> <p> Select a country in the map below to learn more. </p> </div> <div class="row"> <div class="navbar categories"> <div class="btn-group" role="group" aria-label="..."> <button type="button" class="btn btn-default" ng-class="{\'active\': selectedCategory == \'Leaders\'}" ng-click="openPanel(\'Leaders\')">Leaders</button> <button type="button" class="btn btn-default" ng-class="{\'active\': selectedCategory == \'Corporate collaboration\'}" ng-click="openPanel(\'Corporate collaboration\')">Corporate collaboration</button> <button type="button" class="btn btn-default" ng-class="{\'active\': selectedCategory == \'Intelligence\'}" ng-click="openPanel(\'Intelligence\')">Intelligence collaboration</button> <button type="button" class="btn btn-default" ng-class="{\'active\': selectedCategory == \'Corporations\'}" ng-click="openPanel(\'Corporations\')">Corporations</button> <button type="button" class="btn btn-default" ng-class="{\'active\': selectedCategory == \'Mass\'}" ng-click="openPanel(\'Mass\')">Mass</button> <button type="button" class="btn btn-default" ng-class="{\'active\': selectedCategory == \'Targeted\'}" ng-click="openPanel(\'Targeted\')">Targeted</button> </div> </div> </div> <div class="row map-wrapper"> <button type="button" class="btn btn-default global-button" ng-class="{\'active\': selectedCountry.id == \'GLB\'}" ng-click="selectGlobal()">Global</button> <datamap map="mapObject" on-click="updateActiveGeography"></datamap> </div> <div class="country-details" id="details"> <div ng-show="selectedCountry"> <div class="row"> <h1>{{ selectedCountry.name }}</h1> </div> <div class="row" ng-if="!selectedRevelations"> <h4>No data</h4> </div> </div> <div class="row revelation" ng-repeat="data in selectedRevelations" ng-init="enabled = false"> <div class="row"> <div ng-click="enabled = enabled ? false : true" class="revelation-expand"> <span ng-if="enabled !== true" class="label label-default"> <i class="glyphicon glyphicon-plus"></i> </span> <span ng-if="enabled === true" class="label label-default expand-revelation"> <i class="glyphicon glyphicon-minus"></i> </span> </div> <div class="revelation-title"> <h3> {{ data["Revelations"] }} </h3> </div> </div> <div class="well details" ng-show="enabled"> <div class="row item" ng-if="[\'Revelations\', \'Countries\'].indexOf(key) == -1" ng-repeat="(key, value) in data"> <div class="col-md-6 category-name"> <h4>{{key}}</h4> </div> <div ng-if="key === \'Source documents & publications\'" class="col-md-6 category-value"> <a href="{{value}}">{{value}}</a> </div> <div ng-if="key !== \'Source documents & publications\'" class="col-md-6 category-value"> <p>{{value}}</p> </div> </div> </div> </div> </div>'),a.put("views/otherpage.html","<h2>Hello I am another page</h2>"),a.put("views/what-now.html",'<p>The good news is that encryption still works. <img src="/images/otr-works.8abd2bba.png"> </p><p>Snowden himself has <a href="http://www.theguardian.com/world/2013/jun/17/edward-snowden-nsa-files-whistleblower">stated</a>: <b><i>"Properly implemented strong crypto systems are one of the few things you can rely on..."</i></b></p> <p>And the even better news is that learning to encrypt your emails and instant messages, and to browse the internet anonymously does not require being a digital security expert anymore. Below are some <b>hands-on guides</b> which can walk you, step-by-step, through the process of installing and using various digital security tools:</p> <ul> <li><a href="https://securityinabox.org/en">Security in-a-box</a></li> <li><a href="https://ssd.eff.org/">Surveillance Self-Defense</a></li> <li><a href="https://secfirst.org/index.html">Umbrella: Security First</a></li> </ul> <p>Through such guides, you can learn how to encrypt the content of your <a href="https://www.gnupg.org/">emails</a>, <a href="https://otr.cypherpunks.ca/">instant messages</a> and <a href="https://veracrypt.codeplex.com/">personal documents</a>, as well as how to <a href="https://www.torproject.org/">browse the internet anonymously</a>. You can also learn how to secure your <a href="https://securityinabox.org/en/guide/firefox/windows">browser</a> and <a href="https://securityinabox.org/en/mobile-tools">smartphones</a>.</p> <p>Since many of the documents leaked by Snowden show that intelligence agencies <a href="https://edwardsnowden.com/revelations#prism-an-nsa-partnership-with-us-service-providers">target some of the most popular internet companies</a> (such as Google, Facebook and Yahoo), you might be wondering which <b>alternative, privacy-friendly</b> online services to use. In this case, you can consider the tools and services listed in the following resource: <a href="https://myshadow.org/resources">myshadow.org/resources</a>.</p> <p>While properly using encryption and various digital security tools is good practice, unfortunately it\'s not a silver bullet. Some of the most common <a href="https://citizenlab.org/publications/">targeted attacks against human rights activists</a>, for example, are deployed through relatively simple techniques, such as infected email attachments. In short, it\'s important to think of security as an overall strategy, embedded in your daily life, rather than just a "one-off" use of specific tools.</p>')}]);