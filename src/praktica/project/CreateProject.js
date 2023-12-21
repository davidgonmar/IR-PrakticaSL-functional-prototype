import { Input } from 'reactstrap';
import { usePersistedState } from '../../common/usePersistedState';
import { useNavigate } from 'react-router-dom';
const inputs = [
    {
        name: 'name',
        type: 'text',
        placeholder: 'Project name',
        defaultValue: 'New Project',
    },
    {
        name: 'school',
        type: 'text',
        placeholder: 'School',
        defaultValue: 'School1',
    },
    {
        name: 'Code',
        type: 'text',
        placeholder: 'Code',
        defaultValue: 'abcd2134efgh',
    }
];

export function CreateProject() {
    const [projects, setProject] = usePersistedState('projects', []);
    const navigate = useNavigate();

    const handleCreate = () => {
        console.log(projects);
        setProject([
            ...projects,
            document.querySelector('input[name="name"]').value,
        ]);

        new Promise((resolve) => setTimeout(resolve, 100)).then(() =>
            navigate('/praktica/incoming')
        );
    };
    return (
        <div style={{ width: '50%', marginInline: 'auto', paddingTop: 200 }}>
            <h1 style={{ marginBottom: '20px' }}>Create Project</h1>
            <div className='d-flex flex-column gap-3'>
                {inputs.map((input, index) => (
                    <Input
                        defaultValue={input.defaultValue}
                        key={index}
                        name={input.name}
                        type={input.type}
                        placeholder={input.placeholder}
                    />
                ))}
                <div style={{ display: 'flex', gap: '10px' }}>
                    <button className='btn btn-secondary' onClick={handleCreate}>
                        Add Travel Agency
                    </button>
                    <button className='btn btn-secondary' onClick={handleCreate}>
                        Add Partner
                    </button>
                </div>
                <button className='btn btn-primary' onClick={handleCreate}>
                    Create
                </button>
            </div>
        </div>
    );
}
