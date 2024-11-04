// // // import React, { useEffect, useState } from 'react';
// // // import { useSelector, useDispatch } from 'react-redux';
// // // import { fetchApprovers } from '../redux/store/Store';
// // // import Navbar5 from './Navbar5'; // Adjust the path as necessary
// // // import { FaEdit, FaTrash, FaPlus, FaCheck, FaTimes } from 'react-icons/fa';
      
// // // const ApprovalTable = () => {
// // //   const dispatch = useDispatch();
// // //   const { approvers, loading, error } = useSelector((state) => state);

// // //   const [isAddModalOpen, setIsAddModalOpen] = useState(false);
// // //   const [isEditModalOpen, setIsEditModalOpen] = useState(false);
// // //   const [selectedApprover, setSelectedApprover] = useState('');
// // //   const [searchTerm, setSearchTerm] = useState('');
// // //   const [employeeContacts, setEmployeeContacts] = useState([]);
// // //   const [rows, setRows] = useState([]);
// // //   const [editedRowIndex, setEditedRowIndex] = useState(null); // For editing

// // //   useEffect(() => {
// // //     dispatch(fetchApprovers());
// // //     fetchEmployees(); // Fetch employees on load
// // //   }, [dispatch]);

// // //   const fetchEmployees = async () => {
// // //     try {
// // //       const response = await fetch('http://localhost:4000/employees');
// // //       const data = await response.json();
// // //       setEmployeeContacts(data);
// // //     } catch (error) {
// // //       console.error('Error fetching employees:', error);
// // //     }
// // //   };

// // //   const handleAddClick = () => {
// // //     setIsAddModalOpen(true);
// // //   };

// // //   const handleCloseAddModal = () => {
// // //     setIsAddModalOpen(false);
// // //     setSelectedApprover('');
// // //     setSearchTerm(''); // Clear search term on close
// // //   };

// // //   const handleEditClick = (index) => {
// // //     setEditedRowIndex(index);
// // //     setSelectedApprover(rows[index].employee.id); // Set selected approver for editing
// // //     setSearchTerm(employeeContacts.find(emp => emp.id === rows[index].employee.id)?.name || '');
// // //     setIsEditModalOpen(true);
// // //   };

// // //   const handleCloseEditModal = () => {
// // //     setIsEditModalOpen(false);
// // //     setSelectedApprover('');
// // //     setEditedRowIndex(null);
// // //     setSearchTerm('');
// // //   };

// // //   const handleSearchChange = (event) => {
// // //     setSearchTerm(event.target.value);
// // //   };

// // //   const handleSubmit = async () => {
// // //     const approverDetails = employeeContacts.find(emp => emp.id === selectedApprover);

// // //     if (approverDetails) {
// // //       const newRow = {
// // //         level: rows.length + 1,
// // //         employee: {
// // //           id: selectedApprover
// // //         },
// // //         mrf: {
// // //           id: rows.length + 1
// // //         }
// // //       };

// // //       setRows([...rows, newRow]);
// // //       handleCloseAddModal();
// // //     }
// // //   };

// // //   const handleUpdate = () => {
// // //     const updatedRows = [...rows];
// // //     const approverDetails = employeeContacts.find(emp => emp.id === selectedApprover);
// // //     if (approverDetails) {
// // //       updatedRows[editedRowIndex] = {
// // //         ...updatedRows[editedRowIndex],
// // //         employee: {
// // //           id: selectedApprover
// // //         }
// // //       };
// // //       setRows(updatedRows);
// // //       handleCloseEditModal();
// // //     }
// // //   };

// // //   const handleDelete = (index) => {
// // //     const updatedRows = rows.filter((_, rowIndex) => rowIndex !== index);
// // //     const reorderedRows = updatedRows.map((row, idx) => ({ ...row, level: idx + 1 }));
// // //     setRows(reorderedRows);
// // //   };

// // //   const handleSendForApproval = async () => {
// // //     try {
// // //       const dataToSend = rows.map(row => ({
// // //         level: row.level,
// // //         employeeId: row.employee.id,
// // //         mrfId: row.mrf.id
// // //       }));

