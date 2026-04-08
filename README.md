# Shishir-s-Blog

A simple React blog built with Vite.

## Pages

- `/` — Landing page with information about yourself.
- `/blogs` — Blog posts page.

## Getting started

Install dependencies:

```bash
npm install
```

Run the project locally:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Hosting on Ubuntu / DigitalOcean

This project is configured to work as a static SPA on an Ubuntu VM. It uses `HashRouter` so direct page loads will work without extra server rewrite rules.

1. SSH into your Ubuntu VM.
2. Install Node.js, npm, and nginx if needed:

```bash
sudo apt update
sudo apt install -y nodejs npm nginx
```

3. Build the site:

```bash
npm install
npm run build
```

4. Copy the `dist` output to the Nginx web root:

```bash
sudo rm -rf /var/www/html/*
sudo cp -r dist/* /var/www/html/
```

5. If you want Nginx to serve the app, use a simple config like this in `/etc/nginx/sites-available/default`:

```nginx
server {
  listen 80;
  server_name _;
  root /var/www/html;
  index index.html;

  location / {
    try_files $uri $uri/ /index.html;
  }
}
```

6. Restart Nginx:

```bash
sudo systemctl restart nginx
```

7. Open your VM's IP or domain in a browser.
