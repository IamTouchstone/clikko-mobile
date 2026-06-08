type LogLevel = 'info' | 'warn' | 'error';

const write = (level: LogLevel, message: string, meta?: Record<string, unknown>) => {
  const suffix = meta ? ` ${JSON.stringify(meta)}` : '';
  const line = `[${level.toUpperCase()}] ${message}${suffix}`;

  if (level === 'error') {
    console.error(line);
    return;
  }

  if (level === 'warn') {
    console.warn(line);
    return;
  }

  console.log(line);
};

export const logger = {
  info: (message: string, meta?: Record<string, unknown>) => write('info', message, meta),
  warn: (message: string, meta?: Record<string, unknown>) => write('warn', message, meta),
  error: (message: string, meta?: Record<string, unknown>) => write('error', message, meta),
};
