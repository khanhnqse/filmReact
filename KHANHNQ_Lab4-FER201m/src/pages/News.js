/* eslint-disable import/no-webpack-loader-syntax */
import * as React from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import MainNewsFeature from '../components/MainNewsFeature';
import FeaturedPost from '../components/FeaturedPost';




const mainFeaturedPost = {
  title: 'New Godzilla Movie Footage Shows Kaiju Growing Spikes & Weaponizing His Tail',
  description:
    "New footage from Godzilla Minus One shows the titular kaiju growing spikes and weaponizing his tail, teasing his vast amount of destruction.",
  image: 'https://cdn.theatlantic.com/thumbor/H4UQQ6T6Kl9EmOdk7aZWCYUHhLc=/348x0:2481x1200/1600x900/media/img/mt/2019/05/rev_1_GKM_FP_201r_High_Res_JPEG/original.jpg',
  imageText: 'main image description',
  linkText: 'Continue reading…',
};

const featuredPosts = [
  {
    title: '‘Spider-Man: Across the Spider-Verse’ Sets Netflix Streaming Debut',
    date: 'Nov 12',
    description:
      'Months after dominating at the box office, the superhero sequel will premiere Oct. 31 on the streaming service only in the U.S',
    image: 'https://m.media-amazon.com/images/M/MV5BMzI0NmVkMjEtYmY4MS00ZDMxLTlkZmEtMzU4MDQxYTMzMjU2XkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_QL75_UX280_CR0,1,280,414_.jpg',
    imageLabel: 'Image Text',
  },
  {
    title: 'Hayao Miyazaki’s ‘The Boy and the Heron’ English Voice Cast Includes Christian Bale',
    date: 'Nov 11',
    description:
      'Through encounters with his friends and uncle, follows a teenage boy psychological development. He enters a magical world.',
    image: 'https://assets-prd.ignimgs.com/2023/10/17/unnamed-1697573443477.jpg',
    imageLabel: 'Image Text',
  },
];





// TODO remove, this demo shouldn't need to reset the theme.
export default function News() {
  return (
    <Container maxWidth="lg" sx={{ marginTop: "2rem" }}>
      <main>
        <MainNewsFeature post={mainFeaturedPost} />
        <Grid container spacing={4}>
          {featuredPosts.map((post) => (
            <FeaturedPost key={post.title} post={post} />
          ))}
        </Grid>
        
      </main>
    </Container>
  );
}