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

import IHNewsCard from './IHNewsCard.jsx';
import IHEmptyNewsCard from './IHEmptyNewsCard.jsx';

let IHNewsFeed = React.createClass({

  //Get URL for more news stories
  getMoreLink() {
    if (this.props.ncd['news-publication-result']['section-links'].link!==undefined){
      return this.props.ncd['news-publication-result']['section-links'].link.filter((item) => item.viewall === 'yes')[0].text;
    }
  },

  //When view button is clicked, open PeopleSoft modal to view story
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
      <div key="ih-news">
        <NewsCards data={this.props.ncd['news-publication-result']['news-publication-top-story'].item} />
        {moreButton}
      </div>
    );
  },

});



let NewsCards = React.createClass({
  render: function() {

    let cardNodes = [];

    if (this.props.data === undefined){

      //Use empty news card if no top stories are found
      //See IHEmptyNewsCard.jsx
      cardNodes.push(<IHEmptyNewsCard/>);

    } else {

      //Build array of news stories
      cardNodes = this.props.data.map((cardItem) => {
        return (
          //Build news card using top news story properties
          //See IHNewsCard.jsx
          <IHNewsCard key={'newscard-' + cardItem.id} data={cardItem}/>
        );
      });
    }

    //render top news stories
    return (
      <div>
        {cardNodes}
      </div>
    );
  },

});

module.exports = IHNewsFeed;
