import jwt from 'jsonwebtoken';
import { getConfig } from '../config/env.js';

export function signAccessToken(payload, expiresIn = '1h') {
  const config = getConfig();
  const secret = config.security.jwtSecret;
  if (!secret || secret === 'dev-secret-change-in-production') {
    throw new Error('JWT_SECRET is not configured. Set JWT_SECRET environment variable.');
  }
  return jwt.sign(payload, secret, { expiresIn });
}

export function verifyToken(token) {
  const config = getConfig();
  const secret = config.security.jwtSecret;
  if (!secret || secret === 'dev-secret-change-in-production') {
    throw new Error('JWT_SECRET is not configured. Set JWT_SECRET environment variable.');
  }
  return jwt.verify(token, secret);
}

export function signRefreshToken(payload, expiresIn = '7d') {
  const config = getConfig();
  const secret = config.security.jwtSecret;
  if (!secret || secret === 'dev-secret-change-in-production') {
    throw new Error('JWT_SECRET is not configured. Set JWT_SECRET environment variable.');
  }
  return jwt.sign(payload, secret, { expiresIn });
}
