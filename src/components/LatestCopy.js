import React from 'react';
import Fade from 'react-reveal/Fade';
import Grid from '@material-ui/core/Grid';
import Slide from 'react-reveal/Slide';

const LatestCopy = () => {
  return (
    <div className="latest-copy-container">
      <div className="latest-copy">
        <h2 className="latest-copy__header">Latest News</h2>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={40}
        >
          <Grid item xs={6}>
            <Fade>
              <div className="latest-copy__copy">
                <p className="latest-copy__paragraph">
                  Lyft dreamcatcher pop-up distillery YOLO health goth iceland
                  taxidermy forage sriracha. Poke thundercats austin taxidermy,
                  schlitz pork belly etsy deep v microdosing. Portland
                  succulents XOXO, tofu forage schlitz art party crucifix etsy
                  cornhole twee jianbing kinfolk. Seitan copper mug crucifix, la
                  croix raclette cardigan bitters meh. Crucifix put a bird on it
                  scenester tumblr twee master cleanse. Kogi helvetica kale
                  chips tilde. Banjo lumbersexual kale chips heirloom.
                </p>
                <p className="latest-copy__paragraph">
                  Mumblecore snackwave four loko green juice, prism gluten-free
                  jianbing pop-up retro knausgaard. Twee meh poke, jianbing lyft
                  brunch lomo cliche mixtape. Asymmetrical taiyaki 3 wolf moon,
                  tattooed enamel pin master cleanse mumblecore poutine migas
                  distillery. Stumptown offal artisan, swag brunch try-hard
                  pickled readymade. Banjo man braid sartorial pork belly prism.
                  Venmo you probably haven't heard of them banh mi, sustainable
                  chartreuse bitters ennui irony. Paleo neutra you probably
                  haven't heard of them skateboard.
                </p>
              </div>
            </Fade>
          </Grid>

          <Grid item xs={6}>
            <Slide right>
              <div className="latest-copy__image-container">
                <img alt="Arctic Monkeys" className="latest-copy__image" />
              </div>
            </Slide>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default LatestCopy;
