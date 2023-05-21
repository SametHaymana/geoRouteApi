# Geo Router api

This api can be able to quckliy find path (<4s) between two point in istanbul. Go ahed start aplication and test it.




## Test It

Example Request data

```json
    {
        "location1": {"lat": 41.085364, "lon": 28.786628},
        "location2": {"lat": 41.018732, "lon": 28.928428}
    }

```

Try it with curl

```bash
    curl -X POST -H "Content-Type: application/json"  -d '{"location1": {"lat": 41.085364, "lon": 28.786628}, "location2": {"lat": 41.018732, "lon": 28.928428}}' http://localhost:8080/api/route
```

