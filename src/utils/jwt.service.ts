import jwt from "jsonwebtoken";
import config from '../loadEnv'

interface TokenPayload {
  userId: string;
  email: string;
  role?: string;
}

class JWTService {
  private secretKey: string = config.JWT_SECRET!;
  private expiresIn: string = config.JWT_EXPIRES_IN!;

  constructor() {}
  

  /**
   * Generates a new JWT token.
   * @param payload Token payload (e.g., userId, email, etc.).
   * @returns The generated JWT token.
   */
  generateToken(payload: TokenPayload): string {
    return jwt.sign(payload, this.secretKey, { expiresIn: this.expiresIn });
  }

  /**
   * Verifies a JWT token and returns the decoded payload if valid.
   * @param token The JWT token to verify.
   * @returns The decoded token payload.
   * @throws Error if the token is invalid or expired.
   */
  verifyToken(token: string): TokenPayload {
    try {
      return jwt.verify(token, this.secretKey) as TokenPayload;
    } catch (error) {
      throw new Error("Invalid or expired token");
    }
  }

  /**
   * Refreshes a JWT token by verifying the old token and generating a new one.
   * @param token The existing JWT token.
   * @returns A new JWT token if the old one is valid.
   */
  refreshToken(token: string): string {
    const decoded = this.verifyToken(token);
    return this.generateToken({
      userId: decoded.userId,
      email: decoded.email,
      role: decoded.role,
    });
  }
}

export default new JWTService();
