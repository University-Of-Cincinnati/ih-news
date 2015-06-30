import React from 'react/addons';

// import all the Essence components used
import {
  Card,
  CardItem,
  CardItemHeader,
  CardItemFooter,
  CardItemContent,
  Block,
  Text,
  Image
} from 'react-essence';

let IHEmptyNewsCard = React.createClass({

  render(){
    return (
      <Card>
        <CardItem classes={'e-background-white e-no-margin e-margin-bottom-15'}>
          <CardItemContent classes={'card-supporting-text'}>
            <Text type='h2' classes={'e-title'}>
              No news found.
            </Text>
            <Text type='h4'>
              Sorry, we were unable to find any news stories.
            </Text>
          </CardItemContent>
        </CardItem>
      </Card>
    );
  },

});

module.exports = IHEmptyNewsCard;
