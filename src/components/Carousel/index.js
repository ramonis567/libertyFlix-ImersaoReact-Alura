import React from 'react';
import { VideoCardGroupContainer, Title , ExtraLink } from './styles';
import VideoCard from './components/VideoCard';
import Slider, { SliderItem } from './components/Slider';

function Carousel({
  ignoreFirstVideo,
  category,
}) {
  const categoryTitle = category.name;
  const categoryColor = category.color;
  const categoryExtraLink = category.description;
  const videos = category.videos;
  return (
    <VideoCardGroupContainer>
      {categoryTitle && (
        <>
          <Title style={{ backgroundColor: categoryColor || 'yellow' }}>
            {categoryTitle}
          </Title>
          {categoryExtraLink && 
            <ExtraLink href={categoryExtraLink.url} target="_blank">
              {categoryExtraLink}  
            </ExtraLink>
          }
        </>
      )}
      <Slider>
        {videos.map((video, index) => {
          if (ignoreFirstVideo && index === 0) {
            return null;
          }

          return (
            <SliderItem key={video.title}>
              <VideoCard
                videoTitle={video.title}
                videoURL={video.url}
                categoryColor={categoryColor}
              />
            </SliderItem>
          );
        })}
      </Slider>
    </VideoCardGroupContainer>
  );
}

export default Carousel;