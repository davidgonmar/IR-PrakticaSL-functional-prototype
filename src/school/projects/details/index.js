import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { FaPencil, FaRegTrashCan, FaClipboardList, FaBriefcase } from 'react-icons/fa6';

export default function ProjectDetails({ projectName }) {
    
    return  (
        <>
        <div style={{ width: '100%', margin: '25px auto' }} className="text-center project-title">
            <h1>Project details: Placeholder</h1>
        </div>
        <div style={{ alignItems: 'left', justifyItems: 'center', display: 'flex' }}>
            <div style={{ width: '40%' }} className="card-general-data">
                <div style={{ textAlign: 'center' }} className="project-image">
                    <img style={{ width: 'auto', height: '400px', borderRadius: '10px' }} src="https://picsum.photos/id/14/600/400"></img>
                </div>
                <div style={{ margin: '15px auto', padding: '10px', backgroundColor: '#bebebe', width: '90%', 
                            overflowY: 'scroll', borderRadius: '10px' }} className="general-project-data">
                    <p>
                        Code: PN1234<br/>
                        Started on: Monday, December 11, 2023<br/>
                        School: School #2<br/>
                        Status: Pending
                    </p>
                </div>
                <div style={{ textAlign: 'center', alignItems: 'center', justifyContent: 'space-evenly', display: 'flex', margin: 'auto' }} className="action-buttons">
                    <Button color="primary">
                        <FaPencil />
                        Edit Project
                    </Button>
                    <Button color="danger">
                        <FaRegTrashCan />
                        Cancel Project
                    </Button>
                </div>
            </div>
            <div style={{ width: '59%' }} className="participant-lists-buttons">
                <div style={{ height: '90%', alignItems: 'left', justifyItems: 'center', justifyContent: 'space-evenly', display: 'flex' }} className="participant-lists">
                    <div style={{ width: '48%', height: '100%' }} className="teacher-list">
                        <h3 style={{ textAlign: 'center' }}>Teachers</h3>
                        <div style={{ padding: '10px 15px', backgroundColor: '#bebebe', height: '80%',
                                textAlign: 'left', alignItems: 'left', justifyContent: 'left', display: 'flex', flexDirection: 'column', flexWrap: 'wrap',
                                overflowX: 'hidden', overflowY: 'scroll', borderRadius: '10px' }}
                                className="teacher-names">
                                    <p>Name Last Name</p>
                                    <p>Name Last Name</p>
                        </div>
                    </div>
                    <div style={{ width: '48%', height: '100%' }} className="student-list">
                        <h3 style={{ textAlign: 'center' }}>Students</h3>
                        <div style={{ padding: '10px 15px', backgroundColor: '#bebebe', height: '80%',
                                textAlign: 'left', alignItems: 'left', justifyContent: 'left', display: 'flex', flexDirection: 'column', flexWrap: 'wrap',
                                overflowX: 'hidden', overflowY: 'scroll', borderRadius: '10px' }}
                                className="student-names">
                                    <p>Name Last Name</p>
                                    <p>Name Last Name</p>
                        </div>
                    </div>
                </div>
               <div style={{ textAlign: 'center', alignItems: 'center', justifyContent: 'space-evenly', display: 'flex' }} className="participants-partner-buttons">
                    <Button color="primary">
                        <FaClipboardList />
                        Detailed Participants
                    </Button>
                    <Button color="primary">
                        <FaBriefcase />
                        Partners
                    </Button>
               </div>
            </div>
        </div>
        
        </>
    )
}