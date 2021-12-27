/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Box, Heading, Text, Image, Button } from 'theme-ui';
import BannerImg from 'assets/banner-thumb.png';


export default function Banner() {
  return (
    <section sx={styles.banner} id="home">
      <Container sx={styles.banner.container}>
        <Box sx={styles.banner.contentBox}>
          <Heading as="h1" variant="heroPrimary">
            Tutoring
          </Heading>
          <Text as="p" variant= "heroSecondary">
          In person and Online tutoring services
          </Text>
          <Button variant="primary">Book Now</Button>
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  banner: {
    pt: ['240px', '245px', '255px', '270px', null, null, '280px', '215px'],
    pb: [2, null, 0, null, 2, 0, null, 5],
    position: 'relative',
    zIndex: 2,
    '&::before': {
      position: 'absolute',
      content: '""',
      bottom: '0',
      top: '0',
      height: '110%',
      width: '100%',
      zIndex: -1,
      backgroundImage: `url(${BannerImg})`,
      backgroundRepeat: `no-repeat`,
      backgroundSize: 'cover',
      opacity: 0.4
    
     
    },

    container: {

      width: '100%',
      height: '80vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      

    },
    contentBox: {
      width: '100%',
      height: '100%',
      mx: 'auto',
      textAlign: 'center',
      mb: ['40px', null, null, null, null, 7],
    },
    
     
      },
   
};
