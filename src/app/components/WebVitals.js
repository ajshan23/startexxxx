'use client';

import { useReportWebVitals } from 'next/web-vitals';

export function WebVitals() {
  useReportWebVitals((metric) => {
    // You can send the metric to your analytics service here
    console.log(metric);

    const body = JSON.stringify({
      name: metric.name,
      value: metric.value,
      id: metric.id,
      startTime: metric.startTime,
      label: metric.label,
    });

    if (process.env.NODE_ENV === 'production') {
      // Send to your analytics service in production
      // Example using fetch:
      /*
      fetch('/api/vitals', {
        body,
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      });
      */
    }
  });

  return null;
}