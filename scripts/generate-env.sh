#!/usr/bin/env bash

# Crea la carpeta assets si no existe
mkdir -p src/assets

# Genera src/assets/env.js usando la variable API_URL de Render
cat > src/assets/env.js <<EOF
(function (window) {
  window.__env = window.__env || {};
  window.__env.API_URL = "${API_URL}";
}(this));
EOF
