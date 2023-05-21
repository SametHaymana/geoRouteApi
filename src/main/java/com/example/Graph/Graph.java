/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.example.Graph;

import java.util.*;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;

import java.io.FileReader;

public class Graph {
    private Set<Node> nodes = new HashSet<>();
    private Map<String, List<String>> adjacencyList = new HashMap<>();
    private Map<String, Node> nodeMap = new HashMap<>();

    public void addNode(Node nodeA) {
        nodes.add(nodeA);
    }

    public Set<Node> getNodes() {
        return this.nodes;
    }

    public boolean checkNode(Node node) {
        return this.nodes.contains(node);
    }

    // Function that read graph json file
    public void readJsonFile(String filePath) {
        JSONParser parser = new JSONParser();

        try {
            // Parse the entire JSON
            JSONObject jsonObject = (JSONObject) parser.parse(new FileReader(filePath));

            // Parse nodes
            JSONArray nodesJsonArray = (JSONArray) jsonObject.get("nodes");
            for (Object nodeObject : nodesJsonArray) {
                JSONObject nodeJson = (JSONObject) nodeObject;

                String id = String.valueOf(nodeJson.get("id"));
                double lat = (double) nodeJson.get("y");
                double lon = (double) nodeJson.get("x");

                Node node = new Node(id, lat, lon);
                nodes.add(node);
                nodeMap.put(id, node);
                adjacencyList.put(id, new ArrayList<>());
            }

            // Parse edges
            JSONArray edgesJsonArray = (JSONArray) jsonObject.get("edges");
            for (Object edgeObject : edgesJsonArray) {
                JSONObject edgeJson = (JSONObject) edgeObject;

                String sourceId = String.valueOf(edgeJson.get("source"));
                String targetId = String.valueOf(edgeJson.get("target"));

                if (adjacencyList.get(sourceId) != null) {
                    adjacencyList.get(sourceId).add(targetId);
                }

                if (adjacencyList.get(targetId) != null) {
                    adjacencyList.get(targetId).add(sourceId); // Assuming undirected graph
                }
            }

        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    // Haversine distance formula for find distance in two point in real world
    public double findDistance(Node n1, Node n2) {

        double lat1, lat2, lon1, lon2;

        lat1 = n1.lat;
        lon1 = n1.lon;

        lat2 = n2.lat;
        lon2 = n2.lon;

        // distance between latitudes and longitudes
        double dLat = Math.toRadians(lat2 - lat1);
        double dLon = Math.toRadians(lon2 - lon1);

        // convert to radians
        lat1 = Math.toRadians(lat1);
        lat2 = Math.toRadians(lat2);

        // apply formulae
        double a = Math.pow(Math.sin(dLat / 2), 2) +
                Math.pow(Math.sin(dLon / 2), 2) *
                        Math.cos(lat1) *
                        Math.cos(lat2);

        double rad = 6371;
        double c = 2 * Math.asin(Math.sqrt(a));

        return rad * c;
    }

    // A function to find existing nearest node (street)
    // for if given node not exist in graph
    public Node findNearestNode(Node node) {
        Iterator<Node> iter = this.nodes.iterator();

        Node nearestNode = iter.next();
        double nearestDistance = this.findDistance(node, nearestNode);

        while (iter.hasNext()) {
            Node nextNode = iter.next();
            double nextDistance = this.findDistance(node, nextNode);

            if (nextDistance < nearestDistance) {
                nearestNode = nextNode;
                nearestDistance = nextDistance;
            }
        }
        return nearestNode;
    }

    // Djackstra alogirthm that find shortast path betwen two node
    public List<Node> dijkstraShortestPath(Node source, Node destination) {
        Map<Node, Node> previousNodes = new HashMap<>();
        Map<Node, Double> shortestDistances = new HashMap<>();
        PriorityQueue<Node> queue = new PriorityQueue<>(Comparator.comparing(node -> shortestDistances.get(node)));
        shortestDistances.put(source, 0.0);
        queue.add(source);

        while (!queue.isEmpty()) {
            Node currentNode = queue.poll();

            for (String neighborId : adjacencyList.get(currentNode.getId())) {
                Node neighbor = nodeMap.get(neighborId);
                if (neighbor == null) {
                    continue;
                }

                Double oldDistance = shortestDistances.get(neighbor);
                Double newDistance = shortestDistances.get(currentNode) + findDistance(currentNode, neighbor);

                if (oldDistance == null || oldDistance > newDistance) {
                    previousNodes.put(neighbor, currentNode);
                    shortestDistances.put(neighbor, newDistance);
                    queue.remove(neighbor);
                    queue.add(neighbor);
                }
            }
        }

        // Here we reconstruct the shortest path
        List<Node> shortestPath = new LinkedList<>();
        for (Node node = destination; node != null; node = previousNodes.get(node)) {
            shortestPath.add(0, node);
        }

        if (shortestPath.get(0) == source) {
            return shortestPath;
        } else {
            return Collections.emptyList(); // no path from source to destination
        }
    }

}
