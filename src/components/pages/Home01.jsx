import React, { Component } from 'react';
import { withRouter} from 'react-router-dom'
import { Footer,Header,Slider,  Loader,CarouselClient } from '../layouts/general';

import { Services } from '../layouts/general/services';
import { Callback } from '../layouts/general/callback';
import { Blog } from '../layouts/general/blog';

class Home01 extends Component {
    constructor(props) {
        super(props);
        this.state = {
           headers: [
               {
                   id: 1,
                   names: 'Home'
               }
           ],
           
        }
    }
    render() {
        return (
            <div className="bg-body3">
                <div className="boxed">
                    <Loader />
                    
                    {
                        this.state.headers.map(data => (
                            <Header data={data} key={data.id}/>
                        ))
                    }
                    <Slider />
                    
                    <Services />
                    
                    <Callback />

                    <Blog />

                    <CarouselClient />

                    <Footer />
                </div>
            </div>
        );
    }
}

export default withRouter(Home01);