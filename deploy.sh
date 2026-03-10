#!/bin/bash
set -e

# Change to website directory
cd "$(dirname "$0")"

echo "🚀 Syncing report files to main website..."
rm -rf src/components/report/*
cp -r report/src/components/* src/components/report/
cp report/src/app/students/StudentContent.tsx src/components/report/StudentContent.tsx

echo "🔧 Fixing import paths in copied files..."
find src/components/report -name "*.tsx" | xargs sed -i '' 's|from "@/components/|from "@/components/report/|g'

echo "🔗 Fixing internal links..."
sed -i '' 's|href="/students"|href="/research/students"|g' src/components/report/StudentCTA.tsx || true
sed -i '' 's|href="/students"|href="/research/students"|g' src/components/report/sections/TableOfContents.tsx || true
sed -i '' 's|href="/"|href="/research"|g' src/components/report/StudentContent.tsx || true

echo "☁️ Building and deploying to Cloudflare..."
npx opennextjs-cloudflare deploy

echo "📦 Committing to GitHub..."
git add -A
git commit -m "chore: deploy website and sync report updates" || echo "No changes to commit"
git push origin main

echo "✅ Deployment complete!"
