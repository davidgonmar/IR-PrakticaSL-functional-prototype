import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { FaPlus } from 'react-icons/fa6';

export default function Incoming() {
    const [value, setValue] = useState(null);
    const [open, setOpen] = useState(false);
    const navigator = useNavigate();
    // TODO: Link to project details screen

    const handleImageClick = () => {
        // Puedes personalizar la URL a la que deseas navegar
        navigator("/praktica/project");
    };

    return (
        <>
            <h1 style={{ textAlign: 'center' }}>Incoming</h1>
            <div className="text-center project-dashboard-page-container">
                <div style={{ margin: '10px auto', width: '80%', textAlign: 'left', alignItems: 'left', justifyContent: 'left', display: 'flex' }} className="dashboard-search-filter">
                    <input
                        type="text"
                        className="search-bar"
                        placeholder="Search..."
                        value={value}
                        onChange={(e) => {
                            setValue(e.target.value);
                        }}
                    />
                    <Button>Filter by</Button>
                </div>
                <div style={{
                    margin: 'auto', padding: '15px 0px', backgroundColor: '#bebebe', height: '80%', width: '80%',
                    textAlign: 'center', alignItems: 'center', justifyContent: 'left', display: 'flex', flexDirection: 'row', flexWrap: 'wrap',
                    overflowX: 'hidden', overflowY: 'scroll', borderRadius: '10px'
                }}
                    className="projects-container">
                    <div style={{ margin: '10px', width: '30%' }} className="project-image-text">
                        <img style={{ width: '400px', height: '300px', borderRadius: '10px' }} src="https://picsum.photos/id/30/400/300"></img>
                        <Link to={'project'}><h3 style={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden' }} className="text-center project-title">project_name_1Dec2020</h3></Link>
                    </div>
                    <div style={{ margin: '10px', width: '30%' }} className="project-image-text">
                        <img style={{ width: '400px', height: '300px', borderRadius: '10px' }} src="https://picsum.photos/id/2/400/300"></img>
                        <Link to={'project'}><h3 style={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden' }} className="text-center project-title">project_name_2Feb2021</h3></Link>
                    </div>
                    <div style={{ margin: '10px', width: '30%' }} className="project-image-text">
                        <img style={{ width: '400px', height: '300px', borderRadius: '10px' }} src="https://picsum.photos/id/418/400/300"></img>
                        <Link to={'project'}><h3 style={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden' }} className="text-center project-title">project_with_a_really_long_name_that_should_get_clipped</h3></Link>
                    </div>
                    <div style={{ margin: '10px', width: '30%' }} className="project-image-text">
                        <img style={{ width: '400px', height: '300px', borderRadius: '10px' }} src="https://picsum.photos/id/131/400/300"></img>
                        <Link to={'project'}><h3 style={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden' }} className="text-center project-title">project_name_22Oct2020</h3></Link>
                    </div>
                </div>
                <div style={{ margin: '10px auto', width: '80%', textAlign: 'center' }} className="dashboard-search-filter">
                    <Link to="/praktica/projects/create">
                        <Button color="primary">
                            <FaPlus />
                            New Project
                        </Button>
                    </Link>
                </div>
            </div>
            <Modal
                isOpen={open}
                toggle={() => setOpen(!open)}
                backdrop="static"
            >
                <ModalHeader toggle={() => setOpen(!open)}>Project requested successfully</ModalHeader>
                <ModalBody>We will get back to you on email soon. When we do, please provide us with the necessary details for the project.</ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={() => setOpen(!open)}>
                        Back
                    </Button>
                </ModalFooter>
            </Modal>
        </>
    );
}
