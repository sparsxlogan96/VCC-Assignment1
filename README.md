# VCC-Assignment1
# Microservice Deployment using VirtualBox

## Overview
This project demonstrates a microservice-based application deployed across
multiple Virtual Machines using Oracle VirtualBox.

## Architecture
- Client VM (curl-based client)
- API VM (Node.js + Express)
- Database VM (MongoDB)

## Network Configuration
- Adapter 1: NAT (Internet)
- Adapter 2: Host-only (Inter-VM communication)

## Services
- MongoDB running on DB VM
- REST API running on API VM
- Client VM consuming API

## How to Run
1. Start Database VM
2. Start API VM and run `node index.js`
3. From Client VM, run curl commands to test API

## OUTPUT:
<img width="1635" height="520" alt="image" src="https://github.com/user-attachments/assets/ab56e302-ac44-4eef-b7bb-55df4226ff8d" />

