type ContainerProps = {
    styles: React.CSSProperties
};

const Container = (props: ContainerProps) => {
    return (
        <div style={props.styles}>
            A container
        </div>
    );
};

export default Container;