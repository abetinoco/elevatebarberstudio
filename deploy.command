#!/bin/bash
export PATH="/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin:$PATH"

PROJECT_DIR="/Users/abrahamtinoco/Documents/Halo/Projects/Elevate Barber Studio"
LOG_FILE="$PROJECT_DIR/vercel_check.log"

cd "$PROJECT_DIR" || exit 1

echo "============================================" | tee "$LOG_FILE"
echo "  Vercel Diagnostics + Prod Deploy" | tee -a "$LOG_FILE"
echo "  $(date)" | tee -a "$LOG_FILE"
echo "============================================" | tee -a "$LOG_FILE"
echo "" | tee -a "$LOG_FILE"

echo "--- vercel whoami ---" | tee -a "$LOG_FILE"
vercel whoami 2>&1 | tee -a "$LOG_FILE"

echo "" | tee -a "$LOG_FILE"
echo "--- vercel ls (recent deployments) ---" | tee -a "$LOG_FILE"
vercel ls 2>&1 | tee -a "$LOG_FILE"

echo "" | tee -a "$LOG_FILE"
echo "--- Deploying to production (vercel --prod) ---" | tee -a "$LOG_FILE"
vercel --prod --yes 2>&1 | tee -a "$LOG_FILE"

echo "" | tee -a "$LOG_FILE"
echo "=== Done ===" | tee -a "$LOG_FILE"
