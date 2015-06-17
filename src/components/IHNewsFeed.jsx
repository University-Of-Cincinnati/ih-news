import React from 'react/addons';
import {Divider,Btn, BtnItem, Icon, List, ListItem, Card, CardItem, CardItemHeader, CardItemFooter, CardItemContent, Block, Text, Image} from 'react-essence';


//document.domain='uc.edu';

var IHNewsFeed = React.createClass({

  getMoreLink(){
    if (this.props.ncd["news-publication-result"]["section-links"].link!==undefined){
      return this.props.ncd["news-publication-result"]["section-links"].link.filter((item) => item.viewall === 'yes')[0].text;
    }
  },

  handleClick(){
    //use PeopleSoft function to open URL in modal
    openContentInModal(this.getMoreLink());
  },
  render() {

    if (this.props.ncd["news-publication-result"]["section-links"].link!==undefined){
      var moreButton =
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
        <Text classes={'e-display-1'}

          >
          {this.props.title}
          <Divider style={{margin:0}} classes={'thin e-background-black e-no-margin'} />
        </Text>



        <NewsCards data={this.props.ncd["news-publication-result"]["news-publication-top-story"].item} />
          {moreButton}
      </div>
    );
  }
});


var NewsCards = React.createClass({
  render: function() {
    var cardNodes = this.props.data.map(function (cardItem){
      return (
        <NewsCardItem data={cardItem}/>

      );
    });

    return (
      <div>
        {cardNodes}
      </div>
    );
  }
});


var NewsCardItem = React.createClass({
  handleClick(){
    //use PeopleSoft function to open URL in modal
    openContentInModal(this.props.data.link);
  },
  render: function() {

    let cardItem = this.props.data;
    var newsImage = null;

    if (cardItem.image !== undefined){
      newsImage=<Block type="div" classes={"card-main-image"}>
                  <Image src={cardItem.image.url}  alt={cardItem.image.title} />
                </Block>;
    }

    return (
      <Card>
        <CardItem>
          {newsImage}
          <CardItemContent classes={"card-supporting-text e-text-blue-grey-400"}>
            <Text type="h2" classes={"e-title"}>
              {cardItem.title}
            </Text>
            <Text type="h4">
              {cardItem.description}
            </Text>
          </CardItemContent>

          <CardItemFooter>

            <Block type="div" classes={"e-right"}>
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
  }
});


module.exports = IHNewsFeed;
