#!/bin/bash
cd server || exit
npm stop
cd env/bin || exit
# todo stop uvicorn python api process
cd ../../client || exit
npm stop
