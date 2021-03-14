# Kafka-topics-map 

Little project. The goal is to create a kind of map with the toics, the consumers, the producers of a Kafka cluster and the links between them. 

The graph is geenrated from a file called `data.json`. In the future, I imagine this file can be created by another process (please, no JavaScript) and hosted in an S3 Bucket for example. This project is only here to expose this data in a graph. 

YOu can find the result here : `https://plarboulette-kafka-topics-map.cleverapps.io/` 

To run the project locally, you juste have to use `npm start`. 

If you want to modify the data, you have to go to the `data.json`file. 
- The `nodes`part contains all the topics, the consumers and the producers. 
- The `links`part contains all the links between them. 
- The `categories` part let to separate topics, consumers and producers on the graph (color and wymbol change thanks to this `cateogiry`)(I think you don't have to update that). 