// // //       const response = await fetch('http://localhost:4000/approvers', {
// // //         method: 'POST',
// // //         headers: {
// // //           'Content-Type': 'application/json',
// // //         },
// // //         body: JSON.stringify(dataToSend),
// // //       });

// // //       if (!response.ok) {
// // //         throw new Error('Failed to save the approvers');
// // //       }

// // //       alert('All approvers have been sent for approval!');
// // //       setRows([]); // Clear rows after sending
// // //     } catch (error) {
// // //       console.error('Error sending for approval:', error);
// // //     }
// // //   };

// // //   if (loading) return <div className="text-center py-4">Loading...</div>;
// // //   if (error) return <div className="text-red-500 text-center py-4">Error: {error}</div>;

// // //   const filteredEmployees = employeeContacts.filter(employee =>
// // //     employee.name.toLowerCase().startsWith(searchTerm.toLowerCase())
// // //   );

// // //   return (
// // //     <div className="p-6 bg-gray-50">
// // //       <Navbar5 />

// // //       <div className="flex justify-between items-center mb-4">
// // //         <h2 className="text-2xl font-semibold">Approval Table</h2>
// // //         <button
// // //           onClick={handleAddClick}
// // //           className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all">
// // //           <FaPlus className="mr-2" /> Add Approver
// // //         </button>
// // //       </div>

// // //       <div className="bg-white shadow rounded-lg overflow-hidden">
// // //         <table className="min-w-full bg-white">
// // //           <thead className="bg-gray-200">
// // //             <tr>
// // //               <th className="py-2 px-4 border-b">Approval Level</th>
// // //               <th className="py-2 px-4 border-b">Approver Name</th>
// // //               <th className="py-2 px-4 border-b">Contact</th>
// // //               <th className="py-2 px-4 border-b">Actions</th>
// // //             </tr>
// // //           </thead>
// // //           <tbody>
// // //             {rows.length > 0 ? (
// // //               rows.map((row, index) => (
// // //                 <tr key={index} className="hover:bg-gray-100">
// // //                   <td className="py-2 px-4 border-b">{row.level}</td>
// // //                   <td className="py-2 px-4 border-b">
// // //                     {employeeContacts.find(emp => emp.id === row.employee.id)
// // //                       ? `${employeeContacts.find(emp => emp.id === row.employee.id).name} (${employeeContacts.find(emp => emp.id === row.employee.id).role})`
// // //                       : 'Unknown'}
// // //                   </td>
// // //                   <td className="py-2 px-4 border-b">{employeeContacts.find(emp => emp.id === row.employee.id)?.contact}</td>
// // //                   <td className="py-2 px-4 border-b flex items-center space-x-2">
// // //                     <button
// // //                       onClick={() => handleEditClick(index)}
// // //                       className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600 flex items-center">
// // //                       <FaEdit className="mr-1" /> Edit
// // //                     </button>
// // //                     <button
// // //                       onClick={() => handleDelete(index)}
// // //                       className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 flex items-center">
// // //                       <FaTrash className="mr-1" /> Delete
// // //                     </button>
// // //                   </td>
// // //                 </tr>
// // //               ))
// // //             ) : (
// // //               <tr>
// // //                 <td colSpan="4" className="py-2 text-center">No entries found</td>
// // //               </tr>
// // //             )}
// // //           </tbody>
// // //         </table>
// // //       </div>

// // //       <div className="flex justify-center mt-4">
// // //         <button
// // //           onClick={handleSendForApproval}
// // //           disabled={rows.length === 0} // Disable if no approval levels exist
// // //           className={`bg-green-500 ${rows.length === 0 ? 'opacity-50 cursor-not-allowed' : 'text-white hover:bg-green-600'} px-4 py-2 rounded-lg transition-all`}
// // //         >
// // //           Send for Approval
// // //         </button>
// // //       </div>

