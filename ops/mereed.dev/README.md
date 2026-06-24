`mereed.dev` deployment assets prepared for the Lightsail server at `63.185.91.115`.

Pending external step:

1. Create Cloudflare DNS records:
   - `A` record for `@` -> `63.185.91.115`
   - `CNAME` record for `www` -> `mereed.dev`
2. Keep both records as `DNS only` until the Let's Encrypt certificate is issued.
3. Run:

```bash
sudo certbot --nginx -d mereed.dev -d www.mereed.dev
```

4. After HTTPS works, Cloudflare can be switched to proxied mode and SSL/TLS should be `Full (strict)`.
