declare global {
    interface Window { __env: any; }
}

export const environment = {
    production: true,
    apiUrl: window.__env && window.__env.API_URL
        ? window.__env.API_URL
        : '',  // ¡Sin fallback hard-codeado en producción!
};
