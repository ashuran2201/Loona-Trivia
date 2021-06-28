import React, { Component} from 'react';
import "../../Style/Scss/Content.scss";
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
class Content extends Component {
render() {
return (
<Container className="container" maxWidth="xl">
    <div className="text-container">
        <h1 className="title">
            LOONA the Trivia
        </h1>
        <h6 className="subtitle">
            A place to check your knowledge about LOONA.
        </h6>
        <h6 className="sub-subtitle">
            Are you ready to take the Quiz?
        </h6>
        <Button>yes</Button>
        <Button>no</Button>
    </div>
    <div className="not-container">
        <h6 className="sub-sub-subtitle">
            Not confident to take the quiz yet?
        </h6>
        <Button>Click Here</Button>
    </div>
</Container>
)
}
}
export default Content;