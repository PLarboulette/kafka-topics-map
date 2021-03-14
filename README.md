# Kafka-topics-map 

The goal of this project is to create a kind of map with the topics, the consumers, the producers of a Kafka cluster and the links between them. 

The graph is generated from a file called `data.json`. In the future, I imagine this file can be created by another process (please, no JavaScript) and hosted in an S3 Bucket for example. This project is only here to expose this data in a graph. 

You can find the result here : `https://plarboulette-kafka-topics-map.cleverapps.io/` 

To run the project locally, you juste have to use `npm start`. 

If you want to modify the data, you have to go to the `data.json`file. 
- The `nodes`part contains all the topics, the consumers and the producers. 
- The `links`part contains all the links between them. 
- The `categories` part let to separate topics, consumers and producers on the graph (color and symbol change thanks to this `category`)(I think you don't have to update that). 


