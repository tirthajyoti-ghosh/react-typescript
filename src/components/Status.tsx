type StatusProps = {
    status: 'loading' | 'success' | 'error'
}

const Status = (props: StatusProps) => {
    return (
        <div>
            {props.status === 'loading' && 'Loading...'}
            {props.status === 'success' && 'Data loaded successfully'}
            {props.status === 'error' && 'Error loading data'}
        </div>
    );
};

export default Status;