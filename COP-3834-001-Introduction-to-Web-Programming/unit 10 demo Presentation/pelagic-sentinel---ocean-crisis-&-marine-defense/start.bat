@echo off
setlocal
cd /d "%~dp0"
echo Checking and installing dependencies...
call npm install
echo Starting local development server...
call npm run dev
pause
