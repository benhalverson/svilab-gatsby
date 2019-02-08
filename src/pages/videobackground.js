import React, {Component} from 'react';
import Layout from '../components/layout'
import '../components/video.css';
import SEO from '../components/seo'
class Videobackground extends Component {
    constructor (props) {
        super(props);

        this.state = {
            videoURL: 'https://www.sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4'
        }
    }

    render () {
        return (
          <div>
            <video className="background-video" loop autoPlay muted>
                <source src={this.state.videoURL} type="video/mp4" />
                <source src={this.state.videoURL} type="video/ogg" />
                Your browser does not support the video tag.
            </video>
            </div>
        )
    }
};

export default Videobackground;