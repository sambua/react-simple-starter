import { lazy } from 'react';

const VideoLandingPage = lazy(() => import('../pages/video/landing.video.page'));

const VideoRoutes = {
    auth: ['user'],
    routes: [
        {
            path: 'videos',
            element: <VideoLandingPage />,
        },
    ],
};

export default VideoRoutes;
