# Redis Server

This endeavor involved developing a customized Redis server  as a part of <a href="https://codingchallenges.fyi/challenges/challenge-redis">Coding challenges </a>  , Redis is an in-memory data structure server, which supports storing strings, hashes, lists, sets, sorted sets and more.

<h1>Get started </h1>
This tool uses NodeJs , so please ensure that you have latest Node version installed in your device 
<br><br>

step 1: git clone https://github.com/priyapatelsp/Redis_Server.git

step 2: Follow the below steps to start the program 
<h3>To start program </h3>
Please type the below command to execute this python program <br><br>

Step 1: Replace {filename} with the js file present , here it's server.js
````
node {file_name}.js
````
Step 2: After this you will get the response that server started with the message like below ,here 8080 port is used
````
This is redis on port 8080  
````

<h3>To server at terminal </h3>

Step 1: start the cli that we created on this port (8080)
````
redis-cli -p 8080
````


<h5>You can now interact with the our own customized redis server , below are the commands on terminal<h5>

To check if server started, you will get response pong
````
ping
````
To set the Name variable
````
set Name John
````
To get the variable's value of Name
````
get Name 
````
To echo any string 
````
echo "hello world"
````


<h3> Useful resources for Node js connections  </h3>
<a href="https://codingchallenges.fyi/challenges/challenge-redis">Coding Challenges </a>
<br>
<a href="https://redis.io/docs/latest/operate/oss_and_stack/install/install-stack/mac-os/">Redis_Server on mac</a>
<br>
<a href="https://www.youtube.com/watch?v=B2JoBjrW-xA">Redis Server</a>
<br>


<h1>Author</h1><br>
Priya Patel <br>
Github : <a href="https://github.com/priyapatelsp">priyapatelsp</a>
