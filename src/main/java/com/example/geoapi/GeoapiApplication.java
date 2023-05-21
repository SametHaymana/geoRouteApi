package com.example.geoapi;

import java.util.*;

import org.apache.commons.lang3.ObjectUtils.Null;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.Graph.*;

@SpringBootApplication
public class GeoapiApplication {
	private static Graph graph;

	public static void main(String[] args) {
		graph = new Graph();
		graph.readJsonFile("istanbul_graph.json");
		SpringApplication.run(GeoapiApplication.class, args);
	}

	@RestController
	public class Route {

		@GetMapping("/")
		public String hello() {
			return "Welcome GeoApi\n Post locations to /api/route";
		}

		@PostMapping("/api/route")
		public ResponseEntity<List<Node>> findShortestPath(@RequestBody Map<String, Map<String, Double>> request) {
			try {
				Node node1 = graph.findNearestNode(
						new Node("node_id_1", request.get("location1").get("lat"),
								request.get("location1").get("lon")));
				Node node2 = graph.findNearestNode(
						new Node("node_id_2", request.get("location2").get("lat"),
								request.get("location2").get("lon")));

				List<Node> shortestPath = graph.dijkstraShortestPath(node1, node2);

				return ResponseEntity.ok(shortestPath);

			} catch (Exception e) {
				// TODO: handle exception
				return ResponseEntity.status(500).body(null);
			}

		}
	}

}
