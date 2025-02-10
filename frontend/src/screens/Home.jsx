import React, { useContext, useState, useEffect } from 'react';
import { UserContext } from '../context/user.context';
import axios from "../config/axios";
import { useNavigate } from 'react-router-dom';
import Logout from './Logout';

const Home = () => {
    const { user } = useContext(UserContext);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [projectName, setProjectName] = useState('');
    const [projects, setProjects] = useState([]);

    const navigate = useNavigate();

    async function createProject(e) {
        e.preventDefault();
        const token = localStorage.getItem('token');

        try {
            const res = await axios.post('/projects/create', { name: projectName }, {
                headers: { Authorization: `Bearer ${token}` }
            });
            setProjects([...projects, res.data.project]); // Update local state with new project
            setIsModalOpen(false);
            setProjectName(''); // Clear the input
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        axios.get('/projects/all')
            .then(res => setProjects(res.data.projects))
            .catch(err => console.error(err));
    }, []);

    return (
        <main className='flex flex-col items-center justify-center p-8 min-h-screen bg-gray-900 text-white relative'>
            <div className="absolute top-4 right-4">
                <Logout className="rounded-full bg-gray-800 p-2 hover:bg-gray-700 transition duration-200" />
            </div>

            {/* Navigation buttons on the left and right side */}
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                <button onClick={() => navigate(-1)} className='p-2 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition duration-200 mb-2'>
                    <i className="ri-arrow-left-line text-lg"></i> {/* Back Button */}
                </button>
            </div>
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                <button onClick={() => navigate(1)} className='p-2 bg-green-600 text-white rounded-full shadow-lg hover:bg-green-700 transition duration-200'>
                    <i className="ri-arrow-right-line text-lg"></i> {/* Forward Button */}
                </button>
            </div>

            <h1 className="text-6xl font-extrabold mb-10 text-center bg-gradient-to-r from-pink-500 to-cyan-500 bg-clip-text text-transparent">
                PULSE AI CHAT
            </h1>
            <h2 className="text-3xl font-semibold mb-8">Welcome, {user.name}!</h2>
            <h3 className="text-xl font-semibold mb-8">User Guide: @ai for chat with AI {user.name}!</h3>

            <div className="projects grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="project p-6 border border-gray-700 rounded-md bg-gray-800 shadow-lg hover:bg-gray-700 transition duration-200">
                    <span className="font-semibold">New Project</span>
                    <i className="ri-link ml-2"></i>
                </button>

                {projects.map(project => (
                    <div key={project._id}
                        onClick={() => navigate(`/project`, { state: { project } })}
                        className="project flex flex-col gap-2 cursor-pointer p-6 border border-gray-700 rounded-md bg-gray-800 shadow-lg hover:bg-gray-700 transition duration-200">
                        <h2 className='font-semibold'>{project.name}</h2>
                        <div className="flex gap-2">
                            <p><small><i className="ri-user-line"></i> Collaborators</small>:</p>
                            {project.users.length}
                        </div>
                    </div>
                ))}
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70">
                    <div className="bg-gray-800 p-6 rounded-md shadow-md w-11/12 sm:w-1/3">
                        <h2 className="text-xl mb-4">Create New Project</h2>
                        <form onSubmit={createProject}>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-300">Project Name</label>
                                <input
                                    onChange={(e) => setProjectName(e.target.value)}
                                    value={projectName}
                                    type="text"
                                    className="mt-1 block w-full p-2 border border-gray-700 bg-gray-900 text-white rounded-md"
                                    required />
                            </div>
                            <div className="flex justify-end">
                                <button type="button" className="mr-2 px-4 py-2 bg-gray-700 rounded-md" onClick={() => setIsModalOpen(false)}>Cancel</button>
                                <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md">Create</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </main>
    );
};

export default Home;