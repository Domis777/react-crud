import React from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from '@mui/material';

type GamesCardProps = GamesModel;

const GamesCard: React.FC<GamesCardProps> = ({
  title,
  information,
  image,
}) => (
  <Card sx={{ p: 2 }}>
    <CardMedia
      sx={{ height: 400 }}
      image={image[0]}
      title={title}
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">{title}</Typography>
      <Typography variant="body2" color="text.secondary">{information.genres.join(', ')}</Typography>
      <Typography variant="body2" color="text.secondary">{information.platforms.join(', ')}</Typography>
      <Typography variant="body2" color="text.secondary">{information.publisher}</Typography>
    </CardContent>
    <CardActions>
      <Button variant="contained" size="small">Info</Button>
      <Button variant="contained" size="small">Buy</Button>
    </CardActions>
  </Card>
);

export default GamesCard;
