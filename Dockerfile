# ---- Build Stage ----
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package files for dependency caching
COPY package*.json ./
# If you use Yarn, copy yarn.lock and replace the install command accordingly
# COPY yarn.lock ./

# Install dependencies (including dev dependencies needed for build)
RUN npm ci

# Copy the rest of the source code
COPY . .

# (Optional) If you use environment variables at build time, pass them here
# ARG NEXT_PUBLIC_API_URL
# ENV NEXT_PUBLIC_API_URL=$NEXT_PUBLIC_API_URL

# Build the application with standalone output
# This creates a .next/standalone folder that can be run without node_modules
RUN npm run build

# ---- Production Stage ----
FROM node:20-alpine AS runner

# Install only production dependencies for the server (if any)
# For standalone, we don't need node_modules, but we keep the step for completeness
WORKDIR /app

# Create a non-root user to run the app
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

# Copy the standalone build and static files from the builder
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=builder --chown=nextjs:nodejs /app/public ./public

# (Optional) If you have a "next.config.js" that generates extra static files,
# they should be in .next/standalone already or copied as needed.

# Switch to non-root user
USER nextjs

# Expose the port Next.js runs on (default 3000)
EXPOSE 3000

# Set environment variables
ENV NODE_ENV=production
ENV PORT=3000
# If your app uses a custom host, set it here
# ENV HOST=0.0.0.0

# Start the Next.js server
CMD ["node", "server.js"]
