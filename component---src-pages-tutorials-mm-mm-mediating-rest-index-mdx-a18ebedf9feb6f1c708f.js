"use strict";(self.webpackChunktech_academy_aiops_2022=self.webpackChunktech_academy_aiops_2022||[]).push([[7212,1532],{3624:function(e,a,t){t.d(a,{Z:function(){return A}});var n=t(7294),s=t(8650),r=t.n(s),i=t(1597),o=t(4799),l=t(3448),c=t(5900),p=t.n(c),d=function(e){var a,t=e.title,s=e.theme,r=e.tabs,i=void 0===r?[]:r;return n.createElement("div",{className:p()("PageHeader-module--page-header--NqfPe",(a={},a["PageHeader-module--with-tabs--vbQ-W"]=i.length,a["PageHeader-module--dark-mode--WCeH8"]="dark"===s,a))},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},t)))))},m=function(e){var a=e.relativePagePath,t=e.repository,s=(0,i.useStaticQuery)("1364590287").site.siteMetadata.repository,r=t||s,o=r.baseUrl,l=r.subDirectory,c=o+"/edit/"+r.branch+l+"/src/pages"+a;return o?n.createElement("div",{className:"bx--row EditLink-module--row--BEmSX"},n.createElement("div",{className:"bx--col"},n.createElement("a",{className:"EditLink-module--link--IDrl1",href:c},"Edit this page on GitHub"))):null},h=t(4703),u=t(1721),g=function(e){function a(){return e.apply(this,arguments)||this}return(0,u.Z)(a,e),a.prototype.render=function(){var e=this.props,a=e.title,t=e.tabs,s=e.slug,o=s.split("/").filter(Boolean).slice(-1)[0],l=t.map((function(e){var a,t=r()(e,{lower:!0,strict:!0}),l=t===o,c=new RegExp(o+"/?(#.*)?$"),d=s.replace(c,t);return n.createElement("li",{key:e,className:p()((a={},a["PageTabs-module--selected-item--aBB0K"]=l,a),"PageTabs-module--list-item--024o6")},n.createElement(i.Link,{className:"PageTabs-module--link--Kz-7R",to:""+d},e))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12 bx--col-no-gutter"},n.createElement("nav",{"aria-label":a},n.createElement("ul",{className:"PageTabs-module--list--xLqxG"},l))))))},a}(n.Component),k=g,f=t(7296),y=t(5387),b=t(3732),w=function(e){var a=e.date,t=new Date(a);return a?n.createElement(b.X2,{className:"last-modified-date-module--row--XJoYQ"},n.createElement(b.sg,null,n.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",t.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null},A=function(e){var a=e.pageContext,t=e.children,s=e.location,c=e.Title,p=a.frontmatter,u=void 0===p?{}:p,g=a.relativePagePath,b=a.titleType,A=u.tabs,S=u.title,N=u.theme,v=u.description,E=u.keywords,C=u.date,T=(0,y.Z)().interiorTheme,B=(0,i.useStaticQuery)("2456312558").site.pathPrefix,R=B?s.pathname.replace(B,""):s.pathname,I=A?R.split("/").filter(Boolean).slice(-1)[0]||r()(A[0],{lower:!0}):"",x=N||T;return n.createElement(l.Z,{tabs:A,homepage:!1,theme:x,pageTitle:S,pageDescription:v,pageKeywords:E,titleType:b},n.createElement(d,{title:c?n.createElement(c,null):S,label:"label",tabs:A,theme:x}),A&&n.createElement(k,{title:S,slug:R,tabs:A,currentTab:I}),n.createElement(f.Z,{padded:!0},t,n.createElement(m,{relativePagePath:g}),n.createElement(w,{date:C})),n.createElement(h.Z,{pageContext:a,location:s,slug:R,tabs:A,currentTab:I}),n.createElement(o.Z,null))}},8313:function(e,a,t){t.r(a),t.d(a,{_frontmatter:function(){return o},default:function(){return h}});var n=t(3366),s=(t(7294),t(4983)),r=t(3624),i=["components"],o={},l=function(e){return function(a){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,s.kt)("div",a)}},c=l("AnchorLinks"),p=l("AnchorLink"),d={_frontmatter:o},m=r.Z;function h(e){var a=e.components,t=(0,n.Z)(e,i);return(0,s.kt)(m,Object.assign({},d,t,{components:a,mdxType:"MDXLayout"}),(0,s.kt)(c,{mdxType:"AnchorLinks"},(0,s.kt)(p,{mdxType:"AnchorLink"},"6-1: Lab Introduction"),(0,s.kt)(p,{mdxType:"AnchorLink"},"6-2: Starting Cassandra"),(0,s.kt)(p,{mdxType:"AnchorLink"},"6-3: Create a topic for REST data"),(0,s.kt)(p,{mdxType:"AnchorLink"},"6-4: Configuring the REST mediation service"),(0,s.kt)(p,{mdxType:"AnchorLink"},"6-5: Starting Kafka"),(0,s.kt)(p,{mdxType:"AnchorLink"},"6-6: Starting Spark"),(0,s.kt)(p,{mdxType:"AnchorLink"},"6-7: Starting the REST Mediation Service"),(0,s.kt)(p,{mdxType:"AnchorLink"},"6-8: Send data to the REST Mediation Service")),(0,s.kt)("h2",null,"6-1: Lab Introduction"),(0,s.kt)("p",null," In lab 3 we created a model for metric data that resided in CSV files. Metric Manager can also ingest data via a REST interface. The REST interface can accept pre-defined JSON payloads and process them for analysis and machine learning."),(0,s.kt)("p",null," Since the definition of the JSON payload describes the model within its structure, it is not required to use the Mediation Tool to create a model. The pre-defined JSON format defines the model, and it is only necessary to ensure that the JSON payload adheres to the required format. This format is also the same as the new version of Watson AIOps container-based Metric Anomaly Detection component that is being actively developed, which we will be working with in the final lab."),(0,s.kt)("p",null," This lab will go through the various components that make up the REST mediation service. We will configure the components that we installed in lab 1, start the mediation service, and use a simple script to send data to the REST mediation service, and view the results."),(0,s.kt)("h2",null,"6-2: Starting Cassandra"),(0,s.kt)("p",null," Data that is sent to the REST mediation service is stored in a Cassandra database. The “run","_","extractor","_","instance” command will pull metrics from Cassandra for analysis. For production deployments, and depending on metric load, it is possible to use a distributed installation of Cassandra for high availability and performance. For this lab we will be configuring a single Cassandra instance."),(0,s.kt)("h3",null,"Configuring startup:",(0,s.kt)("br",null)),(0,s.kt)("hr",null),(0,s.kt)("p",null," As the ‘scadmin’ user, start Cassandra with the following command:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"/opt/IBM/apache-cassandra-3.11.10/bin/cassandra > /opt/IBM/apache-cassandra-3.11.10/cassandra.out 2>&1\n")),(0,s.kt)("p",null," Run the following command to verify that Cassandra is running:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"ps -ef |grep org.apache.cassandra.service.CassandraDaemon |grep -v grep\n")),(0,s.kt)("p",null," Next, using your preferred text editing tool, edit the /opt/IBM/apache-cassandra-3.11.10/bin/stop-server script and add the following line to the end of the file:"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"pgrep -u $(whoami) -f cassandra | xargs -t -i kill {}")),(0,s.kt)("p",null," Run the ‘stop-server’ command to stop the Cassandra server:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"/opt/IBM/apache-cassandra-3.11.10/bin/stop-server\n")),(0,s.kt)("p",null,"And ensure the stop script stopped Cassandra:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"ps -ef |grep org.apache.cassandra.service.CassandraDaemon |grep -v grep\n")),(0,s.kt)("p",null," Clean up the Cassandra data folder:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"cd /opt/IBM/apache-cassandra-3.11.10/data/data/\nrm -rf system\n")),(0,s.kt)("p",null," Start Cassandra:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"/opt/IBM/apache-cassandra-3.11.10/bin/cassandra > /opt/IBM/apache-cassandra-3.11.10/cassandra.out 2>&1\n")),(0,s.kt)("p",null,"List the Cassandra servers:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"/opt/IBM/apache-cassandra-3.11.10/bin/nodetool status\n")),(0,s.kt)("p",null,"You should see a response similar to the following, indicating that it is listening 127.0.0.1:"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"UN 127.0.0.1 133.29 KiB 256 100.0% b2f89d8c-dd23-451c-907a-59b72dc4d18c rack1")),(0,s.kt)("h3",null,"Configure Cassandra with a username and password"),(0,s.kt)("p",null," For security, it is required to configure Cassandra with a username and password so the topic extractor can securely authenticate with Cassandra and extract metric data. Using your preferred text editor, edit the /opt/IBM/apache-cassandra-3.11.10/conf/cassandra.yaml and change the ",(0,s.kt)("strong",{parentName:"p"},"authenticator")," line to:"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"authenticator: PasswordAuthenticator")),(0,s.kt)("p",null," Save the file and restart Cassandra:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"/opt/IBM/apache-cassandra-3.11.10/bin/stop-server\n/opt/IBM/apache-cassandra-3.11.10/bin/cassandra > /opt/IBM/apache-cassandra-3.11.10/cassandra.out 2>&1\n/opt/IBM/apache-cassandra-3.11.10/bin/nodetool status\n")),(0,s.kt)("p",null," Finally, verify password authentication is working by running cqlsh, passing in username and ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("span",{style:{color:"green"}},"<CASSANDRA DEFAULT PASSWORD",">"))," as the password."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"/opt/IBM/apache-cassandra-3.11.10/bin/cqlsh -u cassandra -p <DEFAULT CASSANDRA PASSWORD>\n")),(0,s.kt)("p",null,"You should see a successful connect, and arrive at the cqlsh prompt. "),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"cassandra@cqlsh>")),(0,s.kt)("p",null," Use the following commands to change the default ‘cassandra’ user’s password to either the ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("span",{style:{color:"green"}},"<CASSANDRA PASSWORD",">"))," provided by the lab proctor, or the cassandra password you chose if you were required to use an alternative:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"cassandra@cqlsh> alter user cassandra with password '<CASSANDRA PASSWORD>';\ncassandra@cqlsh> quit\n")),(0,s.kt)("p",null," Encrypt and copy the default Cassandra password using the following commands. When prompted, enter <CASSANDRA PASSWORD",">"," as the password:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"/opt/IBM/scanalytics/analytics/bin/admin.sh passwd -c $PI_HOME/config/cassandra.properties connection.password\n")),(0,s.kt)("p",null," Inspect the encrypted password in the following file using the following command:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"cat $PI_HOME/config/cassandra.properties\n")),(0,s.kt)("h1",null,(0,s.kt)("strong",{parentName:"h1"},"!!! DANGER WILL ROBINSON !!! ")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"}," !! NOTE !!: If the encrypted Cassandra password you inspected in the previous command begins with the ”+” character, you will need to select an alternative password for the Cassandra ‘cassandra’ user. This is due to a current defect in the REST mediation code. Try making up an alternative password of your choice, encrypt it, and if it doesn’t begin with a ”+” character, use your chosen password an alternative. Then, in the next section, use your alternative password in place of <CASSANDRA PASSWORD",">"," ")),(0,s.kt)("h2",null,"6-3: Create a topic for REST data"),(0,s.kt)("p",null," You can store metric data data derived from REST only in the topic that you use to extract the REST Mediation Service data. You cannot use an existing topic if it contains data from a CSV file or database. However, you can use an existing topic if it does not contain any data or if it contains only JSON data. We will reconfigure our BIGBLUE topic to accept REST data."),(0,s.kt)("p",null," Return to a terminal window and clear the topic using the following commands. When prompted, type ” ",(0,s.kt)("strong",{parentName:"p"},"I am sure”")," and press enter. When it asks whether you want to clear out the database, type ” ",(0,s.kt)("strong",{parentName:"p"},"Yes"),"” and press enter. This will clean out all of the data from the topic and reset it to pristine."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"/opt/IBM/scanalytics/analytics/bin/stop.sh -s\n/opt/IBM/scanalytics/analytics/bin/admin.sh cleanup -t=BIGBLUE\n")),(0,s.kt)("h3",null,"Modify the topic to extract data from Cassandra:"),(0,s.kt)("p",null," The following command configures the topic to connect to cassandra on localhost:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"/opt/IBM/scanalytics/analytics/bin/admin.sh set -t=BIGBLUE cassandra.host localhost\n")),(0,s.kt)("p",null," Obtain the encrypted cassandra password, copying the text that follows ",(0,s.kt)("strong",{parentName:"p"},"cassandra.password=")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"cat $PI_HOME/config/cassandra.properties\n")),(0,s.kt)("p",null,"Set the encrypted value for our BIGBLUE topic, pasting the value for ‘connection.password’ obtained from the previous output:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"/opt/IBM/scanalytics/analytics/bin/admin.sh set -t=BIGBLUE cassandra.password <ENCRYPTED CASSANDRA PASSWORD>\n")),(0,s.kt)("p",null," Set the Cassandra user for the topic to ‘cassandra’:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"/opt/IBM/scanalytics/analytics/bin/admin.sh set -t=BIGBLUE cassandra.username cassandra\n")),(0,s.kt)("h2",null,"6-4: Configuring the REST mediation service"),(0,s.kt)("p",null," The next step in configuring the REST integration requires configuring the REST mediation service mediation configuration files. We will encrypt the Cassandra password and store it in the Mediation Service yaml files. We will use the user ‘piadmin’ to encrypt the password, then update the appropriate mediation service yaml files. The reason we need to use a separate user is because we require Java 11 for the IBM REST mediation code itself, while the rest of the REST mediation components (Cassandra, spark, kafka) requires Java 8."),(0,s.kt)("p",null," Sudo to the ‘piadmin’ user, using the password ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("span",{style:{color:"green"}},"<LAB PASSWORD",">"))," and run the password encryption utility, passing ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("span",{style:{color:"green"}},"<CASSANDRA PASSWORD",">"))," as the argument to the encrypt_password.sh command:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"sudo su - piadmin\ncd /opt/IBM/pi-mediation-1.0.4\n./encrypt_password.sh <CASSANDRA PASSWORD> \n")),(0,s.kt)("p",null,"The “encrypt","_","password.sh” tool will print the encrypted password. Copy the encrypted password."),(0,s.kt)("p",null," Using your preferred text editor, edit the /opt/IBM/pi-mediation-1.0.4/config/metric-api-service.yml file and modify the “cassandra.encrypted.password:” entry, paste the encrypted password text."),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"cassandra.encrypted.password: <ENCRYPTED CASSANDRA PASSWORD>")),(0,s.kt)("p",null," Save the file and exit. "),(0,s.kt)("p",null," Next, edit the /opt/IBM/pi-mediation-1.0.4/config/metric-spark.yml file and modify the following entries in the file:"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"spark.cassandra.auth.username: cassandra"),(0,s.kt)("br",{parentName:"p"}),"\n",(0,s.kt)("inlineCode",{parentName:"p"},"spark.cassandra.auth.encrypted.password: <ENCRYPTED CASSANDRA PASSWORD>"),(0,s.kt)("br",{parentName:"p"}),"\n",(0,s.kt)("inlineCode",{parentName:"p"},"cassandra.username: cassandra"),(0,s.kt)("br",{parentName:"p"}),"\n",(0,s.kt)("inlineCode",{parentName:"p"},"cassandra.password: <ENCRYPTED CASSANDRA PASSWORD>"),"  "),(0,s.kt)("p",null," Save the file and exit."),(0,s.kt)("h3",null,"Configuring authentication for the REST mediation service"),(0,s.kt)("p",null," The REST API requires that you set a password to ensure that connections are authenticated. We will use the password ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("span",{style:{color:"green"}},"<LAB PASSWORD",">"))," as our API password. As the piadmin user, encrypt the password, making sure to substitute ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("span",{style:{color:"green"}},"<LAB PASSWORD",">"))," with the lab password provided earlier:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"cd /opt/IBM/pi-mediation-1.0.4/\n./encrypt_password.sh <LAB PASSWORD>\n")),(0,s.kt)("p",null," Copy the encrypted password."),(0,s.kt)("p",null," Once you have obtained and copied the encrypted password for the REST service, edit the “/opt/IBM/pi-mediation-1.0.4/config/metric-api-service.yml file and modify the entry ‘metrics.api.encrypted.password’ entry, pasting the encrypted password."),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"metrics.api.encrypted.password: <ENCRYPTED LAB PASSWORD>")),(0,s.kt)("h2",null,"6-5: Starting Kafka"),(0,s.kt)("p",null," Copy the startup script for Kafka to the kafka directory, then run the script to start kafka:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"cp /home/piadmin/start-pi-kafka.sh /opt/IBM/kafka_2.13-2.6.2/\n/opt/IBM/kafka_2.13-2.6.2/start-pi-kafka.sh\n")),(0,s.kt)("p",null," Wait about 30 seconds, then verify that it is running:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"ps -ef |grep kafka.Kafka |grep -v grep\n")),(0,s.kt)("h2",null,"6-6: Starting Spark"),(0,s.kt)("p",null," Spark must be run as the ‘piadmin’ user. Start the Spark services by running the following command: "),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"/opt/IBM/spark-3.1.2-bin-hadoop3.2/sbin/start-all.sh\n")),(0,s.kt)("p",null," Use ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("span",{style:{color:"green"}},"<LAB PASSWORD",">"))," for the password when it prompts."),(0,s.kt)("h2",null,"6-7: Starting the REST mediation service"),(0,s.kt)("p",null," Become the piadmin user (if you’re not already) and start the service. The service must be started from within the mediation directory:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"cd /opt/IBM/pi-mediation-1.0.4/\n./run_service.sh\n")),(0,s.kt)("p",null," Next, verify that the mediation service is running:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"ps -ef |grep yml\n")),(0,s.kt)("p",null,"You should see the following two java processes running:"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"java -Xms1G -Xmx2G -jar libs/ea-metric-spark.jar server config/metric-spark.yml"),(0,s.kt)("br",null),"\n",(0,s.kt)("inlineCode",{parentName:"p"},"java -Xms1G -Xmx2G -jar libs/ea-metric-api.jar server config/metric-api-service.yml")),(0,s.kt)("h2",null,"6-8: Send data to the REST interface:"),(0,s.kt)("p",null," If you are still the ‘piadmin’ user, exit back to the ‘scadmin’ user, or open a new terminal window. We will be using secure copy to obtain a JSON file that contains metrics that we will be sending to the REST service. Run the following commands as the scadmin user to obtain the file. :"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"cd /home/scadmin/BookInfoDemo/data/bookinfo\nwget http://150.238.93.118/BookInfoJson-20220721-0000__20220806-1200.json \n")),(0,s.kt)("p",null," When the file transfer completes, you can use curl to send the data to the REST service. Execute the following commands to send JSON data to the Metric Manager REST mediation service, making sure to substiture ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("span",{style:{color:"green"}},"<LAB PASSWORD",">")),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},'curl -vX POST --user "system:<LAB PASSWORD>" --header "Content-Type: application/json" --header "X-TenantID: BIGBLUE" http://pi-template.Hybrid-Squad.cloud:18080/metrics/api/1.0/metrics -d @BookInfoJson-20220721-0000__20220806-1200.json\n')),(0,s.kt)("p",null,"The key response lines that you will see when the load is successful are:"),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"< HTTP/1.1 100 Continue"),(0,s.kt)("br",null),"\n",(0,s.kt)("em",{parentName:"p"},"< HTTP/1.1 200 OK")),(0,s.kt)("p",null,"Followed by several lines summarizing the completed session."),(0,s.kt)("p",null," Wait a couple minutes, then verify that the data has made it into cassandra:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"/opt/IBM/apache-cassandra-3.11.10/bin/cqlsh -u cassandra -p <CASSANDRA PASSWORD>\nselect * from tararam.dt_metric_value;\n")),(0,s.kt)("p",null,"You should see several hundreds of lines of our data in the cassandra tables… page through or hit ",(0,s.kt)("strong",{parentName:"p"},"Ctrl-C")," when you’re satisfied that data is making it into cassandra:"),(0,s.kt)("p",null," ",(0,s.kt)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,s.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"30.90277777777778%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAYAAADDl76dAAAACXBIWXMAAAsTAAALEwEAmpwYAAABDklEQVQY03XP226CUBBAUf//15paQW4VFOTyUoGjEZtzZqC7lWpqk/ZpkklmZc8Cu6a1KZ5bErsVry4gsEt8+0RuU7YuoZCMzMXzrtIS+hN6ODC2LZJtGYsS270xfFxYIDHG5US6ZqMhmSYksiZSj9LlFJpRjdeZEsoLzdjAaWDseyZj0GLPVDfo0WCRKxjRux2h+GwkINOYWPz5eO+2c91ed7/B45mx65j6Ht3lTFWNNQfODA+g/oCJ+ESymsFc0hnMdfMADjfQoHkxg2p6LO775d5tCcT7o3A3F5Y3MPqvsKxxpmXg/QqGdC7DlxWvsibViEg8AllS3ArvYCDPNGMN5gq2TN0drGbw8gV+ArXpwD5cWGMSAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,s.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"lab6 add1",title:"lab6 add1",src:"/waiops-tech-jam/static/8625670670eb5cd5de2296992ee807d6/3cbba/lab6-add1.png",srcSet:["/waiops-tech-jam/static/8625670670eb5cd5de2296992ee807d6/7fc1e/lab6-add1.png 288w","/waiops-tech-jam/static/8625670670eb5cd5de2296992ee807d6/a5df1/lab6-add1.png 576w","/waiops-tech-jam/static/8625670670eb5cd5de2296992ee807d6/3cbba/lab6-add1.png 1152w","/waiops-tech-jam/static/8625670670eb5cd5de2296992ee807d6/2f53e/lab6-add1.png 1160w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    ")),(0,s.kt)("p",null," The next step is to run the Metric Manager extractor to ingest the data from Cassandra for analysis and machine learning. Run the following command to start our BIGBLUE topic, then run extraction. Starting the topic may take a few minutes:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"/opt/IBM/scanalytics/analytics/bin/start.sh -t=BIGBLUE\n/opt/IBM/scanalytics/analytics/bin/admin.sh run_extractor_instance -t=BIGBLUE -s=20220723-0000 -e=20220806-1200\n")),(0,s.kt)("p",null," If you want to monitor the progress of data ingestion for a topic, a log file /opt/IBM/scanalytics/analytics/log/\\<TOPICNAME",">","/AnalyticsBIGBLUE","_","log","_","AnalyticsOperator.log. You can watch the progression of the ingestion and monitor for error messages by using the following command:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"tail -f /opt/IBM/scanalytics/analytics/log/BIGBLUE/AnalyticsBIGBLUE_log_AnalyticsOperator.log\n")),(0,s.kt)("p",null," The log file will show where it is in terms of what time interval it is collecting and analyzing, the amount of KPIs and how many KPIs are being evaluated for each algorithm (e.g. robust bounds, granger, flat line, etc). If you have any issues with ingestion, this log file can help you identify errors that may be attributing to the problem."),(0,s.kt)("p",null," Take a break for a few minutes. The ingestion will complete in about 10 minutes. When mediation is complete, follow the same procedure as in the previous lab to verify that the data was ingested and showing up. Open Firefox and log in as ‘ncoadmin’ / ’",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("span",{style:{color:"green"}},"<LAB PASSWORD",">")),"’, then click on the snowflake icon on the left menu pane and selecting “Service Diangosis Anomaly Search”, and drilling into one of the anomalies:"),(0,s.kt)("p",null," ",(0,s.kt)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"932px"}},"\n      ",(0,s.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"42.36111111111111%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAAAsTAAALEwEAmpwYAAABkElEQVQoz2WQS4sTURCF+//vRTSLWaj4WORBhiEZFF0FRl0pw5iQxCiBdOxH+r46fV/9SSeijhZ8nKJOUVAnmUwm7HY7fuz3aG0oKoHUCqNrjtrQ1EdcUWKz/ITLC1yW4YSgro+ISqCkQkmJkIpkOBwhDxJZSg5SYOyR4MA5j/GOqGvidEo7GNOOLgmjMf5VH3/zAde2OGsJIRB8IMZIcnk1Zi9StsWWuV6xMBtW9ZalWfOlXvE9WyBGF5jnPeSLR8iXj1FPH2Bn74hA8J4Y4p+Dw6sBWZuyLOZs5IqNWPL1l34TS9bZHfnHt5Sza6qb14j3bxCzCfXiFh/BWXf6plPvPUm/P8A3niovOSqNEQojJE33qvUE6/Eh4nzAhYiP7Rnv8bbBW3vCNec+uXjyjEMTSCtNYSxl7c6Ys+5KSS5rys67h6PQlvSgTju7g6ZUNcnDXo+1CiyEZ6niPVa65XMqmFf21P/nq8BdbviUCm4Ly0Y0JNfTCV11OXShxtj+RST8nv3rnen8Lo4ulhAiPwE3/1khthRNHgAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,s.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Picture1",title:"Picture1",src:"/waiops-tech-jam/static/d689856c4067c62e6a4b79aaba8f20bd/07264/Picture1.png",srcSet:["/waiops-tech-jam/static/d689856c4067c62e6a4b79aaba8f20bd/7fc1e/Picture1.png 288w","/waiops-tech-jam/static/d689856c4067c62e6a4b79aaba8f20bd/a5df1/Picture1.png 576w","/waiops-tech-jam/static/d689856c4067c62e6a4b79aaba8f20bd/07264/Picture1.png 932w"],sizes:"(max-width: 932px) 100vw, 932px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    ")),(0,s.kt)("p",null," For live ongoing data ingestion using the REST interface, you would start the Metric Manager topic, then start the extractor ","*","without a start time or end time","*",". That puts the Metric Manager extractor in live mode, and for each time interval (e.g. every 5 minutes), the extractor will pull the metrics that were posted to the REST interface for the last interval, and process them live. "),(0,s.kt)("p",null," You can create custom scripts to post metrics to the REST service. Additionally, our off-the-shelf Mediation Packs can collect metric from various sources (e.g. Splunk, Dynatrace, etc) and output to either CSV files for PI to collect, or can post to the REST Mediation Service. These off-the-shelf Mediation Packs currently work with Metric Manager on VM, but will in the future also work with Watson AIOps Metric Anomaly Detection."),(0,s.kt)("p",null," ",(0,s.kt)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,s.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"51.041666666666664%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsTAAALEwEAmpwYAAACOklEQVQoz42QW08TURSF5z+Z+Owv8ZLYYgteeFATowKRF41BhAQt5dJiWy4SWgiFgjEpMSHRIiFcwgPGXqSdttN2ZtrpzHTa8pkpqfGRhy9rrbP32TvnCHciGW6F09xcSeGIijg38ri2ih3v2pLo2SxwL1bEvS3R+6WMK3ap9lnPuoJro0LvZo6+mIgzKiJocglFylNXy9A0aRp1yqUytCyO9hLY9bPjQ/KZJFI2TbVcoHCeRlNk5OYqZX2X+NkFW6c6F5aBkC8USKXT5MQ8umGSSf3mx84G8VgEn3eG8XdjBAPzDA4McbfvAY8eP6X/vhvH8xFmdqIMRJ4Q+Gni3ZURKxqCKIokU0kymQyqonB0csrL8QAj3nleeybx+PyEQiGCwQDeZ/3MjY/i8/mY9ofwTm4yMRfi9sNhRibmaDYtBEmSyGbPKUgS7Uad6IlGcL+FYzWFe+c7CwfHoCqYiTgNzxCV5Y8kDYkDMcunXzrbp1luXLuO2+Gi3W4jlCQJMS+SzeWoa1W+Js4Ym43ydvYzg9M+puYXWAuHCQf8rLx/w/KHMSLrawQWlvD4l1lcXMLpcDL8ahjLshBy+cs/lBUFyzD5I0uM7u9yLpdoaRo1VUWWZZRqDaWmXSIrVFWVek1BVVUaVoNGo4Gu6wjVmka1VuuEi2aLb4cHvPBNEd9L0G610A0D0zQxbe1imhg2htnx9t0ugmEY2NjBVqUiI2YylIrFzrD/m6+C0DXdofZGq9n894TuwqvyFxAEtNH1qoKrAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,s.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"lab6 add2",title:"lab6 add2",src:"/waiops-tech-jam/static/66be16b1ef431b852eca3b5d917b477d/3cbba/lab6-add2.png",srcSet:["/waiops-tech-jam/static/66be16b1ef431b852eca3b5d917b477d/7fc1e/lab6-add2.png 288w","/waiops-tech-jam/static/66be16b1ef431b852eca3b5d917b477d/a5df1/lab6-add2.png 576w","/waiops-tech-jam/static/66be16b1ef431b852eca3b5d917b477d/3cbba/lab6-add2.png 1152w","/waiops-tech-jam/static/66be16b1ef431b852eca3b5d917b477d/887b2/lab6-add2.png 1508w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    ")),(0,s.kt)("p",null," Note also that the REST Mediation Service code is the same code that is used in the Metric Anomaly Detection component of Watson AIOps, which you will be working with in the final lab."),(0,s.kt)("p",null," That concludes this lab. You learned how to install and configure the REST Mediation Service, how to start the components that make up the service, and also how to POST data to the service."))}h.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-tutorials-mm-mm-mediating-rest-index-mdx-a18ebedf9feb6f1c708f.js.map