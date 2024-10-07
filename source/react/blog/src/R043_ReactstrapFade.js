import { CardBody } from "reactstrap";

class R043_ReactstrapFade extends Component {
    constructor (props) {
        super(props);
        this.state = { fadeInOut: true}
    }  
    
    fadeInOutToggle = (e) => {
        this.setState({ fadeInOut: !this.state.fadeInOut})
    }

    render(){
        return(
            <div>
                <Button color="success" onClick={this.fadeInOutToggle}>Fade In/Out</Button>
                <Fade in={this.state.fadeInOut} timeout={2000} tag="h1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                <Card>
                    <CardBody>
                        REACT 200
                    </CardBody>
                </Card>
                </Fade>
            </div>
        )
    }
}

export default R043_ReactstrapFade;