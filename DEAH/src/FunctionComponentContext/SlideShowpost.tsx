import 'react-slideshow-image/dist/styles.css';
import { Slide } from 'react-slideshow-image';
import '../App.css';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const SlideShowpost = () => {
  let api = 'http://127.0.0.1:8000/api/client/get-posts-list'
  const { data, error, isLoading } = useQuery({
    queryKey: ["POST"],
    queryFn: async () => {
      const { data } = await axios.get(api)
      return data.data.posts;
    }
  });

  if (isLoading) return <div>Loading.....</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="slide-container">
      <Slide>
        {data?.map((post: any) => (
          <div className="each-slide" key={post.id}>
            <div className="testimonial-card">
              <div className="testimonial-header">
                <div className="user-img">
                  <img src={post.image} alt={post.name} />
                </div>
                <div className="user-info">
                  <p className="name">{post.title}</p>
            
                </div>
              </div>
              <div className="testimonial-body" style={{ maxHeight: '100px', overflowY: 'auto' }}>
                <p className="pera">
                  {post.body}
                </p>
              </div>
              <div className="testimonial-footer">
                <div className="logo">
                  <img src="assets/images/logo/logo.png" alt="travello" className="changeLogo" />
                </div>
                <p className="date">{post.date}</p>
              </div>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default SlideShowpost;