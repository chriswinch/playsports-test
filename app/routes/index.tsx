import { createRemixHeaders } from '@remix-run/netlify/server';
import { useLoaderData } from 'remix';

export const loader = async () => {
    const data = await fetch('https://www.globalcyclingnetwork.com/api/devtask');
    const json = await data.json();
    return json;
}

interface Video {
    _id: string;
    title: string;
}

export default function Index() {
    const videos = useLoaderData();

    return (
        <div className='video-list'>
            {videos.map((video: Video) => (
                <div key={video._id}>
                    <a href={`https://www.youtube.com/watch?v=${video._id}`} target="_blank" rel="noopener noreferrer">
                        <img src={`https://img.youtube.com/vi/${video._id}/mqdefault.jpg`} alt={video.title} />
                        <h3>{video.title}</h3>
                    </a>
                </div>
            ))}
        </div>
    );
}
