import Types from 'prop-types';
import React, {Component} from 'react';
import {Button, Card, CardActions, CardContent, CardHeader, CardMedia, Container, Typography} from '@material-ui/core';
import {withStyles} from '@material-ui/styles';



class NewsView extends Component {
  static propTypes = {
    classes: Types.object.isRequired
  }

  constructor(props) {
    super(props);

    this.state = {
      news: [
        {
          content: 'Overview of the three new factions coming in Rise of Azshara: Waveblade Ankoan, The Unshackled, and Rustbolt Resistance.',
          href: 'https://www.wowhead.com/news=292242/reputations-in-rise-of-azshara-ankoan-unshackled-rustbolt-resistance',
          image: 'https://wow.zamimg.com/uploads/news/16459-reputations-in-rise-of-azshara-ankoan-unshackled-rustbolt-resistance.png',
          title: 'Reputations in Rise of Azshara - Ankoan, Unshackled, Rustbolt Resistance'
        },
        {
          content: 'Due to the customization and in-depth animations for Vulpera NPCs, many players have speculated they could be an Allied Race in the future. While nothing official is confirmed by Blizzard, there\'s another hint that they could be an Allied Race.',
          href: 'https://www.wowhead.com/news=292270/vulpera-allied-race-hints-race-condition-for-in-game-cutscenes',
          image: 'https://wow.zamimg.com/uploads/news/16457-vulpera-allied-race-hints-race-condition-for-in-game-cutscenes.jpg',
          title: 'Vulpera Allied Race Hints - Race Condition for In-Game Cutscenes'
        },
        {
          content: 'Mechagon introduces several mounts that come in multiple tints like the X-995 Mechanocat. Today\'s Rise of Azshara mount preview highlights another color-changing mount, the Xiwyllag ATV.',
          href: 'https://www.wowhead.com/news=292213/mechagon-mount-preview-xiwyllag-atv',
          image: 'https://wow.zamimg.com/uploads/news/16454-mechagon-mount-preview-xiwyllag-atv.png',
          title: 'Mechagon Mount Preview - Xiwyllag ATV'
        },
        {
          content: 'The Tidestone of Golganneth, one of the Pillars of Creation last seen in the Tomb of Sargeras, plays an important role in Rise of Azshara, raising more questions than answers. Let\'s review the role of this relic and discuss the implications of its role in Patch 8.2. Story/speculation spoilers.',
          href: 'https://www.wowhead.com/news=292227/the-tidestone-of-golganneth-and-tomb-of-sargeras-mystery-in-rise-of-azshara',
          image: 'https://wow.zamimg.com/uploads/news/16451-the-tidestone-of-golganneth-and-tomb-of-sargeras-mystery-in-rise-of-azshara.jpg',
          title: 'The Tidestone of Golganneth and Tomb of Sargeras Mystery in Rise of Azshara'
        },
        {
          content: 'We\'re starting off our Essence spotlights with the Essence obtained from the Heart of Azeroth Questline, the Crucible of Flame. In Patch 8.2, the Crucible of Flame will be the first Essence you unlock and can slot into your Heart of Azeroth.',
          href: 'https://www.wowhead.com/news=292245/heart-of-azeroth-essence-spotlight-crucible-of-flame',
          image: 'https://wow.zamimg.com/uploads/news/16446-heart-of-azeroth-essence-spotlight-crucible-of-flame.jpg',
          title: 'Heart of Azeroth Essence Spotlight: Crucible of Flame'
        }
      ]
    };
  }

  render() {
    const {
      classes
    } = this.props;

    const {
      news
    } = this.state;

    return (
      <Container
        maxWidth="md"
      >
        {
          news.map(({content, href, image, title}) => (
            <Card
              className={classes.Card}
              key={href}
            >
              <CardHeader
                title={title}
              />
              <CardMedia
                className={classes.CardMedia}
                image={image}
              />
              <CardContent>
                <Typography>
                  {
                    content
                  }
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  className={classes.Button}
                  href={href}
                >
                  Read more
                </Button>
              </CardActions>
            </Card>
          ))
        }
      </Container>
    );
  }
}



export default withStyles(
  ({spacing}) => ({
    Button: {
      marginLeft: 'auto'
    },
    Card: {
      marginTop: spacing(2)
    },
    CardMedia: {
      height: spacing(32)
    }
  })
)(NewsView);