// // //       {/* Modal for Adding Approval */}
// // //       {isAddModalOpen && (
// // //         <div className="fixed inset-0 flex items-center justify-center bg-gray-600 bg-opacity-50">
// // //           <div className="bg-white p-6 rounded-lg shadow-lg w-96 transition-transform transform scale-100">
// // //             <h2 className="text-lg font-bold mb-4">Add Approver</h2>
// // //             <div className="mb-4">
// // //               <label className="block mb-1">Approval Level</label>
// // //               <input
// // //                 type="text"
// // //                 value={`Level ${rows.length + 1}`}
// // //                 disabled
// // //                 className="border p-2 w-full bg-gray-100"
// // //               />
// // //             </div>
// // //             <div className="mb-4">
// // //               <label className="block mb-1">Approver Name</label>
// // //               <input
// // //                 type="text"
// // //                 value={searchTerm}
// // //                 onChange={handleSearchChange}
// // //                 placeholder="Search for approver..."
// // //                 className="border p-2 w-full mb-2"
// // //               />
// // //               <div className="max-h-48 overflow-y-auto border rounded shadow-lg">
// // //                 {searchTerm && filteredEmployees.length > 0 && (
// // //                   <ul className="max-h-48">
// // //                     {filteredEmployees.map(employee => (
// // //                       <li
// // //                         key={employee.id}
// // //                         onClick={() => {
// // //                           setSelectedApprover(employee.id);
// // //                           setSearchTerm(employee.name);
// // //                         }}
// // //                         className="p-2 hover:bg-gray-200 cursor-pointer flex items-center">
// // //                         <img src={employee.image} alt={`${employee.name}'s profile`} className="w-8 h-8 rounded-full mr-2" />
// // //                         <div>
// // //                           <div>{employee.name}</div>
// // //                           <div className="text-sm text-gray-500">{employee.role}</div>
// // //                         </div>
// // //                       </li>
// // //                     ))}
// // //                   </ul>
// // //                 )}
// // //               </div>
// // //             </div>
// // //             <div className="flex justify-end">
// // //               <button
// // //                 onClick={handleCloseAddModal}
// // //                 className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg mr-2">
// // //                 <FaTimes className="mr-1" /> Cancel
// // //               </button>
// // //               <button
// // //                 onClick={handleSubmit}
// // //                 className="bg-blue-500 text-white px-4 py-2 rounded-lg">
// // //                 <FaCheck className="mr-1" /> Submit
// // //               </button>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       )}

// // //       {/* Modal for Editing Approver */}
// // //       {isEditModalOpen && (
// // //         <div className="fixed inset-0 flex items-center justify-center bg-gray-600 bg-opacity-50">
// // //           <div className="bg-white p-6 rounded-lg shadow-lg w-96 transition-transform transform scale-100">
// // //             <h2 className="text-lg font-bold mb-4">Edit Approver</h2>
// // //             <div className="mb-4">
// // //               <label className="block mb-1">Approval Level</label>
// // //               <input
// // //                 type="text"
// // //                 value={`Level ${rows[editedRowIndex]?.level}`}
// // //                 disabled
// // //                 className="border p-2 w-full bg-gray-100"
// // //               />
// // //             </div>
// // //             <div className="mb-4">
// // //               <label className="block mb-1">Approver Name</label>
// // //               <input
// // //                 type="text"
// // //                 value={searchTerm}
// // //                 onChange={handleSearchChange}
// // //                 placeholder="Search for approver..."
// // //                 className="border p-2 w-full mb-2"
// // //               />
// // //               <div className="max-h-48 overflow-y-auto border rounded shadow-lg">
// // //                 {searchTerm && filteredEmployees.length > 0 && (
// // //                   <ul className="max-h-48">
// // //                     {filteredEmployees.map(employee => (
// // //                       <li
// // //                         key={employee.id}
// // //                         onClick={() => {
// // //                           setSelectedApprover(employee.id);
// // //                           setSearchTerm(employee.name);
// // //                         }}
// // //                         className="p-2 hover:bg-gray-200 cursor-pointer flex items-center">
// // //                         <img src={employee.image} alt={`${employee.name}'s profile`} className="w-8 h-8 rounded-full mr-2" />
// // //                         <div>
// // //                           <div>{employee.name}</div>
// // //                           <div className="text-sm text-gray-500">{employee.role}</div>
// // //                         </div>
// // //                       </li>
// // //                     ))}
// // //                   </ul>
// // //                 )}
// // //               </div>
// // //             </div>
// // //             <div className="flex justify-end">
// // //               <button
// // //                 onClick={handleCloseEditModal}
// // //                 className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg mr-2">
// // //                 <FaTimes className="mr-1" /> Cancel
// // //               </button>
// // //               <button
// // //                 onClick={handleUpdate}
// // //                 className="bg-blue-500 text-white px-4 py-2 rounded-lg">
// // //                 <FaCheck className="mr-1" /> Update
// // //               </button>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       )}
// // //     </div>
// // //   );
// // // };

