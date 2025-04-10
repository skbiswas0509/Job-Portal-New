// instrument.js
import * as Sentry from '@sentry/node';
import { nodeProfilingIntegration } from '@sentry/profiling-node';
import mongoose from 'mongoose';

// Initialize Sentry
Sentry.init({
  dsn: 'https://10581dce1f958c4205d1f0c4a51f7ae3@o4509126939049984.ingest.de.sentry.io/4509126946979920',
  integrations: [
    nodeProfilingIntegration(),
    Sentry.mongooseIntegration()
  ],
//   tracesSampleRate: 1.0, // For performance monitoring
  profilesSampleRate: 1.0 // For profiling
});

export default Sentry;
