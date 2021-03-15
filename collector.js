// The goal of this process is to get data from Kafka cluster and to create the data.json file


function getClusterId () {
    // Call to GET HOST/v3/clusters + parse data
    // https://docs.confluent.io/platform/current/kafka-rest/api.html#get--clusters
    return "cluster-Id"
}


// This function just returns an array of strings
function mockGetTopics (clusterId) {

    // Call to GET HOST/v3/clusters/clusterId/topics
    // https://docs.confluent.io/platform/current/kafka-rest/api.html#get--clusters-cluster_id-topics
    // Parse data and return the array

   return [
       "topic-1",
       "topic-1",
       "topic-2",
       "topic-3",
       "topics-4"
   ]
}

function getConsumerGroupsByTopic () {
    // Call to HOST/v3/clusters/clusterId/consumer-groups
    // https://docs.confluent.io/platform/current/kafka-rest/api.html#get--clusters-cluster_id-consumer-groups
    // Need Confluent Platform > 6.0.0

    // -> Get a list of consumerGroups
    // -> map on list
    // By consumerGroupId, get tge consumer list
    // Map on this list
    // By consumer, get the assignments
    // https://docs.confluent.io/platform/current/kafka-rest/api.html#get--clusters-cluster_id-consumer-groups-consumer_group_id-consumers-consumer_id-assignments
    // get the topic-name

    return [
        {
            topic: "",
            consumerGroupId: ""
        }
    ]
}