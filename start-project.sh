#!/bin/bash
cd server || exit
npm run dev &
cd env/bin || exit
uvicorn main:app &
cd ../../client || exit
npm run start