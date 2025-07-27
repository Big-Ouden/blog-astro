#!/bin/bash

set -e

echo "Rebuild et redémarrage du blog Astro..."
docker compose up -d --build astro-blog

echo "Blog redéployé."
