import React, { Component } from 'react';
import Menu from '../menu/menu.js';

class InfoPage extends Component {
  render() {
    return (
      <div>
        <Menu />
        <div className="page">
          <div className="column">
            <h1>About the Museum:</h1>
            <h2>Pine River Heritage Museum</h2>
            <p>
            Located near the White Pine Trail (itself a holdover from the old
            railroad), Tustin’s Pine River Museum focuses particularly on the
            importance of the railroad in settling the region. In 1860, the
            census showed Osceola County had 27 people. The railroad was completed
            in 1871 and the 1880 census showed a population of 11,000. The Pine
            River Museum preserves historically significant material from all
            over Osceola County, dating back to 1850.
            </p>
            <p>
            The museum houses everything from farm equipment and typewriters to
            laundry implements. We try to tie in the history of the area to
            emphasize two-and-a-quarter centuries of rapid technical innovation.
            The museum also displays a 36-star U.S. flag from the Civil War era,
            when Nevada joined the union as the 36th state. The musuem is located
            on land that was once one of the largest potato-growing areas in
            the country. Fittingly, the museum is housed in a 100-year-old
            potato warehouse.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default InfoPage;
