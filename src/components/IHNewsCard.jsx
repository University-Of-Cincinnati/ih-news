import React from 'react/addons';

// import all the Essence components used
import {
  Btn,
  BtnItem,
  Card,
  CardItem,
  CardItemHeader,
  CardItemFooter,
  CardItemContent,
  Block,
  Text,
  Image
} from 'react-essence';

let IHNewsCard = React.createClass({
  handleClick() {
    //use PeopleSoft function to open URL in modal
    openContentInModal(this.props.data.link);
  },

  render: function() {
    let cardItem = this.props.data;
    let newsImage = null;

    if (cardItem.image !== undefined) {
      newsImage=<Block type='div' classes={'card-main-image e-background-white'}>
                  <Image src={cardItem.image.url}  alt={cardItem.image.title} />
                </Block>;
    }

    return (
      <Card>
        <CardItem classes={'e-background-white e-no-margin e-margin-bottom-15'}>
          {newsImage}
          <CardItemContent classes={'card-supporting-text'}>
            <Text type='h2' classes={'e-title'}>
              {cardItem.title}
            </Text>
            <Text type='h4'>
              {cardItem.description}
            </Text>
          </CardItemContent>
          <CardItemFooter>
            <Block type='div' classes={'e-right'}>
              <Btn>
                <BtnItem
                    classes={'flat'}
                    label='View'
                    type='default'
                    rippleEffect={false}
                    onClick={this.handleClick}
                />
              </Btn>
            </Block>
          </CardItemFooter>
        </CardItem>
      </Card>
    );
  },

});

module.exports = IHNewsCard;
