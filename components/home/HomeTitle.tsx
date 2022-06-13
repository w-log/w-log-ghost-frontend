
interface Props {
    text: string;
}

export const HomeTitleContent:React.FC<Props> = ({ text }) => {
       return <>
       {text}
       </>
}