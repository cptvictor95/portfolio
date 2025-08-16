export const pageview = (url: string, googleTrackingId: string): void => {
  if (typeof window === 'object') {
    window.gtag('config', googleTrackingId, {
      page_path: url,
    });
  }
};

export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: any;
  category: any;
  label: any;
  value: any;
}): void => {
  if (typeof window === 'object') {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};
