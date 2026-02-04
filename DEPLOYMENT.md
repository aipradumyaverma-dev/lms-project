# LMS - Library Management System

## Deployment Instructions for Vercel

### Required Vercel Settings:

1. **Root Directory**: Leave empty or use `.`
2. **Framework Preset**: Create React App
3. **Build Command**: `cd lmsfe && npm install && npm run build`
4. **Output Directory**: `lmsfe/build`

### Important:
- The vercel.json file handles the configuration
- Make sure to redeploy after updating settings
- Check deployment logs for any errors

### Local Development:
```bash
# Frontend
cd lmsfe
npm start

# Backend
cd lmsbe
npm start
```
