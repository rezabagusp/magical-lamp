import { useEffect } from 'react';
import { useRouter } from 'next/router';
import NProgress from 'nprogress';

const ProgressBar = () => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteStart = () => {
      NProgress.start();
    };

    const handleRouteError = () => {
      NProgress.done();
    };

    const handleRouteChangeComplete = async () => {
      NProgress.done();
    };

    router.events.on('routeChangeStart', handleRouteStart);
    router.events.on('routeChangeError', handleRouteError);
    router.events.on('routeChangeComplete', handleRouteChangeComplete);

    return () => {
      router.events.off('routeChangeStart', handleRouteStart);
      router.events.off('routeChangeError', handleRouteError);
      router.events.off('routeChangeComplete', handleRouteChangeComplete);
    };
  }, [router]);

  return null;
};

export default ProgressBar;
