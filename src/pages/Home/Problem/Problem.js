import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const Problem = () => {
    return (
        <div className="my-4">
            <h2>Share Your Problem for better Suggestion</h2>
            <Container className="bg-dark p-4 border rounded">
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label></Form.Label>
                        <Form.Control type="email" placeholder="Enter your Email Address" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label></Form.Label>
                        <Form.Control as="textarea" placeholder="Write down About Your problem" rows={3} />
                    </Form.Group>
                    <Form.Group controlId="formFileMultiple" className="mb-3">
                        <Form.Label></Form.Label>
                        <Form.Control type="file" multiple />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Container>

        </div>
    );
};

export default Problem;