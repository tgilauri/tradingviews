/** @type {import('next').NextConfig} */
const {config} = require('dotenv')

const {parsed} = config()

const nextConfig = {
  env: parsed
}

module.exports = nextConfig
