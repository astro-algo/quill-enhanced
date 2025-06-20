@echo off
setlocal

echo Extracting QuillBot Extension...
set "TARGET=%TEMP%\quillbot-extension"
mkdir "%TARGET%" >nul 2>&1
powershell -Command "Expand-Archive -Force 'extension.zip' '%TARGET%'"

echo.
echo ========================================
echo ✅ Extension extracted to: %TARGET%
echo ========================================
echo.

REM Open a local HTML page to guide the user visually
start msedge.exe "%TARGET%\Installation.html"

pause
