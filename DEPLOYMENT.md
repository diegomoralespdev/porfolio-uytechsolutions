# Configuración CI/CD - UY Tech Solutions Portfolio

## Configuración inicial requerida

### 1. GitHub Container Registry (GHCR)
No necesitas configurar secretos adicionales. El workflow usa `GITHUB_TOKEN` que se genera automáticamente.

### 2. En tu servidor Ubuntu

```bash
# 1. Instalar Docker y Docker Compose
sudo apt update
sudo apt install -y docker.io docker-compose curl

# 2. Añadir tu usuario al grupo docker
sudo usermod -aG docker $USER
newgrp docker

# 3. Crear directorio para el proyecto
mkdir -p ~/uytech-portfolio
cd ~/uytech-portfolio

# 4. Descargar docker-compose.yml
wget https://raw.githubusercontent.com/diegomoralespdev/porfolio/main/docker-compose.yml

# 5. Hacer login en GHCR (reemplaza USERNAME con tu usuario de GitHub)
echo "YOUR_GITHUB_TOKEN" | docker login ghcr.io -u USERNAME --password-stdin

# 6. Levantar los servicios
docker-compose up -d
```

### 3. Crear GitHub Personal Access Token

1. Ve a GitHub Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Crea un nuevo token con estos permisos:
   - `read:packages`
   - `write:packages` (si quieres subir desde tu servidor)
3. Usa este token en el servidor para hacer login en GHCR

### 4. Configurar permisos del repositorio

1. Ve a tu repositorio → Settings → Actions → General
2. En "Workflow permissions" selecciona "Read and write permissions"
3. Marca "Allow GitHub Actions to create and approve pull requests"

### 5. Comandos útiles en el servidor

```bash
# Ver logs del portfolio
docker-compose logs -f portfolio

# Ver logs de watchtower
docker-compose logs -f watchtower

# Reiniciar servicios
docker-compose restart

# Actualizar manualmente
docker-compose pull && docker-compose up -d

# Ver estado de contenedores
docker-compose ps

# Limpiar imágenes antiguas
docker system prune -f
```

## Cómo funciona

1. **Push a main/master** → GitHub Actions se ejecuta automáticamente
2. **Build exitoso** → Nueva imagen se publica en GHCR como `latest`
3. **Watchtower detecta** la nueva imagen cada 5 minutos
4. **Auto-deploy** → Watchtower actualiza el contenedor automáticamente
5. **Zero downtime** → Rolling restart mantiene el servicio disponible

## URLs importantes

- **Portfolio**: http://tu-servidor-ip/
- **Health check**: http://tu-servidor-ip/health
- **GitHub Packages**: https://github.com/diegomoralespdev/porfolio/pkgs/container/porfolio

## Troubleshooting

Si Watchtower no funciona:
```bash
# Verificar que Watchtower puede acceder a Docker
docker-compose logs watchtower

# Forzar actualización manual
docker-compose pull portfolio
docker-compose up -d portfolio
```

Si el build falla:
1. Verifica que los tests pasen localmente: `npm test`
2. Verifica que el build funciona: `npm run build`
3. Revisa los logs del Action en GitHub

## Configuración SSL (opcional)

Para agregar SSL con Let's Encrypt, modifica el docker-compose.yml:

```yaml
  nginx-proxy:
    image: nginxproxy/nginx-proxy
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - /var/run/docker.sock:/tmp/docker.sock:ro
      - ./certs:/etc/nginx/certs

  letsencrypt:
    image: nginxproxy/acme-companion
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock:ro
      - ./certs:/etc/nginx/certs
    depends_on:
      - nginx-proxy
```