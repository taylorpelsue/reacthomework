import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import DeleteBtn from "../../components/DeleteBtn";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

class articles extends Component {
  state = {
    articles: []
  };

  componentDidMount() {
    this.loadarticles();
  }

  loadarticles = () => {
    API.getarticles()
      .then(res => this.setState({ articles: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>What articles Should I Read?</h1>
            </Jumbotron>
            <form>
              <Input name="title" placeholder="Title (required)" />
              <Input name="url" placeholder="url (required)" />
              <TextArea name="artURL" placeholder="artURL (Optional)" />
              <FormBtn>Submit article</FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>articles On My List</h1>
            </Jumbotron>
            {this.state.articles.length ? (
              <List>
                {this.state.articles.map(article => (
                  <ListItem key={article._id}>
                    <a href={"/articles/" + article._id}>
                      <strong>
                        {article.title} by {article.url}
                      </strong>
                    </a>
                    <DeleteBtn />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default articles;
