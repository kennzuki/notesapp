const NoteList = ({notes}) => {
    if (notes.length === 0) {
        return (
            <p className="text-center text-gray-500">No Notes to be listed</p>
        )
    }
    return ( 
        <div className="space-y-4">
            {notes.map((note) => (
                <div key={note.id} className="bg-white p-4 rounded-lg shadow-md">
                    <h2 className="text-lg font-semibold">{note.title}</h2>
                    <p className="text-gray-600"><strong>Category: </strong>{note.category}</p>
                    <p className="text-gray-600"><strong>Priority: </strong>{note.priority}</p>
                    <p className="text-gray-600">{note.description}</p>
                </div>
            ))}
        </div>
     );
}
 
export default NoteList;