# Shree Gajanan Vastu Jyotish

A modern astrology and pooja booking platform built with microservices architecture.

## Project Overview
- **Frontend:** React + Vite, styled with shadcn/ui.  
- **Backend:** Node.js microservices:
  - `booking-service.cjs` – Handles consultation bookings.  
  - `server.cjs` – Handles daily horoscope updates (connected directly to Supabase).  
- **Database:** Supabase (Postgres).  

## Dockerization
- Both frontend and backend are containerized using Docker.  
- Separate `.env` files for local development and Docker environment (`.env` for backend, `.env.docker` for frontend).  
- Nginx used as a reverse proxy in the frontend container.  

## CI/CD
- GitHub Actions workflow builds Docker images and pushes them to **GitHub Container Registry (GHCR)**.  
- Setup ensures future deployments can be automated with container images.  

## Microservices Architecture
- Frontend communicates with backend services via environment variables.  
- Each microservice runs in its own container, enabling isolated scaling and updates.  

## Getting Started
1. Clone the repo:
   ```bash
   git clone https://github.com/shubham00k/ShreeGajananV2.git
   cd ShreeGajananV2
