import osmnx as ox
import networkx as nx
import json

# Specify the name of the place, and the transport mode
place_name = "Istanbul, Turkey"
network_type = 'walk'

# Create a graph from the place
G = ox.graph_from_place(place_name, network_type=network_type)

# Convert graph to NetworkX format
G_nx = nx.Graph(G)

# Convert nodes and edges to dictionaries
nodes = []
edges = []
for node_id, node_data in G_nx.nodes(data=True):
    nodes.append({
        'id': node_id,
        'x': node_data['x'],
        'y': node_data['y']
    })

for u, v, edge_data in G_nx.edges(data=True):
    edges.append({
        'source': u,
        'target': v,
        'length': edge_data['length']
    })

# Create a dictionary with graph data
graph_data = {
    'nodes': nodes,
    'edges': edges
}

# Save the graph data as JSON file
with open("istanbul_graph.json", 'w') as f:
    json.dump(graph_data, f)