// // // export default ApprovalTable;




// import React, { useEffect, useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { fetchApprovers } from '../redux/store/Store';
// import Navbar5 from './Navbar5'; // Adjust the path as necessary
// import { FaEdit, FaTrash, FaPlus, FaCheck, FaTimes } from 'react-icons/fa';

// const ApprovalTable = () => {
//   const dispatch = useDispatch();
//   const { approvers, loading, error } = useSelector((state) => state);

//   const [isAddModalOpen, setIsAddModalOpen] = useState(false);
//   const [isEditModalOpen, setIsEditModalOpen] = useState(false);
//   const [selectedApprover, setSelectedApprover] = useState('');
//   const [searchTerm, setSearchTerm] = useState('');
//   const [employeeContacts, setEmployeeContacts] = useState([]);
//   const [rows, setRows] = useState([]);
//   const [editedRowIndex, setEditedRowIndex] = useState(null); // For editing

//   useEffect(() => {
//     dispatch(fetchApprovers());
//     fetchEmployees(); // Fetch employees on load
//   }, [dispatch]);

//   const fetchEmployees = async () => {
//     try {
//       const response = await fetch('http://localhost:4000/employees');
//       const data = await response.json();
//       setEmployeeContacts(data);
//     } catch (error) {
//       console.error('Error fetching employees:', error);
//     }
//   };

//   const handleAddClick = () => {
//     setIsAddModalOpen(true);
//   };

//   const handleCloseAddModal = () => {
//     setIsAddModalOpen(false);
//     setSelectedApprover('');
//     setSearchTerm(''); // Clear search term on close
//   };

//   const handleEditClick = (index) => {
//     setEditedRowIndex(index);
//     setSelectedApprover(rows[index].employee.id); // Set selected approver for editing
//     setSearchTerm(employeeContacts.find(emp => emp.id === rows[index].employee.id)?.name || '');
//     setIsEditModalOpen(true);
//   };

//   const handleCloseEditModal = () => {
//     setIsEditModalOpen(false);
//     setSelectedApprover('');
//     setEditedRowIndex(null);
//     setSearchTerm('');
//   };

//   const handleSearchChange = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   const handleSubmit = async () => {
//     const approverDetails = employeeContacts.find(emp => emp.id === selectedApprover);

//     if (approverDetails) {
//       const newRow = {
//         level: rows.length + 1,
//         employee: {
//           id: selectedApprover
//         },
//         mrf: {
//           id: rows.length + 1
//         }
//       };

//       setRows([...rows, newRow]);
//       handleCloseAddModal();
//     }
//   };

//   const handleUpdate = () => {
//     const updatedRows = [...rows];
//     const approverDetails = employeeContacts.find(emp => emp.id === selectedApprover);
//     if (approverDetails) {
//       updatedRows[editedRowIndex] = {
//         ...updatedRows[editedRowIndex],
//         employee: {
//           id: selectedApprover
//         }
//       };
//       setRows(updatedRows);
//       handleCloseEditModal();
//     }
//   };

//   const handleDelete = (index) => {
//     const updatedRows = rows.filter((_, rowIndex) => rowIndex !== index);
//     const reorderedRows = updatedRows.map((row, idx) => ({ ...row, level: idx + 1 }));
//     setRows(reorderedRows);
//   };

  

//   const handleSendForApproval = async () => {
//     try {
//       const dataToSend = rows.map(row => ({
//         level: row.level,
//         employeeId: row.employee.id,
//         mrfId: row.mrf.id
//       }));

//       const response = await fetch('http://localhost:4000/approvers', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(dataToSend),
//       });

//       if (!response.ok) {
//         throw new Error('Failed to save the approvers');
//       }

