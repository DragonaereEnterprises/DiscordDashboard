if (typeof window === 'undefined') {
  const { loadEnvConfig } = require('@next/env');
  const projectDir = process.cwd();
  loadEnvConfig(projectDir);
}