import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

type ChangeEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;

export function GiveAttempts(): JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState<number>(3);
    const [attemptsReq, setAttemptsReq] = useState<number>(0);
    return (
        <div>
            <h3>Give Attempts</h3>
            <Form.Group controlId="requestedAttempts">
                <Form.Label>Number of Requested Attempts:</Form.Label>
                <Form.Control
                    type="number"
                    value={attemptsReq}
                    onChange={(event: ChangeEvent) =>
                        setAttemptsReq(parseInt(event.target.value))
                    }
                />
            </Form.Group>
            <Button
                onClick={() => setAttemptsLeft(attemptsLeft - 1)}
                disabled={attemptsLeft === 0}
            >
                Use
            </Button>
            <Button onClick={() => setAttemptsLeft(attemptsLeft + attemptsReq)}>
                Gain
            </Button>
            Number of Attempts Left: {attemptsLeft}
        </div>
    );
}