//       alert('All approvers have been sent for approval!');
//       // DO NOT clear the rows array; keep existing rows 
//     } catch (error) {
//       console.error('Error sending for approval:', error);
//     }
//   };

//   if (loading) return <div className="text-center py-4">Loading...</div>;
//   if (error) return <div className="text-red-500 text-center py-4">Error: {error}</div>;

//   const filteredEmployees = employeeContacts.filter(employee =>
//     employee.name.toLowerCase().startsWith(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="p-6 bg-gray-50 mt-24">
//       <Navbar5 />

//       <div className="flex justify-between items-center mb-4">
//         <h2 className="text-2xl font-semibold">Approval Table</h2>
//         <button
//           onClick={handleAddClick}
//           className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all">
//           <FaPlus className="mr-2" /> Add Approver
//         </button>
//       </div>

//       <div className="bg-white shadow rounded-lg overflow-hidden">
//         <table className="min-w-full bg-white">
//           <thead className="bg-gray-200">
//             <tr>
//               <th className="py-2 px-4 border-b">Approval Level</th>
//               <th className="py-2 px-4 border-b">Approver Name</th>
//               <th className="py-2 px-4 border-b">Contact</th>
//               <th className="py-2 px-4 border-b">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {rows.length > 0 ? (
//               rows.map((row, index) => (
//                 <tr key={index} className="hover:bg-gray-100">
//                   <td className="py-2 px-4 border-b">{row.level}</td>
//                   <td className="py-2 px-4 border-b">
//                     {employeeContacts.find(emp => emp.id === row.employee.id)
//                       ? `${employeeContacts.find(emp => emp.id === row.employee.id).name} (${employeeContacts.find(emp => emp.id === row.employee.id).role})`
//                       : 'Unknown'}
//                   </td>
//                   <td className="py-2 px-4 border-b">{employeeContacts.find(emp => emp.id === row.employee.id)?.contact}</td>
//                   <td className="py-2 px-4 border-b flex items-center space-x-2">
//                     <button
//                       onClick={() => handleEditClick(index)}
//                       className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600 flex items-center">
//                       <FaEdit className="mr-1" /> Edit
//                     </button>
//                     <button
//                       onClick={() => handleDelete(index)}
//                       className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 flex items-center">
//                       <FaTrash className="mr-1" /> Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="4" className="py-2 text-center">No entries found</td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>

//       <div className="flex justify-center mt-4">
//         <button
//           onClick={handleSendForApproval}
//           disabled={rows.length === 0} // Disable if no approval levels exist
//           className={`bg-green-500 ${rows.length === 0 ? 'opacity-50 cursor-not-allowed' : 'text-white hover:bg-green-600'} px-4 py-2 rounded-lg transition-all`}
//         >
//           Send for Approval
//         </button>
//       </div>

