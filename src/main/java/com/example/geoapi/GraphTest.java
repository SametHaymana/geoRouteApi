
package com.example.geoapi;

import com.example.Graph.*;
import java.util.List;

public class GraphTest {
    public static void main(String[] args) {
        Graph graph = new Graph();
        graph.readJsonFile("istanbul_graph.json");

        Node node1 = graph.findNearestNode(new Node("node_id_1", 41.085364, 28.786628));
        Node node2 = graph.findNearestNode(new Node("node_id_2", 41.018732, 28.928428));

        List<Node> shortestPath = graph.dijkstraShortestPath(node1, node2);

        System.out.println("var pathData = [");
        for (Node node : shortestPath) {
            System.out.println("{lat: " + node.getLat() + ", lon: " + node.getLon() + "},");
        }
        System.out.println("];");
    }
}