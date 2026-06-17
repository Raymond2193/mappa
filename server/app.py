from dotenv import load_dotenv

load_dotenv()

from flask import Flask, jsonify
from flask_cors import CORS

from config import Config
from routes.health import health_bp


def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    CORS(app, origins=["http://localhost:5173"])

    app.register_blueprint(health_bp, url_prefix="/api")

    @app.errorhandler(404)
    def not_found(error):
        return jsonify({"success": False, "error": "Not Found"}), 404

    @app.errorhandler(500)
    def internal_error(error):
        return jsonify({"success": False, "error": "Internal Server Error"}), 500

    return app


if __name__ == "__main__":
    app = create_app()
    app.run()
