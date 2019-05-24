import React, { useState } from 'react';
import { Modal, Button} from 'react-bootstrap';

//import images
import Close from '../../assets/img/close.svg';

const EditCardModal = (props) => {
    const { cardList, listKey } = props;
    const taskData = (cardList.task !== undefined && Array.isArray(cardList.task) && cardList.task.length > 0) && cardList.task[listKey];
    const [newComment, setnewComment] = useState("");
    const [listDescription, setlistDescription] = useState(taskData.desc);
    const [taskName, settaskName] = useState(taskData.title);
console.log(taskName, taskData, taskData.title)
    return (
        <Modal
            show = {props.show}
            onHide={props.onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className="formModal"
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Edit Task
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form>
                    <div className="form-group">
                        <label>Task Name</label>
                        <input type="text" className="form-control" value={taskName !== undefined ? taskName : ""} onChange={(e) => settaskName(e.target.value)} placeholder="Enter title" />
                    </div>
                    <div className="form-group">
                        <label>Description</label>
                        <textarea className="form-control" value={listDescription} onChange={(e) => setlistDescription(e.target.value)} placeholder="Enter Description.." />
                    </div>
                    <div className="">
                        <span>Comments:</span>
                        {(taskData.comment !== undefined && Array.isArray(taskData.comment) && taskData.comment.length > 0) && taskData.comment.map((comment, key) => 
                            <p className="comment-line" key={"cmt"+key}>{comment.value}</p>
                        )}
                    </div>
                    <div className="form-group">
                        <textarea className="form-control" value={newComment} onChange={(e) => setnewComment(e.target.value)} placeholder="Enter Comment.." />
                        <div className="my-2 mx-4">
                            <span className="green-btn" onClick={() => {props.addNewComment(listKey, newComment, cardList); setnewComment("")}}>Add Comment</span>
                            <img src={Close} alt="close" title="close" className="img-fluid mx-2"  onClick={() => setnewComment("")} />
                        </div>
                    </div>
                </form>
            </Modal.Body>
            <Modal.Footer>
                <span className="green-btn" onClick={() => props.updateTask(listKey, taskName, listDescription, cardList)}>Update Task</span>
                <Button onClick={() => props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default EditCardModal;