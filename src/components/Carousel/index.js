import React from 'react';
import { VideoCardGroupContainer, Title , Description /*, ExtraLink */} from './styles';
import VideoCard from './components/VideoCard';
import Slider, { SliderItem } from './components/Slider';

function Carousel({
  ignoreFirstVideo,
  category,
}) {
  const categoryTitle = category.name;
  const categoryColor = category.color;
  const categoryDescription = category.description;
  //const categoryExtraLink = category.extralink;
  const videos = category.videos;
  return (
    <VideoCardGroupContainer>
      {categoryTitle && (
        <>
          <Title style={{ backgroundColor: categoryColor || 'yellow' }}>
            {categoryTitle}
          </Title>
        
          <Description>               
            {categoryDescription}
          </Description> 
          {/* Futuramente - Adicionar Link extra, q 
           redireciona para site/canal sobre o assunto
           Ex: Biblioteca libertaria*/}
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