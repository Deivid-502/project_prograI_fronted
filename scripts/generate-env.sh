#!/usr/bin/env bash

cat > src/assets/env.js <<EOF
(function (window) {
  window.__env = window.__env || {};
  window.__env.API_URL = "${API_URL}";
}(this));
EOF
