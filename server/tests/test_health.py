import sys
import os

sys.path.insert(0, os.path.join(os.path.dirname(__file__), ".."))

from app import create_app


def test_health_check_returns_ok():
    app = create_app()
    client = app.test_client()

    response = client.get("/api/health")

    assert response.status_code == 200
    data = response.get_json()
    assert data["success"] is True
    assert data["data"]["status"] == "ok"


def test_unknown_route_returns_404():
    app = create_app()
    client = app.test_client()

    response = client.get("/api/nonexistent")

    assert response.status_code == 404
    data = response.get_json()
    assert data["success"] is False
    assert "error" in data