//       {/* Modal for Adding Approval */}
//       {isAddModalOpen && (
//         <div className="fixed inset-0 flex items-center justify-center bg-gray-600 bg-opacity-50">
//           <div className="bg-white p-6 rounded-lg shadow-lg w-96 transition-transform transform scale-100">
//             <h2 className="text-lg font-bold mb-4">Add Approver</h2>
//             <div className="mb-4">
//               <label className="block mb-1">Approval Level</label>
//               <input
//                 type="text"
//                 value={`Level ${rows.length + 1}`}
//                 disabled
//                 className="border p-2 w-full bg-gray-100"
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block mb-1">Approver Name</label>
//               <input
//                 type="text"
//                 value={searchTerm}
//                 onChange={handleSearchChange}
//                 placeholder="Search for approver..."
//                 className="border p-2 w-full mb-2"
//               />
//               <div className="max-h-48 overflow-y-auto border rounded shadow-lg">
//                 {searchTerm && filteredEmployees.length > 0 && (
//                   <ul className="max-h-48">
//                     {filteredEmployees.map(employee => (
//                       <li
//                         key={employee.id}
//                         onClick={() => {
//                           setSelectedApprover(employee.id);
//                           setSearchTerm(employee.name);
//                         }}
//                         className="p-2 hover:bg-gray-200 cursor-pointer flex items-center">
//                         <img src={employee.image} alt={`${employee.name}'s profile`} className="w-8 h-8 rounded-full mr-2" />
//                         <div>
//                           <div>{employee.name}</div>
//                           <div className="text-sm text-gray-500">{employee.role}</div>
//                         </div>
//                       </li>
//                     ))}
//                   </ul>
//                 )}
//               </div>
//             </div>
//             <div className="flex justify-end">
//               <button
//                 onClick={handleCloseAddModal}
//                 className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg mr-2">
//                 <FaTimes className="mr-1" /> Cancel
//               </button>
//               <button
//                 onClick={handleSubmit}
//                 className="bg-blue-500 text-white px-4 py-2 rounded-lg">
//                 <FaCheck className="mr-1" /> Submit
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Modal for Editing Approver */}
//       {isEditModalOpen && (
//         <div className="fixed inset-0 flex items-center justify-center bg-gray-600 bg-opacity-50">
//           <div className="bg-white p-6 rounded-lg shadow-lg w-96 transition-transform transform scale-100">
//             <h2 className="text-lg font-bold mb-4">Edit Approver</h2>
//             <div className="mb-4">
//               <label className="block mb-1">Approval Level</label>
//               <input
//                 type="text"
//                 value={`Level ${rows[editedRowIndex]?.level}`}
//                 disabled
//                 className="border p-2 w-full bg-gray-100"
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block mb-1">Approver Name</label>
//               <input
//                 type="text"
//                 value={searchTerm}
//                 onChange={handleSearchChange}
//                 placeholder="Search for approver..."
//                 className="border p-2 w-full mb-2"
//               />
//               <div className="max-h-48 overflow-y-auto border rounded shadow-lg">
//                 {searchTerm && filteredEmployees.length > 0 && (
//                   <ul className="max-h-48">
//                     {filteredEmployees.map(employee => (
//                       <li
//                         key={employee.id}
//                         onClick={() => {
//                           setSelectedApprover(employee.id);
//                           setSearchTerm(employee.name);
//                         }}
//                         className="p-2 hover:bg-gray-200 cursor-pointer flex items-center">
//                         <img src={employee.image} alt={`${employee.name}'s profile`} className="w-8 h-8 rounded-full mr-2" />
//                         <div>
//                           <div>{employee.name}</div>
//                           <div className="text-sm text-gray-500">{employee.role}</div>
//                         </div>
//                       </li>
//                     ))}
//                   </ul>
//                 )}
//               </div>
//             </div>
//             <div className="flex justify-end">
//               <button
//                 onClick={handleCloseEditModal}
//                 className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg mr-2">
//                 <FaTimes className="mr-1" /> Cancel
//               </button>
//               <button
//                 onClick={handleUpdate}
//                 className="bg-blue-500 text-white px-4 py-2 rounded-lg">
//                 <FaCheck className="mr-1" /> Update
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ApprovalTable;

// //---------------------------------------------------------------------------------------------------------------------



import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchApprovers, fetchWorkflows } from '../redux/store/Store'; // Adjust the path as necessary// Fetch workflow as well
import Navbar5 from './Navbar5'; // Adjust the path as necessary
import { FaEdit, FaTrash, FaPlus, FaCheck, FaTimes } from 'react-icons/fa';

