import React, { Component } from 'react';


class EventsListItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: 'Armin commited a codez',
      subtitle: 'four score and seven years ago there was a very interesting event here is som emore text blah blah blah',
      time: '5:30 PM',
      date: 'Wed 2/1',
      icon: 'face',
      type: 'meeting',
    };
  }

  render() {
    const classId = this.state.type === 'meeting' ? 'meeting' : '';

    return (
      <li className="event_list_item">
        <div className="event_day_time">
          <i className="material-icons">{this.state.icon}</i>
          <h4> {this.state.time} </h4>
          <p> {this.state.date} </p>
        </div>
        <div className="event_text">
          <h4 className={classId} id="title"> {this.state.title} </h4>
          <p id="subtitle"> {this.state.subtitle} </p>
        </div>
      </li>
    );
  }
}

export default EventsListItem;
