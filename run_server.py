import uvicorn
from fastapi import FastAPI
from google.adk.services.adk_service import AdkService

# IMPORTANT: The path is relative to the root where this script is run
from agents.ipnu_agent.agent import root_agent

# Create the AdkService with your agent
adk_service = AdkService(agent=root_agent)

# Create a FastAPI app
app = FastAPI(
    title="IPNU Ciamis Agent Server",
    description="A custom FastAPI server for the ADK agent.",
)

# Mount the ADK service to the app.
# This will create the /chat, /authorize, etc. endpoints.
app.mount(path="", app=adk_service.app)

if __name__ == "__main__":
    # Run the server
    uvicorn.run(app, host="127.0.0.1", port=8000)