const ApprovalTable = () => {
  const dispatch = useDispatch();
  const { approvers, loading, error, workflow } = useSelector((state) => ({
    ...state,
    workflow: fetchWorkflows(), // Include fetching workflow data
  }));

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedApprover, setSelectedApprover] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [employeeContacts, setEmployeeContacts] = useState([]);
  const [rows, setRows] = useState([]);
  const [editedRowIndex, setEditedRowIndex] = useState(null); // For editing
  const [mrfId, setMrfId] = useState(""); // Track mrfId

  useEffect(() => {
    dispatch(fetchApprovers());
    fetchEmployees(); // Fetch employees on load
    // Fetch workflow data to check for mrfId existence
    fetchWorkflowData(); 
  }, [dispatch]);

  const fetchEmployees = async () => {
    try {
      const response = await fetch('http://localhost:4000/employees');
      const data = await response.json();
      setEmployeeContacts(data);
    } catch (error) {
      console.error('Error fetching employees:', error);
    }
  };

  const fetchWorkflowData = async () => {
    try {
      const response = await fetch('http://localhost:4000/workflow'); // Adjust URL as necessary
      const data = await response.json();
      // Now we can set mrfId based on data; assuming you have some mechanism to know which mrfId to check
      // For example purposes, hardcoding here, adjust as needed based on your application logic.
      const mrfIdToCheck = "1"; // Change appropriately
      const existingWorkflow = data.workflow.find(work => work.mrfId === mrfIdToCheck);
      setMrfId(existingWorkflow ? mrfIdToCheck : null); // Store it if exists
    } catch (error) {
      console.error('Error fetching workflow:', error);
    }
  };

  const handleAddClick = () => {
    setIsAddModalOpen(true);
  };

  const handleCloseAddModal = () => {
    setIsAddModalOpen(false);
    setSelectedApprover('');
    setSearchTerm(''); // Clear search term on close
  };

  const handleEditClick = (index) => {
    setEditedRowIndex(index);
    setSelectedApprover(rows[index].employee.id); // Set selected approver for editing
    setSearchTerm(employeeContacts.find(emp => emp.id === rows[index].employee.id)?.name || '');
    setIsEditModalOpen(true);
  };

  const handleCloseEditModal = () => {
    setIsEditModalOpen(false);
    setSelectedApprover('');
    setEditedRowIndex(null);
    setSearchTerm('');
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = async () => {
    const approverDetails = employeeContacts.find(emp => emp.id === selectedApprover);

    if (approverDetails) {
      const newRow = {
        level: rows.length + 1,
        employee: {
          id: selectedApprover
        },
        mrf: {
          id: mrfId || (rows.length + 1) // If mrfId exists, use it; otherwise, assign new one
        }
      };

      setRows([...rows, newRow]);
      handleCloseAddModal();
    }
  };

  const handleUpdate = () => {
    const updatedRows = [...rows];
    const approverDetails = employeeContacts.find(emp => emp.id === selectedApprover);
    if (approverDetails) {
      updatedRows[editedRowIndex] = {
        ...updatedRows[editedRowIndex],
        employee: {
          id: selectedApprover
        }
      };
      setRows(updatedRows);
      handleCloseEditModal();
    }
  };

  const handleDelete = (index) => {
    const updatedRows = rows.filter((_, rowIndex) => rowIndex !== index);
    const reorderedRows = updatedRows.map((row, idx) => ({ ...row, level: idx + 1 }));
    setRows(reorderedRows);
  };

  const handleSendForApproval = async () => {
    try {
      const dataToSend = rows.map(row => ({
        level: row.level,
        employeeId: row.employee.id,
        mrfId: row.mrf.id
      }));

      const response = await fetch('http://localhost:4000/approvers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend),
      });

      if (!response.ok) {
        throw new Error('Failed to save the approvers');
      }

      alert('All approvers have been sent for approval!');
      // DO NOT clear the rows array; keep existing rows 
    } catch (error) {
      console.error('Error sending for approval:', error);
    }
  };

  if (loading) return <div className="text-center py-4">Loading...</div>;
  if (error) return <div className="text-red-500 text-center py-4">Error: {error}</div>;

  const filteredEmployees = employeeContacts.filter(employee =>
    employee.name.toLowerCase().startsWith(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 bg-gray-50 mt-24">
      <Navbar5 />

      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Approval Table</h2>
        <button
          onClick={handleAddClick}
          className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all">
          <FaPlus className="mr-2" /> Add Approver
        </button>
      </div>

      <div className="bg-white shadow rounded-lg overflow-hidden">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-2 px-4 border-b">Approval Level</th>
              <th className="py-2 px-4 border-b">Approver Name</th>
              <th className="py-2 px-4 border-b">Contact</th>
              <th className="py-2 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {rows.length > 0 ? (
              rows.map((row, index) => (
                <tr key={index} className="hover:bg-gray-100">
                  <td className="py-2 px-4 border-b">{row.level}</td>
                  <td className="py-2 px-4 border-b">
                    {employeeContacts.find(emp => emp.id === row.employee.id)
                      ? `${employeeContacts.find(emp => emp.id === row.employee.id).name} (${employeeContacts.find(emp => emp.id === row.employee.id).role})`
                      : 'Unknown'}
                  </td>
                  <td className="py-2 px-4 border-b">{employeeContacts.find(emp => emp.id === row.employee.id)?.contact}</td>
                  <td className="py-2 px-4 border-b flex items-center space-x-2">
                    <button
                      onClick={() => handleEditClick(index)}
                      className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600 flex items-center">
                      <FaEdit className="mr-1" /> Edit
                    </button>
                    <button
                      onClick={() => handleDelete(index)}
                      className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 flex items-center">
                      <FaTrash className="mr-1" /> Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="py-2 text-center">No entries found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="flex justify-center mt-4">
        <button
          onClick={handleSendForApproval}
          disabled={rows.length === 0} // Disable if no approval levels exist
          className={`bg-green-500 ${rows.length === 0 ? 'opacity-50 cursor-not-allowed' : 'text-white hover:bg-green-600'} px-4 py-2 rounded-lg transition-all`}
        >
          Send for Approval
        </button>
      </div>

      {/* Modal for Adding Approval */}
      {isAddModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-600 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96 transition-transform transform scale-100">
            <h2 className="text-lg font-bold mb-4">Add Approver</h2>
            <div className="mb-4">
              <label className="block mb-1">Approval Level</label>
              <input
                type="text"
                value={`Level ${rows.length + 1}`}
                disabled
                className="border p-2 w-full bg-gray-100"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1">Approver Name</label>
              <input
                type="text"
                value={searchTerm}
                onChange={handleSearchChange}
                placeholder="Search for approver..."
                className="border p-2 w-full mb-2"
              />
              <div className="max-h-48 overflow-y-auto border rounded shadow-lg">
                {searchTerm && filteredEmployees.length > 0 && (
                  <ul className="max-h-48">
                    {filteredEmployees.map(employee => (
                      <li
                        key={employee.id}
                        onClick={() => {
                          setSelectedApprover(employee.id);
                          setSearchTerm(employee.name);
                        }}
                        className="p-2 hover:bg-gray-200 cursor-pointer flex items-center">
                        <img src={employee.image} alt={`${employee.name}'s profile`} className="w-8 h-8 rounded-full mr-2" />
                        <div>
                          <div>{employee.name}</div>
                          <div className="text-sm text-gray-500">{employee.role}</div>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
            <div className="flex justify-end">
              <button
                onClick={handleCloseAddModal}
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg mr-2">
                <FaTimes className="mr-1" /> Cancel
              </button>
              <button
                onClick={handleSubmit}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg">
                <FaCheck className="mr-1" /> Submit
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal for Editing Approver */}
      {isEditModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-600 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96 transition-transform transform scale-100">
            <h2 className="text-lg font-bold mb-4">Edit Approver</h2>
            <div className="mb-4">
              <label className="block mb-1">Approval Level</label>
              <input
                type="text"
                value={`Level ${rows[editedRowIndex]?.level}`}
                disabled
                className="border p-2 w-full bg-gray-100"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1">Approver Name</label>
              <input
                type="text"
                value={searchTerm}
                onChange={handleSearchChange}
                placeholder="Search for approver..."
                className="border p-2 w-full mb-2"
              />
              <div className="max-h-48 overflow-y-auto border rounded shadow-lg">
                {searchTerm && filteredEmployees.length > 0 && (
                  <ul className="max-h-48">
                    {filteredEmployees.map(employee => (
                      <li
                        key={employee.id}
                        onClick={() => {
                          setSelectedApprover(employee.id);
                          setSearchTerm(employee.name);
                        }}
                        className="p-2 hover:bg-gray-200 cursor-pointer flex items-center">
                        <img src={employee.image} alt={`${employee.name}'s profile`} className="w-8 h-8 rounded-full mr-2" />
                        <div>
                          <div>{employee.name}</div>
                          <div className="text-sm text-gray-500">{employee.role}</div>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
            <div className="flex justify-end">
              <button
                onClick={handleCloseEditModal}
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg mr-2">
                <FaTimes className="mr-1" /> Cancel
              </button>
              <button
                onClick={handleUpdate}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg">
                <FaCheck className="mr-1" /> Update
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ApprovalTable; 