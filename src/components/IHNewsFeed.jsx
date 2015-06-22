import React from 'react/addons';

import {Divider, Btn, BtnItem, Icon, List, ListItem, Card, CardItem, CardItemHeader, CardItemFooter, CardItemContent, Block, Text, Image} from 'react-essence';

let IHNewsFeed = React.createClass({
  getMoreLink() {
    if (this.props.ncd['news-publication-result']['section-links'].link!==undefined){
      return this.props.ncd['news-publication-result']['section-links'].link.filter((item) => item.viewall === 'yes')[0].text;
    }
  },

  handleClick() {
    //use PeopleSoft function to open URL in modal
    openContentInModal(this.getMoreLink());
  },

  render() {
    let moreButton = null;

    if (this.props.ncd['news-publication-result']['section-links'].link!==undefined){
      moreButton =
      <BtnItem
          classes={'flat e-right'}
          label='More...'
          type='default'
          rippleEffect={true}
          onClick={this.handleClick}
      />
    }

    return (
      <div>
        <NewsCards data={this.props.ncd['news-publication-result']['news-publication-top-story'].item} />
          {moreButton}
      </div>
    );
  },

});

let NewsCards = React.createClass({
  render: function() {
    var cardNodes = this.props.data.map((cardItem) => {
      return (
        <NewsCardItem data={cardItem}/>
      );
    });

    return (
      <div>
        {cardNodes}
      </div>
    );
  },

});


let NewsCardItem = React.createClass({
  handleClick() {
    //use PeopleSoft function to open URL in modal
    openContentInModal(this.props.data.link);
  },

  render: function() {
    let cardItem = this.props.data;
    let newsImage = null;

    if (cardItem.image !== undefined) {
      newsImage=<Block type='div' classes={'card-main-image e-paper e-background-white'}>
                  <Image src={cardItem.image.url}  alt={cardItem.image.title} />
                </Block>;
    }

    return (
      <Card>
        <CardItem classes={'e-background-white'}>
          <CardItemContent classes={'card-supporting-text'}>
            <Text type='h2' classes={'e-title'}>
              {cardItem.title}
            </Text>
            <Text type='h4'>
              {cardItem.description}
            </Text>
          </CardItemContent>
          {newsImage}
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

module.exports = IHNewsFeed;
